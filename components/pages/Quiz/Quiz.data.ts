import { QuizCardType } from '@ui/pages/Quiz/components/QuizCard/QuizCard.typings';

export const QuizData: Array<Omit<QuizCardType, 'question' | 'hint'> & { withHint: boolean }> = [
    {
        id: 1,
        imgName: 'side-jungle',
        fieldType: 'text',
        withHint: true,
        imgStyles: { left: 'auto', right: '-18px' },
        imgMobStyles: {
            left: '-26px',
            right: 'auto',
            '& img': {
                opacity: '40%',
                width: '70%',
            },
        },
    },
    {
        id: 2,
        imgName: 'bus',
        fieldType: 'select',
        withHint: true,
        imgStyles: { bottom: '38px' },
        imgMobStyles: {
            bottom: 0,
            right: '-28px',
            '& img': {
                width: '80%',
            },
        },
    },
    {
        id: 3,
        imgName: 'martini',
        fieldType: 'text',
        withHint: true,
        imgMobStyles: {
            bottom: 0,
            left: '-50%',
            '& img': {
                transform: 'scale(-1, 1)',
                width: '78%',
            },
        },
    },
    {
        id: 4,
        imgName: 'hanging',
        fieldType: 'text',
        addImgName: 'flower',
        withHint: false,
        imgStyles: { top: '0', bottom: 'auto', right: '26px' },
        imgMobStyles: { top: '0', bottom: 'auto', right: '26px' },
    },
];
