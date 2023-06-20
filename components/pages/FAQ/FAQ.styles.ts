import { styled } from '@mui/material';

import { FlexColCenter } from '@ui/common/Common.styles';
import { spinX } from '@ui/pages/Main/Main.styles';

export const Layout = styled(FlexColCenter)`
    width: 100%;

    padding: 56px 0 56px;

    h1 {
        z-index: 2;
        margin-bottom: 76px;
    }

    h5 {
        text-align: center;
        margin-bottom: 120px;
    }

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        padding: 86px 0 35vh;

        h1 {
            margin-bottom: 46px;
        }

        h5 {
            margin-bottom: 80px;
        }
    }
`;

export const IconWrapper = styled('div')`
    position: relative;
    width: 123px;
    height: 169px;
    margin: 120px 0 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .sun {
        width: 78px;
        height: 78px;
        position: relative;
        animation: ${spinX} 15s infinite linear;
    }

    .couple {
        width: 123px;
        height: 70px;
    }

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        margin: 30vh 0 28px;
    }
`;
