import { styled, Container } from '@mui/material';

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
    max-width: ${({ theme }) => `${theme.breakpoints.values['laptop']}px`};
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    display: block;
    padding: 0;
    overflow: hidden;

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        padding: 0 20px;
    }
`;
