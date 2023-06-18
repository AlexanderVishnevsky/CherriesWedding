import { ReactElement, useState } from 'react';

import { Button, Typography } from '@mui/material';

import * as S from './Quiz.styles';
import { sendPostData } from './Quiz.api';

const Quiz = (): ReactElement => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        setIsLoading(true);
        const val: boolean = await sendPostData({
            name: 'Name',
            transfer: 'transfer',
            drinks: 'alco',
            allergies: 'no',
        });
        setIsLoading(!val);
    };

    return (
        <S.Layout>
            <Typography variant={'h1'}>Coming soon...</Typography>
            <Button onClick={handleClick} disabled={isLoading}>
                {isLoading ? 'loading...' : 'Send'}
            </Button>
        </S.Layout>
    );
};

export default Quiz;
