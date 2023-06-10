import dynamic from 'next/dynamic';

export const DynamicFAQ = dynamic(() => import('./FAQ').then((mod) => mod.default));
