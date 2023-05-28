//import 'styles/globals.css';
import 'components/preview/style.css';

import { createContext, FC } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { useDetectTheme } from '@hooks';

import { MyAppProps } from '@typings/_appTypings';

import { CacheProvider } from '@emotion/react';
import InitScripts from '@ui/common/utils/InitScripts';

import createEmotionCache from '@/config/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const WeddingApp: FC<MyAppProps> = (props) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const { theme, colorMode } = useDetectTheme();

    return (
        <CacheProvider value={emotionCache}>
            <InitScripts />
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </ColorModeContext.Provider>
        </CacheProvider>
    );
};

export default WeddingApp;
