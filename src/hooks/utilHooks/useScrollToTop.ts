import { useIsomorphicLayoutEffect } from '@hooks';

import { handleScrollTop } from '@/utils/browserUtils';

export const useScrollToTop = (): void => {
    useIsomorphicLayoutEffect(() => {
        handleScrollTop();
    }, []);
};
