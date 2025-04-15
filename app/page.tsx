'use client';

import Box from '@mui/material/Box';
import Providers from './providers';
import Header from './components/Header';
import Hero from './components/Hero';
import AreasAtuacao from './components/AreasAtuacao';
import Sobre from './components/Sobre';
import Depoimentos from './components/Depoimentos';
import Planejamento from './components/Planejamento';
import Contato from './components/Contato';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Diferenciais from './components/Diferenciais';

export default function Home() {
  return (
    <Providers>
      <Box component="main">
        <Header />
        <Hero />
        <AreasAtuacao />
        <Diferenciais />
        <Sobre />
        <Planejamento />
        <Depoimentos />
        <Contato />
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </Box>
    </Providers>
  );
}
