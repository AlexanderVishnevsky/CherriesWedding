import { ReactElement } from 'react';

import { useTheme } from '@mui/material';

import * as S from './DarkPatterns.styles';

const DarkPatterns = (): ReactElement => {
    const theme = useTheme();
    return (
        <>
            {theme.palette.mode === 'dark' && (
                <>
                    <S.Left src={'/static/icons/patterns/dark-pattern.svg'} alt={'dark-pattern-l'} loading={'lazy'} />
                    <S.Right src={'/static/icons/patterns/dark-pattern.svg'} alt={'dark-pattern-r'} loading={'lazy'} />
                </>
            )}
        </>
    );
};
export default DarkPatterns;
