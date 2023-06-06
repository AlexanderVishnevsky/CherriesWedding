import { useMemo } from 'react';

import { Theme, useMediaQuery } from '@mui/material';
import { enUS } from '@mui/material/locale';

import { commonThemeSettings, getPaletteTokens } from '@theme';

import { createCustomTheme } from '@/utils/MUI/themeOverrides';
import { useAppStore } from '@/context';
import { useIsomorphicLayoutEffect } from '@/hooks';

interface IReturnType {
    theme: Theme;
}

export const useDetectTheme = (): IReturnType => {
    const isDark: boolean = useMediaQuery('(prefers-color-scheme: dark)');

    const { mode, toggleTheme } = useAppStore((state) => state);

    useIsomorphicLayoutEffect(() => {
        toggleTheme(isDark ? 'dark' : 'light');
    }, [isDark]);

    const theme: Theme = useMemo(
        () => createCustomTheme(getPaletteTokens(mode), { enUS, ...commonThemeSettings }),
        [mode],
    );

    return { theme };
};
