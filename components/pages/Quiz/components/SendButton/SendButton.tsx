import { ReactElement, useState } from 'react';

import { sendPostData } from '@ui/pages/Quiz/Quiz.api';

import useTranslation from 'next-translate/useTranslation';

import * as S from './SendButton.styles';
import { MUIButtonColors } from './SendButton.typings';

const SendButton = (): ReactElement => {
    const { t } = useTranslation('common');
    const [buttonState, setButtonState] = useState<MUIButtonColors>('inherit');

    const handleClick = async () => {
        setButtonState('info');
        const val: boolean = await sendPostData({
            name: 'Name',
            transfer: 'transfer',
            drinks: 'alco',
            allergies: 'no',
        });
        setButtonState(val ? 'success' : 'error');
    };
    return (
        <S.Layout disabled={buttonState === 'info'} variant={'outlined'} onClick={handleClick} color={buttonState}>
            {t('common:actions.send')}
        </S.Layout>
    );
};

export default SendButton;
