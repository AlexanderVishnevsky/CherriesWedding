import { callbackType, filledCallbackType } from '@typings/common';

export type QuizState = {
    name: string;
    transfer: string;
    drinks: string;
    allergies: string;
};

export enum QuizFields {
    name = 'name',
    transfer = 'transfer',
    drinks = 'drinks',
    allergies = 'allergies',
}

export type QuizAction = {
    updateState: filledCallbackType<{ value: string; field: QuizFields }>;
    clearState: callbackType;
};
