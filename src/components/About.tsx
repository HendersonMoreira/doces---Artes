import React from 'react';
import {
  AboutSection,
  Container,
  MainTitle,
  SubTitle,
  Description,
  ImageContainer,
  StyledImage,
  InfoSection,
  TextBlock,
  InfoTitle,
  InfoText,
  RoundImageContainer,
  RoundImage
} from '../styles/About.styles';

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container>
        <MainTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre Nós
        </MainTitle>
        
        <SubTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Nossa História
        </SubTitle>

        <Description
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Em 2024, nasceu o sonho da Doces & Artes. Uma ideia que começou em nossa cozinha 
          e cresceu com muito amor e dedicação. Agora, em 2025, estamos expandindo nossos 
          horizontes com nossa loja virtual, levando mais doçura para a vida de nossos clientes. 
          Especializamo-nos em bolos artesanais e deliciosos bolos de pote, cada um feito 
          com ingredientes selecionados e muito carinho. Nossa maior responsabilidade é com 
          a satisfação dos nossos clientes, garantindo produtos de qualidade e um 
          atendimento excepcional.
        </Description>

        <ImageContainer
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <StyledImage 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgbzCS47oXrw125bN0oKwz13kBi8vB9fNi0gNz7qBy9IEfCExJ06HWza8CImntcjqESA&usqp=CAU" 
            alt="Nosso bolo especial" 
          />
        </ImageContainer>

        {/* Primeira seção com imagem redonda */}
        <InfoSection>
          <TextBlock>
            <InfoTitle
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Bolos Artesanais
            </InfoTitle>
            <InfoText
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cada bolo é uma obra de arte única, feita com ingredientes selecionados 
              e decorada com todo o carinho para tornar seu momento ainda mais especial.
            </InfoText>
          </TextBlock>
          <RoundImageContainer
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <RoundImage 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgbzCS47oXrw125bN0oKwz13kBi8vB9fNi0gNz7qBy9IEfCExJ06HWza8CImntcjqESA&usqp=CAU" 
              alt="Bolo artesanal" 
            />
          </RoundImageContainer>
        </InfoSection>

        {/* Segunda seção com imagem redonda (deslocada para esquerda) */}
        <InfoSection>
          <TextBlock>
            <InfoTitle
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Bolos de Pote
            </InfoTitle>
            <InfoText
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Deliciosas camadas de bolo e recheio em versão individual, 
              perfeitas para qualquer ocasião e com sabores irresistíveis.
            </InfoText>
          </TextBlock>
          <RoundImageContainer
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <RoundImage 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgbzCS47oXrw125bN0oKwz13kBi8vB9fNi0gNz7qBy9IEfCExJ06HWza8CImntcjqESA&usqp=CAU" 
              alt="Bolo de pote" 
            />
          </RoundImageContainer>
        </InfoSection>
      </Container>
    </AboutSection>
  );
};

export default About; 