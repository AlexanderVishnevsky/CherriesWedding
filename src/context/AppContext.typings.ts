import { PaletteMode } from '@mui/material';

export type AppState = {
    mode: PaletteMode;
};

export type AppAction = {
    toggleColorMode: () => void;
};
