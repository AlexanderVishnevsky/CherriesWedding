import dynamic from 'next/dynamic';

export const DynamicAgenda = dynamic(() => import('./Agenda').then((mod) => mod.default));
