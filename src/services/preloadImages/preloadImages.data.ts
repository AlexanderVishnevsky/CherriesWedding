import { RoutePaths } from '@/routing/routing';

import { imgFormats } from './preloadImages.typings';

const placeBundle = [
    `/static/images/place/Poster.png`,
    `/static/icons/place/map.svg`,
    `/static/icons/common/arrows/back-icon.svg`,
];

const agendaBundle = (format: imgFormats): string[] => [
    `/static/images/agenda/1-1.${format}`,
    `/static/images/agenda/1-2.${format}`,
    `/static/images/agenda/1-3.${format}`,
    `/static/images/agenda/1-4.${format}`,
    `/static/images/agenda/2-1.${format}`,
    `/static/images/agenda/2-2.${format}`,
    `/static/images/agenda/2-3.${format}`,
    `/static/images/agenda/2-4.${format}`,
    `/static/images/agenda/2-5.${format}`,
    `/static/images/agenda/3-1.${format}`,
    `/static/images/agenda/3-2.${format}`,
    `/static/images/agenda/3-3.${format}`,
    `/static/images/agenda/3-4.${format}`,
];

const quizBundle = (format: imgFormats): string[] => [
    `/static/images/figures/side-jungle-2x.${format}`,
    `/static/images/figures/bus-2x.${format}`,
    `/static/images/figures/martini-2x.${format}`,
    `/static/images/figures/hanging-2x.${format}`,
    `/static/images/figures/flower-2x.${format}`,
    `static/icons/patterns/dark-pattern.svg`,
];

export const imagesByRoute = (format: imgFormats): Record<string, string[]> => ({
    [RoutePaths.PLACE]: placeBundle,
    [RoutePaths.AGENDA]: agendaBundle(format),
    [RoutePaths.QUIZ]: quizBundle(format),
    [RoutePaths.FAQ]: [],
});
