import { Container, styled } from '@mui/material';

export const BasicLayoutComponent = styled('div')`
    min-height: calc(var(--vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: ${({ theme }) => theme.palette.background.default};
`;

export const ContentContainer = styled(Container)`
    width: 100%;
    min-height: calc(var(--vh, 1vh) * 100);
    margin: 0 auto;
    box-sizing: border-box;
    display: block;
    padding: 20px 0;
    overflow: hidden;
    position: relative;

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        padding: 0 20px;
    }
`;
