'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Container, Button, Stack, useTheme } from '@mui/material';
import { keyframes } from '@mui/system';
import { alpha } from '@mui/material/styles';

// Definindo as cores do fundo texturizado
const blackColor = '#0A0A0A';
const bordeauxColor = '#260d0d';
const darkBordeauxColor = '#1a0808';
const lightBordeauxColor = '#3d1414';

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

const shimmer = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const theme = useTheme();

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
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
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
          background: `linear-gradient(110deg, ${alpha(bordeauxColor, 0.15)} 0%, ${alpha(darkBordeauxColor, 0.05)} 100%)`,
          backgroundSize: '200% 100%',
          animation: `${shimmer} 15s infinite linear`,
          zIndex: 1,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            maxWidth: 'md',
            animation: mounted ? `${fadeIn} 0.8s ease-out` : 'none',
          }}
        >
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
            Assessoria Jurídica Especializada
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: alpha('#e0e0e0', 0.95),
              mb: 4,
              mt: 4,
              fontWeight: 400,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              maxWidth: '90%',
              textShadow: `1px 1px 2px ${alpha(blackColor, 0.7)}`,
            }}
          >
            Soluções jurídicas personalizadas para proteger seus interesses e direitos
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ mt: 6 }}
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
                  bgcolor: lightBordeauxColor,
                },
              }}
            >
              Áreas de Atuação
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
              Entre em Contato
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