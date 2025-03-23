import styled, { keyframes } from 'styled-components';

const twinkle = keyframes`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
`;

export const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

export const Star = styled.div<{ top: number; left: number; delay: number }>`
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  width: 3px;
  height: 3px;
  background-color: #FF69B4;
  border-radius: 50%;
  animation: ${twinkle} 2s infinite;
  animation-delay: ${props => props.delay}s;
  box-shadow: 0 0 5px #FF69B4;
`; 