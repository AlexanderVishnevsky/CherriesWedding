import { Theme, useMediaQuery } from '@mui/material';

import { BreakpointTypes } from '@/utils/MUI/breakpointOverrides';

export const useMedia = (breakpoint: BreakpointTypes = 'tabletLarge') => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down(breakpoint));
    return { isMobile, isDesktop: !isMobile };
};
