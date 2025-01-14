import axios from 'axios';

const API = axios.create({ baseURL: 'https://eco-connect.onrender.com' });

export const signUp = (formData) => API.post('/signup', formData);
export const logIn = (formData) => API.post('/login', formData);
