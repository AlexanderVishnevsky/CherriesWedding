import { Box, Dialog, IconButton, keyframes, styled, Typography } from '@mui/material';

import { DARK_COLORS } from '@theme';

import { ConnieFont } from '@/config/localFonts';

export const StyledDialog = styled(Dialog)``;

export const MenuMobileLayout = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    background-color: ${({ theme }) =>
        theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.paper};
`;

const move = (deg: string) =>
    keyframes({
        '0%': {
            scale: 0.4,
            transform: `rotate(0deg)`,
        },
        '100%': {
            scale: 1,
            transform: `rotate(${deg})`,
        },
    });

export const BurgerMenu = styled(IconButton)`
    margin: 0 auto;
    position: relative;
    width: 24px;
    height: 24px;

    #first-line,
    #second-line {
        width: 35px;
        background-color: ${({ theme }) =>
            theme.palette.mode === 'light' ? DARK_COLORS.primaryDarkText : DARK_COLORS.disabledDarkButton};
        height: 1.5px;
        position: absolute;
    }
    #first-line {
        transform: rotate(45deg);
        animation: ${move('45deg')} 0.7s ease;
    }
    #second-line {
        transform: rotate(-45deg);
        animation: ${move('-45deg')} 0.7s ease;
    }
`;

export const StyledMenuItem = styled(Typography)`
    font-family: ${ConnieFont.style.fontFamily};
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
    text-transform: uppercase;
`;
