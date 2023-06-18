import { CSSProperties } from 'react';

export interface QuizCardType {
    id: number;
    imgName: string;
    question: string;
    hint?: string;
    fieldType?: 'text' | 'select';
    addImgName?: string;
    imgStyles?: CSSProperties;
}
