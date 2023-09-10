'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    const pathname = usePathname();
    const [buttonState, setButtonState] = useState<MUIButtonColors>('inherit');

    const handleClick = async () => {
        setButtonState('info');
        const val: boolean = await sendPostData(state);
        setButtonState(val ? 'success' : 'error');
        if (val) {
            setTimeout(() => {
                state.clearState();
            }, 1000);
        } else {
            setTimeout(() => {
                setButtonState('inherit');
            }, 2000);
        }
    };
    return (
        <S.Layout>
            <Link href={moveNext(pathname)} onClick={handleClick}>
                <S.StyledSendButton
                    disabled={
                        state.allergies === '' ||
                        state.name === '' ||
                        state.drinks === '' ||
                        state.transfer === '' ||
                        buttonState === 'info'
                    }
                    variant={'outlined'}
                    color={buttonState}
                >
                    {t('common:actions.send')}
                </S.StyledSendButton>
            </Link>
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
