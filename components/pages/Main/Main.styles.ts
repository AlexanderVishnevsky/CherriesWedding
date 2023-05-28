import { styled } from '@mui/material';

import { FlexJCBetween, FlexRow } from '@ui/common/Common.styles';

export const MainLayout = styled(FlexJCBetween)`
    width: 100%;
    height: 100%;
    overflow: hidden;

    #emb-big {
        width: 200px;
        height: 756px;
    }

    #emb-fire {
        width: 200px;
        height: 90px;
    }
`;

export const FirstImage = styled(FlexRow)`
    flex-direction: column;
`;
