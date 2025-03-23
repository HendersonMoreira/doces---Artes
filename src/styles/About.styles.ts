import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutSection = styled.section`
  padding: 100px 20px;
  background-color: #fff;
  position: relative;
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const MainTitle = styled(motion.h2)`
  color: #ff69b4;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: 'RubikBubbles', cursive;
`;

export const SubTitle = styled(motion.h3)`
  color: #666;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: 'RubikBubbles', cursive;
`;

export const Description = styled(motion.p)`
  color: #666;
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  max-width: 800px;
`;

export const ImageContainer = styled(motion.div)`
  width: 500px;
  height: 350px;
  position: relative;
  margin: 2rem auto;
  padding: 15px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid #ff69b4;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(255, 105, 180, 0.2);
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 250px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  position: relative;
  z-index: 2;
`;

export const InfoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin: 2rem 0;
  width: 100%;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }

  &:last-child {
    margin-left: -50px;
  }

  @media (max-width: 768px) {
    flex-direction: column !important;
    margin-left: 0 !important;
    text-align: center;
  }
`;

export const TextBlock = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const InfoTitle = styled(motion.h2)`
  color: #ff69b4;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: 'RubikBubbles', cursive;
`;

export const InfoText = styled(motion.p)`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 400px;
`;

export const RoundImageContainer = styled(motion.div)`
  width: 250px;
  height: 250px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: radial-gradient(circle at center, #ff69b4 0%, transparent 70%);
    opacity: 0.2;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const RoundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
`; 

