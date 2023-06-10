import { styled } from '@mui/material';

import { FlexColCenter } from '@ui/common/Common.styles';

export const PlaceLayout = styled(FlexColCenter)`
    width: 100%;

    padding-top: 32px;
    overflow: hidden auto;

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        padding-top: 64px;
    }
`;

export const VideoContainer = styled('div')`
    position: relative;
    margin: 24px auto;
    border-radius: 44px;

    #bg-video {
        width: 100%;
        max-height: 620px;
        border-radius: 44px;
    }
`;
