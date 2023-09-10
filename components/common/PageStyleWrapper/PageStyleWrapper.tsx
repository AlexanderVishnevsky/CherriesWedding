'use client';

import { usePathname } from 'next/navigation';

import { ReactElement } from 'react';

import { useScrollToTop } from '@hooks';

import Header from '@ui/common/Header';
import { DynamicFooter } from '@ui/common/Footer';

import { JSXChild } from '@/typings/common';
import { BreakpointTypes } from '@/utils/MUI/breakpointOverrides';
import { RoutePaths } from '@/routing/routing';

import * as S from './PageStyleWrapper.styles';

type IProps = { widthType?: BreakpointTypes } & JSXChild;

/**
 * Style Wrapper for pages
 * @param widthType
 * @param children
 * @constructor
 */
const PageStyleWrapper = ({ widthType = 'desktop', children }: IProps): ReactElement => {
    const pathname = usePathname();
    useScrollToTop(pathname);

    return (
        <S.BasicLayoutComponent>
            <S.ContentContainer
                maxWidth={pathname === RoutePaths.PLACE || pathname === RoutePaths.QUIZ ? undefined : widthType}
            >
                <Header />
                {children}
                <DynamicFooter />
            </S.ContentContainer>
        </S.BasicLayoutComponent>
    );
};

export default PageStyleWrapper;
