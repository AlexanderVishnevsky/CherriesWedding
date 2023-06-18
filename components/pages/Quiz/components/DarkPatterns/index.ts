import dynamic from 'next/dynamic';

export const DynamicDarkPatterns = dynamic(() => import('./DarkPatterns').then((mod) => mod.default));
