import { useEffect } from 'react';

import { isBrowser } from '@/utils/browserUtils';

import { isWebPSupported } from './preloadImages.helpers';
import { getImages } from './preloadImages.functions';
import { imgBundle } from './preloadImages.data';

const usePreloadImages = (bandWidth: number = 2): void => {
    if (isBrowser && !window.preloadImages) {
        window.preloadImages = [];
    }
    useEffect(() => {
        setTimeout(() => {
            const { format } = isWebPSupported();
            getImages(imgBundle('/static/images', format), bandWidth).catch(console.error);
        }, 1000);
    }, []);
};

export default usePreloadImages;
