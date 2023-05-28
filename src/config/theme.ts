import { PaletteMode, Theme } from '@mui/material';
import { TypographyVariants } from '@mui/material/styles';

import { defaultZIndex } from '@/utils/MUI/themeOverrides';
import { CormorantInfantFont } from '@/config/localFonts';

export const LIGHT_COLORS = {
    primaryLightMain: '#759599',
    backgroundLightDefault: '#F0EADA',
};

export const DARK_COLORS = {
    primaryDarkMain: '#E33B0E',
    backgroundDarkDefault: '#282828',
};

// Create a theme instance.
const commonThemeSettings: Pick<Theme, 'direction' | 'zIndex' | 'typography'> = {
    direction: 'ltr',
    zIndex: defaultZIndex,
    typography: {
        fontFamily: CormorantInfantFont.style.fontFamily,
        body1: {
            fontFamily: CormorantInfantFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '30px',
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
              }
            : {
                  primary: {
                      main: LIGHT_COLORS.primaryLightMain,
                  },
                  background: {
                      default: LIGHT_COLORS.backgroundLightDefault,
                  },
              }),
    },
});

export { commonThemeSettings, getPaletteTokens };
