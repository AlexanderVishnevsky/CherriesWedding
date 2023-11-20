'use client';

import * as React from 'react';
import { PropsWithChildren } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { useDetectTheme } from '@hooks';

import NextAppDirEmotionCacheProvider from './EmotionCache';

export default function ThemeRegistry({ children }: PropsWithChildren) {
    const { theme } = useDetectTheme();
    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}
