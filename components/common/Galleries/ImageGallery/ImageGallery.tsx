import { memo, ReactElement } from 'react';

import { Typography } from '@mui/material';

import { GalleryTypings } from '../Gallery.typings';

import * as S from './ImageGallery.styles';

const ImageGallery = ({ cardsData, pickCard, galleryKey, activeId, t }: GalleryTypings): ReactElement => (
    <S.ImageGalleryLayout>
        {cardsData.map((card) => (
            <S.Card
                key={card.id + '_' + galleryKey}
                className={`panel ${activeId === card.id ? 'active' : ''}`}
                onClick={() => pickCard(galleryKey, card.id)}
                url={card.url}
            >
                <Typography variant={'subtitle2'}>
                    {t(card.title)}
                    <br />
                    <span>{t(card.text)}</span>
                </Typography>
                <div className={'t-h'} />
            </S.Card>
        ))}
    </S.ImageGalleryLayout>
);

export default memo(ImageGallery);
