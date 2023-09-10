'use client';

import { usePathname } from 'next/navigation';

import { useEffect } from 'react';

import { isBrowser } from '@/utils/browserUtils';
import { moveBack, moveNext, RoutePaths } from '@/routing/routing';

import { isWebPSupported } from './preloadImages.helpers';
import { getImages } from './preloadImages.functions';
import { imagesByRoute } from './preloadImages.data';

const usePreloadImages = (bandWidth: number = 2): void => {
    if (isBrowser && !window.preloadImages) {
        window.preloadImages = [];
    }
    const pathname = usePathname();

    useEffect(() => {
        setTimeout(() => {
            const { format } = isWebPSupported();
            const nextPath =
                moveNext(pathname) !== ''
                    ? moveNext(pathname)
                    : moveBack(pathname) !== ''
                    ? moveBack(pathname)
                    : RoutePaths.PLACE;
            getImages(imagesByRoute(format)[nextPath], bandWidth).catch(console.error);
        }, 1000);
    }, [pathname]);
};

export default usePreloadImages;
