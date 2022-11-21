import axios from 'axios';

const baseURL = 'https://myporfolio-back-production.up.railway.app';

const instance = axios.create({
    baseURL,
    timeout: 1500,
});

export default instance;
