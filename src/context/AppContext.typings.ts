import { PaletteMode } from '@mui/material';

export type AppState = {
    mode: PaletteMode;
};

export type AppAction = {
    toggleTheme: (mode?: AppState['mode']) => void;
};
