import { keyframes, styled, Typography } from '@mui/material';

import { FlexCenter, FlexJCBetween, FlexRow } from '@ui/common/Common.styles';

export const MainLayout = styled(FlexJCBetween)`
    width: 100%;
    height: 100%;
    overflow: hidden;

    #emb-big {
        width: 200px;
        height: 756px;
    }

    #emb-fire {
        width: 200px;
        height: 90px;
    }
`;

export const FirstImage = styled(FlexRow)`
    flex-direction: column;
`;

export const MainColumn = styled(FlexCenter)`
    flex-direction: column;
    justify-content: space-around;
`;

export const StyledTitle = styled(Typography)`
    text-transform: uppercase;
    margin: 0 auto;
    text-align: center;
    max-width: 508px;
`;

const spinX = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const FrameContainer = styled(FlexCenter)`
    width: 264px;
    height: 264px;
    position: relative;

    #frame {
        background-image: url('/static/icons/patterns/main-frame.svg');
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        position: absolute;

        animation: ${spinX} 15s infinite linear;
    }
`;
