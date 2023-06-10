import { imgFormats } from './preloadImages.typings';

/**
 * Image bundle
 * @param path
 * @param format
 */
export const imgBundle = (path: string, format: imgFormats): string[] => [`${path}/place/Poster.png`];
