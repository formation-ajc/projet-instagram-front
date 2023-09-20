export interface PostPublish {
    description: string;
}

export interface PostResponse {
    id: number;
    name: string;
    type: string;
    data: string;
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