import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterContainer = styled.footer`
  background-color: #ff69b4;
  color: white;
  padding: 50px 0;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 20px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialIcon = styled(motion.a)`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    color: #ffd1dc;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`; 