'use client';

import { FILE } from "@/components/Dashboard/FilesList";
import { useConvex } from "convex/react";
import { useEffect, useState } from "react";
import { api } from "../../../../convex/_generated/api";
import Editor from "@/components/workspace/Editor";
import Canvas from "@/components/workspace/Canvas";
import WorkspaceHeader from "@/components/Header";

export default function WorkspacePage({ params }: any) {
    const [triggerSave, setTriggerSave] = useState(false);
    const convex = useConvex();
    const [fileData, setFileData] = useState<FILE | any>();
    useEffect(() => {
        console.log("FILEID", params.fileId)
        params.fileId && getFileData();
    }, [])

    const getFileData = async () => {
        const result = await convex.query(api.files.getFileById, { _id: params.fileId })
        setFileData(result);
    }
    return (
        <div >
            <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

            <div className='grid grid-cols-1
      md:grid-cols-2 px-4'>
                <div className=' h-screen'>
                    <Editor onSaveTrigger={triggerSave}
                        fileId={params.fileId}
                        fileData={fileData}
                    />
                </div>
                <div className=' min-h-screen border-l'>
                    <Canvas
                        onSaveTrigger={triggerSave}
                        fileId={params.fileId}
                        fileData={fileData}
                    />
                </div>
            </div>
        </div>
    )
}