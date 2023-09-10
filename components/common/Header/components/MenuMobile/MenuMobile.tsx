'use client';

import { usePathname } from 'next/navigation';

import { ReactElement, useState } from 'react';

import { IconButton, Toolbar, Typography } from '@mui/material';

import { useSwitchLanguage } from '@hooks';

import { LocaleType } from '@typings/model';

import { FlexCol } from '@ui/common/Common.styles';
import * as F from '@ui/common/Footer/Footer.styles';
import ThemeSwitcher from '@ui/common/ThemeSwitcher';

import useTranslation from 'next-translate/useTranslation';

import { MenuMobileData } from './MenuMobile.data';
import * as S from './MenuMobile.styles';

const MenuMobile = (): ReactElement => {
    const { t } = useTranslation('common');
    const { lang, handleSwitchTranslation } = useSwitchLanguage();
    const pathname = usePathname();

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = (): void => {
        setOpenMenu((prevState) => !prevState);
    };
    return (
        <>
            <S.BurgerMenu open={openMenu} onClick={toggleMenu} className={'center'} aria-label="menu">
                <div />
            </S.BurgerMenu>
            <S.StyledDialog fullScreen open={openMenu} onClose={toggleMenu}>
                <S.MenuMobileLayout sx={{ p: 4 }}>
                    <Toolbar sx={{ p: 0, minHeight: '24px' }}>
                        <S.BurgerMenu open={openMenu} onClick={toggleMenu} className={'center'} aria-label="close">
                            <div />
                        </S.BurgerMenu>
                    </Toolbar>
                    <FlexCol sx={{ rowGap: '32px' }}>
                        {MenuMobileData.map(({ path }, idx) => (
                            <S.CustomLink key={idx} href={path} onClick={toggleMenu}>
                                <IconButton key={idx} aria-label={t(`menu.${idx}`)}>
                                    <S.StyledMenuItem isActive={pathname === path}>{t(`menu.${idx}`)}</S.StyledMenuItem>
                                </IconButton>
                            </S.CustomLink>
                        ))}
                    </FlexCol>
                    <FlexCol sx={{ alignItems: 'center', rowGap: '33px' }}>
                        <ThemeSwitcher large />
                        <F.FooterSwitcher sx={{ width: '87px', height: '30px', m: '0 auto' }}>
                            <F.FooterSwitcherText
                                aria-label="switch BY locale"
                                disableRipple
                                disableTouchRipple
                                isActive={lang === LocaleType.BY}
                                onClick={() => handleSwitchTranslation(LocaleType.BY)}
                            >
                                <Typography variant={'button'}>Бел</Typography>
                            </F.FooterSwitcherText>
                            <F.FooterSwitcherText
                                aria-label="switch RU locale"
                                disableRipple
                                disableTouchRipple
                                isActive={lang === LocaleType.RU}
                                onClick={() => handleSwitchTranslation(LocaleType.RU)}
                            >
                                <Typography variant={'button'}>Рус</Typography>
                            </F.FooterSwitcherText>
                        </F.FooterSwitcher>
                    </FlexCol>
                </S.MenuMobileLayout>
            </S.StyledDialog>
        </>
    );
};

export default MenuMobile;
