import { ReactElement, useState } from 'react';

import { Typography } from '@mui/material';

import { DynamicImageGallery } from '@ui/common/ImageGallery';

import useTranslation from 'next-translate/useTranslation';

import { AgendaData } from './Agenda.data';
import * as S from './Agenda.styles';

const Agenda = (): ReactElement => {
    const { t } = useTranslation('agenda');

    const [activeId, setActiveId] = useState<number[]>([0, 4, 9]);

    const pickCard = (galleryKey: number, cardID: number) => {
        setActiveId((prevState) => ({ ...prevState, [galleryKey]: cardID }));
    };

    return (
        <S.Layout>
            {AgendaData.map((agenda, idx) => (
                <S.DayLayout key={idx}>
                    <S.Dates>
                        <Typography variant={'h3'}>{t('common.day', { count: agenda.day })}</Typography>
                        <Typography variant={'h5'}>{t(`common.weekend.${idx}`, { date: agenda.date })}</Typography>
                    </S.Dates>
                    <DynamicImageGallery
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
