import { NUL } from '@typings/common';

import { isBrowser } from '@/utils/browserUtils';

import { imgFormats } from './preloadImages.typings';

/**
 * Detect is WebP supported
 */
export const isWebPSupported = (): { isWebP: boolean; format: imgFormats } => {
    try {
        if (isBrowser) {
            const elem = document.createElement('canvas');

            const isWebP = !!(elem.getContext && elem.getContext('2d'))
                ? elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
                : false;

            const format: imgFormats = isWebP ? 'webp' : 'png';

            return { isWebP, format };
        }
    } catch (e: any) {
        console.warn('[Detect webp is failed]: ', e?.message ?? e);
    }
    return { isWebP: false, format: 'png' };
};

export const fetchImage = (src: string): Promise<NUL<HTMLImageElement>> => {
    const image = new Image();
    image.src = src;

    return new Promise((resolve) => {
        image.onload = function () {
            resolve(image);
        };

        image.onerror = function () {
            resolve(null);
        };
    });
};
