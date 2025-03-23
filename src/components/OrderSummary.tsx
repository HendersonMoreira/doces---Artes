import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import {
  OrderSummary,
  Title,
  Price,
  BackButton
} from '../styles/OrderSummary.styles';

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  background: #fff;
`;

const OrderSummaryComponent: React.FC = () => {
  return (
    <Container>
      <OrderSummary>
        <Title>Pedido Confirmado!</Title>
        <Price>Obrigada por escolher a Doces & Artes</Price>
        <Link to="cakes" smooth={true} duration={800}>
          <BackButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voltar para o Cardápio
          </BackButton>
        </Link>
      </OrderSummary>
    </Container>
  );
};

export default OrderSummaryComponent; 