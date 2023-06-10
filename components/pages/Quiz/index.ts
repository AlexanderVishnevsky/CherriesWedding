import dynamic from 'next/dynamic';

export const DynamicQuiz = dynamic(() => import('./Quiz').then((mod) => mod.default));
