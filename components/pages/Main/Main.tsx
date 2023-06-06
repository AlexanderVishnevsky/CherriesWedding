import { ReactElement } from 'react';

import PageStyleWrapper from '@ui/common/PageStyleWrapper';
import EmbroideryIcon from '@icons/patterns/embroidery.svg';
import EmbFireIcon from '@icons/patterns/emb-fire.svg';
import Picture from '@ui/common/Picture';

import { useAppStore } from '@/context';

import useTranslation from 'next-translate/useTranslation';

import * as S from './Main.styles';

const Main = (): ReactElement => {
    const toggleColorMode = useAppStore((state) => state.toggleColorMode);
    const { t } = useTranslation('common');
    return (
        <PageStyleWrapper widthType={'desktop'}>
            <S.MainLayout>
                <S.FirstImage>
                    <EmbroideryIcon id={'emb-big'} alt={'embroidery'} />
                    <EmbFireIcon id={'emb-fire'} alt={'embroidery-fire'} />
                </S.FirstImage>
                <S.MainColumn>
                    <S.StyledTitle variant={'h2'}>{t('title')}</S.StyledTitle>
                    <S.FrameContainer>
                        <div id={'frame'} />
                        <Picture allSizes src={'/static/images/avatars/we'} />
                    </S.FrameContainer>
                    <button onClick={() => toggleColorMode()}>Click me</button>
                </S.MainColumn>
                <EmbroideryIcon id={'emb-big'} alt={'embroidery-big'} />
            </S.MainLayout>
        </PageStyleWrapper>
    );
};
export default Main;
