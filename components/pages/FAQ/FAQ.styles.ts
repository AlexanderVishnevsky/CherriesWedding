import { styled } from '@mui/material';

import { FlexColCenter } from '@ui/common/Common.styles';

export const Layout = styled(FlexColCenter)`
    width: 100%;

    padding: 56px 0 56px;

    h1 {
        z-index: 2;
        margin-bottom: 76px;
    }

    svg {
        width: 123px;
        height: 169px;
        margin: 120px 0 28px;
    }

    h5 {
        margin-bottom: 120px;
    }

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        padding: 86px 0 120px;

        h1 {
            margin-bottom: 20px;
        }

        h5 {
            margin-bottom: 80px;
        }
    }
`;
