import { forwardRef, ReactElement, Ref, useState } from 'react';

import { IconButton, Slide, Toolbar, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

import { useSwitchLanguage } from '@hooks';

import { LocaleType } from '@typings/model';

import BurgerIcon from '@icons/common/buttons/burger-menu.svg';
import { FlexCol } from '@ui/common/Common.styles';
import * as F from '@ui/common/Footer/Footer.styles';
import ThemeSwitcher from '@ui/common/ThemeSwitcher';

import useTranslation from 'next-translate/useTranslation';

import * as S from './MenuMobile.styles';

const Transition = forwardRef(
    (
        props: TransitionProps & {
            children: ReactElement;
        },
        ref: Ref<unknown>,
    ) => <Slide direction={'up'} mountOnEnter unmountOnExit ref={ref} {...props} children={props.children} />,
);

const MenuMobile = (): ReactElement => {
    const { t } = useTranslation('common');
    const { lang, handleSwitchTranslation } = useSwitchLanguage();

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = (): void => {
        setOpenMenu((prevState) => !prevState);
    };
    return (
        <>
            <IconButton onClick={toggleMenu} aria-label="open">
                <BurgerIcon />
            </IconButton>
            <S.StyledDialog fullScreen open={openMenu} onClose={toggleMenu} TransitionComponent={Transition}>
                <S.MenuMobileLayout sx={{ p: 4 }}>
                    <Toolbar>
                        <S.BurgerMenu onClick={toggleMenu} aria-label="close" size={'large'}>
                            <div id={'first-line'} />
                            <div id={'second-line'} />
                        </S.BurgerMenu>
                    </Toolbar>
                    <FlexCol sx={{ rowGap: '32px' }}>
                        {[...Array(5)].map((_, idx) => (
                            <IconButton key={idx}>
                                <S.StyledMenuItem>{t(`menu.${idx}`)}</S.StyledMenuItem>
                            </IconButton>
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
