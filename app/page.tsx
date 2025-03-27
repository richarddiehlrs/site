'use client';

import Box from '@mui/material/Box';
import Providers from './providers';
import Header from './components/Header';
import Hero from './components/Hero';
import AreasAtuacao from './components/AreasAtuacao';
import Sobre from './components/Sobre';
import Planejamento from './components/Planejamento';
import Contato from './components/Contato';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <Providers>
      <Box component="main">
        <Header />
        <Hero />
        <AreasAtuacao />
        <Sobre />
        <Planejamento />
        <Contato />
        <Footer />
        <ScrollToTop />
      </Box>
    </Providers>
  );
}
