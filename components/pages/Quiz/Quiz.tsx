import { ReactElement } from 'react';

import PageStyleWrapper from '@ui/common/PageStyleWrapper';

import * as S from './Quiz.styles';

const Quiz = (): ReactElement => {
    return (
        <PageStyleWrapper widthType={'desktop'}>
            <S.Layout></S.Layout>
        </PageStyleWrapper>
    );
};

export default Quiz;
