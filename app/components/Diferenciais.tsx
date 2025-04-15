'use client';

import { Box, Container, Typography, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';

const bordeauxColor = '#260d0d';
const blackColor = '#0A0A0A';
const goldColor = '#E5B27E';

// Função para formatar D&R corretamente
const formatDRText = (text: string) => {
  return text.replace('D&R', 'D\u00A0&\u00A0R');
};

interface Diferencial {
  titulo: string;
  descricao: string;
  align: 'left' | 'right'
}

const diferenciais: Diferencial[] = [
  {
    titulo: "Advocacia preventiva que evita problemas antes que aconteçam",
    descricao: "Atuamos de forma estratégica para prevenir riscos jurídicos antes que se tornem conflitos ou processos — protegendo o patrimônio e o futuro do cliente.",
    align: 'left'
  },
  {
    titulo: "Atendimento personalizado que constrói confiança",
    descricao: "Cada cliente é único. Nosso atendimento é próximo, contínuo e estratégico, com foco em relações duradouras.",
    align: 'right'
  },
  {
    titulo: "Foco em educação jurídica que transforma conhecimento em poder",
    descricao: "Empoderamos nossos clientes com conhecimento. Oferecemos conteúdos e orientações práticas para que estejam sempre um passo à frente.",
    align: 'left'
  },
  {
    titulo: "Multidisciplinaridade e estratégia integrada",
    descricao: "Reunimos diferentes áreas do direito em um só lugar, com visão estratégica e soluções completas para empresas e famílias.",
    align: 'right'
  }
];

const Diferenciais = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        backgroundColor: blackColor,
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #333',
        borderBottom: '1px solid #333'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: 'white',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 700,
            textAlign: 'center',
            mb: { xs: 10, md: 12 },
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            position: 'relative',
            fontFamily: theme.typography.h4.fontFamily,
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-20px',
              left: 0,
              width: '100%',
              height: '2px',
              background: goldColor
            }
          }}
        >
          O QUE FAZ DA <span style={{ fontFamily: 'serif' }}>D&R</span> UMA ESCOLHA INTELIGENTE
        </Typography>

        <Box
          sx={{
            width: '100%',
            position: 'relative',
          }}
        >
          {/* Linha central */}
          <Box 
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: '2px',
              background: goldColor,
              transform: 'translateX(-50%)',
              display: { xs: 'none', md: 'block' },
              zIndex: 0
            }}
          />

          {diferenciais.map((diferencial, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                width: '100%',
                position: 'relative',
                mt: 6,
                mb: 6,
                justifyContent: diferencial.align === 'right' ? 'flex-end' : 'flex-start',
              }}
            >
              <Box
                sx={{
                  width: '45%',
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
                    height: '2px',
                    background: goldColor,
                    transform: 'translateY(-50%)',
                    zIndex: 0
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
                        fontSize: { xs: '1.5rem', md: '1.75rem' },
                        fontWeight: 600,
                        fontFamily: theme.typography.h4.fontFamily,
                        lineHeight: 1.4,
                        background: blackColor,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      {diferencial.titulo}
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
                      fontSize: { xs: '0.95rem', md: '1rem' },
                      lineHeight: 1.8,
                      textAlign: diferencial.align === 'right' ? 'left' : 'right',
                      fontWeight: 300,
                      maxWidth: '400px',
                      marginLeft: diferencial.align === 'right' ? 0 : 'auto',
                      marginRight: diferencial.align === 'right' ? 'auto' : 0,
                    }}
                  >
                    {diferencial.descricao}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Diferenciais; 