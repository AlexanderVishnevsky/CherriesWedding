import { AccordionDetails, AccordionSummary, styled } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';

import { DARK_COLORS, LIGHT_COLORS } from '@theme';

import { ConnieFont, CormorantInfantFont } from '@/config/localFonts';

export const CustomAccordionLayout = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 40px;
    width: 100%;
    max-width: 834px;
`;

export const AccItem = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} children={props.children} />
))`
    border: ${({ expanded, theme }) =>
        `2px solid ${
            expanded
                ? LIGHT_COLORS.primaryLightMain
                : theme.palette.mode === 'light'
                  ? '#000000'
                  : DARK_COLORS.disabledDarkButton
        }`};
    border-radius: 30px;
    width: 100%;
    padding: 32px;
    text-align: center;
    background-color: ${({ expanded }) => (expanded ? LIGHT_COLORS.primaryLightMain : 'transparent')};
    color: ${({ expanded }) => (expanded ? DARK_COLORS.primaryDarkText : '')};

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        padding: 15px 4px 23px;
    }
`;

export const AccTitle = styled(AccordionSummary)`
    font-family: ${ConnieFont.style.fontFamily};
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 39px;

    .MuiAccordionSummary-content {
        justify-content: center;
    }
`;

export const AccDetails = styled(AccordionDetails)`
    font-family: ${CormorantInfantFont.style.fontFamily};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.06em;

    #newL {
        display: block;
        margin-top: 30px;
    }

    a {
        display: block;
        text-decoration: underline;
        margin-top: 5px;
        :hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`;

export const List = styled('ul')`
    max-width: 375px;
    width: calc(100% - 32px);
    margin: 0 auto;
    text-align: left;

    li {
        display: block;
    }
    li:before {
        content: '•';
    }

    li span {
        position: relative;
        left: 10px;
    }
`;
