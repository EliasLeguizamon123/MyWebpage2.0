import axios from 'axios';
import instance from './instance.service';

export const getProjects = async () => {
    try {
        const { data } = await instance.get('/projects');

        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return error.response;
        } else {
            return error;
        }
    }
};
