import { create } from 'zustand';

import { AppAction, AppState } from './AppContext.typings';

export const useAppStore = create<AppState & AppAction>((set) => ({
    mode: 'dark',
    toggleColorMode: (specMode) => set((prev) => ({ mode: specMode ?? (prev.mode === 'dark' ? 'light' : 'dark') })),
}));
