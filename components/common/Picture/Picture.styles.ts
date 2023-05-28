import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/material';

export const Container = styled('div', {
    shouldForwardProp: (prop) => prop !== 'visible',
})<{ visible: boolean }>`
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: opacity 0.3s;
`;

export const Inner = styled('div', {
    shouldForwardProp: (prop) => prop !== 'size',
})<{ size: number }>`
    display: inline-block;
    position: relative;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
`;

const getAnimation = (props: { thickness: number }) => keyframes`
      from {
        top: 50%;
        left: 50%;
        width: ${props.thickness * 2}px;
        height: ${props.thickness * 2}px;
        opacity: 1;
      }

      to {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
  }
`;

export const Circle = styled('div', {
    shouldForwardProp: (prop) => prop !== 'thickness' && prop !== 'color',
})<{ thickness: number; color?: string }>`
    position: absolute;
    border: ${({ thickness }) => thickness}px solid ${({ color, theme }) => color ?? theme.palette.primary.main};
    opacity: 1;
    border-radius: 50%;
    animation-name: ${(props) => getAnimation({ thickness: props.thickness })};
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0, 0.2, 0.8, 1);
    animation-iteration-count: infinite;
`;
