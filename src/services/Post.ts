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
              const reader = new FileReader();
              reader.onerror = (error) => {
                  console.error(error);
                  reject(error);
              };

              reader.onloadend = () => {
                  // Get the base64 data URL
                  const base64String = reader.result as string;

                  // Create an object with the file information and base64 data
                  const postData = {
                      name: file.name.split('.')[0],
                      type: file.type,
                      size: file.size,
                      data: base64String,
                      isPrivate: false,
                      description: data.description,
                  };

                  // Send the postData to the server
                  api.post(process.env.REACT_APP_API_URL + '/posts', postData)
                      .then((response) => {
                          resolve(response);
                      })
                      .catch((error) => {
                          console.error(error);
                          reject(error);
                      });
              };

              // Read the file as a data URL (base64)
              reader.readAsDataURL(file);
          } catch (error) {
              console.error(error);
              reject(error);
          }
      });
  }
}