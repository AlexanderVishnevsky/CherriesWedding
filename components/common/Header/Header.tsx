import { ReactElement } from 'react';

import * as S from './Header.styles';
import { DynamicMenuMobile } from './components/MenuMobile';

const Header = (): ReactElement => (
    <S.Layout>
        <DynamicMenuMobile />
    </S.Layout>
);

export default Header;
