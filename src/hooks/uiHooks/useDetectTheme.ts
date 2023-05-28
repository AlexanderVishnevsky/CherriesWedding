import { useMemo } from 'react';

import { Theme, useMediaQuery } from '@mui/material';
import { enUS } from '@mui/material/locale';

import { getPaletteTokens, commonThemeSettings } from '@theme';

import { createCustomTheme } from '@/utils/MUI/themeOverrides';
import { useAppStore } from '@/context';

interface IReturnType {
    theme: Theme;
}

export const useDetectTheme = (): IReturnType => {
    const isDark: boolean = useMediaQuery('(prefers-color-scheme: dark)');

    const mode = useAppStore((state) => state.mode);

    const theme: Theme = useMemo(
        () => createCustomTheme(getPaletteTokens(mode), { enUS, ...commonThemeSettings }),
        [mode],
    );

    return { theme };
};
