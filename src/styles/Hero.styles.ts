import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: #fff5f8;
  position: relative;
  overflow: hidden;
`;

export const Title = styled(motion.h1)`
  font-size: 4rem;
  color: #ff69b4;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: #ff69b4;
    transition: width 1s ease;
  }

  &.animate-underline::after {
    width: 50%;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Message = styled(motion.p)`
  font-size: 1.5rem;
  color: #666;
  max-width: 800px;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Button = styled(motion.button)`
  background: #ff69b4;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Decoration = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(255, 105, 180, 0.2);
`; 