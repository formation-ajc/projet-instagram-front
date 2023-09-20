import React from 'react';
import Nav from "./Nav";
import Post from "../components/ui/Post";
import moment from "moment";

const Home = () => {

    return (
        <>
            <Nav>
                <div className={"gap-20 flex-1 w-full bg-black-primary flex flex-row p-5 justify-center text-white"}>
                    <div className={"flex flex-col w-[630px] py-5 gap-3"}>
                        <div className={"font-semibold text-xl"}>Follow-up</div>
                        <hr className={"w-full border-gray-primary-900"}/>
                        <div className={"flex flex-col items-center mt-10"}>
                            <Post
                                username={"Robin Foutel"}
                                date={moment("2023-07-11", "YYYY-MM-DD")}
                                like={153}
                                description={"En train mange du poulet ou quoi ?"}
                            />
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
