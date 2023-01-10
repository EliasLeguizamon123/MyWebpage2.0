import axios from 'axios';

const baseURL = 'https://backend-elias-dev.onrender.com/';

const instance = axios.create({
    baseURL,
    timeout: 1500,
});

export default instance;
