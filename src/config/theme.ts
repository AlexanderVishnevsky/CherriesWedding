import { PaletteMode, Theme } from '@mui/material';
import { TypographyVariants } from '@mui/material/styles';

import { defaultZIndex } from '@/utils/MUI/themeOverrides';
import { ConnieFont, CormorantInfantFont } from '@/config/localFonts';

export const LIGHT_COLORS = {
    primaryLightMain: '#759599',
    backgroundLightDefault: '#F0EADA',
    primaryLightText: '#39300E',
    disabledLightButton: 'rgba(62, 80, 82, 0.5)',
};

export const DARK_COLORS = {
    primaryDarkMain: '#E33B0E',
    backgroundDarkDefault: '#282828',
    primaryDarkText: '#FFFFFF',
    disabledDarkButton: '#717171',
};

// Create a theme instance.
const commonThemeSettings: Pick<Theme, 'direction' | 'zIndex' | 'typography'> = {
    direction: 'ltr',
    zIndex: defaultZIndex,
    typography: {
        fontFamily: CormorantInfantFont.style.fontFamily,
        h2: {
            fontFamily: ConnieFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '50px',
            lineHeight: '76px',
            letterSpacing: '0.12em',
        },
        body1: {
            fontFamily: CormorantInfantFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '30px',
        },
        button: {
            fontFamily: ConnieFont.style.fontFamily,
            color: LIGHT_COLORS.primaryLightText,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '26px',
            letterSpacing: '0.06em',
        },
    } as TypographyVariants,
};

// Override common theme instance with dark theme colors.
const commonDarkThemeSettings: Pick<Theme, 'direction' | 'zIndex' | 'typography'> = {
    ...commonThemeSettings,
    typography: {
        ...commonThemeSettings.typography,
        button: {
            ...commonThemeSettings.typography.button,
            color: DARK_COLORS.primaryDarkText,
        },
    } as TypographyVariants,
};

const getPaletteTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'dark'
            ? {
                  primary: {
                      main: DARK_COLORS.primaryDarkMain,
                  },
                  background: {
                      default: DARK_COLORS.backgroundDarkDefault,
                  },
                  text: {
                      primary: DARK_COLORS.primaryDarkText,
                      default: DARK_COLORS.primaryDarkText,
                  },
              }
            : {
                  primary: {
                      main: LIGHT_COLORS.primaryLightMain,
                  },
                  background: {
                      default: LIGHT_COLORS.backgroundLightDefault,
                  },
                  text: {
                      primary: LIGHT_COLORS.primaryLightText,
                      default: LIGHT_COLORS.primaryLightText,
                  },
              }),
    },
});

export { commonThemeSettings, commonDarkThemeSettings, getPaletteTokens };
