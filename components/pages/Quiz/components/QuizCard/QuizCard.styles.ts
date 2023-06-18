import { InputBase, styled, Typography } from '@mui/material';

import { DARK_COLORS, LIGHT_COLORS } from '@theme';
import Picture from '@ui/common/Picture';
import { FlexColCenter } from '@ui/common/Common.styles';

export const CardLayout = styled(FlexColCenter)`
    background: ${LIGHT_COLORS.primaryLightMain};
    border-radius: 44px;
    width: 649px;
    height: 294px;
    position: relative;
    text-align: center;
    justify-content: space-between;
`;

export const MainImage = styled(Picture)`
    position: absolute;
    right: 0;
    bottom: 0;

    img {
        border-radius: 0 0 44px 0;
    }
`;

export const AddImage = styled(Picture)`
    position: absolute;
    left: 15px;
    top: 0;

    img {
        border-radius: 0 0 0 44px;
    }
`;

export const Question = styled(Typography)`
    margin: 31px auto 11px;
    max-width: 379px;
`;

export const Answer = styled(InputBase)`
    border-bottom: 2px solid ${DARK_COLORS.primaryDarkText};
    margin: 12px auto 68px;
    //height: 112px;
    width: 378px;
`;
