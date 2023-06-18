import axios, { AxiosResponse } from 'axios';
import { QuizState } from '@ui/pages/Quiz/Quiz.typings';

/**
 * Send request to Next server
 * @param data
 */
export const sendPostData = async (data: QuizState): Promise<boolean> => {
    try {
        const res: AxiosResponse = await axios.post('/api/saveQuiz', data);
        return res.status < 300;
    } catch (e) {
        console.error('[saveQuiz error]: ', e);
        return false;
    }
};
