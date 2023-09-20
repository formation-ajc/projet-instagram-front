class Base64 {

  static fileToBase64(file: Blob) {
    const reader = new FileReader();
    reader.onloadend = () => {
      return reader.result
    };
    reader.onerror = error => console.log(error);
    reader.readAsDataURL(file);
  }

  static base64ToFile(dataurl: string, filename: string) {
    let arr = dataurl.split(',');

    // @ts-ignore
    let mime = arr[0].match(/:(.*?);/)[1];

    let bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, {type:mime});
  }

}

export default Base64;