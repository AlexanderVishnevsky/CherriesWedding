import { moveToAgenda, moveToFAQ, moveToMain, moveToPlace, moveToQuiz, RoutePaths } from '@/routing/routing';

export const MenuMobileData = [
    { path: RoutePaths.MAIN, moveTo: moveToMain },
    { path: RoutePaths.PLACE, moveTo: moveToPlace },
    { path: RoutePaths.AGENDA, moveTo: moveToAgenda },
    { path: RoutePaths.QUIZ, moveTo: moveToQuiz },
    { path: RoutePaths.FAQ, moveTo: moveToFAQ },
];
