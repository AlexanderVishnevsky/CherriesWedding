import dynamic from 'next/dynamic';

export const DynamicQuizSelect = dynamic(() => import('./QuizSelect').then((mod) => mod.default));
