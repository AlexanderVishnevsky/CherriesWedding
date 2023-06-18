import { styled } from '@mui/material';

import { FlexColCenter, FlexRowCenter } from '@ui/common/Common.styles';

export const Layout = styled(FlexColCenter)`
    width: 100%;

    padding: 56px 0 200px;

    h1 {
        z-index: 2;
    }

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        padding: 100px 0 160px;
    }
`;

export const QuizWrapper = styled(FlexColCenter)`
    row-gap: 49px;
    margin: 49px auto 86px;
    z-index: 2;
`;

export const Question = styled(FlexRowCenter)`
    column-gap: 20px;
    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        column-gap: 0;
        row-gap: 24px;
        flex-direction: column;
    }
`;
