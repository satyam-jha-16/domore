"use client";

import React, { useContext, useEffect, useState } from 'react'
import Icons from "./globals/icons";
import Link from "next/link";
import { toast } from 'sonner';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LINKS } from './constants/link';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import UserAccount from './user/UserAccount';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
import { Button } from './ui/button';
import { useConvex, useMutation, useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { FileListContext } from '@/context/store';

interface Props {
    show?: boolean;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ show = true, setIsOpen }: Props) => {
    const convex = useConvex();
    const pathname = usePathname();
    const createFile = useMutation(api.files.createFile);
    const { user } = useKindeBrowserClient();
    const [fileInput, setFileInput] = useState('');
    const [totalFiles, setTotalFiles] = useState<Number>();
    const { fileList_, setFileList_ } = useContext(FileListContext);

    const getFiles = async () => {
        const result = await convex.query(api.files.getFiles, { email: user?.email! });
        console.log(result);
        setFileList_(result);
        setTotalFiles(result?.length)
    }

    const onFileCreate = (fileInput: string) => {
        createFile({
            fileName: fileInput,
            createdBy: user?.email!,
            archive: false,
            document: '',
            whiteboard: ''
        }).then(resp => {
            if (resp) {
                getFiles();
                toast('File created successfully!')
            }
        }, (e) => {
            toast('Error while creating file')

        })
    }

    useEffect(() => { getFiles() });

    return (
        <div
            className={cn(
                "fixed left-4 top-20 rounded-full bg-background shadow-lg z-40",
                show ? "block" : "hidden",
                "w-16 border border-border"
            )}
        >
            <div className="flex flex-col items-center w-full h-full py-4">
                <TooltipProvider>
                    <ul className="space-y-2 flex flex-col items-center w-full">
                        {LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Tooltip key={link.label} delayDuration={0}>
                                    <TooltipTrigger asChild>
                                        <li
                                            className={cn(
                                                "flex items-center justify-center rounded-lg text-muted-foreground hover:text-primary hover:bg-neutral-100 transition-all cursor-pointer",
                                                isActive && "bg-blue-400/30 text-black hover:bg-primary/20",
                                                "w-9 h-9"
                                            )}
                                            onClick={() => {
                                                setIsOpen && setIsOpen(false);
                                            }}
                                        >
                                            <Link href={`${link.href}`} className="flex items-center justify-center w-full h-full">
                                                <link.icon strokeWidth={1.7} className="w-5 h-5" />
                                            </Link>
                                        </li>
                                    </TooltipTrigger>
                                    <TooltipContent side="right" className="text-xs">
                                        {link.label}
                                    </TooltipContent>
                                </Tooltip>
                            )
                        })}
                    </ul>
                </TooltipProvider>
                <div className='pt-4'>
                    <UserAccount user={user as KindeUser<any>} />
                </div>
                <div className='pt-4'>
                    <Dialog>
                        <DialogTrigger className='w-full' asChild>
                            <button className={cn(
                                " p-3 text-2xl flex items-center justify-center rounded-lg text-muted-foreground hover:text-primary hover:bg-neutral-100 transition-all cursor-pointer text-black hover:bg-primary/20",
                                "w-9 h-9"
                            )}>{"+"}</button>
                        </DialogTrigger>

                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Create New File</DialogTitle>
                                <DialogDescription>
                                    <Input placeholder='Enter File Name'
                                        className='mt-3'
                                        onChange={(e) => setFileInput(e.target.value)}
                                    />
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter className="">
                                <DialogClose asChild>
                                    <Button
                                        className='bg-blue-600
            hover:bg-blue-700'
                                        disabled={!(fileInput && fileInput.length > 3)}
                                        onClick={() => onFileCreate(fileInput)}
                                    >
                                        Create
                                    </Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
};

export default Sidebar
