import 'public/assets/css/index.css';
import React, { ReactElement } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { useDetectTheme } from '@hooks';

import { MyAppProps } from '@typings/_appTypings';

import { CacheProvider } from '@emotion/react';
import InitScripts from '@ui/common/utils/InitScripts';
import PageStyleWrapper from '@ui/common/PageStyleWrapper';

import createEmotionCache from '@/config/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

const WeddingApp = (props: MyAppProps): ReactElement => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const { theme } = useDetectTheme();

    return (
        <CacheProvider value={emotionCache}>
            <InitScripts />
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <PageStyleWrapper>
                    <Component {...pageProps} />
                </PageStyleWrapper>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default WeddingApp;
