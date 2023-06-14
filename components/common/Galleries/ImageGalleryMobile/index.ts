import dynamic from 'next/dynamic';

export const DynamicImageGalleryMobile = dynamic(() => import('./ImageGalleryMobile').then((mod) => mod.default), {
    ssr: false,
});
