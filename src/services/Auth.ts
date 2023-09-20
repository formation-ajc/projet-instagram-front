import axios from "axios";
import {UserAuth, UserRegister} from "../models/UserModel";

export class AuthService {

    register = (data: UserRegister) => {
        try {
            return axios.post(process.env.REACT_APP_API_URL + '/register', data);
        } catch (error) {
            console.error(error);
        }
    }

    login = (data: UserAuth) => {
        try {
            return axios.post(process.env.REACT_APP_API_URL + '/login', data);
        } catch (error) {
            console.error(error);
        }
    }
}