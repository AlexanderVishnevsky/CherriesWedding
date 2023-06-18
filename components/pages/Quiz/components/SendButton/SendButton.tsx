import { ReactElement, useState } from 'react';

import { sendPostData } from '@ui/pages/Quiz/Quiz.api';
import { QuizState } from '@ui/pages/Quiz/Quiz.typings';

import { moveNext } from '@/routing/routing';

import useTranslation from 'next-translate/useTranslation';

import * as S from './SendButton.styles';
import { MUIButtonColors } from './SendButton.typings';

const SendButton = (state: QuizState): ReactElement => {
    const { t } = useTranslation('common');
    const [buttonState, setButtonState] = useState<MUIButtonColors>('inherit');

    const handleClick = async () => {
        setButtonState('info');
        const val: boolean = await sendPostData(state);
        setButtonState(val ? 'success' : 'error');
        if (val) {
            setTimeout(() => {
                moveNext();
            }, 1000);
        } else {
            setTimeout(() => {
                setButtonState('inherit');
            }, 2000);
        }
    };
    return (
        <S.Layout disabled={buttonState === 'info'} variant={'outlined'} onClick={handleClick} color={buttonState}>
            {t('common:actions.send')}
        </S.Layout>
    );
};

export default SendButton;
