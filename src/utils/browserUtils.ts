export const isBrowser: boolean = typeof window !== 'undefined';

export const isServer: boolean = !isBrowser;

export const canUseDOM: boolean =
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined';

export const handleScrollTop = (): void => {
    try {
        if (isBrowser) {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            });
        }
    } catch (e) {
        console.error('[handleScrollTop error]: ', e);
    }
};
