import { createTheme, Theme, ThemeOptions, ZIndex } from '@mui/material';
import { createBreakpoints } from '@mui/system';

export const breakpoints = {
    mobileSmall: 335,

    mobileMedium: 375,

    mobileLarge: 500,

    tabletSmall: 768,

    tabletLarge: 1024,

    laptop: 1216,

    desktop: 1500,
};

export const defaultZIndex: ZIndex = {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1110,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
};

export default function createCustomTheme(options: ThemeOptions, ...args: object[]): Theme {
    return createTheme(
        {
            breakpoints: createBreakpoints({
                values: breakpoints,
            }),
            typography: {
                fontFamily: ['system-ui', 'sans-serif'].join(','),
            },
            ...options,
        },
        ...args,
    );
}
