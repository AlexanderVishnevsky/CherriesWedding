import { ButtonBase, styled } from '@mui/material';

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
    max-width: ${({ theme }) => `${theme.breakpoints.values['desktop']}px`};
    position: relative;
    text-align: center;
    ${({ theme }) => theme.breakpoints.down('tabletSmall')} {
        margin-top: 32px;
    }
`;

export const Map = styled('div')`
    position: absolute;
    background-image: url('/static/icons/place/map.svg');
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: right 20px;
    height: 100%;
    width: 100%;
    margin: 0;
    right: -28%;
    bottom: 0;

    ${({ theme }) => theme.breakpoints.down('tabletSmall')} {
        position: relative;
        height: 100vw;
        width: 140vw;
        right: 0;
        margin-left: 0;
        background-size: calc(100% + 40px);
        background-position: 20vw top;
        margin-bottom: -20vw;
        margin-top: 25px;
    }
`;

export const MapTextContainer = styled('div')`
    width: 500px;
    margin: 0 auto;

    #t1 {
        margin-top: 56px;
        text-align: center;
    }
    #t2 {
        text-align: center;
    }
    #t3 {
        text-align: center;
        margin: 76px 0 47px;
    }

    ${({ theme }) => theme.breakpoints.down('tabletSmall')} {
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
    margin: 124px auto 40px;
    border-radius: 44px;

    #bg-video {
        width: 100%;
        max-height: 620px;
        border-radius: 44px;
    }

    ${({ theme }) => theme.breakpoints.down('tabletSmall')} {
        margin: 54px auto 0;
        #bg-video {
            width: 100vw;
            margin-left: -20px;
            border-radius: 0;
        }
    }
`;

export const Location = styled(ButtonBase)`
    margin-bottom: 124px;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    column-gap: 5px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.04em;
    text-decoration-line: underline;
    text-transform: uppercase;
    font-family: Helvetica, -apple-system, sans-serif;
    z-index: 2;
    svg {
        width: 19px;
        height: 22px;
    }
    :hover {
        text-decoration-line: underline;
    }
`;
