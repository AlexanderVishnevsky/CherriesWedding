import { ReactElement } from 'react';

import { useMedia } from '@hooks';

import * as S from './QuizCard.styles';
import { QuizCardType } from './QuizCard.typings';

const QuizCard = ({
    id,
    imgName,
    imgMobStyles,
    question,
    addImgName,
    hint,
    fieldType = 'text',
    imgStyles,
}: QuizCardType): ReactElement => {
    const { isDesktop } = useMedia();
    return (
        <S.CardLayout key={id}>
            <S.Question variant={'h5'}>{question}</S.Question>
            {hint && <S.Hint variant={'caption'}>{hint}</S.Hint>}
            <S.Answer multiline maxRows={isDesktop ? 3 : 2} />
            <S.MainImage
                allSizes
                src={`/static/images/figures/${imgName}`}
                alt={imgName}
                loading={'lazy'}
                sx={isDesktop ? imgStyles : imgMobStyles}
            />
            {addImgName && (
                <S.AddImage allSizes src={`/static/images/figures/${addImgName}`} alt={addImgName} loading={'lazy'} />
            )}
        </S.CardLayout>
    );
};
export default QuizCard;
