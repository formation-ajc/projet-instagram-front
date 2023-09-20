import api from "./Api";
import {UserUpdate, UserUpdatePassword} from "../models/UserModel";

export class UserService {
    update = (data: UserUpdate) => {
        console.log(data)
        try {
            return api.post(process.env.REACT_APP_API_URL + '/user/update', data);
        } catch (error) {
            console.error(error);
        }
    }

    updatePassword = (data: UserUpdatePassword) => {
        console.log(data)
        try {
            return api.post(process.env.REACT_APP_API_URL + '/user/update-password', data);
        } catch (error) {
            console.error(error);
        }
    }

}