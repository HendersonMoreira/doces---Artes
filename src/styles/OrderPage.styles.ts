import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageContainer = styled.div`
  min-height: 100vh;
  padding: 80px 20px;
  background-color: #fff5f8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin: 2rem auto;
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff69b4;
  }
`;

export const Label = styled.label`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: -0.5rem;
`;

export const Button = styled(motion.button)`
  background: #ff69b4;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
  font-size: 1.1rem;

  &:hover {
    background: #ff4da6;
  }
`;

export const OrderSummary = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  text-align: center;
  border: 2px solid #ff69b4;
`;

export const Title = styled.h2`
  color: #ff69b4;
  margin-bottom: 0.5rem;
  font-size: 2rem;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

export const BackButton = styled(motion.button)`
  background: none;
  border: 2px solid #ff69b4;
  color: #ff69b4;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: #ff69b4;
    color: white;
  }
`; 