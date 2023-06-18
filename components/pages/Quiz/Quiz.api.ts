import axios, { AxiosResponse } from 'axios';

/**
 * Send request to Next server
 * @param data
 */
export const sendPostData = async (data: Record<string, any>): Promise<boolean> => {
    try {
        const res: AxiosResponse = await axios.post('/api/saveQuiz', data);
        return res.status < 300;
    } catch (e) {
        console.error('[saveQuiz error]: ', e);
        return false;
    }
};