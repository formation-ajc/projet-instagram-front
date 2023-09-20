import React, {Fragment, useEffect, useState} from 'react';
import Nav from "./Nav";
import Post from "../components/ui/Post";
import moment from "moment";
import {PostService} from "../services/Post";
import {PostResponse} from "../models/PostModel";
import Base64 from "../classes/Base64";

const Home = () => {
    const postService = new PostService();

    const [posts, setPosts] = useState<PostResponse[]>([])

    useEffect(() => {
        postService.getUserPost()?.then((res: { data: PostResponse[] }) => {
            const promises = res.data.map((postResponse) => {
                return new Promise<PostResponse>((resolve) => {
                    const reader = new FileReader();
                    reader.readAsArrayBuffer(Base64.base64ToFile(postResponse.data, postResponse.name));
                    reader.onload = (ev) => {
                        const src = ev.target?.result as string;
                        resolve({
                            id: postResponse.id,
                            type: postResponse.type,
                            data: src,
                            name: postResponse.name,
                            description: postResponse.description,
                            likes: postResponse.likes,
                            publishDate: postResponse.publishDate,
                            publisher: postResponse.publisher,
                        });
                    };
                });
            });

            Promise.all(promises).then((updatedPosts) => {
                setPosts((prevPosts) => {
                    // Filter out posts that already exist
                    const uniquePosts = updatedPosts.filter((newPost) =>
                        !prevPosts.some((existingPost) => existingPost.id === newPost.id)
                    );

                    // Sort posts by publishDate in descending order (most recent first)
                    return [...uniquePosts, ...prevPosts].sort((a, b) =>
                        b.publishDate.localeCompare(a.publishDate)
                    );
                });
            });
        });
    }, []);

    return (
        <>
            <Nav>
                <div className={"gap-20 flex-1 w-full bg-black-primary flex flex-row p-5 justify-center text-white"}>
                    <div className={"flex flex-col w-[630px] py-5 gap-3"}>
                        <div className={"font-semibold text-xl"}>Follow-up</div>
                        <hr className={"w-full border-gray-primary-900"}/>
                        <div className={"flex flex-col items-center mt-10"}>
                            {posts?.map((post, index)=> {
                                console.log(posts)
                                return (
                                    <Post
                                        key={index}
                                        username={post.publisher.firstname + " " + post.publisher.lastname}
                                        date={moment(post.publishDate, "YYYY-MM-DD")}
                                        like={post.likes}
                                        description={post.description}
                                        src={post.data}
                                    />
                                )
                            })}

                        </div>
                    </div>
                    <div className={"flex flex-col py-5 gap-3"}>
                        <div className={"font-semibold text-xl"}>Suggestions for you</div>
                        <hr className={"w-full border-gray-primary-900"}/>
                    </div>
                </div>
            </Nav>
        </>
    );
}

export default Home;
