import { ReactElement } from 'react';

import { Typography } from '@mui/material';

import CoupleIcon from '@icons/patterns/couple.svg';
import CustomAccordion from '@ui/common/CusmonAccordion';

import useTranslation from 'next-translate/useTranslation';

import * as S from './FAQ.styles';

const FAQ = (): ReactElement => {
    const { t } = useTranslation('faq');
    return (
        <S.Layout>
            <Typography variant={'h1'}>FAQ</Typography>
            <CustomAccordion t={t} />
            <CoupleIcon />
            <Typography variant={'h5'}>{t('seeYou')}</Typography>
        </S.Layout>
    );
};

export default FAQ;
