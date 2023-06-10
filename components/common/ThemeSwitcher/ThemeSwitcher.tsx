import { ReactElement } from 'react';

import { useSwitchTheme } from '@hooks';

import MoonIcon from '@icons/common/buttons/moon.svg';
import SunIcon from '@icons/common/buttons/sun.svg';

import * as S from './ThemeSwitcher.styles';

const ThemeSwitcher = ({ large }: { large?: boolean }): ReactElement => {
    const { toggleTheme, isDark } = useSwitchTheme();

    return (
        <S.Switcher large={large} isDark={isDark} onClick={() => toggleTheme()}>
            {isDark ? <MoonIcon /> : <SunIcon />}
        </S.Switcher>
    );
};
export default ThemeSwitcher;
