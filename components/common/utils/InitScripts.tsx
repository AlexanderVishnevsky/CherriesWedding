import Head from 'next/head';

import { ReactElement } from 'react';

import { DARK_COLORS } from '@theme';

const path = 'static/icons/favicons';

const InitScripts = (): ReactElement => (
    <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no, email=no, address=no" />
        <meta name="HandheldFriendly" content="true" />
        {/*Chrome, Firefox OS, Opera, PWA*/}
        <meta name="theme-color" content={DARK_COLORS.backgroundDarkDefault} />
        {/*Windows Phone*/}
        <meta name="msapplication-navbutton-color" content={DARK_COLORS.backgroundDarkDefault} />
        {/*iOS Safari*/}
        <meta name="apple-mobile-web-app-status-bar-style" content={DARK_COLORS.backgroundDarkDefault} />
        <meta content={`ya-title=${DARK_COLORS.backgroundDarkDefault},ya-dock=fade`} />
        <meta name="msapplication-navbutton-color" content={DARK_COLORS.backgroundDarkDefault} />

        <meta name="msapplication-TileImage" content={path + '/mstile-144x144.png'} />
        <meta name="msapplication-square70x70logo" content={path + '/mstile-70x70.png'} />
        <meta name="msapplication-square150x150logo" content={path + '/mstile-150x150.png'} />
        <meta name="msapplication-square150x150logo" content={path + '/mstile-150x150.png'} />
        <meta name="msapplication-square310x310logo" content={path + '/mstile-310x310.png'} />
        <meta name="msapplication-TileImage" content={path + '/mstile-144x144.png'} />
        <link rel="apple-touch-icon" sizes="57x57" href={path + '/apple-touch-icon-57x57.png'} />
        <link rel="apple-touch-icon" sizes="114x114" href={path + '/apple-touch-icon-114x114.png'} />
        <link rel="apple-touch-icon" sizes="72x72" href={path + '/apple-touch-icon-72x72.png'} />
        <link rel="apple-touch-icon" sizes="144x144" href={path + '/mstile-144x144.png'} />
        <link rel="apple-touch-icon" sizes="60x60" href={path + '/apple-touch-icon-60x60.png'} />
        <link rel="apple-touch-icon" sizes="120x120" href={path + '/apple-touch-icon-120x120.png'} />
        <link rel="apple-touch-icon" sizes="76x76" href={path + '/apple-touch-icon-76x76.png'} />
        <link rel="apple-touch-icon" sizes="152x152" href={path + '/apple-touch-icon-152x152.png'} />
        <link rel="icon" type="image/png" href={path + '/favicon-196x196.png'} sizes="196x196" />
        <link rel="icon" type="image/png" href={path + '/favicon-96x96.png'} sizes="96x96" />
        <link rel="icon" type="image/png" href={path + '/favicon-32x32.png'} sizes="32x32" />
        <link rel="icon" type="image/png" href={path + '/favicon-16x16.png'} sizes="16x16" />
        <link rel="icon" type="image/png" href={path + '/favicon-128x128.png'} sizes="128x128" />
        <link rel="shortcut icon" type="image/x-icon" href={'favicon.ico'} />
        <link rel={'robots'} href={'/robots.txt'} />
        <link rel="manifest" href="/manifest.json" />
    </Head>
);

export default InitScripts;
