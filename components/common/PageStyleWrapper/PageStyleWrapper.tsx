import { FC } from 'react';

import { useScrollToTop } from '@hooks';

import { JSXChild } from '@/typings/common';

import * as S from './PageStyleWrapper.styles';

type IProps = JSXChild;

/**
 * Style Wrapper for pages
 * @param children
 * @constructor
 */
const PageStyleWrapper: FC<IProps> = ({ children }) => {
    useScrollToTop();

    return (
        <S.BasicLayoutComponent>
            <S.ContentContainer maxWidth="laptop">{children}</S.ContentContainer>
        </S.BasicLayoutComponent>
    );
};

export default PageStyleWrapper;
