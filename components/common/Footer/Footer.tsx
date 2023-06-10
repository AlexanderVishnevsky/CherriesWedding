import { ReactElement } from 'react';

import { Typography, Zoom } from '@mui/material';

import { useMedia, useSwitchLanguage } from '@hooks';

import { LocaleType } from '@typings/model';

import ThemeSwitcher from '@ui/common/ThemeSwitcher';
import NextIcon from '@icons/common/arrows/next-icon.svg';
import { FlexColCenter } from '@ui/common/Common.styles';

import useTranslation from 'next-translate/useTranslation';

import * as S from './Footer.styles';

const Footer = (): ReactElement => {
    const { lang, handleSwitchTranslation } = useSwitchLanguage();
    const { isDesktop } = useMedia();
    const { t } = useTranslation('common');

    return (
        <S.FooterLayout>
            <S.ColWrap />
            <Zoom in style={{ transitionDelay: '700ms' }}>
                <FlexColCenter>
                    <S.ButtonNext>
                        <NextIcon />
                    </S.ButtonNext>
                    <Typography variant={'subtitle2'}>{t('actions.next')}</Typography>
                </FlexColCenter>
            </Zoom>
            {isDesktop && (
                <S.ColWrap>
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
                </S.ColWrap>
            )}
        </S.FooterLayout>
    );
};
export default Footer;
