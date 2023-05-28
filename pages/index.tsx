import * as process from 'process';

import { NextPage } from 'next';

import { DynamicPreview } from '@ui/preview';
import { DynamicMain } from '@ui/pages/Main';

const MainPage: NextPage = () =>
    process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? <DynamicMain /> : <DynamicPreview />;

export default MainPage;
