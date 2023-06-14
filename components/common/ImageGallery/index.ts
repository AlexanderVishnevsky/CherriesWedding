import dynamic from 'next/dynamic';

export const DynamicImageGallery = dynamic(() => import('./ImageGallery').then((mod) => mod.default));
