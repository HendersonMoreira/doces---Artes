import React from 'react';
import { StarsContainer, Star } from '../styles/Stars.styles';

const Stars: React.FC = () => {
  const stars = Array.from({ length: 50 }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 2
  }));

  return (
    <StarsContainer>
      {stars.map((star, index) => (
        <Star
          key={index}
          top={star.top}
          left={star.left}
          delay={star.delay}
        />
      ))}
    </StarsContainer>
  );
};

export default Stars; 