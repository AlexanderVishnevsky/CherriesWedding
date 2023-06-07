import { useIsomorphicLayoutEffect } from '@hooks';

export const useFixedVhProperty = ({ shouldListenResize } = { shouldListenResize: true }): void => {
    useIsomorphicLayoutEffect(() => {
        const updateVhProperty = () => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    const vh = window.innerHeight * 0.01;
                    document.documentElement.style.setProperty('--vh', `${vh}px`);
                });
            });
        };

        updateVhProperty();

        window.addEventListener('orientationchange', updateVhProperty);

        if (shouldListenResize) {
            window.addEventListener('resize', updateVhProperty);
        }

        return () => {
            window.removeEventListener('orientationchange', updateVhProperty);

            if (shouldListenResize) {
                window.removeEventListener('resize', updateVhProperty);
            }
        };
    }, []);
};
