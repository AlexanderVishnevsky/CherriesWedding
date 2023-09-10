'use client';

import { breakpoints } from '@/utils/MUI/themeOverrides';
import { BreakpointTypes } from '@/utils/MUI/breakpointOverrides';

import { createPictureComponent } from './Picture.components';
import { createMediaQuery } from './Picture.helpers';
import { PictureMediaQueryItemType } from './Picture.typings';

const MEDIA_QUERY_LIST: Array<PictureMediaQueryItemType<BreakpointTypes>> = [
    { name: 'desktop', value: createMediaQuery({ min: breakpoints.desktop }) },
    { name: 'laptop', value: createMediaQuery({ min: breakpoints.laptop }) },
    {
        name: 'tabletLarge',
        value: createMediaQuery({ min: breakpoints.tabletLarge }),
    },
    {
        name: 'tabletSmall',
        value: createMediaQuery({ min: breakpoints.tabletSmall }),
    },
    { name: 'mobileLarge', value: createMediaQuery({ min: 480 }) },
    {
        name: 'mobileSmall',
        value: createMediaQuery({ min: breakpoints.mobileSmall }),
    },
];

const Picture = createPictureComponent({
    mediaQueryList: MEDIA_QUERY_LIST,
});

export default Picture;
