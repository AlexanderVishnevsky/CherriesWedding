import { create } from 'zustand';

import { QuizAction, QuizState } from './Quiz.typings';

export const useQuizState = create<QuizState & QuizAction>((set) => ({
    name: '',
    transfer: '',
    drinks: '',
    allergies: '',
    updateState: (newState) => set((state) => ({ ...state, [newState.field]: newState.value })),
    clearState: () => set({ name: '', transfer: '', drinks: '', allergies: '' }),
}));
