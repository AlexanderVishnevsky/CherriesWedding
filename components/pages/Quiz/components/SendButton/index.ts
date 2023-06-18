import dynamic from 'next/dynamic';

export const DynamicSendButton = dynamic(() => import('./SendButton').then((mod) => mod.default));
