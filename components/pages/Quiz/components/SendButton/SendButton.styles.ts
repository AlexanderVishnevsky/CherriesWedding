import { Box, Button, styled } from '@mui/material';

export const Layout = styled(Box)`
    position: relative;
`;

export const StyledSendButton = styled(Button)`
    transition: all 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.palette.background.default};
    z-index: 10;
`;
