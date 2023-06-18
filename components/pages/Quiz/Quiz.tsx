import { ReactElement } from 'react';

import { Typography } from '@mui/material';

import { QuizData } from '@ui/pages/Quiz/Quiz.data';
import { FlexRowCenter } from '@ui/common/Common.styles';

import useTranslation from 'next-translate/useTranslation';

import { DynamicSendButton } from './components/SendButton';
import QuizCard from './components/QuizCard';
import { DynamicDarkPatterns } from './components/DarkPatterns';
import * as S from './Quiz.styles';

const Quiz = (): ReactElement => {
    const { t } = useTranslation('quiz');

    return (
        <S.Layout>
            <Typography variant={'h1'}>{t('title')}</Typography>
            <S.QuizWrapper>
                {QuizData.map((quiz, idx) => (
                    <FlexRowCenter key={quiz.id}>
                        <S.QuestionNumber variant={'h4'}>{quiz.id}.</S.QuestionNumber>
                        <QuizCard
                            question={t(`questions.${idx}.question`)}
                            hint={quiz.withHint ? t(`questions.${idx}.hint`) : undefined}
                            {...quiz}
                        />
                    </FlexRowCenter>
                ))}
            </S.QuizWrapper>
            <DynamicSendButton />
            <DynamicDarkPatterns />
        </S.Layout>
    );
};

export default Quiz;
