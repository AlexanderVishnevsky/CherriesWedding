import localFont from 'next/font/local';
import { Cormorant_Infant } from 'next/font/google';

export const CormorantInfantFont = Cormorant_Infant({
    display: 'swap',
    weight: ['400', '600'],
    variable: '--CormorantInfantFont',
    fallback: ['system-ui', 'sans-serif'],
    subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
});

export const ConnieFont = localFont({
    src: [
        //-------- woff2 --------
        {
            path: '../../public/static/fonts/Connie/Connie-400.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--Connie',
    fallback: ['system-ui', 'sans-serif'],
});
