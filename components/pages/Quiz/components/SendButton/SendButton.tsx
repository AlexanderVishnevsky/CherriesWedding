import { ReactElement, useState } from 'react';

import { CircularProgress } from '@mui/material';
import { green } from '@mui/material/colors';

import { sendPostData } from '@ui/pages/Quiz/Quiz.api';
import { QuizAction, QuizState } from '@ui/pages/Quiz/Quiz.typings';

import { moveNext } from '@/routing/routing';

import useTranslation from 'next-translate/useTranslation';

import * as S from './SendButton.styles';
import { MUIButtonColors } from './SendButton.typings';

type IProps = QuizState & Pick<QuizAction, 'clearState'>;

const SendButton = (state: IProps): ReactElement => {
    const { t } = useTranslation('common');
    const [buttonState, setButtonState] = useState<MUIButtonColors>('inherit');

    const handleClick = async () => {
        setButtonState('info');
        /**
         * Quiz has already expired
         */
        const q = new Date();

        const currentDate = new Date(q.getFullYear(), q.getMonth() + 1, q.getDay());
        const weddingDate = new Date('2023-07-07');
        if (currentDate < weddingDate) {
            const val: boolean = await sendPostData(state);
            setButtonState(val ? 'success' : 'error');
            if (val) {
                setTimeout(() => {
                    state.clearState();
                    moveNext();
                }, 1000);
            } else {
                setTimeout(() => {
                    setButtonState('inherit');
                }, 2000);
            }
        } else {
            setTimeout(() => {
                setButtonState('error');
            }, 2000);
        }
    };
    return (
        <S.Layout>
            <S.StyledSendButton
                disabled={
                    state.allergies === '' ||
                    state.name === '' ||
                    state.drinks === '' ||
                    state.transfer === '' ||
                    buttonState === 'info'
                }
                variant={'outlined'}
                onClick={handleClick}
                color={buttonState}
            >
                {t(buttonState === 'error' ? 'quiz:error' : 'common:actions.send')}
            </S.StyledSendButton>
            {buttonState === 'info' && (
                <CircularProgress
                    size={24}
                    sx={{
                        color: green[50],
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                    }}
                />
            )}
        </S.Layout>
    );
};

export default SendButton;
