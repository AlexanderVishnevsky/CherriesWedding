import { ChangeEvent, ReactElement } from 'react';

import { useMedia } from '@hooks';

import * as S from './QuizCard.styles';
import { QuizCardType } from './QuizCard.typings';

const QuizCard = ({
    id,
    imgName,
    imgMobStyles,
    question,
    addImgName,
    stateKey,
    state,
    handleChange,
    hint,
    fieldType = 'text',
    imgStyles,
}: QuizCardType): ReactElement => {
    const { isDesktop } = useMedia();

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        if (!newValue.match(/[%<>\\$'"]/)) {
            handleChange({ value: newValue, field: stateKey });
        }
    };

    return (
        <S.CardLayout key={id}>
            <S.Question variant={'h5'}>{question}</S.Question>
            {hint && <S.Hint variant={'caption'}>{hint}</S.Hint>}
            <S.Answer multiline maxRows={isDesktop ? 3 : 2} value={state} onChange={handleChangeInput} />
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
