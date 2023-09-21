import React, {ReactElement} from 'react';
import {Link, Outlet, useLocation} from "react-router-dom";
import {
    Add, AddCircleOutline, AddOutlined,
    ArrowBackIosRounded,
    Explore,
    ExploreOffOutlined,
    ExploreOutlined, FavoriteBorderOutlined,
    Home, Logout,
    ManageAccounts, Message, Person,
    Search, SmartDisplay
} from "@mui/icons-material";
import classNames from "classnames";
import LockIcon from "@mui/icons-material/Lock";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import NewPost from "./NewPost";
import User from "../classes/User";

export type NavProps = {
    children?: ReactElement | ReactElement[]
}
const Nav = ({ children }: NavProps) => {

    const disconnect = () => {
        User.disconnect()
    }

    const location = useLocation();
    // const path = location.pathname.split("/")[2];
    //
    // const pageName = (path?.charAt(0).toUpperCase() + path.slice(1)).replace(/[-_]/, " ");
    // console.log(pageName)
    return (
        <>
            <div className="flex-1 bg-green-primary-50 flex flex-row">
                <div className={"flex justify-between h-full w-[335px] bg-black-primary p-5 flex-col border-r border-gray-primary-900"}>
                    <div className={classNames(
                        "flex h-full w-full flex-col gap-3",
                            // (pageName === "")?"flex-1 md:flex-none":"hidden md:flex"
                        )}
                    >
                        <div className="text-white text-3xl select-none font-instagram my-6 ml-3">Instagram</div>
                        <Button
                            label="Home"
                            className={classNames("text-xl flex-start text-white hover:bg-gray-primary-900",
                                // (pageName === "Profile")?"bg-green-primary-700 text-green-primary-50":"bg-green-primary-400 text-black-primary"
                            )}
                            to={""}
                            prefixIcon={<Home />}
                        />
                        <Button
                            label="Search"
                            className={classNames("text-xl flex-start text-white hover:bg-gray-primary-900",
                                // (pageName === "Profile")?"bg-green-primary-700 text-green-primary-50":"bg-green-primary-400 text-black-primary"
                            )}
                            to={"profile"}
                            prefixIcon={<Search />}
                        />
                        <Button
                            label="Discover"
                            className={classNames("text-xl flex-start text-white hover:bg-gray-primary-900",
                                // (pageName === "Profile")?"bg-green-primary-700 text-green-primary-50":"bg-green-primary-400 text-black-primary"
                            )}
                            to={"profile"}
                            prefixIcon={<ExploreOutlined />}
                        />
                        <Button
                            label="Reals"
                            className={classNames("text-xl flex-start text-white hover:bg-gray-primary-900",
                                // (pageName === "Profile")?"bg-green-primary-700 text-green-primary-50":"bg-green-primary-400 text-black-primary"
                            )}
                            to={"profile"}
                            prefixIcon={<SmartDisplay />}
                        />
                        <Button
                            label="Messages"
                            className={classNames("text-xl flex-start text-white hover:bg-gray-primary-900",
                                // (pageName === "Profile")?"bg-green-primary-700 text-green-primary-50":"bg-green-primary-400 text-black-primary"
                            )}
                            to={"profile"}
                            prefixIcon={<Message />}
                        />
                        <Button
                            label="Notifications"
                            className={classNames("text-xl flex-start text-white hover:bg-gray-primary-900",
                                // (pageName === "Profile")?"bg-green-primary-700 text-green-primary-50":"bg-green-primary-400 text-black-primary"
                            )}
                            to={"profile"}
                            prefixIcon={<FavoriteBorderOutlined />}
                        />
                        <Modal
                            label="Create"
                            className={classNames("text-xl flex-start text-white hover:bg-gray-primary-900",
                                // (pageName === "Profile")?"bg-green-primary-700 text-green-primary-50":"bg-green-primary-400 text-black-primary"
                            )}
                            // to={"profile"}
                            prefixIcon={<AddCircleOutline />}
                        >
                            <NewPost/>
                        </Modal>
                        <Button
                            label="Profile"
                            className={classNames("text-xl flex-start text-white hover:bg-gray-primary-900",
                                // (pageName === "Profile")?"bg-green-primary-700 text-green-primary-50":"bg-green-primary-400 text-black-primary"
                            )}
                            to={"profile"}
                            prefixIcon={<Person />}
                        />

                    </div>
                    <div>
                        <Button
                            label="Logout"
                            className={classNames("text-xl flex-start bg-gray-primary-950 text-white hover:bg-gray-primary-900",
                                // (pageName === "Profile")?"bg-green-primary-700 text-green-primary-50":"bg-green-primary-400 text-black-primary"
                            )}
                            to="/"
                            onClick={disconnect}
                            prefixIcon={<Logout />}
                        />
                    </div>
                </div>
                <div className={classNames(
                    "flex-1 bg-green-primary-50 flex flex-col ",
                        // (pageName === "")?"hidden":""
                    )}
                >
                    <div className={"flex flex-1 overflow-auto bg-black-primary"}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
