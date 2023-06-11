import { ButtonBase, css, styled } from '@mui/material';

import { FlexJCBetween } from '@ui/common/Common.styles';
import { DARK_COLORS, LIGHT_COLORS } from '@theme';

export const FooterLayout = styled('footer')`
    height: 82px;
    width: 100%;
    max-width: ${({ theme }) => `${theme.breakpoints.values['desktop']}px`};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        justify-content: center;
    }
`;

export const ColWrap = styled(FlexJCBetween)`
    width: 144px;

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        display: none;
    }
`;

export const ButtonBack = styled(ButtonBase)`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: ${DARK_COLORS.gray800};
    margin-bottom: 6px;

    svg {
        width: 30px;
        height: 30px;
    }
    ${({ theme }) =>
        theme.palette.mode === 'light' &&
        css`
            background-color: rgba(57, 48, 14, 0.2);
            svg {
                path {
                    fill: ${DARK_COLORS.primaryDarkText};
                }
            }
        `}
`;

export const ButtonNext = styled(ButtonBase)`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 6px;

    svg {
        width: 30px;
        height: 30px;
    }
    ${({ theme }) =>
        theme.palette.mode === 'dark' &&
        css`
            svg {
                path {
                    fill: ${DARK_COLORS.backgroundDarkDefault};
                }
            }
        `}
`;

export const FooterSwitcher = styled(FlexJCBetween)`
    column-gap: 24px;
    margin-bottom: 40px;
`;

export const FooterSwitcherText = styled(ButtonBase, { shouldForwardProp: (propName) => propName !== 'isActive' })<{
    isActive: boolean;
}>`
    span {
        text-transform: capitalize;

        color: ${({ isActive, theme }) =>
            theme.palette.mode === 'light' && isActive
                ? LIGHT_COLORS.primaryLightText
                : theme.palette.mode === 'light' && !isActive
                ? LIGHT_COLORS.disabledLightButton
                : theme.palette.mode === 'dark' && isActive
                ? DARK_COLORS.primaryDarkText
                : DARK_COLORS.disabledDarkButton};
    }
`;
