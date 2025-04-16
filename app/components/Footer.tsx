'use client';

import Image from 'next/image';
import { Box, Typography, Container, Grid, Link as MuiLink, Divider, useTheme, Theme } from '@mui/material';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

// Mesma cor bordô usada em outros componentes
const bordeauxColor = '#260d0d';

// Estilo comum para ícones sociais
const socialIconStyle = (theme: Theme) => ({
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: '1px solid rgba(255,255,255,0.2)',
  transition: 'all 0.3s ease',
  '&:hover': { 
    color: theme.palette.secondary.light,
    borderColor: theme.palette.secondary.light
  }
});

const Footer = () => {
  const year = new Date().getFullYear();
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: bordeauxColor,
        color: 'white',
        py: 6,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '1px',
          background: `linear-gradient(to right, rgba(139, 125, 85, 0.2), rgba(139, 125, 85, 0.8), rgba(139, 125, 85, 0.2))`,
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} mb={5}>
          <Grid item xs={12} md={6}>
            <Box 
              mb={3}
              sx={{
                display: 'inline-block',
                position: 'relative',
                padding: 1,
                borderRadius: 1,
                background: 'transparent',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            >
              <Image
                src="/images/4ce7142d-36b2-42ed-ac5b-97103c248abd.png"
                alt="D&R Advocacia Logo"
                width={240}
                height={90}
                style={{ 
                  marginBottom: '0.5rem'
                }}
                priority
              />
              <Typography 
                variant="body2" 
                color={theme.palette.secondary.light}
                sx={{ 
                  display: 'block', 
                  textAlign: 'center',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  mb: 1
                }}
              >
                OAB/RS 13.183
              </Typography>
            </Box>
            <Typography 
              variant="body1" 
              color="grey.300" 
              mb={3}
              sx={{ 
                maxWidth: '450px', 
                fontSize: '1rem',
                lineHeight: 1.7
              }}
            >
              Assessoria jurídica especializada com atendimento personalizado
              e soluções eficientes para você e sua empresa.
            </Typography>
            <Box display="flex" alignItems="center" gap={3} mt={4}>
              <MuiLink 
                href="https://www.facebook.com/profile.php?id=100090935949111&locale=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                sx={socialIconStyle(theme)}
              >
                <FaFacebookF size={20} />
              </MuiLink>
              <MuiLink 
                href="https://www.instagram.com/der_advocacia" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                sx={socialIconStyle(theme)}
              >
                <FaInstagram size={20} />
              </MuiLink>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, borderRadius: 1, border: '1px solid rgba(255,255,255,0.1)' }}>
              <Typography variant="h5" fontFamily={theme.typography.h5.fontFamily} fontWeight={600} mb={3}>
                Links Rápidos
              </Typography>
              <Grid container spacing={2}>
                {[
                  { title: 'Home', id: 'home' },
                  { title: 'Áreas de Atuação', id: 'atuacao' },
                  { title: 'Sobre Nós', id: 'sobre' },
                  { title: 'Depoimentos', id: 'depoimentos' },
                  { title: 'Planejamento', id: 'planejamento' },
                  { title: 'Contato', id: 'contato' }
                ].map((link, index) => (
                  <Grid item xs={6} key={index}>
                    <MuiLink
                      href={`#${link.id}`}
                      underline="none"
                      sx={{
                        color: 'grey.300',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '1rem',
                        '&:hover': { 
                          color: theme.palette.secondary.light,
                          transform: 'translateX(5px)'
                        },
                        transition: 'all 0.3s ease',
                        '&::before': {
                          content: '""',
                          display: 'inline-block',
                          width: '6px',
                          height: '6px',
                          backgroundColor: theme.palette.secondary.main,
                          borderRadius: '50%',
                          marginRight: '10px'
                        }
                      }}
                    >
                      {link.title}
                    </MuiLink>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        
        <Box sx={{ pt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="grey.400">
            © {year} D<span style={{ fontFamily: 'serif' }}>&</span>R Advocacia - Todos os direitos reservados
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 