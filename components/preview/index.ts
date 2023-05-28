import dynamic from 'next/dynamic';

export const DynamicPreview = dynamic(() => import('./Preview').then((mod) => mod.default));
