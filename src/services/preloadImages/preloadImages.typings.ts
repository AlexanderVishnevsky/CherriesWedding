import { NUL } from '@typings/common';

declare global {
    interface Window {
        preloadImages: Array<HTMLImageElement>;
    }
}

export interface ImageObjectType {
    path: string;
    index: number;
    status: 'IDLE' | 'IN_PROGRESS' | 'SUCCESS';
    result: NUL<HTMLImageElement>;
}

export type imgFormats = 'png' | 'webp';
