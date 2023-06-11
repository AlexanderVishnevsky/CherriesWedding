import { styled } from '@mui/material';

import { FlexColCenter } from '@ui/common/Common.styles';

export const PlaceLayout = styled(FlexColCenter)`
    width: 100%;

    padding: 56px 0 56px;

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        padding: 64px 0 120px;
    }
`;

export const PlaceMap = styled('div')`
    height: fit-content;
    width: 100%;
    position: relative;
    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        margin-top: 32px;
        text-align: center;
    }
`;

export const Map = styled('div')`
    position: absolute;
    background-image: url('/static/icons/place/map.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right bottom;
    height: 100%;
    width: 100%;
    margin: 0;
    right: 0;
    bottom: 0;

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        position: relative;
        height: calc(100vw);
        background-position: center bottom;
        margin-bottom: -25vw;
        margin-top: 5px;
    }
`;

export const MapTextContainer = styled('div')`
    width: 382px;
    #t1 {
        margin-top: 56px;
        text-align: right;
    }
    #t2 {
        text-align: right;
    }
    #t3 {
        text-align: left;
        margin: 76px 0 47px;
    }

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        width: 320px;
        margin: 0 auto;

        #t1 {
            margin-top: 0;
            text-align: center;
        }
        #t2 {
            text-align: center;
            margin-top: 35px;
        }
        #t3 {
            text-align: center;
            margin: 44px 0 32px;
        }
    }
`;

export const VideoContainer = styled('div')`
    position: relative;
    margin: 124px auto;
    border-radius: 44px;

    #bg-video {
        width: 100%;
        max-height: 620px;
        border-radius: 44px;
    }
`;
