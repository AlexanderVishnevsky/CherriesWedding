import { ReactElement } from 'react';

import { GalleryTypings } from '../Gallery.typings';

import * as S from './ImageGalleryMobile.styles';

const ImageGalleryMobile = ({ cardsData, pickCard, galleryKey, activeId, t }: GalleryTypings): ReactElement => {
    return <S.ImageGalleryMobileLayout></S.ImageGalleryMobileLayout>;
};
export default ImageGalleryMobile;
