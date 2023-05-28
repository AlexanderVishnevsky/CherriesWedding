import { ReactElement } from 'react';

import { useScrollToTop } from '@hooks';

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
            <S.ContentContainer maxWidth={widthType}>{children}</S.ContentContainer>
        </S.BasicLayoutComponent>
    );
};

export default PageStyleWrapper;
