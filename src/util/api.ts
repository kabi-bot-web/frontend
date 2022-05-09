import axios from 'axios';


const API_URL = import.meta.env.DEV ? 'http://127.0.0.1:8080/api' : '/api';

export const api = axios.create({
  baseURL: API_URL,
});

export async function logout() {
  await api.put('/user');
}

export async function getAuthorInfo() {
  await api.get('/user/info');
}