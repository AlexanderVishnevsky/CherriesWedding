import { Box, IconButton, keyframes, styled } from '@mui/material';

export const MenuMobileLayout = styled(Box)``;

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
        background: #717171;
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
