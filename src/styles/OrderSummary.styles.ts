import styled from 'styled-components';
import { motion } from 'framer-motion';

export const OrderSummary = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  background: #fff;
  border-radius: 15px;
  text-align: center;
  border: 2px solid #ff69b4;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h2`
  color: #ff69b4;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-family: 'RubikBubbles', cursive;
`;

export const Price = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 1rem;
`;

export const BackButton = styled(motion.button)`
  background: #ff69b4;
  border: none;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  max-width: 250px;
  transition: all 0.3s ease;

  &:hover {
    background: #ff1493;
    box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
  }
`; 