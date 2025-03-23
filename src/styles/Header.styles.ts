import styled from 'styled-components';
import { Link } from 'react-scroll';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const Logo = styled.h1`
  font-family: 'RubikBubbles', cursive;
  font-size: 2rem;
  color: #ff69b4;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff69b4;
  }
`; 