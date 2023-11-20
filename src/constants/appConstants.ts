import { ViewportLayout } from 'next/dist/lib/metadata/types/extra-types';

import { Metadata } from 'next';

export const APP_NAME_CAMEL = 'Вiшнёвае вяселле';
export const APP_SEO_DESCRIPTION = 'Святкаванне вяселля разам';

export const DEFAULT_SEO: Metadata = {
    title: APP_NAME_CAMEL,
    description: APP_SEO_DESCRIPTION,
    applicationName: APP_NAME_CAMEL,
    authors: [
        { url: '', name: 'Alex' },
        { url: '', name: 'Julia' },
    ],
    keywords: 'Wedding,Landing,Traditions,Nomad,Nomad Houses,Braslav,Belarus,Folk',
};
