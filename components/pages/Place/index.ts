import dynamic from 'next/dynamic';

export const DynamicPlace = dynamic(() => import('./Place').then((mod) => mod.default));
