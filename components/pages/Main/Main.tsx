import { ReactElement } from 'react';

import { Zoom } from '@mui/material';

import Picture from '@ui/common/Picture';

import usePreloadImages from '@/services/preloadImages';

import useTranslation from 'next-translate/useTranslation';

import * as S from './Main.styles';

const Main = (): ReactElement => {
    const { t } = useTranslation('common');
    usePreloadImages();
    return (
        <S.MainLayout>
            <S.FirstImage />
            <S.MainColumn>
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
    );
};
export default Main;
