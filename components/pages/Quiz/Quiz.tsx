import { ReactElement } from 'react';

import { Typography } from '@mui/material';

import useTranslation from 'next-translate/useTranslation';

import * as S from './Quiz.styles';
import { DynamicSendButton } from './components/SendButton';

const Quiz = (): ReactElement => {
    const { t } = useTranslation('quiz');

    return (
        <S.Layout>
            <Typography variant={'h1'}>{t('title')}</Typography>
            <DynamicSendButton />
        </S.Layout>
    );
};

export default Quiz;
