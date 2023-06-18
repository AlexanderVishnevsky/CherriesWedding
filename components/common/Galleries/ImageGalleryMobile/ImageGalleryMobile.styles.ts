import { css, styled, Typography } from '@mui/material';

export const ImageGalleryMobileLayout = styled('div')`
    display: flex;
    width: 100vw;
    margin-left: -20px;
    padding: 24px 0 40px;
    overflow-x: scroll;
    column-gap: 20px;
    scroll-snap-type: x mandatory;
`;

export const MobileCardWrapper = styled('div')`
    width: 320px;
    position: relative;
    text-align: center;
    scroll-snap-align: center;

    h5 {
        margin: 20px 0 12px;
    }
`;

export const MobileCard = styled('div')<{ url: string }>`
    position: relative;
    width: 320px;
    height: 342px;
    border: ${({ theme }) => (theme.palette.mode === 'light' ? '2px solid #000000' : '2px solid #bdc4c6')};
    border-radius: 28px;

    ${({ url }) =>
        url &&
        css`
            background-size: cover;
            background-image: url(${url}.png);
            background-image: -webkit-image-set(url(${url}.webp) 1x);
        `}
`;

export const MobileCardSubTitle = styled(Typography)`
    font-size: 18px;
    line-height: 22px;
`;
