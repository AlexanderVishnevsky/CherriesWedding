import { NextPage } from 'next';

import { DynamicPreview } from '@ui/preview';
import { DynamicMain } from '@ui/pages/Main';

const MainPage: NextPage = () => (true ? <DynamicMain /> : <DynamicPreview />);

export default MainPage;
