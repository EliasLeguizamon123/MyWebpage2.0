import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
    baseURL,
    timeout: 1500,
});

export default instance;
