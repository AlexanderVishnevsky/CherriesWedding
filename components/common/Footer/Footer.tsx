import { ReactElement } from 'react';

import { Typography } from '@mui/material';

import { LocaleType } from '@typings/model';

import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';

import * as S from './Footer.styles';

const Footer = (): ReactElement => {
    const { t, lang } = useTranslation();

    const handleSwitchTranslation = async (lang: LocaleType): Promise<void> => {
        await setLanguage(lang);
    };

    return (
        <S.FooterLayout>
            Footer
            <S.FooterSwitcher>
                <Typography
                    component={'button'}
                    variant={'button'}
                    onClick={() => handleSwitchTranslation(LocaleType.BY)}
                >
                    Бел
                </Typography>
                <Typography
                    component={'button'}
                    variant={'button'}
                    onClick={() => handleSwitchTranslation(LocaleType.RU)}
                >
                    Рус
                </Typography>
            </S.FooterSwitcher>
        </S.FooterLayout>
    );
};
export default Footer;
