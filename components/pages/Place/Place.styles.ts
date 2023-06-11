import { ButtonBase, css, styled } from '@mui/material';

import { FlexCol, FlexColCenter, FlexJCBetween } from '@ui/common/Common.styles';

export const PlaceLayout = styled(FlexColCenter)`
    width: 100%;

    padding: 56px 0 56px;

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        padding: 86px 0 120px;
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
        height: 70vw;
        width: 140vw;
        right: 0;
        margin-left: 0;
        background-size: calc(100% + 40px);
        background-position: 20vw top;
        margin-bottom: 0;
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

export const Links = styled(FlexJCBetween)`
    width: 100%;
    max-width: 1100px;
    align-items: flex-end;
    margin-bottom: 88px;
    z-index: 2;

    ${({ theme }) => theme.breakpoints.down('tabletSmall')} {
        flex-direction: column;
        align-items: center;
        row-gap: 14px;
        margin-top: 54px;
        margin-bottom: 48px;
    }
`;

export const Location = styled(ButtonBase)`
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
    margin-bottom: 6px;
    font-family: Helvetica, -apple-system, sans-serif;

    svg {
        width: 19px;
        height: 22px;
    }
    :hover {
        text-decoration-line: underline;
    }
    ${({ theme }) =>
        theme.palette.mode === 'light' &&
        css`
            svg {
                path {
                    fill: ${theme.palette.text.primary};
                }
            }
        `}

    ${({ theme }) => theme.breakpoints.down('tabletSmall')} {
        order: 2;
    }
`;

export const LinkData = styled(FlexCol)`
    text-align: right;
    margin-bottom: 6px;

    ${({ theme }) => theme.breakpoints.down('tabletSmall')} {
        flex-direction: row;
        margin-top: 42px;
        order: 3;
    }
`;
