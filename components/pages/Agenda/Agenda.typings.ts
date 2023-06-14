export interface GalleryDataType {
    id: number;
    url: string;
    title: string;
    text: string;
}

export interface AgendaType {
    day: string;
    date: string;
    cards: GalleryDataType[];
}
