import axios from 'axios';

const url = 'http://127.0.0.1:8080';

export const userAPI = axios.create({
    baseURL: `${url}/api/user`
});
