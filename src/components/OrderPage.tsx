import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PageContainer,
  Form,
  Input,
  Label,
  Button,
  OrderSummary,
  Title,
  Price,
  BackButton
} from '../styles/OrderPage.styles';

interface OrderPageProps {
  cakeName: string;
  price: string;
  onSubmit: () => void;
  onBack: () => void;
}

const OrderPage: React.FC<OrderPageProps> = ({ cakeName, price, onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cep: '',
    street: '',
    number: '',
    complement: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do pedido:', { ...formData, cakeName, price });
    onSubmit();
  };

  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <OrderSummary>
          <Title>Finalizar Pedido</Title>
          <h3>{cakeName}</h3>
          <Price>{price}</Price>
        </OrderSummary>

        <Form onSubmit={handleSubmit}>
          <Label>Nome completo</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome completo"
            required
          />

          <Label>Telefone</Label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
            required
          />

          <Label>CEP</Label>
          <Input
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            placeholder="00000-000"
            required
          />

          <Label>Rua</Label>
          <Input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="Nome da rua"
            required
          />

          <Label>Número</Label>
          <Input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Número da casa/apto"
            required
          />

          <Label>Complemento</Label>
          <Input
            type="text"
            name="complement"
            value={formData.complement}
            onChange={handleChange}
            placeholder="Apto, bloco, referência (opcional)"
          />

          <Button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Confirmar Pedido
          </Button>
        </Form>

        <BackButton
          onClick={onBack}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Voltar para o Cardápio
        </BackButton>
      </motion.div>
    </PageContainer>
  );
};

export default OrderPage; 