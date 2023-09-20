import axios from 'axios';
import {useNavigate} from "react-router-dom";
import User from "../classes/User";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export default api


// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        const accessToken = User.getUser().accessToken;
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If the error status is 401 and there is no originalRequest._retry flag,
        // it means the token has expired and we need to refresh it
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = User.getUser().refreshToken;
                const response = await axios.post(process.env.REACT_APP_API_URL + '/refreshtoken', { refreshToken });
                const { accessToken } = response.data;

                User.setAccessToken(accessToken);

                // Retry the original request with the new token
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return axios(originalRequest);
            } catch (error) {
                // Handle refresh token error or redirect to login
                const navigate  = useNavigate();
                navigate("/login");
            }
        }

        return Promise.reject(error);
    }
);
