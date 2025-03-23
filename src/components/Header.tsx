import React from 'react';
import { Link } from 'react-scroll';
import {
  HeaderContainer,
  Logo,
  Nav,
  NavLink
} from '../styles/Header.styles';

const Header: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <HeaderContainer>
      <Logo onClick={scrollToTop}>Doces & Artes</Logo>
      <Nav>
        <NavLink to="home" smooth={true} duration={800}>Início</NavLink>
        <NavLink to="about" smooth={true} duration={800}>Sobre</NavLink>
        <NavLink to="cakes" smooth={true} duration={800}>Produtos</NavLink>
        <NavLink to="testimonials" smooth={true} duration={800}>Depoimentos</NavLink>
        <NavLink to="contact" smooth={true} duration={800}>Contato</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 