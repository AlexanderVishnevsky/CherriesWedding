import { ButtonBase, css, keyframes, styled } from '@mui/material';

const fade = keyframes({
    '0%': {
        scale: 1,
        transform: 'rotate(-360deg)',
    },
    '50%': {
        scale: 0,
        transform: 'rotate(0deg)',
    },
    '100%': {
        scale: 1,
        transform: 'rotate(360deg)',
    },
});

export const Switcher = styled(ButtonBase, {
    shouldForwardProp: (propName) => propName !== 'isLight' && propName !== 'large',
})<{
    isLight: boolean;
    large?: boolean;
}>`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: ${({ isLight, theme }) =>
        isLight ? `2px solid ${theme.palette.primary.main}` : `2px solid ${theme.palette.text.primary}`};

    svg {
        animation: ${fade} 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        width: 32px;
        height: 32px;
    }

    ${({ large, isLight, theme }) =>
        large &&
        css`
            background-color: ${isLight ? 'transparent' : '#393939'};
            border: ${isLight ? `2px solid ${theme.palette.background.paper}` : `2px solid #393939`};
            width: 44px;
            height: 44px;
            svg {
                width: 44px;
                height: 44px;

                path {
                    fill: ${isLight ? theme.palette.background.paper : ''};
                }
            }
        `}
`;
