import { PaletteMode } from '@mui/material';

export type AppState = {
    mode: PaletteMode;
    //locale: LocaleType;
};

export type AppAction = {
    toggleTheme: (mode?: AppState['mode']) => void;
    //handleSwitchLocale: (locale?: AppState['locale']) => void;
};
