import { css, keyframes, styled, Typography } from '@mui/material';

import { FlexCenter, FlexColCenter, FlexJCBetween, FlexRow } from '@ui/common/Common.styles';

export const MainLayout = styled(FlexJCBetween)`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    left: 0;

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        justify-content: center;
    }
`;

export const FirstImage = styled(FlexRow)`
    flex-direction: column;
    background-size: auto;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;

    ${({ theme }) =>
        theme.palette.mode === 'light'
            ? css`
                  max-width: 200px;
                  background-image: url('/static/icons/patterns/emb-fire.svg');
                  ${theme.breakpoints.down('tabletLarge')} {
                      position: fixed;
                      left: -130px;
                      right: initial;
                  }
              `
            : css`
                  background-image: url('/static/icons/patterns/pattern-mob-1.svg');
                  width: 263px;
                  background-position: 0 15vh;
                  ${theme.breakpoints.down('tabletLarge')} {
                      position: fixed;
                      left: 0;
                      background-image: url('/static/icons/patterns/pattern-mob-3.svg');
                      right: initial;
                  }
              `}
`;

export const SecondImage = styled(FirstImage)`
    ${({ theme }) =>
        theme.palette.mode === 'light'
            ? css`
                  background-image: url('/static/icons/patterns/embroidery.svg');

                  ${theme.breakpoints.down('tabletLarge')} {
                      background-image: url('/static/icons/patterns/emb-fire.svg');
                      position: fixed;
                      right: -130px;
                      left: initial;
                  }
              `
            : css`
                  background-position: 0 52px;
                  background-image: url('/static/icons/patterns/pattern-mob-2.svg');
                  width: 312px;
                  ${theme.breakpoints.down('tabletLarge')} {
                      width: 68px;
                      position: fixed;
                      right: 0;
                      background-image: url('/static/icons/patterns/pattern-mob-4.svg');
                      left: initial;
                  }
              `}
`;

export const MainColumn = styled(FlexColCenter)`
    justify-content: space-between;
    height: ${({ theme }) => (theme.palette.mode === 'light' ? '80%' : '75%')};
    padding: 120px 0 40px;
    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        padding: 96px 0 20px;
    }
`;

export const StyledTitle = styled(Typography)`
    text-transform: uppercase;
    margin: 0 auto;
    text-align: center;
    max-width: 606px;
    z-index: 3;
    white-space: pre-wrap;

    ${({ theme }) => theme.breakpoints.down('tabletSmall')} {
        max-width: 243px;
    }
`;

export const spinX = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const FrameContainer = styled(FlexCenter)`
    width: 264px;
    height: 264px;
    position: relative;
    z-index: 2;

    #frame {
        background-image: url('/static/icons/patterns/main-frame.svg');
        background-size: contain;
        background-repeat: no-repeat;
        width: 220px;
        height: 220px;
        position: absolute;
        animation: ${spinX} 15s infinite linear;
    }

    ${({ theme }) =>
        theme.palette.mode === 'dark' &&
        css`
            #frame {
                width: 371px;
                height: 371px;
            }

            img {
                width: 144px;
                height: 144px;
            }

            ${theme.breakpoints.down('tabletLarge')} {
                #frame {
                    width: 220px;
                    height: 220px;
                }
                img {
                    width: auto;
                    height: auto;
                }
            }
        `}

    ${({ theme }) => theme.breakpoints.down('tabletLarge')} {
        width: 220px;
        height: 220px;
        margin: 20px auto;
    }
`;
