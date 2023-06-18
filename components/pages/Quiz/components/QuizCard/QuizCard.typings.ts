import { SxProps } from '@mui/system';

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
    handleChange: (value: string, field: QuizFields) => void;
}
