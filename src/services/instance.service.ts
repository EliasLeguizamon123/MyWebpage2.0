import axios from 'axios';

const baseURL = 'https://eliasleguizamon-cpkyqn4zmb5g.deno.dev';

const instance = axios.create({
    baseURL,
    timeout: 1500,
});

export default instance;
