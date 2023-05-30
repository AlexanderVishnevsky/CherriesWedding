import { styled } from '@mui/material';

export const FlexRow = styled('div')`
    display: flex;
`;

export const FlexRowCenter = styled(FlexRow)`
    align-items: center;
`;

export const FlexCenter = styled(FlexRowCenter)`
    justify-content: center;
`;

export const FlexJCBetween = styled(FlexRow)`
    justify-content: space-between;
`;
