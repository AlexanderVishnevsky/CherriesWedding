import { Box, css, Dialog, keyframes, styled, Typography } from '@mui/material';

import { DARK_COLORS, LIGHT_COLORS } from '@theme';

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

const move = (y: string, deg: string) =>
    keyframes({
        '0%': {
            scale: 0.4,
            transform: `rotate(0deg)`,
        },
        '100%': {
            scale: 1,
            transform: `translateY(${y}) rotate(${deg})`,
        },
    });

export const BurgerMenu = styled('div')<{ open: boolean }>`
    position: relative;
    margin: 0 auto;
    width: 40px;
    height: 40px;

    :before,
    :after,
    div {
        background-color: ${({ theme }) =>
            theme.palette.mode === 'light' ? LIGHT_COLORS.primaryLightMain : DARK_COLORS.disabledDarkButton};
        content: '';
        display: block;
        height: 1.5px;
        border-radius: 3px;
        margin: 7px 0;
        transition: 0.5s;
    }

    :before,
    :after {
        margin: 7px 5px;
    }

    ${({ open, theme }) =>
        open &&
        css`
            :before,
            :after {
                background-color: ${theme.palette.mode === 'light' && DARK_COLORS.primaryDarkText};
            }

            :before {
                animation: ${move('8px', '135deg')} 0.7s ease;
                transform: translateY(8px) rotate(135deg);
            }
            :after {
                animation: ${move('-8px', '-135deg')} 0.7s ease;
                transform: translateY(-8px) rotate(-135deg);
            }
            div {
                transform: scale(0);
            }
        `}
`;

export const StyledMenuItem = styled(Typography)<{ isActive: boolean }>`
    font-family: ${ConnieFont.style.fontFamily};
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
    text-transform: uppercase;

  color: ${({ isActive, theme }) =>
      theme.palette.mode === 'light' && isActive
          ? DARK_COLORS.primaryDarkText
          : theme.palette.mode === 'light' && !isActive
          ? LIGHT_COLORS.secondaryLightText
          : theme.palette.mode === 'dark' && isActive
          ? DARK_COLORS.primaryDarkText
          : DARK_COLORS.disabledDarkButton};
}
`;
