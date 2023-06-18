import { InputBase, styled, Typography } from '@mui/material';

import { DARK_COLORS, LIGHT_COLORS } from '@theme';
import Picture from '@ui/common/Picture';
import { FlexColCenter } from '@ui/common/Common.styles';

export const CardLayout = styled(FlexColCenter)`
    background-color: ${LIGHT_COLORS.primaryLightMain};
    border-radius: 44px;
    width: 649px;
    height: 294px;
    position: relative;
    text-align: center;
    justify-content: flex-start;

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        justify-content: flex-start;
        min-width: 320px;
        width: 100%;
        border-radius: 22px;
        height: 200px;
        padding-bottom: 20px;
    }
`;

export const MainImage = styled(Picture)`
    position: absolute;
    right: 0;
    bottom: 0;

    img {
        z-index: 1;
        border-radius: 0 0 44px 0;
    }

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        opacity: 60%;
    }
`;

export const AddImage = styled(Picture)`
    position: absolute;
    left: 15px;
    top: 0;

    img {
        z-index: 1;
        border-radius: 0 0 0 44px;
    }

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        display: none;
    }
`;

export const BaseText = styled(Typography)`
    color: ${DARK_COLORS.primaryDarkText};
    z-index: 2;
`;

export const Question = styled(BaseText)`
    margin: 31px auto 11px;
    max-width: 379px;

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        margin: 20px auto 5px;
    }
`;

export const Hint = styled(BaseText)`
    margin-top: 0;

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        order: 2;
        max-width: 273px;
    }
`;

export const Answer = styled(InputBase)`
    border-bottom: 2px solid ${DARK_COLORS.primaryDarkText};
    margin: 12px auto 68px;
    color: ${DARK_COLORS.primaryDarkText};
    width: 378px;
    flex: 2;
    display: flex;
    align-items: flex-end;
    z-index: 2;
    font-weight: 600;

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        width: calc(100% - 40px);
        margin: 12px auto 6px;
        font-size: 15px;
        z-index: 2;
    }
`;
