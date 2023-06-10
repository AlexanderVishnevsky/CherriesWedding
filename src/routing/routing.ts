import Router from 'next/router';

export enum RoutePaths {
    MAIN = '/',
    PLACE = '/place',
    AGENDA = '/agenda',
    QUIZ = '/quiz',
    FAQ = '/faq',
}

/**
 * Next.js router instance
 * @param pathname
 * @constructor
 */
const RouterInstance = async (pathname: RoutePaths): Promise<boolean> => {
    const finalPath = Router.pathname.slice(0, Router.pathname.lastIndexOf('/'));
    const finalPathAs = Router.asPath.slice(0, Router.asPath.lastIndexOf('/'));

    const query = Router.query;

    const url = { pathname: finalPath + pathname, query };
    const urlAs = { pathname: finalPathAs + pathname, query };
    return Router.push(url, urlAs, { shallow: true });
};

/**
 * Routes
 */
export const moveToMain = async (): Promise<boolean> => RouterInstance(RoutePaths.MAIN);
export const moveToPlace = async (): Promise<boolean> => RouterInstance(RoutePaths.PLACE);
export const moveToAgenda = async (): Promise<boolean> => RouterInstance(RoutePaths.AGENDA);
export const moveToQuiz = async (): Promise<boolean> => RouterInstance(RoutePaths.QUIZ);
export const moveToFAQ = async (): Promise<boolean> => RouterInstance(RoutePaths.FAQ);
