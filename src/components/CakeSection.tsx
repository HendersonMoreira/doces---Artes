import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import OrderPage from './OrderPage';
import {
  Section,
  Title,
  CardsContainer,
  Card,
  CakeImage,
  CakeName,
  CakeDescription,
  Price,
  Button,
  ShowMoreButton
} from '../styles/CakeSection.styles';

const cakes = [
  {
    id: 1,
    name: 'Bolo de Chocolate',
    description: 'Delicioso bolo de chocolate com cobertura de ganache',
    price: 'R$ 89,90',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgbzCS47oXrw125bN0oKwz13kBi8vB9fNi0gNz7qBy9IEfCExJ06HWza8CImntcjqESA&usqp=CAU'
  },
  {
    id: 2,
    name: 'Red Velvet',
    description: 'Clássico bolo vermelho com cobertura de cream cheese',
    price: 'R$ 99,90',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgbzCS47oXrw125bN0oKwz13kBi8vB9fNi0gNz7qBy9IEfCExJ06HWza8CImntcjqESA&usqp=CAU'
  },
  {
    id: 3,
    name: 'Bolo de Morango',
    description: 'Bolo recheado com morangos frescos e chantilly',
    price: 'R$ 94,90',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgbzCS47oXrw125bN0oKwz13kBi8vB9fNi0gNz7qBy9IEfCExJ06HWza8CImntcjqESA&usqp=CAU'
  },
  {
    id: 4,
    name: 'Bolo de Cenoura',
    description: 'Tradicional bolo de cenoura com cobertura de chocolate',
    price: 'R$ 79,90',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgbzCS47oXrw125bN0oKwz13kBi8vB9fNi0gNz7qBy9IEfCExJ06HWza8CImntcjqESA&usqp=CAU'
  },
  {
    id: 5,
    name: 'Bolo de Limão',
    description: 'Bolo de limão com cobertura de mousse de limão',
    price: 'R$ 84,90',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgbzCS47oXrw125bN0oKwz13kBi8vB9fNi0gNz7qBy9IEfCExJ06HWza8CImntcjqESA&usqp=CAU'
  },
  {
    id: 6,
    name: 'Bolo de Coco',
    description: 'Bolo de coco com cobertura de beijinho',
    price: 'R$ 89,90',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgbzCS47oXrw125bN0oKwz13kBi8vB9fNi0gNz7qBy9IEfCExJ06HWza8CImntcjqESA&usqp=CAU'
  }
];

const CakeSection: React.FC = () => {
  const [selectedCake, setSelectedCake] = useState<typeof cakes[0] | null>(null);
  const [showOrderPage, setShowOrderPage] = useState(false);
  const [showAllCakes, setShowAllCakes] = useState(false);

  const handleOrderSubmit = () => {
    alert('Pedido confirmado! Entraremos em contato em breve.');
    setSelectedCake(null);
    setShowOrderPage(false);
  };

  const visibleCakes = showAllCakes ? cakes : cakes.slice(0, 3);

  if (showOrderPage && selectedCake) {
    return (
      <OrderPage
        cakeName={selectedCake.name}
        price={selectedCake.price}
        onSubmit={handleOrderSubmit}
        onBack={() => setShowOrderPage(false)}
      />
    );
  }

  return (
    <Section id="cakes">
      <Title>Nossos Bolos</Title>
      <CardsContainer>
        <AnimatePresence>
          {visibleCakes.map((cake, index) => (
            <Card
              key={cake.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <CakeImage src={cake.image} alt={cake.name} />
              <CakeName>{cake.name}</CakeName>
              <CakeDescription>{cake.description}</CakeDescription>
              <Price>{cake.price}</Price>
              <Button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedCake(cake);
                  setShowOrderPage(true);
                }}
              >
                Comprar
              </Button>
            </Card>
          ))}
        </AnimatePresence>
      </CardsContainer>
      {cakes.length > 3 && (
        <ShowMoreButton
          showAllCakes={showAllCakes}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAllCakes(!showAllCakes)}
        >
          {showAllCakes ? 'Ver menos' : 'Ver mais bolos'}
        </ShowMoreButton>
      )}
    </Section>
  );
};

export default CakeSection; 