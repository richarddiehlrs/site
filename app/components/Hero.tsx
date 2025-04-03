'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography, Container, Button, Stack, useTheme, alpha } from '@mui/material';
import { keyframes } from '@mui/system';

const bordeauxColor = '#260d0d';
// const darkBordeauxColor = '#1a0808'; // Não utilizado
const lightBordeauxColor = '#491a1a';
const blackColor = '#0A0A0A';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// const shimmer = keyframes`
//   0% {
//     background-position: -100% 0;
//   }
//   100% {
//     background-position: 200% 0;
//   }
// `;

// Array com todos os textos que serão alternados
const heroTexts = [
  {
    title: "Transformamos negócios com segurança jurídica.",
    content: [
      "✅ Mais do que resolver problemas, blindamos o que você construiu e preparamos sua empresa — e seu patrimônio — para crescer com confiança e estratégia.",
      "✅ Com atendimento personalizado, visão preventiva e foco em resultados, somos o parceiro jurídico que antecipa riscos e protege o que realmente importa para você — porque nascemos para ser referência nacional em advocacia empresarial estratégica."
    ]
  },
  {
    title: "O Que Faz da D&R uma Escolha Inteligente",
    content: [
      "✅ Advocacia preventiva que evita problemas antes que aconteçam. Atuamos de forma estratégica para prevenir riscos jurídicos antes que se tornem conflitos ou processos — protegendo o patrimônio e o futuro do cliente.",
      "✅ Atendimento personalizado que constrói confiança. Cada cliente é único. Nosso atendimento é próximo, contínuo e estratégico, com foco em relações duradouras."
    ]
  },
  {
    title: "Por que escolher a D&R Advocacia",
    content: [
      "✅ Foco em educação jurídica que transforma conhecimento em poder. Empoderamos nossos clientes com conhecimento. Oferecemos conteúdos e orientações práticas para que estejam sempre um passo à frente.",
      "✅ Multidisciplinaridade e estratégia integrada. Reunimos diferentes áreas do direito em um só lugar, com visão estratégica e soluções completas para empresas e famílias."
    ]
  }
];

const Hero = () => {
  const theme = useTheme();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  // Alternar entre os textos a cada 10 segundos
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: 'relative',
        height: { xs: 'auto', md: '100vh' },
        minHeight: { xs: '90vh', md: '600px' },
        paddingTop: { xs: '80px', md: '0' },
        paddingBottom: { xs: '60px', md: '0' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        overflow: 'hidden',
        background: `
          linear-gradient(to right, ${alpha(blackColor, 0.9)}, ${alpha(blackColor, 0.95)}),
          repeating-linear-gradient(
            45deg, 
            ${alpha(bordeauxColor, 0.05)} 0px, 
            ${alpha(bordeauxColor, 0.08)} 2px, 
            transparent 2px, 
            transparent 10px
          ),
          radial-gradient(
            circle at 50% 50%,
            ${alpha(bordeauxColor, 0.05)} 0%,
            ${alpha(bordeauxColor, 0.02)} 20%,
            ${alpha(bordeauxColor, 0.01)} 40%,
            transparent 60%
          ),
          url("/images/pattern.png")
        `,
        backgroundSize: 'cover, auto, cover, 400px',
        backgroundPosition: 'center',
        backgroundBlendMode: 'normal, overlay, overlay, normal',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(110deg, ${alpha(bordeauxColor, 0.15)} 0%, ${alpha('#1a0808', 0.05)} 100%)`,
          backgroundSize: '200% 100%',
          animation: `${fadeIn} 15s infinite linear`,
          zIndex: 1,
          pointerEvents: 'none',
        },
        mt: { xs: '0', md: '0' },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, pt: { xs: 8, md: 0 } }}>
        <Box sx={{ maxWidth: '800px', animation: mounted ? `${fadeIn} 0.8s ease-out` : 'none' }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: 'white',
              fontFamily: theme.typography.h1.fontFamily,
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              mb: 2,
              textShadow: `1px 1px 3px ${alpha(blackColor, 0.6)}`,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-15px',
                left: '0',
                width: '120px',
                height: '3px',
                background: `linear-gradient(to right, ${bordeauxColor}, ${alpha(bordeauxColor, 0.3)})`,
              }
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                {heroTexts[currentTextIndex].title === "Por que escolher a D&R Advocacia" 
                  ? <span>Por que escolher a D<span style={{ fontFamily: 'serif' }}>&</span>R Advocacia</span>
                  : heroTexts[currentTextIndex].title === "O Que Faz da D&R uma Escolha Inteligente"
                  ? <span>O Que Faz da D<span style={{ fontFamily: 'serif' }}>&</span>R uma Escolha Inteligente</span>
                  : heroTexts[currentTextIndex].title
                }
              </motion.div>
            </AnimatePresence>
          </Typography>
          
          <Box
            sx={{
              color: alpha('#e0e0e0', 0.95),
              mb: 4,
              mt: 4,
              fontWeight: 400,
              fontSize: { xs: '1.2rem', md: '1.4rem' },
              maxWidth: '95%',
              textShadow: `1px 1px 2px ${alpha(blackColor, 0.7)}`,
              lineHeight: 1.7,
              minHeight: '240px'
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {heroTexts[currentTextIndex].content.map((paragraph, idx) => (
                  <Typography 
                    key={idx} 
                    variant="h5" 
                    component="div" 
                    sx={{ 
                      mb: 3, 
                      fontWeight: idx === 0 ? 500 : 400,
                      fontSize: idx === 0 ? { xs: '1.2rem', md: '1.4rem' } : { xs: '1.1rem', md: '1.3rem' },
                      opacity: idx === 0 ? 1 : 0.95,
                      display: 'flex',
                      alignItems: 'flex-start',
                      lineHeight: 1.7
                    }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </motion.div>
            </AnimatePresence>
          </Box>
          
          {/* Indicadores para mostrar qual slide está ativo */}
          <Box sx={{ 
            display: 'flex', 
            gap: 1, 
            mb: 4, 
            justifyContent: 'center',
            position: 'relative',
            zIndex: 5
          }}>
            {heroTexts.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentTextIndex(index)}
                sx={{
                  width: { xs: '12px', md: '10px' },
                  height: { xs: '12px', md: '10px' },
                  borderRadius: '50%',
                  backgroundColor: index === currentTextIndex ? theme.palette.secondary.light : alpha('#fff', 0.5),
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </Box>
          
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ 
              mt: 2,
              position: 'relative',
              zIndex: 5
            }}
          >
            <Button
              variant="contained"
              href="#atuacao"
              size="large"
              sx={{
                py: 1.5,
                px: 4,
                fontSize: '1rem',
                bgcolor: bordeauxColor,
                '&:hover': {
                  bgcolor: alpha(bordeauxColor, 0.8),
                },
              }}
            >
              Conheça Nossas Soluções
            </Button>
            <Button
              variant="outlined"
              href="#contato"
              size="large"
              sx={{
                py: 1.5,
                px: 4,
                fontSize: '1rem',
                color: 'white',
                borderColor: alpha(bordeauxColor, 0.6),
                '&:hover': {
                  borderColor: bordeauxColor,
                  backgroundColor: alpha(bordeauxColor, 0.1),
                },
              }}
            >
              Fale com um Especialista
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* Decorative divider */}
      <Box 
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          overflow: 'hidden',
          zIndex: 3,
          display: { xs: 'none', md: 'block' }
        }}
      >
        <Box 
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          sx={{
            width: '100%',
            height: '4rem',
            color: 'white',
          }}
        >
          <Box 
            component="path"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0,"
            fill="currentColor"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero; 