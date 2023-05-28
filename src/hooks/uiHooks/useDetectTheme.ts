import { useMemo, useState } from 'react';

import { PaletteMode, Theme, useMediaQuery } from '@mui/material';
import { enUS } from '@mui/material/locale';

import { getPaletteTokens, commonThemeSettings } from '@theme';

import { createCustomTheme } from '@/utils/MUI/themeOverrides';

interface IReturnType {
    theme: Theme;
    colorMode: {
        toggleColorMode: () => void;
    };
}

export const useDetectTheme = (): IReturnType => {
    const isDark: boolean = useMediaQuery('(prefers-color-scheme: dark)');

    const [mode, setMode] = useState<PaletteMode>(isDark ? 'dark' : 'light');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme: Theme = useMemo(
        () => createCustomTheme(getPaletteTokens(mode), { enUS, ...commonThemeSettings }),
        [mode],
    );

    return { theme, colorMode };
};
