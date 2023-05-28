import { ReactElement, useContext } from 'react';

import { useTheme } from '@mui/material';

import PageStyleWrapper from '@ui/common/PageStyleWrapper';
import EmbroideryIcon from '@icons/patterns/embroidery.svg';
import EmbFireIcon from '@icons/patterns/emb-fire.svg';

import { ColorModeContext } from '../../../pages/_app';

import * as S from './Main.styles';

const Main = (): ReactElement => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <PageStyleWrapper widthType={'desktop'}>
            <S.MainLayout>
                <S.FirstImage>
                    <EmbroideryIcon id={'emb-big'} alt={'embroidery'} />
                    <EmbFireIcon id={'emb-fire'} alt={'embroidery-fire'} />
                </S.FirstImage>
                <EmbroideryIcon id={'emb-big'} alt={'embroidery-big'} />
            </S.MainLayout>
        </PageStyleWrapper>
    );
};
export default Main;
