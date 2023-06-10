import { ReactElement } from 'react';

import { Typography } from '@mui/material';

import { useSwitchLanguage } from '@hooks';

import { LocaleType } from '@typings/model';

import ThemeSwitcher from '@ui/common/ThemeSwitcher';

import * as S from './Footer.styles';

const Footer = (): ReactElement => {
    const { lang, handleSwitchTranslation } = useSwitchLanguage();

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
                <ThemeSwitcher />
            </S.FooterSwitcher>
        </S.FooterLayout>
    );
};
export default Footer;
