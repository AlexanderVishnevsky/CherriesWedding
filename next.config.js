/**
 * @type {import('next').NextConfig}
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
const nextTranslate = require('next-translate-plugin');
const runtimeCaching = require('next-pwa/cache');
const isDev = process.env.NODE_ENV !== 'production';
const withPWA = require('next-pwa')({
    disable: isDev,
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/manifest.json$/],
    maximumFileSizeToCacheInBytes: 5000000,
});

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ['by', 'ru'],
        defaultLocale: 'by',
        localeDetection: false,
    },
};

if (process.env.NODE_ENV !== 'development') {
    nextConfig.compiler = {
        removeConsole: {
            exclude: ['error'],
        },
    };
    nextConfig.eslint = {
        ignoreDuringBuilds: false,
    };
}

const plugins = () => {
    const plugins = [withPWA, withBundleAnalyzer];
    return plugins.reduce((acc, next) => next(acc), {
        webpack(config) {
            config.module.rules.push({
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            prettier: true,
                            svgo: true,
                            icon: true,
                        },
                    },
                ],
            });
            return config;
        },
        ...nextConfig,
    });
};

module.exports = nextTranslate(plugins());
