import { AppProps } from 'next/app';

import { EmotionCache } from '@emotion/react/dist/emotion-react.cjs';

export interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}
