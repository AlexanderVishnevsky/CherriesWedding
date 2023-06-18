import { SxProps } from '@mui/system';

export interface QuizCardType {
    id: number;
    imgName: string;
    question: string;
    hint?: string;
    fieldType?: 'text' | 'select';
    addImgName?: string;
    imgStyles?: SxProps;
    imgMobStyles?: SxProps;
}
