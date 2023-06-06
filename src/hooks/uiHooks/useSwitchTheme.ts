import { PaletteMode } from '@mui/material';

import { callbackType } from '@typings/common';

import { useAppStore } from '@/context';

type RType = { toggleTheme: callbackType<PaletteMode> };

/**
 * Switch theme by condition
 * Just toggle to switch theme --> {@example () => toggleTheme()}
 * or select specific theme --> {@example () => toggleTheme('dark')}
 * available themes --> {@interface PaletteMode}
 */
export const useSwitchTheme = (): RType => {
    const { toggleTheme } = useAppStore();
    return { toggleTheme };
};
