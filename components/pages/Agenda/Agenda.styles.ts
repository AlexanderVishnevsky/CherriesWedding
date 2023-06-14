import { styled } from '@mui/material';

import { FlexRow } from '@ui/common/Common.styles';

export const Layout = styled('div')`
    padding: 100px 0 160px;
`;

export const DayLayout = styled('div')`
    margin-top: 140px;
`;

export const Dates = styled(FlexRow)`
    align-items: flex-end;
    margin-bottom: 48px;
    h5 {
        margin-left: 40px;
        margin-bottom: 8px;
    }
`;
