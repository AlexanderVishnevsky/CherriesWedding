import dynamic from 'next/dynamic';

export const DynamicVideo = dynamic(() => import('./Video').then((mod) => mod.default));
