import { keyframes, styled, Typography } from '@mui/material';

import { FlexCenter, FlexColCenter, FlexJCBetween, FlexRow } from '@ui/common/Common.styles';

export const MainLayout = styled(FlexJCBetween)`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    left: 0;

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        justify-content: center;
    }
`;

export const FirstImage = styled(FlexRow)`
    flex-direction: column;
    background-image: url('/static/icons/patterns/emb-fire.svg');
    background-size: auto;
    max-width: 200px;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        position: fixed;
        left: -130px;
        right: initial;
    }
`;

export const SecondImage = styled(FirstImage)`
    background-image: url('/static/icons/patterns/embroidery.svg');

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        background-image: url('/static/icons/patterns/emb-fire.svg');
        position: fixed;
        right: -130px;
        left: initial;
    }
`;

export const MainColumn = styled(FlexColCenter)`
    justify-content: space-between;
    height: 70%;
    padding: 120px 0 40px;
    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        padding: 96px 0 20px;
    }
`;

export const StyledTitle = styled(Typography)`
    text-transform: uppercase;
    margin: 0 auto;
    text-align: center;
    max-width: 606px;
    z-index: 2;
    white-space: pre-wrap;

    ${({ theme }) => theme.breakpoints.down('tabletSmall')} {
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
