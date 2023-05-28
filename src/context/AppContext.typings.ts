import { PaletteMode } from '@mui/material';

export type AppState = {
    mode: PaletteMode;
};

export type AppAction = {
    toggleColorMode: (mode?: AppState['mode']) => void;
};
