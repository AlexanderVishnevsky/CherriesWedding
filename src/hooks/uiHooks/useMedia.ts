import { Theme, useMediaQuery } from '@mui/material';

export const useMedia = () => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('tabletLarge'));
    return { isMobile, isDesktop: !isMobile };
};
