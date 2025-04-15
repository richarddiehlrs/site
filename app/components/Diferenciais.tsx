'use client';

import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';

const Diferenciais: React.FC = () => {
  const theme = useTheme();
  const goldColor = '#E5B27E';
  const blackColor = '#0A0A0A';

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
        backgroundColor: blackColor,
        position: 'relative',
        overflow: 'hidden',
        borderTop: `3px solid ${goldColor}`,
        borderBottom: `3px solid ${goldColor}`
      }}
    >
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
            mb: { xs: 5, md: 7 },
            pt: 2,
            color: 'white',
            fontFamily: theme.typography.h2.fontFamily,
            textTransform: 'uppercase',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-20px',
              left: 0,
              width: '100%',
              height: '3px',
              background: goldColor
            }
          }}
        >
          O QUE FAZ DA <span style={{ fontFamily: 'serif' }}>D&R</span> UMA ESCOLHA INTELIGENTE
        </Typography>

        {/* Linha central */}
        <Box 
          sx={{
            position: 'absolute',
            top: '130px',
            bottom: 0,
            left: '50%',
            width: '4px',
            background: goldColor,
            transform: 'translateX(-50%)',
            display: { xs: 'none', md: 'block' },
            zIndex: 0
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 6, md: 8 }
          }}
        >
          {diferenciais.map((diferencial, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                width: '100%',
                position: 'relative',
                justifyContent: diferencial.align === 'right' ? 'flex-end' : 'flex-start',
              }}
            >
              <Box
                sx={{
                  width: { xs: '100%', md: '45%' },
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Linha horizontal */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    [diferencial.align === 'right' ? 'left' : 'right']: '-10%',
                    width: '10%',
                    height: '3px',
                    background: goldColor,
                    transform: 'translateY(-50%)',
                    zIndex: 0,
                    display: { xs: 'none', md: 'block' }
                  }}
                />
                
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: diferencial.align === 'right' ? 'row' : 'row-reverse',
                      justifyContent: diferencial.align === 'right' ? 'flex-start' : 'flex-end',
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: goldColor,
                        fontSize: { xs: '1.3rem', md: '1.5rem' },
                        fontWeight: 600,
                        fontFamily: theme.typography.h4.fontFamily,
                        lineHeight: 1.4,
                        background: blackColor,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      {diferencial.title}
                      <Box
                        sx={{
                          width: 35,
                          height: 35,
                          borderRadius: '50%',
                          backgroundColor: goldColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <CheckIcon 
                          sx={{
                            color: blackColor,
                            fontSize: '1.25rem'
                          }} 
                        />
                      </Box>
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: alpha('#fff', 0.95),
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      lineHeight: 1.8,
                      textAlign: diferencial.align === 'right' ? 'left' : 'right',
                      fontWeight: 300,
                      maxWidth: '400px',
                      marginLeft: diferencial.align === 'right' ? 0 : 'auto',
                      marginRight: diferencial.align === 'right' ? 'auto' : 0,
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