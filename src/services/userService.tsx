import axios from 'axios';
import { AxiosResponse } from 'axios';

const API_URL = 'https://dummyjson.com';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
}

export interface Post {
    id: number;
    title: string;
    body: string;
}

export const getUsers = async (): Promise<User[]> => {
    const response: AxiosResponse<{ users: User[] }> = await axios.get(`${API_URL}/users`);
    return response.data.users;
};

export const getUserPosts = async (userId: number): Promise<Post[]> => {
    const response: AxiosResponse<{ posts: Post[] }> = await axios.get(`${API_URL}/posts/user/${userId}`);
    return response.data.posts;
};
