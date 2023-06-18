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
    updateState: (value: string, field: QuizFields) => void;
};
