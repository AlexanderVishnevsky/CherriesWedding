import { ReactElement } from 'react';

import PageStyleWrapper from '@ui/common/PageStyleWrapper';

import * as S from './Place.styles';

const Place = (): ReactElement => {
    return (
        <PageStyleWrapper widthType={'desktop'}>
            <S.Layout></S.Layout>
        </PageStyleWrapper>
    );
};

export default Place;
