import { ReactElement } from 'react';

import { useMedia, useScrollToTop } from '@hooks';

import Footer from '@ui/common/Footer';

import { JSXChild } from '@/typings/common';
import { BreakpointTypes } from '@/utils/MUI/breakpointOverrides';

import * as S from './PageStyleWrapper.styles';

type IProps = { widthType?: BreakpointTypes } & JSXChild;

/**
 * Style Wrapper for pages
 * @param widthType
 * @param children
 * @constructor
 */
const PageStyleWrapper = ({ widthType = 'laptop', children }: IProps): ReactElement => {
    useScrollToTop();
    const { isDesktop } = useMedia();

    return (
        <S.BasicLayoutComponent>
            <S.ContentContainer maxWidth={widthType}>
                {children}
                {isDesktop && <Footer />}
            </S.ContentContainer>
        </S.BasicLayoutComponent>
    );
};

export default PageStyleWrapper;
