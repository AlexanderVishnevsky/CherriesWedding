import { styled, Typography } from '@mui/material';

import { FlexRow } from '@ui/common/Common.styles';
import { DARK_COLORS } from '@theme';

export const Layout = styled('div')`
    padding: 100px 0 160px;
`;

export const DayLayout = styled('div')`
    margin-top: 140px;
    ${({ theme }) => theme.breakpoints.down('tabletSmall')} {
        margin-top: 60px;
    }
`;

export const Dates = styled(FlexRow)`
    align-items: flex-end;
    margin-bottom: 48px;
    h5 {
        margin-left: 40px;
        margin-bottom: 8px;
        color: ${({ theme }) => theme.palette.mode === 'dark' && DARK_COLORS.customDarkText};
    }

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 0;

        h3 {
            font-size: 28px;
            line-height: 30px;
        }

        h5 {
            margin-left: 0;
            margin-bottom: 0;
            margin-top: 14px;
            font-size: 14px;
            line-height: 21px;
        }
    }
`;

export const AgendaTitle = styled(Typography)`
    text-align: center;
    margin-bottom: 64px;
`;

export const FirstImage = styled('div')`
    min-height: 200px;
    width: 100%;
    height: 100%;
    max-width: 840px;
    margin: 0 auto;
    overflow: hidden;
    background-size: contain;
    background-image: url('/static/icons/patterns/emb-fire-90.svg');
    background-repeat: no-repeat;

    ${({ theme }) => theme.breakpoints.down('tabletSmall')} {
        margin-left: -20px;
        width: calc(100% + 40px);
    }
`;

export const Header = styled('div')`
    text-align: center;
    max-width: 560px;
    margin: 0 auto;

    h4 {
        margin: 72px auto 32px;
    }

    h6 {
        margin: 0 auto 92px;
    }

    ${({ theme }) => theme.breakpoints.down('tabletSmall')} {
        h4 {
            margin: 40px auto 40px;
        }

        h6 {
            margin: 0 auto 72px;
        }
    }

    ${({ theme }) => theme.breakpoints.down('mobileLarge')} {
        h4 {
            margin: -20px auto 40px;
        }
    }

    ${({ theme }) => theme.breakpoints.down('mobileMedium')} {
        h4 {
            margin: -40px auto 40px;
        }
    }
`;
