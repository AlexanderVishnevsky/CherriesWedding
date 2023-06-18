import { QuizCardType } from '@ui/pages/Quiz/components/QuizCard/QuizCard.typings';

export const QuizData: Array<Omit<QuizCardType, 'question' | 'hint'> & { withHint: boolean }> = [
    { id: 1, imgName: 'side-jungle', fieldType: 'text', withHint: true, imgStyles: { right: '-18px' } },
    { id: 2, imgName: 'bus', fieldType: 'select', withHint: true, imgStyles: { bottom: '38px' } },
    { id: 3, imgName: 'martini', fieldType: 'text', withHint: true },
    {
        id: 4,
        imgName: 'hanging',
        fieldType: 'text',
        addImgName: 'flower',
        withHint: false,
        imgStyles: { top: '0', bottom: 'auto', right: '26px' },
    },
];
