'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography, Container, Button, useTheme } from '@mui/material';
import { keyframes } from '@emotion/react';
import { alpha } from '@mui/material/styles';

const bordeauxColor = '#260d0d';
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

interface HeroText {
  title: string;
  content: Array<string | { text: string; fontWeight?: number }>;
}

const heroTexts: HeroText[] = [
  {
    title: "Transformamos negócios com segurança jurídica.",
    content: [
      "Mais do que resolver problemas, protegemos o que você construiu e preparamos sua empresa — e seu patrimônio — para crescer com confiança e estratégia.",
      "Com atendimento personalizado, visão preventiva e foco em resultados, somos o parceiro jurídico que antecipa riscos e protege o que realmente importa para você — porque nascemos para ser referência nacional em advocacia empresarial estratégica."
    ]
  },
  {
    title: "O Que Faz da D&R uma Escolha Inteligente",
    content: [
      "Advocacia preventiva que evita problemas antes que aconteçam. Atuamos de forma estratégica para prevenir riscos jurídicos antes que se tornem conflitos ou processos — protegendo o patrimônio e o futuro do cliente.",
      "Atendimento personalizado que constrói confiança. Cada cliente é único. Nosso atendimento é próximo, contínuo e estratégico, com foco em relações duradouras."
    ]
  },
  {
    title: "Por que escolher a D&R Advocacia",
    content: [
      "Foco em educação jurídica que transforma conhecimento em poder. Empoderamos nossos clientes com conhecimento. Oferecemos conteúdos e orientações práticas para que estejam sempre um passo à frente.",
      "Multidisciplinaridade e estratégia integrada. Reunimos diferentes áreas do direito em um só lugar, com visão estratégica e soluções completas para empresas e famílias."
    ]
  }
];

const Hero = () => {
  const theme = useTheme();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  // Alternar entre os textos a cada 15 segundos
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
    }, 15000);
    
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
        height: 'auto',
        minHeight: { xs: '100vh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        overflow: 'visible',
        paddingTop: { xs: '100px', sm: '120px', md: '80px' },
        paddingBottom: { xs: '60px', sm: '80px', md: '60px' },
        background: `
          linear-gradient(to right, ${alpha(blackColor, 0.7)}, ${alpha(blackColor, 0.7)}),
          url('/images/banner.jpg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(110deg, ${alpha(bordeauxColor, 0.1)} 0%, ${alpha('#1a0808', 0.05)} 100%)`,
          backgroundSize: '200% 100%',
          animation: `${fadeIn} 15s infinite linear`,
          zIndex: 1,
          pointerEvents: 'none',
        }
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          minHeight: { xs: 'calc(100vh - 160px)', md: 'auto' },
          justifyContent: 'center'
        }}
      >
        <Box sx={{ 
          maxWidth: { xs: '100%', md: '800px' },
          animation: mounted ? `${fadeIn} 0.8s ease-out` : 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 3, md: 4 }
        }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: 'white',
              fontFamily: theme.typography.h1.fontFamily,
              fontWeight: 700,
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' },
              lineHeight: { xs: 1.3, md: 1.2 },
              mb: { xs: 2, md: 3 },
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
              mb: { xs: 2, sm: 3, md: 4 },
              mt: { xs: 2, sm: 3, md: 4 },
              fontWeight: 400,
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem', lg: '1.2rem' },
              maxWidth: '100%',
              textShadow: `1px 1px 2px ${alpha(blackColor, 0.7)}`,
              lineHeight: 1.6,
              flex: 1
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
                <Typography
                  variant="body1"
                  sx={{
                    maxWidth: '800px',
                    mx: 'auto',
                    fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                    color: alpha('#fff', 0.95),
                    lineHeight: 1.7,
                    mb: 4,
                  }}
                >
                  {heroTexts[currentTextIndex].content.map((content, index) => (
                    <Typography
                      key={index}
                      component="span"
                      sx={{
                        display: 'block',
                        mb: 2,
                        fontWeight: typeof content === 'object' ? content.fontWeight : 400,
                      }}
                    >
                      {typeof content === 'object' ? content.text : content}
                    </Typography>
                  ))}
                </Typography>
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
            zIndex: 10
          }}>
            {heroTexts.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentTextIndex(index)}
                sx={{
                  width: { xs: '14px', md: '12px' },
                  height: { xs: '14px', md: '12px' },
                  borderRadius: '50%',
                  backgroundColor: index === currentTextIndex ? theme.palette.secondary.main : alpha('#fff', 0.5),
                  border: '1px solid rgba(255,255,255,0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  WebkitTransition: 'all 0.3s ease',
                  WebkitBackfaceVisibility: 'hidden',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  }
                }}
              />
            ))}
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 3 },
            width: '100%',
            mt: { xs: 3, md: 4 },
            mb: { xs: 4, md: 5 }
          }}>
            <Button
              variant="contained"
              href="#atuacao"
              size="large"
              sx={{
                py: { xs: 1.5, sm: 2 },
                px: { xs: 3, sm: 4 },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                bgcolor: bordeauxColor,
                color: 'white',
                width: { xs: '100%', sm: 'auto' },
                minWidth: { sm: '200px' },
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                '&:hover': {
                  bgcolor: alpha(bordeauxColor, 0.9),
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Conheça Nossas Soluções
            </Button>
            <Button
              variant="outlined"
              href="#contato"
              size="large"
              sx={{
                py: { xs: 1.5, sm: 2 },
                px: { xs: 3, sm: 4 },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                color: 'white',
                width: { xs: '100%', sm: 'auto' },
                minWidth: { sm: '200px' },
                borderColor: alpha('#fff', 0.6),
                borderWidth: '2px',
                '&:hover': {
                  borderColor: '#fff',
                  backgroundColor: alpha('#fff', 0.1),
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Fale com um Especialista
            </Button>
          </Box>
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