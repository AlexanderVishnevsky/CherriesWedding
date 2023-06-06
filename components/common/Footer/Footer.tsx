import { ReactElement } from 'react';

import { Typography } from '@mui/material';

import { useSwitchTheme } from '@hooks';

import { LocaleType } from '@typings/model';

import SunIcon from '@icons/common/buttons/sun.svg';
import MoonIcon from '@icons/common/buttons/moon.svg';

import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';

import * as S from './Footer.styles';

const Footer = (): ReactElement => {
    const { lang } = useTranslation();
    const { toggleTheme, isDark } = useSwitchTheme();

    const handleSwitchTranslation = async (locale: LocaleType): Promise<void> => {
        if (lang !== locale) {
            await setLanguage(locale);
        }
    };

    return (
        <S.FooterLayout>
            <div />
            <div />
            <S.FooterSwitcher>
                <S.FooterSwitcherText
                    aria-label="switch BY locale"
                    disableRipple
                    disableTouchRipple
                    isActive={lang === LocaleType.BY}
                    onClick={() => handleSwitchTranslation(LocaleType.BY)}
                >
                    <Typography variant={'button'}>Бел</Typography>
                </S.FooterSwitcherText>
                <S.FooterSwitcherText
                    aria-label="switch RU locale"
                    disableRipple
                    disableTouchRipple
                    isActive={lang === LocaleType.RU}
                    onClick={() => handleSwitchTranslation(LocaleType.RU)}
                >
                    <Typography variant={'button'}>Рус</Typography>
                </S.FooterSwitcherText>
                <S.Switcher isDark={isDark} onClick={() => toggleTheme()}>
                    {isDark ? <MoonIcon /> : <SunIcon />}
                </S.Switcher>
            </S.FooterSwitcher>
        </S.FooterLayout>
    );
};
export default Footer;
