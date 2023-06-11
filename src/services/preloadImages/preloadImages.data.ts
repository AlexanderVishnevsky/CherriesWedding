import { imgFormats } from './preloadImages.typings';

/**
 * Image bundle
 * @param path
 * @param format
 */
export const imgBundle = (format: imgFormats): string[] => [
    `/static/images/place/Poster.png`,
    `/static/icons/place/map.svg`,
    `/static/icons/common/arrows/back-icon.svg`,
];
