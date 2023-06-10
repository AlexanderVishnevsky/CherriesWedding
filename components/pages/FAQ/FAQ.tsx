import { ReactElement } from 'react';

import PageStyleWrapper from '@ui/common/PageStyleWrapper';

import * as S from './FAQ.styles';

const FAQ = (): ReactElement => {
    return (
        <PageStyleWrapper widthType={'desktop'}>
            <S.Layout></S.Layout>
        </PageStyleWrapper>
    );
};

export default FAQ;
