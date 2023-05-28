import { create } from 'zustand';

import { AppAction, AppState } from './AppContext.typings';

export const useAppStore = create<AppState & AppAction>((set) => ({
    mode: 'dark',
    toggleColorMode: () => set((prev) => ({ mode: prev.mode === 'dark' ? 'light' : 'dark' })),
}));
