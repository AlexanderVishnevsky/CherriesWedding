import 'public/assets/css/index.css';
import { Metadata } from 'next';

import { ReactElement } from 'react';

import { JSXChild } from '@typings/common';

import PageStyleWrapper from '@ui/common/PageStyleWrapper';
import ThemeRegistry from '@ui/common/utils/ThemeRegistry';
import InitScripts from '@ui/common/utils/InitScripts';

import { ConnieFont, CormorantInfantFont } from '@/config/localFonts';
import { APP_NAME_CAMEL, APP_SEO_DESCRIPTION } from '@/constants/appConstants';

export const metadata: Metadata = {
    title: APP_NAME_CAMEL,
    description: APP_SEO_DESCRIPTION,
};

const WeddingApp = ({ children }: JSXChild): ReactElement => (
    <html
        lang={'be'}
        dir={'ltr'}
        className={CormorantInfantFont.className + ConnieFont.className}
        style={{ backgroundColor: '#282828' }}
    >
        <InitScripts />
        <body>
            <ThemeRegistry>
                <PageStyleWrapper>{children}</PageStyleWrapper>
            </ThemeRegistry>
        </body>
    </html>
);

export default WeddingApp;
