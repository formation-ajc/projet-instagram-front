export interface PostPublish {
    description: string;
}

export interface PostResponse {
    id: number;
    name: string;
    type: string;
    file: string;
    description: string;
    likes: number;
    publishDate: string;
    "publisher": {
        id: number,
        firstname: string,
        lastname: string,
        email: string
    }
}

export interface PostDisplay {
    id: number;
    name: string;
    type: string;
    file: ArrayBuffer;
    description: string;
    likes: number;
    publishDate: string;
    "publisher": {
        id: number,
        firstname: string,
        lastname: string,
        email: string
    }
}