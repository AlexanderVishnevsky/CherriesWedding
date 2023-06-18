import { styled, Typography } from '@mui/material';

import { FlexColCenter } from '@ui/common/Common.styles';

export const Layout = styled(FlexColCenter)`
    width: 100%;

    padding: 56px 0 200px;

    h1 {
        z-index: 2;
    }
`;

export const QuizWrapper = styled(FlexColCenter)`
    row-gap: 49px;
    margin: 49px auto;
`;

export const QuestionNumber = styled(Typography)`
    margin-right: 20px;
`;
