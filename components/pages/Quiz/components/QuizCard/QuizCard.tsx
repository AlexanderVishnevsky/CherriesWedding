import { ReactElement } from 'react';

import * as S from './QuizCard.styles';
import { QuizCardType } from './QuizCard.typings';

const QuizCard = ({
    id,
    imgName,
    question,
    addImgName,
    hint,
    fieldType = 'text',
    imgStyles,
}: QuizCardType): ReactElement => {
    return (
        <S.CardLayout key={id}>
            <div>
                <S.Question variant={'h5'}>{question}</S.Question>
                {hint && <S.BaseText variant={'caption'}>{hint}</S.BaseText>}
            </div>
            <S.MainImage
                allSizes
                src={`/static/images/figures/${imgName}`}
                alt={imgName}
                loading={'lazy'}
                sx={imgStyles}
            />
            {addImgName && (
                <S.AddImage allSizes src={`/static/images/figures/${addImgName}`} alt={addImgName} loading={'lazy'} />
            )}
            <S.Answer multiline maxRows={3} />
        </S.CardLayout>
    );
};
export default QuizCard;
