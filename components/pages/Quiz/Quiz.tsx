import { ReactElement } from 'react';

import { Typography } from '@mui/material';

import { QuizData } from '@ui/pages/Quiz/Quiz.data';
import { useQuizState } from '@ui/pages/Quiz/Quiz.state';

import useTranslation from 'next-translate/useTranslation';

import { DynamicSendButton } from './components/SendButton';
import QuizCard from './components/QuizCard';
import { DynamicDarkPatterns } from './components/DarkPatterns';
import * as S from './Quiz.styles';

const Quiz = (): ReactElement => {
    const { t } = useTranslation('quiz');
    const { updateState, ...state } = useQuizState();

    return (
        <S.Layout>
            <Typography variant={'h1'}>{t('title')}</Typography>
            <S.QuizWrapper>
                {QuizData.map((quiz, idx) => (
                    <S.Question key={quiz.id}>
                        <Typography variant={'h4'}>{quiz.id}.</Typography>
                        <QuizCard
                            state={state[quiz.stateKey]}
                            handleChange={updateState}
                            question={t(`questions.${idx}.question`)}
                            hint={quiz.withHint ? t(`questions.${idx}.hint`) : undefined}
                            {...quiz}
                        />
                    </S.Question>
                ))}
            </S.QuizWrapper>
            <DynamicSendButton {...state} />
            <DynamicDarkPatterns />
        </S.Layout>
    );
};

export default Quiz;
