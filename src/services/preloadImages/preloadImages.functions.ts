import { NUL } from '@typings/common';

import { ImageObjectType } from './preloadImages.typings';
import { fetchImage } from './preloadImages.helpers';

export const getImages = async (paths: Array<string>, bandWidth: number) => {
    const images: Array<ImageObjectType> = paths.map((path, index) => ({
        path,
        index,
        status: 'IDLE',
        result: null,
    }));

    const getNextImage = (): NUL<ImageObjectType> => images.find((image) => image.status === 'IDLE') ?? null;

    const preFetch = (imageObject: ImageObjectType): Promise<unknown> => {
        imageObject.status = 'IN_PROGRESS';

        return fetchImage(imageObject.path).then((image) => {
            imageObject.result = image;
            imageObject.status = 'SUCCESS';

            if (imageObject.result) {
                window.preloadImages.push(imageObject.result);
            }

            const nextImage = getNextImage();

            if (nextImage) {
                return preFetch(nextImage);
            }
        });
    };

    return Promise.all(images.slice(0, bandWidth).map(preFetch));
};
