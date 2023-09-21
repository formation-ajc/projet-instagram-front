import axios, {AxiosResponse} from "axios";
import {PostPublish} from "../models/PostModel";
import api from "./Api";

export class PostService {

    getUserPost() {
        try {
            return api.get(process.env.REACT_APP_API_URL + '/posts');
        } catch (error) {
            console.error(error);
        }
    }

    addPost(file: File, data: PostPublish) {
        return new Promise<AxiosResponse<any>>((resolve, reject) => {
            try {
                const formData = new FormData();
                formData.append('file', file); // 'file' should match the name of the parameter expected by your server

                // Append other data to the form data if needed
                formData.append('name', file.name);
                formData.append('type', file.type);
                formData.append('size', file.size.toString());
                formData.append('isPrivate', 'false');
                formData.append('description', data.description);

                // Send the formData to the server
                api.post(process.env.REACT_APP_API_URL + '/posts', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
                    },
                })
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        console.error(error);
                        reject(error);
                    });
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    }
}