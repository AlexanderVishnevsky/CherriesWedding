import { ReactElement } from 'react';

import { useTheme } from '@mui/material';

import PageStyleWrapper from '@ui/common/PageStyleWrapper';
import EmbroideryIcon from '@icons/patterns/embroidery.svg';
import EmbFireIcon from '@icons/patterns/emb-fire.svg';

import { useAppStore } from '@/context';

import * as S from './Main.styles';

const Main = (): ReactElement => {
    const theme = useTheme();
    const toggleColorMode = useAppStore((state) => state.toggleColorMode);
    return (
        <PageStyleWrapper widthType={'desktop'}>
            <S.MainLayout>
                <S.FirstImage>
                    <EmbroideryIcon id={'emb-big'} alt={'embroidery'} />
                    <EmbFireIcon id={'emb-fire'} alt={'embroidery-fire'} />
                </S.FirstImage>
                <button onClick={toggleColorMode}>Click me</button>
                <EmbroideryIcon id={'emb-big'} alt={'embroidery-big'} />
            </S.MainLayout>
        </PageStyleWrapper>
    );
};
export default Main;
