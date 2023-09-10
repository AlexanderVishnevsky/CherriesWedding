'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { ReactElement } from 'react';

import { Typography, Zoom } from '@mui/material';

import { useMedia, useSwitchLanguage } from '@hooks';

import { LocaleType } from '@typings/model';

import ThemeSwitcher from '@ui/common/ThemeSwitcher';
import NextIcon from '@icons/common/arrows/next-icon.svg';
import BackIcon from '@icons/common/arrows/back-icon.svg';
import RestartIcon from '@icons/common/arrows/restart-icon.svg';
import { FlexColCenter } from '@ui/common/Common.styles';

import { moveBack, moveNext, RoutePaths } from '@/routing/routing';
import usePreloadImages from '@/services/preloadImages';

import useTranslation from 'next-translate/useTranslation';

import * as S from './Footer.styles';

const Footer = (): ReactElement => {
    const { lang, handleSwitchTranslation } = useSwitchLanguage();
    const { isDesktop } = useMedia();
    const { t } = useTranslation('common');
    const pathname = usePathname();
    usePreloadImages();

    return (
        <S.FooterLayout>
            <S.ColWrap>
                {pathname !== RoutePaths.MAIN && (
                    <Zoom in>
                        <FlexColCenter>
                            <Link href={moveBack(pathname)}>
                                <S.ButtonBack aria-label={'back'}>
                                    <BackIcon />
                                </S.ButtonBack>
                            </Link>
                            <Typography variant={'caption'}>{t('actions.back')}</Typography>
                        </FlexColCenter>
                    </Zoom>
                )}
            </S.ColWrap>
            {pathname === RoutePaths.FAQ ? (
                <FlexColCenter>
                    <Link href={RoutePaths.MAIN}>
                        <S.ButtonNext aria-label={'main-page'}>
                            <RestartIcon />
                        </S.ButtonNext>
                    </Link>
                    <Typography variant={'caption'}>{t('actions.toStart')}</Typography>
                </FlexColCenter>
            ) : (
                <FlexColCenter>
                    <Link href={moveNext(pathname)}>
                        <S.ButtonNext aria-label={'next'}>
                            <NextIcon />
                        </S.ButtonNext>
                    </Link>
                    <Typography variant={'caption'}>{t('actions.next')}</Typography>
                </FlexColCenter>
            )}
            {isDesktop && (
                <S.ColWrap>
                    <Link href={pathname} locale={LocaleType.BY} key={LocaleType.BY} prefetch={false}>
                        <S.FooterSwitcherText
                            aria-label="switch BY locale"
                            disableRipple
                            disableTouchRipple
                            isActive={lang === LocaleType.BY}
                            onClick={() => handleSwitchTranslation(LocaleType.BY)}
                        >
                            <Typography variant={'button'}>Бел</Typography>
                        </S.FooterSwitcherText>
                    </Link>
                    <Link href={pathname} locale={LocaleType.RU} key={LocaleType.RU} prefetch={false}>
                        <S.FooterSwitcherText
                            aria-label="switch RU locale"
                            disableRipple
                            disableTouchRipple
                            isActive={lang === LocaleType.RU}
                            onClick={() => handleSwitchTranslation(LocaleType.RU)}
                        >
                            <Typography variant={'button'}>Рус</Typography>
                        </S.FooterSwitcherText>
                    </Link>
                    <ThemeSwitcher />
                </S.ColWrap>
            )}
        </S.FooterLayout>
    );
};
export default Footer;
