import { BreakpointOverrides } from '@mui/material/styles';

export type BreakpointTypes =
    | 'mobileSmall'
    | 'mobileMedium'
    | 'mobileLarge'
    | 'tabletSmall'
    | 'tabletLarge'
    | 'laptop'
    | 'desktop';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        // removes default breakpoints
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        // adds custom breakpoints
        mobileSmall: true;
        mobileMedium: true;
        mobileLarge: true;
        tabletSmall: true;
        tabletLarge: true;
        laptop: true;
        desktop: true;
    }
}

declare module '@mui/material/createTheme' {
    interface Theme {
        breakpoints: BreakpointOverrides;
    }

    // allow configuration using `createTheme`
    interface ThemeOptions {
        breakpoints: BreakpointOverrides;
    }
}
