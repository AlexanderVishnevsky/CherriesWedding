module.exports = {
    locales: ['by', 'ru'],
    defaultLocale: 'by',
    pages: {
        '*': ['common'],
        '/place': ['common', 'place'],
        '/agenda': ['common', 'agenda'],
        '/quiz': ['common', 'quiz'],
        '/faq': ['common', 'faq'],
    },
    // ...rest of config
    loadLocaleFrom: (lang, ns) =>
        // You can use a dynamic import, fetch, whatever. You should
        // return a Promise with the JSON file.
        import(`/public/locales/${lang}/${ns}.json`).then((m) => m.default),
};
