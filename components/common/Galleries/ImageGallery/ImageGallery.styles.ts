import { css, styled } from '@mui/material';

import { ConnieFont } from '@/config/localFonts';

export const ImageGalleryLayout = styled('div')`
    display: flex;
    width: 100%;
    //left: calc((100vw - 1216px) / 2);

    .panel {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 60vh;
        min-width: 200px;
        width: 100%;
        border: 2px solid #bdc4c6;
        border-radius: 44px;
        color: #fff;
        cursor: pointer;
        flex: 0.5;
        margin-right: 20px;
        position: relative;
        transition: all 0.7s ease-in;
    }
    .t-h {
        opacity: 0;
        border-radius: 44px;
        height: 60vh;
        min-width: 200px;
        width: 100%;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.56) 0%, rgba(0, 0, 0, 0.56) 29.25%, rgba(0, 0, 0, 0) 50%)
            top;
    }

    .panel h6 {
        font-family: ${ConnieFont.style.fontFamily};
        position: absolute;
        top: 52px;
        left: 52px;
        margin: 0;
        opacity: 0;
        width: calc(100% - 104px);
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 28px;
        letter-spacing: 0.06em;
        color: #ffffff;
        z-index: 3;
        text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);

        span {
            font-family: ${ConnieFont.style.fontFamily};
            position: relative;
            font-style: normal;
            top: 21px;
            left: 0;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.06em;
            text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
        }
    }

    .panel.active {
        flex: 5;
        background-position: center 80%;
        .t-h {
            opacity: 1;
            transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
        }
    }

    .panel.active {
        //background-size: contain;
    }

    .panel.active h6 {
        opacity: 1;
        transition: opacity 0.3s ease-in 0.7s;
    }

    @media (max-width: 400px) {
        width: 100vw;

        .panel:nth-of-type(4),
        .panel:nth-of-type(5) {
            display: none;
        }
    }
`;

export const Card = styled('div')<{ url: string }>`
    position: relative;
    ${({ url }) =>
        url &&
        css`
            background-image: url(${url}.png);
            background-image: -webkit-image-set(url(${url}.webp) 1x);
        `}
`;
