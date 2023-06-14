import { ReactElement, useState } from 'react';

import { Typography } from '@mui/material';

import { useMedia } from '@hooks';

import { DynamicImageGallery, DynamicImageGalleryMobile } from '@ui/common/Galleries';

import useTranslation from 'next-translate/useTranslation';

import { AgendaData } from './Agenda.data';
import * as S from './Agenda.styles';

const Agenda = (): ReactElement => {
    const { t } = useTranslation('agenda');
    const { isMobile } = useMedia();

    const [activeId, setActiveId] = useState<number[]>([0, 4, 9]);

    const pickCard = (galleryKey: number, cardID: number) => {
        setActiveId((prevState) => ({ ...prevState, [galleryKey]: cardID }));
    };

    const Gallery = isMobile ? DynamicImageGalleryMobile : DynamicImageGallery;

    return (
        <S.Layout>
            <S.AgendaTitle variant={'h1'}>{t('common:menu.2')}</S.AgendaTitle>
            <S.FirstImage />
            <S.Header>
                <Typography variant={'h4'}>{t('header.title')}</Typography>
                <Typography variant={'subtitle2'}>{t('header.subTitle')}</Typography>
            </S.Header>
            <S.FirstImage />
            {AgendaData.map((agenda, idx) => (
                <S.DayLayout key={idx}>
                    <S.Dates>
                        <Typography variant={'h3'}>{t('common.day', { count: agenda.day })}</Typography>
                        <Typography variant={'h5'}>{t(`common.weekend.${idx}`, { date: agenda.date })}</Typography>
                    </S.Dates>
                    <Gallery
                        cardsData={agenda.cards}
                        pickCard={pickCard}
                        galleryKey={idx}
                        activeId={activeId[idx]}
                        t={t}
                    />
                </S.DayLayout>
            ))}
        </S.Layout>
    );
};

export default Agenda;
