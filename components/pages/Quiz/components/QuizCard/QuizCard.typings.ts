import { SxProps } from '@mui/material';

import { filledCallbackType } from '@typings/common';

import { QuizFields } from '@ui/pages/Quiz/Quiz.typings';

export interface QuizCardType {
    id: number;
    imgName: string;
    question: string;
    hint?: string;
    fieldType?: 'text' | 'select';
    addImgName?: string;
    imgStyles?: SxProps;
    imgMobStyles?: SxProps;
    state: string;
    stateKey: QuizFields;
    handleChange: filledCallbackType<{ value: string; field: QuizFields }>;
}
