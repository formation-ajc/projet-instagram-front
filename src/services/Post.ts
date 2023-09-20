import axios from "axios";

export class PostService {

  // getAll() {
  //   try {
  //     return axios.get(process.env.REACT_APP_API_URL + '/beats');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  //
  // getAudio(id: string | undefined) {
  //   try {
  //     return axios.get(process.env.REACT_APP_API_URL + '/beats/audio/' + id);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  addPost(file: File) {
    try {
      const reader = new FileReader();
      reader.onloadend = () => {

        return axios.post(process.env.REACT_APP_API_URL + '/beats', {
          "name": file.name.split('.')[0],
          "type": file.type,
          "size": file.size,
          "data": reader.result,
          "private": false
        });
      };
      reader.onerror = error => console.log(error);
      reader.readAsDataURL(file);

    } catch (error) {
      console.error(error);
    }
  }
}