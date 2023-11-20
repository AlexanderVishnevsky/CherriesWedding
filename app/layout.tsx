import 'public/assets/css/index.css';
import { Metadata } from 'next';

import { PropsWithChildren, ReactElement } from 'react';

import PageStyleWrapper from '@ui/common/PageStyleWrapper';
import ThemeRegistry from '@ui/common/utils/ThemeRegistry';
import InitScripts from '@ui/common/utils/InitScripts';

import { ConnieFont, CormorantInfantFont } from '@/config/localFonts';
import { DEFAULT_SEO } from '@/constants/appConstants';

export const metadata: Metadata = DEFAULT_SEO;

const WeddingApp = ({ children }: PropsWithChildren): ReactElement => (
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
