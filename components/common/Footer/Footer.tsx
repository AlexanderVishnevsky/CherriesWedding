import { useRouter } from 'next/router';

import { ReactElement } from 'react';

import { Typography, Zoom } from '@mui/material';

import { useMedia, useSwitchLanguage } from '@hooks';

import { LocaleType } from '@typings/model';

import ThemeSwitcher from '@ui/common/ThemeSwitcher';
import NextIcon from '@icons/common/arrows/next-icon.svg';
import BackIcon from '@icons/common/arrows/back-icon.svg';
import RestartIcon from '@icons/common/arrows/restart-icon.svg';
import { FlexColCenter } from '@ui/common/Common.styles';

import { moveBack, moveNext, moveToMain, RoutePaths } from '@/routing/routing';
import usePreloadImages from '@/services/preloadImages';

import useTranslation from 'next-translate/useTranslation';

import * as S from './Footer.styles';

const Footer = (): ReactElement => {
    const { lang, handleSwitchTranslation } = useSwitchLanguage();
    const { isDesktop } = useMedia();
    const { t } = useTranslation('common');
    const { pathname } = useRouter();
    usePreloadImages();

    return (
        <S.FooterLayout>
            <S.ColWrap>
                {pathname !== RoutePaths.MAIN && (
                    <Zoom in>
                        <FlexColCenter>
                            <S.ButtonBack onClick={moveBack}>
                                <BackIcon />
                            </S.ButtonBack>
                            <Typography variant={'caption'}>{t('actions.back')}</Typography>
                        </FlexColCenter>
                    </Zoom>
                )}
            </S.ColWrap>
            {pathname === RoutePaths.FAQ ? (
                <FlexColCenter>
                    <S.ButtonNext onClick={moveToMain}>
                        <RestartIcon />
                    </S.ButtonNext>
                    <Typography variant={'caption'}>{t('actions.toStart')}</Typography>
                </FlexColCenter>
            ) : (
                <FlexColCenter>
                    <S.ButtonNext onClick={moveNext}>
                        <NextIcon />
                    </S.ButtonNext>
                    <Typography variant={'caption'}>{t('actions.next')}</Typography>
                </FlexColCenter>
            )}
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
