import React from 'react';
import {
  FooterContainer,
  Content,
  Section,
  Title,
  ContactInfo,
  SocialLinks,
  SocialIcon,
  Copyright
} from '../styles/Footer.styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer id="contact">
      <Content>
        <Section>
          <Title>Contato</Title>
          <ContactInfo>
            <p>📞 (24) 99955-1747</p>
            <p>✉️ @doces_&_artes</p>
            <p>📍 Rua Da Limeira TRAV Carlos Mochiba casa 10</p>
            <p>📍 Cep: 23955375</p>
          </ContactInfo>
        </Section>

        <Section>
          <Title>Horário de Funcionamento</Title>
          <p>Terça a sexta: 9h às 17h</p>
          <p>Sábado: 9h às 12h</p>
        </Section>

        <Section>
          <Title>Redes Sociais</Title>
          <SocialLinks>
            <SocialIcon
              href="https://www.instagram.com/doces__artes?igsh=MWZncnBjbTJ4dXMydQ=="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              📸
            </SocialIcon>
            <SocialIcon
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              👥
            </SocialIcon>
            <SocialIcon
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              📱
            </SocialIcon>
          </SocialLinks>
        </Section>
      </Content>

      <Copyright>
        <p>© 2024 Doce Confeitaria. Todos os direitos reservados.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 