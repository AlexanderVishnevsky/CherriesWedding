import { ReactElement } from 'react';

import { Typography } from '@mui/material';

import { GalleryTypings } from '../Gallery.typings';

import * as S from './ImageGalleryMobile.styles';

const ImageGalleryMobile = ({ cardsData, galleryKey, t }: GalleryTypings): ReactElement => (
    <S.ImageGalleryMobileLayout>
        {cardsData.map((card) => (
            <S.MobileCardWrapper key={card.id + '_' + galleryKey}>
                <S.MobileCard url={card.url} />
                <Typography variant={'h5'}>{t(card.title)}</Typography>
                <S.MobileCardSubTitle variant={'subtitle2'}>{t(card.text)}</S.MobileCardSubTitle>
            </S.MobileCardWrapper>
        ))}
    </S.ImageGalleryMobileLayout>
);

export default ImageGalleryMobile;
