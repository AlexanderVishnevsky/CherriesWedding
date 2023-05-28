import 'styles/globals.css';
import 'components/preview/style.css';

import { FC } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { MyAppProps } from '@typings/_appTypings';

import { CacheProvider } from '@emotion/react';
import { themes } from '@theme';
import InitScripts from '@common/utils/InitScripts';

import createEmotionCache from '@/config/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

const WeddingApp: FC<MyAppProps> = (props) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    return (
        <CacheProvider value={emotionCache}>
            <InitScripts />
            <ThemeProvider theme={themes.lightTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
};

export default WeddingApp;
