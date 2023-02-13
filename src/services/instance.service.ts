import axios from 'axios';

const baseURL = 'https://eliasleguizamon.deno.dev/';

const instance = axios.create({
    baseURL,
    timeout: 1500,
});

export default instance;
