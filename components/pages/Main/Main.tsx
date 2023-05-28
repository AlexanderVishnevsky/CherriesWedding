import { useContext } from 'react';

import { useTheme } from '@mui/material';

import PageStyleWrapper from '@ui/common/PageStyleWrapper';

import { ColorModeContext } from '../../../pages/_app';

import * as S from './Main.styles';

const Main = (): JSX.Element => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <PageStyleWrapper>
            <S.MainLayout>
                <button onClick={colorMode.toggleColorMode}>{theme.palette.mode} Switch</button>
            </S.MainLayout>
        </PageStyleWrapper>
    );
};
export default Main;
