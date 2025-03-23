import React from 'react';
import { Link } from 'react-scroll';
import {
  HeroSection,
  Title,
  Message,
  Button,
  Decoration
} from '../styles/Hero.styles';
import Stars from './Stars';

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <Stars />
      
      {/* Decorative elements */}
      <Decoration
        style={{ top: '15%', left: '15%' }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <Decoration
        style={{ bottom: '20%', right: '10%' }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ 
          opacity: 1, 
          y: 0,
        }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 100
        }}
        className="animate-underline"
      >
        Doces & Artes
      </Title>
      
      <Message
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          delay: 0.3,
          type: "spring",
          stiffness: 100
        }}
      >
        Seja bem-vindo à Doce & Artes, onde sua alegria é nossa maior paixão. 
        Cada doce é feito com amor e dedicação para tornar seus momentos ainda mais especiais.
      </Message>
      
      <Link to="cakes" smooth={true} duration={800}>
        <Button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.5,
            delay: 0.6,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 6px 20px rgba(255, 105, 180, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Nossos Produtos
        </Button>
      </Link>
    </HeroSection>
  );
};

export default Hero; 