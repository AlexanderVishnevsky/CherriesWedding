import { PaletteMode, Theme } from '@mui/material';
import { TypographyVariants } from '@mui/material/styles';

import { breakpoints, defaultZIndex } from '@/utils/MUI/themeOverrides';
import { ConnieFont, CormorantInfantFont } from '@/config/localFonts';

export const LIGHT_COLORS = {
    primaryLightMain: '#759599',
    backgroundLightDefault: '#F0EADA',
    primaryLightText: '#39300E',
    secondaryLightText: '#3E5052',
    disabledLightButton: 'rgba(62, 80, 82, 0.5)',
    gray800: '#DDD7C9',
};

export const DARK_COLORS = {
    primaryDarkMain: '#E33B0E',
    backgroundDarkDefault: '#282828',
    primaryDarkText: '#FFFFFF',
    secondaryDarkText: '#d0d6d7',
    customDarkText: '#BDC4C6',
    disabledDarkButton: '#717171',
    gray100: 'rgba(145, 141, 132, 0.2)',
    gray800: '#393939',
};

// Create a theme instance.
const commonThemeSettings: Pick<Theme, 'direction' | 'zIndex' | 'typography' | 'components'> = {
    direction: 'ltr',
    zIndex: defaultZIndex,
    typography: {
        fontFamily: CormorantInfantFont.style.fontFamily,
        h1: {
            fontFamily: ConnieFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '120px',
            lineHeight: '182px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: LIGHT_COLORS.gray800,
        },
        h2: {
            fontFamily: ConnieFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '72px',
            lineHeight: '109px',
            letterSpacing: '0.12em',
            textAlign: 'center',
            color: LIGHT_COLORS.primaryLightText,
        },
        h3: {
            fontFamily: ConnieFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '60px',
            lineHeight: '91px',
            color: LIGHT_COLORS.primaryLightText,
        },
        h4: {
            fontFamily: ConnieFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '40px',
            lineHeight: '61px',
            color: LIGHT_COLORS.primaryLightText,
        },
        h5: {
            fontFamily: ConnieFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '26px',
            lineHeight: '39px',
            color: LIGHT_COLORS.primaryLightText,
        },
        body1: {
            fontFamily: CormorantInfantFont.style.fontFamily,
            fontStyle: 'normal',
            color: LIGHT_COLORS.secondaryLightText,
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '30px',
        },
        button: {
            fontFamily: ConnieFont.style.fontFamily,
            color: LIGHT_COLORS.secondaryLightText,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '26px',
            letterSpacing: '0.06em',
        },
        subtitle2: {
            fontFamily: CormorantInfantFont.style.fontFamily,
            fontStyle: 'normal',
            color: LIGHT_COLORS.secondaryLightText,
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '28px',
            letterSpacing: '0.06em',
        },
        caption: {
            fontFamily: ConnieFont.style.fontFamily,
            color: LIGHT_COLORS.secondaryLightText,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '21px',
            letterSpacing: '0.12em',
        },
        overline: {
            fontFamily: 'Helvetica',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '10px',
            lineHeight: '13px',
            letterSpacing: '0.12em',
            textTransform: 'none',
            color: DARK_COLORS.disabledDarkButton,
        },
    } as TypographyVariants,
    components: {
        MuiTypography: {
            styleOverrides: {
                h1: {
                    [`@media (max-width:${breakpoints.tabletLarge}px)`]: {
                        fontSize: '50px',
                        lineHeight: '76px',
                    },
                },
                h2: {
                    [`@media (min-width:${breakpoints.tabletSmall}px)`]: {
                        fontSize: '50px',
                        lineHeight: '76px',
                    },
                    [`@media (max-width:${breakpoints.tabletSmall}px)`]: {
                        fontSize: '28px',
                        lineHeight: '42px',
                    },
                },
                h3: {
                    [`@media (max-width:${breakpoints.tabletLarge}px)`]: {
                        fontSize: '44px',
                        lineHeight: '44px',
                    },
                },
                h4: {
                    [`@media (max-width:${breakpoints.tabletLarge}px)`]: {
                        fontSize: '28px',
                        lineHeight: '30px',
                    },
                },
            },
        },
        MuiIconButton: {
            defaultProps: {
                disableRipple: true,
                disableFocusRipple: true,
                disableTouchRipple: true,
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
                disableTouchRipple: true,
            },
        },
    },
};

// Override common theme instance with dark theme colors.
const commonDarkThemeSettings: Pick<Theme, 'direction' | 'zIndex' | 'typography'> = {
    ...commonThemeSettings,
    typography: {
        ...commonThemeSettings.typography,
        h1: {
            ...commonThemeSettings.typography.h1,
            color: DARK_COLORS.gray800,
        },
        h2: {
            ...commonThemeSettings.typography.h2,
            color: DARK_COLORS.primaryDarkText,
        },
        h3: {
            ...commonThemeSettings.typography.h3,
            color: DARK_COLORS.primaryDarkText,
        },
        h4: {
            ...commonThemeSettings.typography.h4,
            color: DARK_COLORS.primaryDarkText,
        },
        h5: {
            ...commonThemeSettings.typography.h5,
            color: DARK_COLORS.primaryDarkText,
        },
        body1: {
            ...commonThemeSettings.typography.body1,
            color: DARK_COLORS.secondaryDarkText,
        },
        button: {
            ...commonThemeSettings.typography.button,
            color: DARK_COLORS.primaryDarkText,
        },
        subtitle2: {
            ...commonThemeSettings.typography.subtitle2,
            color: DARK_COLORS.secondaryDarkText,
        },
        caption: {
            ...commonThemeSettings.typography.caption,
            color: DARK_COLORS.secondaryDarkText,
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
                      paper: DARK_COLORS.backgroundDarkDefault,
                  },
                  text: {
                      primary: DARK_COLORS.primaryDarkText,
                      secondary: DARK_COLORS.primaryDarkText,
                      default: DARK_COLORS.primaryDarkText,
                  },
              }
            : {
                  primary: {
                      main: LIGHT_COLORS.primaryLightMain,
                  },
                  background: {
                      default: LIGHT_COLORS.backgroundLightDefault,
                      paper: LIGHT_COLORS.backgroundLightDefault,
                  },
                  text: {
                      primary: LIGHT_COLORS.primaryLightText,
                      secondary: LIGHT_COLORS.secondaryLightText,
                      default: LIGHT_COLORS.primaryLightText,
                  },
              }),
    },
});

export { commonThemeSettings, commonDarkThemeSettings, getPaletteTokens };
