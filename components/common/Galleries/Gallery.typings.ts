import { GalleryDataType } from '@ui/pages/Agenda/Agenda.typings';
import { Translate } from 'next-translate';

export interface GalleryTypings {
    cardsData: Array<GalleryDataType>;
    pickCard: (galleryKey: number, cardID: number) => void;
    galleryKey: number;
    activeId: number;
    t: Translate;
}
