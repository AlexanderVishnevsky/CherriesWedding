import { PaletteMode } from '@mui/material';

import { create } from 'zustand';

import { AppAction, AppState } from './AppContext.typings';

export const useAppStore = create<AppState & AppAction>((set) => ({
    mode: 'dark',
    toggleTheme: (specMode?: PaletteMode) =>
        set((prev) => ({ mode: specMode ?? (prev.mode === 'dark' ? 'light' : 'dark') })),
}));
