import React, {useEffect, useState} from 'react';
import FileUploader from "../components/ui/FileUploader";
import {PostService} from "../services/Post";
import {ArrowBack, ArrowLeft} from "@mui/icons-material";

const NewPost = () => {

    const [selectedFile, setSelectedFile] = useState<File>();
    const [url, setUrl] = useState<string>("");

    useEffect(() => {
        console.log('selectedFile', selectedFile);
    }, [selectedFile])

    const uploadFile = () => {
        if (selectedFile) {
            const beatService = new PostService();
            beatService.addPost(selectedFile);
        }
    }

    return (
        <>
            <div className="flex-1 bg-gray-primary-950 flex justify-center items-center flex-col">
                <div className={"w-full flex justify-center items-center flex-col py-3 gap-3"}>
                    <div className={"w-full flex flex-row items-between justify-between px-5 text-white"}>
                        {url ===""?<></>:
                            <div
                                className={"cursor-pointer"}
                                onClick={() => {
                                    setUrl("")
                                    setSelectedFile(undefined)
                                }}><ArrowBack/>
                            </div>
                        }
                        <div className={"text-white font-semibold flex-1 text-center"}>Create a new publication</div>
                        {url ===""?<></>:<div className={"text-blue-500"}>Publier</div> }
                    </div>
                    {/*<div className={"text-white font-semibold"}>Create a new publication</div>*/}
                    <hr className={"w-full border-gray-primary-900"}/>
                </div>
                <div className={"flex-1 p-20"}>
                    <div className="flex flex-col">

                        {url !==""?

                            selectedFile?.type.split("/")[0] === "video"?

                                <video controls width="250">

                                    <source src={url} type="video/mp4" />

                                </video>
                                :
                                <img src={url} height={1350} width={1080}  alt={selectedFile?.name}/>


                            :
                            <FileUploader
                                onFileSelect={(file: File) => {
                                    setSelectedFile(file)
                                    setUrl(URL.createObjectURL(file))
                                }}
                            />
                        }
                        {/*<button className="bg-white m-1 p-1 rounded" onClick={uploadFile}>upload</button>*/}
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewPost;
