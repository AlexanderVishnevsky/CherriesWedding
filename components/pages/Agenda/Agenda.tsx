import { ReactElement } from 'react';

import PageStyleWrapper from '@ui/common/PageStyleWrapper';

import * as S from './Agenda.styles';

const Agenda = (): ReactElement => {
    return (
        <PageStyleWrapper widthType={'desktop'}>
            <S.Layout></S.Layout>
        </PageStyleWrapper>
    );
};

export default Agenda;
