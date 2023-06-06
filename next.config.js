/**
 * @type {import('next').NextConfig}
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
const nextTranslate = require('next-translate-plugin');
const workaround = require('next-translate-plugin/lib/cjs/utils.js');

/**
 * As a workaround you can change the string of the defaultLoader, this is working fine
 * @see https://github.com/aralroca/next-translate/issues/851#issuecomment-1445018647
 */
workaround.defaultLoader =
    '(l, n) => import(`@next-translate-root/public/locales/${l}/${n}.json`).then(m => m.default)';

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    locales: false,
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
    const plugins = [withBundleAnalyzer];
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
