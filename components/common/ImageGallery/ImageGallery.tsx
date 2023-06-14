import { ReactElement } from 'react';

import { Typography } from '@mui/material';

import { Translate } from 'next-translate';

import { GalleryDataType } from '../../pages/Agenda/Agenda.typings';

import * as S from './ImageGallery.styles';

interface IProps {
    cardsData: Array<GalleryDataType>;
    pickCard: (galleryKey: number, cardID: number) => void;
    galleryKey: number;
    activeId: number;
    t: Translate;
}

const ImageGallery = ({ cardsData, pickCard, galleryKey, activeId, t }: IProps): ReactElement => (
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

export default ImageGallery;
