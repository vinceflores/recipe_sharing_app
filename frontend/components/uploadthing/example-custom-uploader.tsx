import { useDropzone } from "@uploadthing/react";
import { useCallback } from "react";
import { generateClientDropzoneAccept } from "uploadthing/client";



type MultiUploaderProps = {
    files: File[],
    setFiles: React.Dispatch<React.SetStateAction<File[]>>
    submit: () => void
}

export function MultiUploader(props: MultiUploaderProps) {
    const { files, setFiles } = props

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFiles(acceptedFiles);
    }, [setFiles]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: generateClientDropzoneAccept(["image"]),
    });

    return (
        <div className="flex flex-col justify-center items-center border p-4 min-h-10" {...getRootProps()}>
            <input {...getInputProps()} />
            <div>
                {files.length > 0 && (
                    <div>Files Uploaded = {files.length}</div>
                )}
            </div>
            Drop files here!
        </div>
    );
}
