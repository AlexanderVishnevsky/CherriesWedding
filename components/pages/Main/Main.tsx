import { ReactElement } from 'react';

import { Zoom } from '@mui/material';

import PageStyleWrapper from '@ui/common/PageStyleWrapper';
import Picture from '@ui/common/Picture';
import Header from '@ui/common/Header';

import useTranslation from 'next-translate/useTranslation';

import * as S from './Main.styles';

const Main = (): ReactElement => {
    const { t } = useTranslation('common');
    return (
        <PageStyleWrapper widthType={'desktop'}>
            <S.MainLayout>
                <S.FirstImage />
                <S.MainColumn>
                    <Header />
                    <S.StyledTitle variant={'h2'}>{t('title')}</S.StyledTitle>
                    <Zoom in {...{ timeout: 800 }}>
                        <S.FrameContainer>
                            <div id={'frame'} />
                            <Picture allSizes src={'/static/images/avatars/we'} />
                        </S.FrameContainer>
                    </Zoom>
                </S.MainColumn>
                <S.SecondImage />
            </S.MainLayout>
        </PageStyleWrapper>
    );
};
export default Main;
