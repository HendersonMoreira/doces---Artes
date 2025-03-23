import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff69b4;
  }
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: -0.5rem;
`;

const Button = styled(motion.button)`
  background: #ff69b4;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
  font-size: 1.1rem;

  &:hover {
    background: #ff4da6;
  }
`;

const OrderSummary = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #fff5f8;
  border-radius: 8px;
  text-align: center;
`;

const Title = styled.h3`
  color: #ff69b4;
  margin-bottom: 0.5rem;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

interface OrderFormProps {
  cakeName: string;
  price: string;
  onSubmit: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ cakeName, price, onSubmit }) => {
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

    // Se for o campo CEP, chamar a API
    if (name === "cep" && value.length === 8) {
      fetch(`https://viacep.com.br/ws/${value}/json/`)
        .then(response => response.json())
        .then(data => {
          if (!data.erro) {
            setFormData(prev => ({
              ...prev,
              street: data.logradouro || '',
            }));
          } else {
            alert("CEP inválido. Verifique e tente novamente.");
          }
        })
        .catch(() => alert("Erro ao buscar o endereço. Tente novamente."));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do pedido:', { ...formData, cakeName, price });
    onSubmit();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <OrderSummary>
        <Title>{cakeName}</Title>
        <Price>{price}</Price>
      </OrderSummary>

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
  );
};

export default OrderForm;
