import { create } from 'zustand';

import { AppAction, AppState } from './AppContext.typings';

export const useAppStore = create<AppState & AppAction>((set) => ({
    mode: 'dark',
    toggleTheme: (specMode) => set((prev) => ({ mode: specMode ?? (prev.mode === 'dark' ? 'light' : 'dark') })),
    // locale: LocaleType.BY,
    // handleSwitchLocale: (specLocale) =>
    //     set((prev) => ({ locale: specLocale ?? (prev.locale === LocaleType.BY ? LocaleType.RU : LocaleType.BY) })),
}));
