import { styled } from '@mui/material';

import { FlexColCenter } from '@ui/common/Common.styles';

export const Layout = styled(FlexColCenter)`
    width: 100%;

    padding: 56px 0 56px;

    h1 {
        z-index: 2;
        margin-bottom: 76px;
    }

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        padding: 86px 0 120px;

        h1 {
            margin-bottom: 20px;
        }
    }
`;
