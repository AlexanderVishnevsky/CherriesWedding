import { styled } from '@mui/material';

import { FlexJCBetween } from '@ui/common/Common.styles';

export const FooterLayout = styled('footer')`
    height: 82px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FooterSwitcher = styled(FlexJCBetween)`
    column-gap: 24px;

    button {
        text-transform: capitalize;
    }
`;
