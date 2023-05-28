import { ReactElement } from 'react';

import * as S from './Picture.styles';

interface SpinnerProps {
    show: boolean;
    size?: number;
    thickness?: number;
    color?: string;
}

const PictureSpinner = ({ size = 100, thickness = 4, show, color }: SpinnerProps): ReactElement => (
    <S.Container visible={Boolean(show)}>
        <S.Inner size={size}>
            <S.Circle thickness={thickness} color={color} />
        </S.Inner>
    </S.Container>
);
export default PictureSpinner;
