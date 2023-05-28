import localFont from 'next/font/local';

export const CormorantInfantFont = localFont({
    src: [
        //-------- woff2 --------
        {
            path: '../../public/static/fonts/CormorantInfant/CormorantInfant-400.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/static/fonts/CormorantInfant/CormorantInfant-600.woff2',
            weight: '600',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--CormorantInfantFont',
    fallback: ['system-ui', 'sans-serif'],
});
