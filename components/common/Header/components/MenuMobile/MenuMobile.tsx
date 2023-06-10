import { forwardRef, ReactElement, Ref, useState } from 'react';

import { Dialog, IconButton, Slide, Toolbar } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

import BurgerIcon from '@icons/common/buttons/burger-menu.svg';

import * as S from './MenuMobile.styles';

const Transition = forwardRef(
    (
        props: TransitionProps & {
            children: ReactElement;
        },
        ref: Ref<unknown>,
    ) => <Slide direction="up" ref={ref} {...props} />,
);

const MenuMobile = (): ReactElement => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = (): void => {
        setOpenMenu((prevState) => !prevState);
    };
    return (
        <>
            <IconButton onClick={toggleMenu} aria-label="open">
                <BurgerIcon />
            </IconButton>
            <Dialog fullScreen open={openMenu} onClose={toggleMenu} TransitionComponent={Transition}>
                <S.MenuMobileLayout sx={{ p: 4 }}>
                    <Toolbar>
                        <S.BurgerMenu onClick={toggleMenu} aria-label="close" size={'large'}>
                            <div id={'first-line'} />
                            <div id={'second-line'} />
                        </S.BurgerMenu>
                    </Toolbar>
                </S.MenuMobileLayout>
            </Dialog>
        </>
    );
};

export default MenuMobile;
