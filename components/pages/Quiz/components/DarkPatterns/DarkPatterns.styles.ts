import { styled } from '@mui/material';

export const Left = styled('img')`
    position: absolute;
    top: 0;
    left: 0;
    width: 220px;
    height: 100%;

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        display: none;
    }
`;

export const Right = styled(Left)`
    left: auto;
    right: 0;
`;
