import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  min-height: 100vh;
  padding: 100px 50px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #ff69b4;
  margin-bottom: 3rem;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const Card = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const CakeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

export const CakeName = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const CakeDescription = styled.p`
  color: #666;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Price = styled.span`
  font-size: 1.25rem;
  color: #ff69b4;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Button = styled(motion.button)`
  background: #ff69b4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

interface ShowMoreButtonProps {
  showAllCakes: boolean;
}

export const ShowMoreButton = styled(motion.button)<ShowMoreButtonProps>`
  background: transparent;
  color: #ff69b4;
  border: 2px solid #ff69b4;
  padding: 12px 30px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 3rem;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &::after {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: ${props => props.showAllCakes ? 'rotate(225deg)' : 'rotate(45deg)'};
    transition: transform 0.3s ease;
  }

  &:hover {
    background: #ff69b4;
    color: white;
    box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
  }
`; 