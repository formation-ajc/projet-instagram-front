import React, {useEffect, useState} from 'react';
import FileUploader from "../components/ui/FileUploader";
import {PostService} from "../services/Post";
import {ArrowBack, ArrowLeft} from "@mui/icons-material";
import {useForm} from "react-hook-form";
import {UserAuth} from "../models/UserModel";
import User from "../classes/User";
import {toast} from "react-toastify";
import Button from "../components/ui/Button";
import {PostPublish} from "../models/PostModel";
import {useNavigate} from "react-router-dom";

type ChildComponentProps = {
    openModal?: () => void;
    closeModal?: () => void;
};

const NewPost = ({ openModal, closeModal }: ChildComponentProps) => {
    const form = useForm<PostPublish>()
    const [selectedFile, setSelectedFile] = useState<File>();
    const [url, setUrl] = useState<string>("");

    const handleOpenModal = () => {
        if (openModal) {
            openModal();
        }
    };

    const handleCloseModal = () => {
        if (closeModal) {
            closeModal();
        }
    };

    const submit = (data: PostPublish) => {
        if (selectedFile) {
            const beatService = new PostService();
            beatService.addPost(selectedFile, data)
                ?.then((e) => {
                    console.log(e.data)
                    toast.success(e.data.message);
                    handleCloseModal()
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error.response.data)
                    toast.error(error.response.data.message);
                });
        }
    }

    return (
        <>
            <form onSubmit={form.handleSubmit(submit)} className="flex-1 bg-gray-primary-950 flex justify-center items-center flex-col">

                <div className={"w-full flex justify-center items-center flex-col py-3 gap-3"}>
                    <div className={"w-full flex flex-row justify-center items-center px-5 text-white"}>
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
                        {url ===""?<></>:<Button type={"submit"} className={"w-min bg-transparent text-blue-500"} label={"Publier"}/>}
                    </div>
                    {/*<div className={"text-white font-semibold"}>Create a new publication</div>*/}
                    <hr className={"w-full border-gray-primary-900"}/>
                </div>
                <div className={"flex-1 px-20 pt-20"}>
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
                <div
                    className="flex flex-col items-center justify-center p-20 w-full"
                >
                    <textarea
                        required
                        className="w-full bg-transparent resize rounded-md focus:border-gray-primary-500 outline-none text-white"
                        placeholder={"Description"}
                        {...form.register("description", { required: true, maxLength: 300 })}
                    ></textarea>
                </div>
            </form>
        </>
    );
}

export default NewPost;
