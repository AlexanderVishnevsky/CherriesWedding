import { EMP, NUL } from '@/typings/common';

import { AssignableRef, MediaQueryParams } from './Picture.typings';

/**
 * Note that since browsers do not currently support range context queries,
 * we work around the limitations of min- and max- prefixes and viewports with fractional widths
 * (which can occur under certain conditions on high-dpi devices, for instance)
 * by using values with higher precision for these comparisons (e.g. 767.98px).
 *
 * Reference: "Bootstrap: Responsive breakpoints"
 * https://getbootstrap.com/docs/4.4/layout/overview/#responsive-breakpoints
 *
 * Reference: "Using “min-” and “max-” Prefixes On Range Features"
 * https://www.w3.org/TR/mediaqueries-4/#mq-min-max
 */
export function createMediaQuery({ min, max }: MediaQueryParams): string {
    if (!min && !max && process.env.NODE_ENV === 'development') {
        throw new Error('You didn\'t specify "min" or "max" width for @media mixin');
    }
    return min && max
        ? `(min-width: ${min}px) and (max-width: ${max - 0.02}px)`
        : min
        ? `(min-width: ${min}px)`
        : max
        ? `(max-width: ${max - 0.02}px)`
        : '';
}

export const DATA_URL_REGEX =
    /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)$/i;

export const convertSrcSet = (sources: Array<string>): string =>
    sources
        .slice(0, 2)
        .map((url, index) => `${url} ${index + 1}x`)
        .join(', ');

export const dedupeMediaQueryList = <T extends { name: string }>(list: Array<T>): Array<T> => {
    const map = new Map();
    list.forEach((item) => map.set(item.name, item));

    /**
     * The Map remembers the original insertion order of the keys.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
     */
    return Array.from(map.values());
};

export const getImageTypeFromUrl = (url: NUL<string>): NUL<string> => {
    if (!url) return null;

    const isValidDataUrl = DATA_URL_REGEX.test(url);

    if (isValidDataUrl) {
        const parts = url.trim().match(DATA_URL_REGEX);
        return parts ? parts[1] : null;
    }

    const dotPositionIndex = url.lastIndexOf('.');

    if (dotPositionIndex === -1) return null;

    const extension = url.slice(dotPositionIndex + 1);

    switch (extension) {
        case 'svg':
            return 'image/svg+xml';
        case 'webp':
            return 'image/webp';
        case 'png':
            return 'image/png';
        case 'jpg':
        case 'jpeg':
            return 'image/jpeg';
    }

    return null;
};

export const assignRef = <RefValueType = any>(
    ref: AssignableRef<RefValueType> | null | undefined,
    value: any,
): void => {
    if (ref == null) return;
    if (typeof ref === 'function') {
        ref(value);
    } else {
        try {
            ref.current = value;
        } catch (error) {
            throw new Error(`Cannot assign value "${value}" to ref "${ref}"`);
        }
    }
};

export const getSrcList = (src1x: EMP<string>, src2x: EMP<string>): Array<string> => {
    const srcList: Array<string> = [];

    if (src1x) {
        srcList.push(src1x);
    }

    if (src2x) {
        srcList.push(src2x);
    }

    return srcList;
};
