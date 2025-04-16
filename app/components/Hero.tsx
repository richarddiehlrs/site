'use client';

import { useState, useEffect } from 'react';
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
  content: string[];
}

const heroTexts: HeroText[] = [
  {
    title: "Transformamos negócios com segurança jurídica.",
    content: [
      "Mais do que resolver problemas, protegemos o que você construiu e preparamos sua empresa — e seu patrimônio — para crescer com confiança e estratégia.",
      "Com atendimento personalizado, visão preventiva e foco em resultados, somos o parceiro jurídico que antecipa riscos e protege o que realmente importa para você — porque nascemos para ser referência nacional em advocacia empresarial estratégica."
    ]
  }
];

const Hero = () => {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
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
        alignItems: 'flex-start',
        justifyContent: 'center',
        color: 'white',
        overflow: 'visible',
        paddingTop: { xs: '240px', sm: '250px', md: '220px' },
        paddingBottom: { xs: '60px', sm: '80px', md: '60px' },
        background: `
          linear-gradient(to right, ${alpha(blackColor, 0.6)}, ${alpha(blackColor, 0.6)}),
          url('/images/office-banner.jpg?v=2')
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
          gap: { xs: 3, md: 4 },
          pt: { xs: 10, md: 8 }
        }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: 'white',
              fontFamily: theme.typography.h1.fontFamily,
              fontWeight: 700,
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' },
              lineHeight: { xs: 1.2, md: 1.1 },
              mb: { xs: 3, md: 4 },
              textShadow: `2px 2px 4px ${alpha(blackColor, 0.5)}`,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-20px',
                left: '0',
                width: '160px',
                height: '4px',
                background: `linear-gradient(to right, ${bordeauxColor}, ${alpha(bordeauxColor, 0.3)})`,
              }
            }}
          >
            {heroTexts[0].title}
          </Typography>
          
          <Box
            sx={{
              color: alpha('#e0e0e0', 0.95),
              mb: { xs: 3, sm: 4, md: 5 },
              mt: { xs: 4, sm: 5, md: 6 },
              fontWeight: 400,
              fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem', lg: '1.4rem' },
              maxWidth: '100%',
              textShadow: `1px 1px 3px ${alpha(blackColor, 0.6)}`,
              lineHeight: 1.7,
              flex: 1,
              letterSpacing: '0.02em'
            }}
          >
            <Typography
              variant="body1"
              sx={{
                maxWidth: '900px',
                mx: 'auto',
                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem', lg: '1.4rem' },
                color: alpha('#fff', 0.95),
                lineHeight: 1.7,
                mb: 4,
                letterSpacing: '0.02em'
              }}
            >
              {heroTexts[0].content.map((text, index) => (
                <Typography
                  key={index}
                  component="p"
                  sx={{
                    display: 'block',
                    marginTop: index > 0 ? '1.5rem' : undefined,
                    fontWeight: 400,
                    fontSize: 'inherit',
                    lineHeight: 'inherit',
                    letterSpacing: 'inherit'
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Typography>
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