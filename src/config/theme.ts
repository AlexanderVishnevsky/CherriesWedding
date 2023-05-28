import { enUS } from '@mui/material/locale';
import { Shadows, Theme } from '@mui/material';
import { TypographyVariants } from '@mui/material/styles';

import createCustomTheme, { breakpoints, defaultZIndex } from '@/utils/MUI/themeOverrides';
import { CormorantInfantFont } from '@/config/localFonts';

export const COMMON_COLORS = {
    primaryMainColor: '#5A6BFF',
    primaryDarkColor: '#1D288A',
    primaryLightColor: '#343F9F',
    primaryLightHoveredColor: '#4F5AB9',
    whiteColor: '#FFFFFF',
    textPrimaryColor: '#000000',
    textSecondaryColor: '#1A1A1A',
    textDisabledColor: '#808E9E',
    backgroundDefaultColor: '#EBF6FE',
    underlineYellowColor: '#f7e0a9',
    greenBGColor: '#E5F8D0',
    greenTextColor: '#629E90',
    grey100: '#F3F3F9',
    grey200: '#E4E4F0',
    grey300: '#BDBDD8',
    grey400: '#C4DBEC',
    grey500: '#A5AAD9',
    redColor: '#FF544D',
};

// Create a theme instance.
const commonThemeSettings: Pick<Theme, 'direction' | 'mixins' | 'zIndex' | 'typography' | 'shadows' | 'components'> = {
    direction: 'ltr',
    mixins: {
        toolbar: {
            maxHeight: 86,
            height: 86,
            maxWidth: 1246,
            zIndex: 1100,
            paddingTop: 24,
            margin: '0 auto',
            width: '100%',
            '@media (min-width:0px) and (orientation: landscape)': { minHeight: 56 },
            // Stub for overriding Material-UI
            [`@media (max-width:${breakpoints.tabletSmall}px)`]: {
                padding: '20px 20px 0',
                height: 88,
                minHeight: 88,
            },
        },
    },
    zIndex: defaultZIndex,
    typography: {
        fontFamily: CormorantInfantFont.style.fontFamily,
        h1: {
            fontFamily: CormorantInfantFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 800,
            fontSize: '120px',
            lineHeight: '164px',
            color: COMMON_COLORS.whiteColor,
        },
        h2: {
            fontFamily: CormorantInfantFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 800,
            fontSize: '48px',
            lineHeight: '65px',
            color: COMMON_COLORS.textPrimaryColor,
        },
        h3: {
            fontFamily: CormorantInfantFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 800,
            fontSize: '40px',
            lineHeight: '55px',
            color: COMMON_COLORS.whiteColor,
        },
        h4: {
            fontFamily: CormorantInfantFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 800,
            fontSize: '32px',
            lineHeight: '44px',
            color: COMMON_COLORS.whiteColor,
        },
        h5: {
            fontFamily: CormorantInfantFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 800,
            fontSize: '28px',
            lineHeight: '38px',
            color: COMMON_COLORS.textPrimaryColor,
        },
        h6: {
            fontFamily: CormorantInfantFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 800,
            fontSize: '24px',
            lineHeight: '33px',
            color: COMMON_COLORS.textPrimaryColor,
        },
        subtitle1: {
            fontFamily: CormorantInfantFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 800,
            fontSize: '56px',
            lineHeight: '76px',
            color: COMMON_COLORS.textPrimaryColor,
        },
        subtitle2: {},
        body1: {
            fontFamily: CormorantInfantFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '27px',
            color: COMMON_COLORS.textDisabledColor,
        },
        body2: {
            fontFamily: CormorantInfantFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '22px',
            color: COMMON_COLORS.textDisabledColor,
        },
        caption: {
            fontFamily: CormorantInfantFont.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 800,
            fontSize: '22px',
            lineHeight: '30px',
            color: COMMON_COLORS.textPrimaryColor,
        },
        button: {},
        overline: {},
    } as TypographyVariants,
    shadows: {
        0: 'none',
        1: '0 10px 30px #e4f1fb',
        4: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
        24: '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
    } as Shadows,
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    height: '172px',
                    boxShadow: 'none',
                    background: 'linear-gradient(180deg, #EBF6FE 0%, rgba(235, 246, 254, 0) 100%)',
                    [`@media (max-width:${breakpoints.tabletLarge}px)`]: {
                        height: '108px',
                    },
                },
            },
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    zIndex: defaultZIndex.modal,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '32px',
                    padding: '40px',
                    [`@media (max-width:${breakpoints.tabletLarge}px)`]: {
                        borderRadius: '24px',
                        padding: '20px',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '48px',
                    height: '56px',
                    padding: '14px 30px',
                    color: COMMON_COLORS.whiteColor,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '28px',
                    whiteSpace: 'nowrap',
                    textTransform: 'none',
                    fontFamily: CormorantInfantFont.style.fontFamily,
                },
                contained: {
                    background: COMMON_COLORS.primaryMainColor,
                    boxShadow: '0px 10px 20px rgba(90, 107, 255, 0.15)',
                    color: COMMON_COLORS.whiteColor,
                },
                sizeLarge: {
                    height: '76px',
                    padding: '24px 50px',
                    color: COMMON_COLORS.whiteColor,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '24px',
                    lineHeight: '28px',
                    [`@media (max-width:${breakpoints.tabletLarge}px)`]: {
                        fontSize: '16px',
                        height: '56px',
                        padding: '14px 30px',
                    },
                },
            },
        },
    },
};

const lightTheme: Theme = createCustomTheme(
    {
        palette: {
            primary: {
                main: COMMON_COLORS.primaryMainColor,
                dark: COMMON_COLORS.primaryDarkColor,
                light: COMMON_COLORS.primaryLightColor,
            },
            error: {
                main: COMMON_COLORS.redColor,
            },
            text: {
                primary: COMMON_COLORS.textPrimaryColor,
                secondary: COMMON_COLORS.textSecondaryColor,
                disabled: COMMON_COLORS.textDisabledColor,
            },
            background: {
                default: COMMON_COLORS.backgroundDefaultColor,
                paper: COMMON_COLORS.whiteColor,
            },
            grey: {
                100: COMMON_COLORS.grey100,
                200: COMMON_COLORS.grey200,
                300: COMMON_COLORS.grey300,
                400: COMMON_COLORS.grey400,
                500: COMMON_COLORS.grey500,
            },
        },
    },
    { enUS, ...commonThemeSettings },
);

/**
 * Responsive Texts
 * @inheritDoc https://mui.com/material-ui/customization/typography/#responsive-font-sizes
 */
lightTheme.typography.h1 = {
    [lightTheme.breakpoints.up('laptop')]: commonThemeSettings.typography.h1,
    [lightTheme.breakpoints.down('laptop')]: commonThemeSettings.typography.h3,
};
lightTheme.typography.h2 = {
    [lightTheme.breakpoints.up('tabletLarge')]: commonThemeSettings.typography.h2,
    [lightTheme.breakpoints.down('tabletLarge')]: commonThemeSettings.typography.h5,
};
lightTheme.typography.body1 = {
    [lightTheme.breakpoints.up('tabletLarge')]: commonThemeSettings.typography.body1,
    [lightTheme.breakpoints.down('tabletLarge')]: commonThemeSettings.typography.body2,
};

lightTheme.typography.subtitle1 = {
    [lightTheme.breakpoints.up('tabletLarge')]: commonThemeSettings.typography.subtitle1,
    [lightTheme.breakpoints.down('tabletLarge')]: commonThemeSettings.typography.h3,
};

export const themes = { lightTheme };
