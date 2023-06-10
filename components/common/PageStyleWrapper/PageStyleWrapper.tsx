import { ReactElement } from 'react';

import { useScrollToTop } from '@hooks';

import Header from '@ui/common/Header';
import { DynamicFooter } from '@ui/common/Footer';

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

    return (
        <S.BasicLayoutComponent>
            <S.ContentContainer maxWidth={widthType}>
                <Header />
                {children}
                <DynamicFooter />
            </S.ContentContainer>
        </S.BasicLayoutComponent>
    );
};

export default PageStyleWrapper;
