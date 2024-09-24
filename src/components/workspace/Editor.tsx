'use client'
import EditorJS from '@editorjs/editorjs'
import { useMutation } from 'convex/react';
import { useEffect, useRef, useState } from 'react';
import { api } from '../../../convex/_generated/api';
import { FILE } from '../Dashboard/FilesList';
import { toast } from 'sonner';

// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Header from '@editorjs/header';
// @ts-ignore
import Checklist from '@editorjs/checklist'
// @ts-ignore
import Warning from '@editorjs/warning';
// @ts-ignore
import Paragraph from '@editorjs/paragraph';
import MaxWidthWrapper from '../MaxWidthWrapper';

const rawDocument = {
    "time": 1550476186479,
    "blocks": [{
        data: {
            text: 'Document Name',
            level: 2
        },
        id: "123",
        type: 'header'
    },
    {
        data: {
            level: 4
        },
        id: "1234",
        type: 'header'
    }],
    "version": "2.8.1"
}

export default function Editor({ onSaveTrigger, fileId, fileData }: { onSaveTrigger: any, fileId: any, fileData: FILE }) {
    const ref = useRef<EditorJS>();
    const updateDocument = useMutation(api.files.updateDocument);
    const [document, setDocument] = useState(rawDocument);
    useEffect(() => {
        fileData && initEditor();
    }, [fileData])

    useEffect(() => {
        console.log("triiger Value:", onSaveTrigger);
        onSaveTrigger && onSaveDocument();
    }, [onSaveTrigger])
    const initEditor = () => {
        const editor = new EditorJS({
            /**
             * Id of Element that should contain Editor instance
             */

            tools: {
                header: {
                    class: Header as any,
                    shortcut: 'CMD+SHIFT+H',
                    config: {
                        placeholder: 'Enter a Header'
                    }
                },
                list: {
                    class: List as any,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }
                },
                checklist: {
                    class: Checklist,
                    inlineToolbar: true,
                },
                paragraph: Paragraph,
                warning: Warning,
            },

            holder: 'editorjs',
            data: fileData?.document ? JSON.parse(fileData.document) : rawDocument
        });
        ref.current = editor;
    }

    //saving the data 
    const onSaveDocument = () => {
        if (ref.current) {
            ref.current.save().then((outputData) => {
                console.log('Article data: ', outputData);
                updateDocument({
                    _id: fileId,
                    document: JSON.stringify(outputData)
                }).then(resp => {

                    toast('Document Updated!')

                }, (e) => {
                    toast("Server Error!")
                })
            }).catch((error) => {
                console.log('Saving failed: ', error)
            });
        }
    }


    return (
        <MaxWidthWrapper>
            <div className='h-screen'>
                <div id='editorjs' className='ml-20'></div>
            </div>
        </MaxWidthWrapper>
    )
}