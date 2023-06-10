import dynamic from 'next/dynamic';

export const DynamicFooter = dynamic(() => import('./Footer').then((mod) => mod.default));
