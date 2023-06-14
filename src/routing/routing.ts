import Router from 'next/router';

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

export const RouteChain: RType = {
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
 * Next.js router instance
 * @param pathname
 * @constructor
 */
const RouterInstance = async (pathname: NUL<RoutePaths>): Promise<boolean> => {
    if (pathname) {
        const finalPath = Router.pathname.slice(0, Router.pathname.lastIndexOf('/'));
        const finalPathAs = Router.asPath.slice(0, Router.asPath.lastIndexOf('/'));

        const query = Router.query;

        const url = { pathname: finalPath + pathname, query };
        const urlAs = { pathname: finalPathAs + pathname, query };
        return Router.push(url, urlAs, { shallow: true });
    }
    return false;
};

/**
 * Routes
 */
export const moveToMain = async (): Promise<boolean> => RouterInstance(RoutePaths.MAIN);
export const moveToPlace = async (): Promise<boolean> => RouterInstance(RoutePaths.PLACE);
export const moveToAgenda = async (): Promise<boolean> => RouterInstance(RoutePaths.AGENDA);
export const moveToQuiz = async (): Promise<boolean> => RouterInstance(RoutePaths.QUIZ);
export const moveToFAQ = async (): Promise<boolean> => RouterInstance(RoutePaths.FAQ);

/**
 * Switch between routes
 */
export const moveNext = async () => RouterInstance(RouteChain[Router.pathname as RoutePaths].next);
export const moveBack = async () => RouterInstance(RouteChain[Router.pathname as RoutePaths].prev);
