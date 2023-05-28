import { enUS } from '@mui/material/locale';
import { Theme } from '@mui/material';
import { TypographyVariants } from '@mui/material/styles';

import createCustomTheme, { defaultZIndex } from '@/utils/MUI/themeOverrides';
import { CormorantInfantFont } from '@/config/localFonts';

export const COMMON_COLORS = {
    primaryLightMain: '#759599',
    backgroundLightDefault: '#F0EADA',
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

const lightTheme: Theme = createCustomTheme(
    {
        palette: {
            primary: {
                main: COMMON_COLORS.primaryLightMain,
            },
            background: {
                default: COMMON_COLORS.backgroundLightDefault,
            },
        },
    },
    { enUS, ...commonThemeSettings },
);

export const themes = { lightTheme };
