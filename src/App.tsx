import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import CakeSection from './components/CakeSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled.div`
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <CakeSection />
          <Testimonials />
          <Footer />
        </motion.div>
      </AppContainer>
    </>
  );
};

export default App; 