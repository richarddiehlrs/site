'use client';

import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const Diferenciais: React.FC = () => {
  const theme = useTheme();

  const diferenciais = [
    {
      title: "Advocacia preventiva que evita problemas antes que aconteçam",
      description: "Na D&R Advocacia, acreditamos que a melhor forma de resolver um problema é evitá-lo. Nossa abordagem preventiva identifica riscos jurídicos antes que se tornem problemas, protegendo seu patrimônio e sua empresa.",
      align: 'right'
    },
    {
      title: "Atendimento personalizado que constrói confiança",
      description: "Cada cliente é único, e por isso oferecemos um atendimento personalizado e próximo. Nossa equipe está sempre disponível para entender suas necessidades e oferecer soluções jurídicas sob medida.",
      align: 'left'
    },
    {
      title: "Foco em educação jurídica que transforma conhecimento em poder",
      description: "Além de oferecer soluções jurídicas, nos dedicamos a educar nossos clientes sobre seus direitos e obrigações. O conhecimento jurídico é uma ferramenta poderosa para a tomada de decisões estratégicas.",
      align: 'right'
    },
    {
      title: "Multidisciplinaridade e estratégia integrada",
      description: "Nossa equipe multidisciplinar combina expertise em diferentes áreas do Direito para oferecer soluções integradas e completas. Trabalhamos em conjunto para proteger seus interesses de forma abrangente.",
      align: 'left'
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 6 },
        backgroundColor: theme.palette.primary.main,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Linhas decorativas */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(to right, transparent, ${theme.palette.common.white}, transparent)`,
          opacity: 0.3
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(to right, transparent, ${theme.palette.common.white}, transparent)`,
          opacity: 0.3
        }}
      />

      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          position: 'relative'
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            fontWeight: 700,
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            color: theme.palette.common.white,
            fontFamily: theme.typography.h4.fontFamily
          }}
        >
          O QUE FAZ DA <span style={{ fontFamily: 'serif' }}>D&R</span> UMA ESCOLHA INTELIGENTE
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 4, md: 6 }
          }}
        >
          {diferenciais.map((diferencial, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'center', sm: 'flex-start' },
                gap: { xs: 2, sm: 3 },
                position: 'relative',
                ml: { sm: diferencial.align === 'left' ? 0 : 'auto' },
                mr: { sm: diferencial.align === 'right' ? 0 : 'auto' },
                maxWidth: { sm: '80%' }
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  order: { xs: 1, sm: diferencial.align === 'right' ? 2 : 1 }
                }}
              >
                <Box
                  sx={{
                    width: { xs: '40px', sm: '50px' },
                    height: { xs: '40px', sm: '50px' },
                    borderRadius: '50%',
                    backgroundColor: theme.palette.common.white,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <CheckIcon sx={{ color: theme.palette.primary.main, fontSize: { xs: '1.3rem', sm: '1.5rem' } }} />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    maxWidth: '400px',
                    textAlign: { xs: 'center', sm: diferencial.align }
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                      fontWeight: 600,
                      color: theme.palette.common.white,
                      fontFamily: theme.typography.h4.fontFamily
                    }}
                  >
                    {diferencial.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                      color: 'rgba(255, 255, 255, 0.85)',
                      lineHeight: 1.6
                    }}
                  >
                    {diferencial.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Diferenciais; 