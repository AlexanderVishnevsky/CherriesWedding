import Link from 'next/link';

import { ReactElement, useState } from 'react';

import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

import * as S from './CustomAccordion.styles';

const CardNumber = 5;

const CustomAccordion = (): ReactElement => {
    const { t } = useTranslation('faq');
    const [active, setActive] = useState<boolean[]>(new Array(CardNumber).fill(false));

    const handleActiveChange = (num: number) => {
        setActive((prevState) => prevState.map((item, idx) => (idx === num ? !item : item)));
    };

    return (
        <S.CustomAccordionLayout>
            {active.map((i, idx) => (
                <S.AccItem key={idx} expanded={active[idx]} onClick={() => handleActiveChange(idx)}>
                    <S.AccTitle>{t(`answers.${idx}.title`, {})}</S.AccTitle>
                    {/*<S.AccDetails>{t(`answers.${idx}.text`)}</S.AccDetails>  */}
                    <S.AccDetails>
                        <Trans
                            i18nKey={`faq:answers.${idx}.text`}
                            components={{
                                newL: <div id={'newL'} />,
                                link: (
                                    <Link
                                        href={'https://www.pinterest.com/kudinovichyuliya/moodboard/'}
                                        target={'_blank'}
                                    />
                                ),
                            }}
                        />
                    </S.AccDetails>
                    {idx === 1 && (
                        <S.List>
                            {(t(`answers.1.list`, {}, { returnObjects: true }) as string[]).map(
                                (listItem: string, idx2: number) => (
                                    <li key={idx2}>
                                        <span>{listItem}</span>
                                    </li>
                                ),
                            )}
                        </S.List>
                    )}
                </S.AccItem>
            ))}
        </S.CustomAccordionLayout>
    );
};
export default CustomAccordion;
