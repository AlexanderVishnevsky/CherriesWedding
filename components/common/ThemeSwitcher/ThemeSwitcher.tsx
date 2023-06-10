import { ReactElement } from 'react';

import { useSwitchTheme } from '@hooks';

import MoonIcon from '@icons/common/buttons/moon.svg';
import SunIcon from '@icons/common/buttons/sun.svg';

import * as S from './ThemeSwitcher.styles';

const ThemeSwitcher = ({ large }: { large?: boolean }): ReactElement => {
    const { toggleTheme, isLight } = useSwitchTheme();

    return (
        <S.Switcher large={large} isLight={isLight} onClick={() => toggleTheme()}>
            {isLight ? <SunIcon /> : <MoonIcon />}
        </S.Switcher>
    );
};
export default ThemeSwitcher;
