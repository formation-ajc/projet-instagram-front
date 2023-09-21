import React, {ReactElement} from 'react';
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import {Moment} from "moment";
import {
    AddCircleOutline,
    BookmarkBorder,
    ChatBubble, ChatBubbleOutline, ChatBubbleOutlined, Delete,
    FavoriteBorderOutlined,
    FiberManualRecord,
    MoreHoriz,
    Person, Send
} from "@mui/icons-material";
import NewPost from "../../views/NewPost";
import Modal from "./Modal";
import Dropdown from "./Dropdown";
import Button from "./Button";
import {PostService} from "../../services/Post";
import {toast} from "react-toastify";

export type PostProps = {
    username: string,
    date: Moment,
    like: number,
    description: string,
    comment?: string,
    src: ArrayBuffer,
    type: string,
    id: number,
}

const Post = ({username, date, like, description, comment, src, type, id}: PostProps) => {

    const postService = new PostService()
    function arrayBufferToDataURI(arrayBuffer: ArrayBuffer) {
        const bytes = new Uint8Array(arrayBuffer);
        let binary = '';
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        const dataURI = 'data:' + type + ';base64,' + btoa(binary);
        // console.log('Data URI:', dataURI); // Log the generated data URI for debugging
        return dataURI;
    }

    const deletePost = () => {

        console.log(id)
        postService.deletePost(id)
            ?.then((e) => {
                toast.success(e.data.message);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error.response.data)
                toast.error(error.response.data.message);
            });
    }


    return (
        <>
            <div
                className={classNames(
                    "flex flex-col w-[470px] gap-3",
                )}
            >
                <div className={"flex flex-row justify-between items-center"}>
                    <div className={"flex flex-row gap-3"}>
                        <Person/>
                        <div className={"flex flex-row gap-1"}>
                            <div>{username}</div>
                            <div>-</div>
                            <div>{date.locale(window.navigator.language).format('L')}</div>
                        </div>
                    </div>
                    <div>
                        <Dropdown icon={<MoreHoriz/>}>
                            <div className={"flex flex-col p-5 bg-gray-primary-900 rounded-md"}>
                                <Button onClick={deletePost} className={"bg-red-900"} label={"Delete"} prefixIcon={<Delete/>}/>
                            </div>
                        </Dropdown>
                        {/*<MoreHoriz/>*/}
                    </div>
                </div>
                <div className={"h-[585px] border border-gray-primary-900 rounded-md flex justify-center items-center"}>
                    {type.split("/")[0] === "video"?
                        <video controls className={"h-full w-full object-contain"}>
                            <source src={arrayBufferToDataURI(src)} type={type} />
                        </video>
                        :
                        <img src={arrayBufferToDataURI(src)} className={"h-full w-full object-contain"} alt={""}/>
                    }
                </div>
                <div className={"flex flex-col gap-2"}>
                    <div className={"flex flex-row justify-between"}>
                        <div className={"flex flex-row gap-3"}>
                            <FavoriteBorderOutlined />
                            <ChatBubbleOutline />
                            <div className={"-rotate-45"}>
                                <Send />
                            </div>
                        </div>
                        <div>
                            <BookmarkBorder/>
                        </div>
                    </div>
                    <div className={"text-sm font-semibold"}>{like} Likes</div>
                </div>
                <div className={"flex flex-row text-sm gap-3"}>
                    <div className={"font-semibold"}>{username}</div>
                    <div>{description}</div>
                </div>
                <div className={"flex flex-row text-sm gap-3"}>Show the comments</div>
                <hr className={"mt-2 mb-10 border-gray-primary-900 w-full"}/>
            </div>
        </>
    );
}

export default Post;
