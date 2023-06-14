import { useIsomorphicLayoutEffect } from '@hooks';

import { handleScrollTop } from '@/utils/browserUtils';

export const useScrollToTop = (pathname: string): void => {
    useIsomorphicLayoutEffect(() => {
        handleScrollTop();
    }, [pathname]);
};
