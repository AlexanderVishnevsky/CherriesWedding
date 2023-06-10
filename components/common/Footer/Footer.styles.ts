import { ButtonBase, styled } from '@mui/material';

import { FlexJCBetween } from '@ui/common/Common.styles';
import { DARK_COLORS, LIGHT_COLORS } from '@theme';

export const FooterLayout = styled('footer')`
    height: 82px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    right: 20px;
    z-index: 20;
`;

export const FooterSwitcher = styled(FlexJCBetween)`
    column-gap: 24px;
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
