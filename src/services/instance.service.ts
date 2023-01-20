import axios from 'axios';

const baseURL = 'https://eliasleguizamon-w0nzaa0k9ktg.deno.dev/';

const instance = axios.create({
    baseURL,
    timeout: 1500,
});

export default instance;
