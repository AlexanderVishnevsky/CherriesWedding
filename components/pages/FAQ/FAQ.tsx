import { ReactElement } from 'react';

import { Typography } from '@mui/material';

import CustomAccordion from '@ui/common/CusmonAccordion';

import * as S from './FAQ.styles';

const FAQ = (): ReactElement => {
    return (
        <S.Layout>
            <Typography variant={'h1'}>FAQ</Typography>
            <CustomAccordion />
        </S.Layout>
    );
};

export default FAQ;
