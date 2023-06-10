import dynamic from 'next/dynamic';

export const DynamicMenuMobile = dynamic(() => import('./MenuMobile').then((mod) => mod.default));
