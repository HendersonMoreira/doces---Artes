import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TestimonialsSection = styled.section`
  padding: 50px 20px 80px;
  background-color: #fff5f8;
  margin-top: -20px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #ff69b4;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-family: 'Playfair Display', serif;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: #ff69b4;
  }
`;

export const TestimonialCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  text-align: center;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(255, 105, 180, 0.1);
`;

export const ClientName = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
`;

export const Stars = styled.div`
  color: #ffd700;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  letter-spacing: 2px;
`;

export const Comment = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  font-style: italic;
  position: relative;
  padding: 0 0.5rem;
  margin: 1rem 0;
  
  &::before {
    content: '"';
    color: #ff69b4;
    font-size: 1.5rem;
    font-family: serif;
    margin-right: 4px;
  }
  
  &::after {
    content: '"';
    color: #ff69b4;
    font-size: 1.5rem;
    font-family: serif;
    margin-left: 4px;
  }
`;

export const CarouselContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  .swiper-pagination-bullet {
    background: #ff69b4;
    opacity: 0.5;
    
    &-active {
      opacity: 1;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #ff69b4;
    
    &:hover {
      color: #ff4da6;
    }
    
    &::after {
      font-size: 1.5rem;
    }
  }

  .swiper-container {
    padding: 20px 0;
  }
`; 