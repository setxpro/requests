import axios from 'axios';


const url = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
    getPosts: async () => {
        let { data } = await url.get('/posts');
        return data;
    },
    sendPost: async (tittle, body, userId) => {
        let { data } = await url.post('/posts', {
            tittle, body, userId
        });
        return data;
    }
}