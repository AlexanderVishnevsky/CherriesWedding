import { create } from 'zustand';

import { QuizAction, QuizState } from './Quiz.typings';

export const useQuizState = create<QuizState & QuizAction>((set) => ({
    name: '',
    transfer: '',
    drinks: '',
    allergies: '',
    updateState: (value, field) => set((state) => ({ ...state, [field]: value })),
}));
