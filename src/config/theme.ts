import { PaletteMode, Theme } from '@mui/material';
import { TypographyVariants } from '@mui/material/styles';

import { breakpoints, defaultZIndex } from '@/utils/MUI/themeOverrides';
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
            fontSize: '160px',
            lineHeight: '243px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: DARK_COLORS.gray100,
        },
        h2: {
            fontFamily: ConnieFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '72px',
            lineHeight: '109px',
            letterSpacing: '0.12em',
            textAlign: 'center',
        },
        h3: {
            fontFamily: ConnieFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '60px',
            lineHeight: '91px',
        },
        h4: {
            fontFamily: ConnieFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '40px',
            lineHeight: '61px',
        },
        h5: {
            fontFamily: ConnieFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '26px',
            lineHeight: '39px',
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
        subtitle2: {
            fontFamily: ConnieFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '22px',
            letterSpacing: '0.06em',
        },
        caption: {
            fontFamily: ConnieFont.style.fontFamily,
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
                        fontSize: '72px',
                        lineHeight: '109px',
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
                      paper: DARK_COLORS.backgroundDarkDefault,
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
                      paper: LIGHT_COLORS.backgroundLightDefault,
                  },
                  text: {
                      primary: LIGHT_COLORS.primaryLightText,
                      default: LIGHT_COLORS.primaryLightText,
                  },
              }),
    },
});

export { commonThemeSettings, commonDarkThemeSettings, getPaletteTokens };
