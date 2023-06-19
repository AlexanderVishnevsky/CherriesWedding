import { ChangeEvent, ReactElement } from 'react';

import { NativeSelect } from '@mui/material';

import useTranslation from 'next-translate/useTranslation';

import * as S from '../QuizCard/QuizCard.styles';

const QuizSelect = ({
    handleChangeInput,
}: {
    handleChangeInput: (e: ChangeEvent<HTMLSelectElement>) => void;
}): ReactElement => {
    const { t } = useTranslation('quiz');
    return (
        <NativeSelect
            onChange={handleChangeInput}
            defaultValue={''}
            inputProps={{
                name: 'transfeer',
                id: 'uncontrolled-native',
                IconComponent: () => null,
            }}
            input={<S.Answer />}
        >
            <option aria-label="None" value="" />
            <option value={t('answers.transfer')}>{t('answers.transfer')}</option>
            <option value={t('answers.myself')}>{t('answers.myself')}</option>
        </NativeSelect>
    );
};
export default QuizSelect;
