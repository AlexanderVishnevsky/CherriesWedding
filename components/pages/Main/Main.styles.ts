import { keyframes, styled, Typography } from '@mui/material';

import { FlexCenter, FlexJCBetween, FlexRow } from '@ui/common/Common.styles';

export const MainLayout = styled(FlexJCBetween)`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    #emb-left,
    #emb-right {
        width: 200px;
        height: 756px;
    }

    #emb-fire {
        width: 200px;
        height: 90px;
    }
    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        justify-content: center;
        #emb-left {
            position: fixed;
            left: -130px;
        }
        #emb-right {
            position: fixed;
            right: -130px;
        }
        #emb-fire {
            display: none;
        }
    }
`;

export const FirstImage = styled(FlexRow)`
    flex-direction: column;
`;

export const MainColumn = styled(FlexCenter)`
    flex-direction: column;
    justify-content: space-around;

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        justify-content: space-around;
        height: calc(var(--vh, 1vh) * 100);
        padding-bottom: 24px;
    }
`;

export const StyledTitle = styled(Typography)`
    text-transform: uppercase;
    margin: 0 auto;
    text-align: center;
    max-width: 508px;
    z-index: 2;
    white-space: pre-wrap;

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        max-width: 243px;
    }
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
    z-index: 2;

    #frame {
        background-image: url('/static/icons/patterns/main-frame.svg');
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        position: absolute;

        animation: ${spinX} 15s infinite linear;
    }

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        width: 220px;
        height: 220px;
        margin: 20px auto;
    }
`;
