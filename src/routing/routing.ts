import { NUL } from '@typings/common';

/**
 * App available routes
 */
export enum RoutePaths {
    MAIN = '/',
    PLACE = '/place',
    AGENDA = '/agenda',
    QUIZ = '/quiz',
    FAQ = '/faq',
}

type RType = Record<RoutePaths, { prev: NUL<RoutePaths>; next: NUL<RoutePaths> }>;

const RouteChain: RType = {
    [RoutePaths.MAIN]: {
        prev: null,
        next: RoutePaths.PLACE,
    },
    [RoutePaths.PLACE]: {
        prev: RoutePaths.MAIN,
        next: RoutePaths.AGENDA,
    },
    [RoutePaths.AGENDA]: {
        prev: RoutePaths.PLACE,
        next: RoutePaths.QUIZ,
    },
    [RoutePaths.QUIZ]: {
        prev: RoutePaths.AGENDA,
        next: RoutePaths.FAQ,
    },
    [RoutePaths.FAQ]: {
        prev: RoutePaths.QUIZ,
        next: null,
    },
} as const;

/**
 * Switch between routes
 */
export const moveNext = (pathname: string): string => RouteChain[pathname as RoutePaths]?.next ?? '';
export const moveBack = (pathname: string): string => RouteChain[pathname as RoutePaths]?.prev ?? '';
