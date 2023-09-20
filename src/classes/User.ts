import {User as UserModel} from "../models/UserModel";
import {useContext} from "react";
import {UserContext} from "../App";

class User {

    static setUser = (user: UserModel) => {
        User.disconnect()
        localStorage.setItem('user', JSON.stringify(user));
    }

    static setAccessToken = (accessToken: string) => {
        const user: UserModel = User.getUser()
        user.accessToken = accessToken;
        localStorage.setItem('user', JSON.stringify(user));
    }

    static setRefreshToken = (refreshToken: string) => {
        const user: UserModel = User.getUser()
        user.refreshToken = refreshToken;
        localStorage.setItem('user', JSON.stringify(user));
    }

    static isConnected = () => {

    }

    static getUser: () => UserModel = () => {
        return JSON.parse(localStorage.getItem('user') || '{}');
    }

    static disconnect = () => {
        localStorage.removeItem('user');
    }
}

export default User;