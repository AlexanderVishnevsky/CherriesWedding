import { css, styled } from '@mui/material';

import { DARK_COLORS, LIGHT_COLORS } from '@theme';

export const Layout = styled('div')`
    position: absolute;
    top: 32px;
    left: 50%;
    transform: translateX(-50%);
    z-index: ${({ theme }) => theme.zIndex.appBar};

    svg {
        width: 40px;
        height: 16.5px;
    }
    ${({ theme }) =>
        theme.palette.mode === 'dark'
            ? css`
                  svg {
                      path {
                          fill: ${DARK_COLORS.disabledDarkButton};
                      }
                  }
              `
            : css`
                  svg {
                      path {
                          fill: ${LIGHT_COLORS.disabledLightButton};
                      }
                  }
              `}
`;
