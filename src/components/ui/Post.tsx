import React, {ReactElement} from 'react';
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import {Moment} from "moment";
import {
    BookmarkBorder,
    ChatBubble, ChatBubbleOutline, ChatBubbleOutlined,
    FavoriteBorderOutlined,
    FiberManualRecord,
    MoreHoriz,
    Person, Send
} from "@mui/icons-material";

export type PostProps = {
    username: string,
    date: Moment,
    like: number,
    description: string,
    comment?: string,
}

const Post = ({username, date, like, description, comment }: PostProps) => {

    return (
        <>
            <div
                className={classNames(
                    "flex flex-col w-[470px] gap-3",
                )}
            >
                <div className={"flex flex-row justify-between"}>
                    <div className={"flex flex-row gap-3"}>
                        <Person/>
                        <div className={"flex flex-row gap-1"}>
                            <div>{username}</div>
                            <div>-</div>
                            <div>{date.locale(window.navigator.language).format('L')}</div>
                        </div>
                    </div>
                    <div>
                        <MoreHoriz/>
                    </div>
                </div>
                <div className={"h-[585px] border border-gray-primary-900 rounded-md"}>
                    img
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
                <hr className={"mt-2 border-gray-primary-900 w-full"}/>
            </div>
        </>
    );
}

export default Post;
