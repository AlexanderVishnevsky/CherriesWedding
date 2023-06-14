import { useRouter } from 'next/router';

import { useEffect } from 'react';

import { isBrowser } from '@/utils/browserUtils';
import { RouteChain, RoutePaths } from '@/routing/routing';

import { isWebPSupported } from './preloadImages.helpers';
import { getImages } from './preloadImages.functions';
import { imagesByRoute } from './preloadImages.data';

const usePreloadImages = (bandWidth: number = 2): void => {
    if (isBrowser && !window.preloadImages) {
        window.preloadImages = [];
    }
    const { pathname } = useRouter();

    useEffect(() => {
        setTimeout(() => {
            const { format } = isWebPSupported();
            const nextPath =
                RouteChain[pathname as RoutePaths].next ?? RouteChain[pathname as RoutePaths].prev ?? RoutePaths.PLACE;
            getImages(imagesByRoute(format)[nextPath], bandWidth).catch(console.error);
        }, 1000);
    }, [pathname]);
};

export default usePreloadImages;
