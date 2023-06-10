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
    shouldForwardProp: (propName) => propName !== 'isDark' && propName !== 'large',
})<{
    isDark: boolean;
    large?: boolean;
}>`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: ${({ isDark, theme }) =>
        isDark ? `2px solid ${theme.palette.text.primary}` : `2px solid ${theme.palette.primary.main}`};

    svg {
        animation: ${fade} 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        width: 32px;
        height: 32px;
    }

    ${({ large, isDark, theme }) =>
        large &&
        css`
            background-color: ${isDark ? '#393939' : theme.palette.background.paper};
            border: ${isDark ? `2px solid #393939` : `2px solid ${theme.palette.primary.main}`};
            width: 44px;
            height: 44px;
        `}
`;
