'use client';

import Image from 'next/image';
import { Box, Typography, Container, Grid, Link as MuiLink, Divider, useTheme } from '@mui/material';
import { FaInstagram, FaPhone, FaEnvelope, FaFacebookF } from 'react-icons/fa';

// Mesma cor bordô usada em outros componentes
const bordeauxColor = '#260d0d';

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
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} mb={4}>
          <Grid item xs={12} md={4}>
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
                width={280}
                height={78}
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
              variant="body2" 
              color="grey.300" 
              mb={3}
              sx={{ maxWidth: '300px' }}
            >
              Assessoria jurídica especializada com atendimento personalizado
              e soluções eficientes para você e sua empresa.
            </Typography>
            <Box display="flex" alignItems="center" gap={2}>
              <MuiLink 
                href="https://www.facebook.com/profile.php?id=100090935949111&locale=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                sx={{
                  color: 'white',
                  '&:hover': { color: theme.palette.secondary.light },
                  transition: 'color 0.3s ease',
                }}
              >
                <FaFacebookF size={20} />
              </MuiLink>
              <MuiLink 
                href="https://www.instagram.com/der_advocacia" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                sx={{
                  color: 'white',
                  '&:hover': { color: theme.palette.secondary.light },
                  transition: 'color 0.3s ease',
                }}
              >
                <FaInstagram size={20} />
              </MuiLink>
              <MuiLink 
                href="tel:5199707-8004" 
                aria-label="Telefone"
                sx={{
                  color: 'white',
                  '&:hover': { color: theme.palette.secondary.light },
                  transition: 'color 0.3s ease',
                }}
              >
                <FaPhone size={20} />
              </MuiLink>
              <MuiLink 
                href="mailto:contato@deradvocacia.com.br" 
                aria-label="Email"
                sx={{
                  color: 'white',
                  '&:hover': { color: theme.palette.secondary.light },
                  transition: 'color 0.3s ease',
                }}
              >
                <FaEnvelope size={20} />
              </MuiLink>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box sx={{ bgcolor: bordeauxColor, p: 3, borderRadius: 1 }}>
              <Typography variant="h6" fontFamily={theme.typography.h6.fontFamily} fontWeight={600} mb={3}>
                Links Rápidos
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { title: 'Home', id: 'home' },
                  { title: 'Áreas de Atuação', id: 'atuacao' },
                  { title: 'Sobre Nós', id: 'sobre' },
                  { title: 'Depoimentos', id: 'depoimentos' },
                  { title: 'Planejamento', id: 'planejamento' },
                  { title: 'Contato', id: 'contato' }
                ].map((link, index) => (
                  <Box component="li" key={index} mb={1}>
                    <MuiLink
                      href={`#${link.id}`}
                      underline="none"
                      sx={{
                        color: 'grey.300',
                        '&:hover': { color: theme.palette.secondary.light },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {link.title}
                    </MuiLink>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontFamily={theme.typography.h6.fontFamily} fontWeight={600} mb={3}>
              Contato
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box>
                <Typography variant="subtitle2" fontWeight={600} color={theme.palette.secondary.light}>
                  Telefone:
                </Typography>
                <Typography variant="body2" color="grey.300">
                  (51) 9 9707-8004
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" fontWeight={600} color={theme.palette.secondary.light}>
                  E-mail:
                </Typography>
                <Typography variant="body2" color="grey.300">
                  contato@deradvocacia.com.br
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" fontWeight={600} color={theme.palette.secondary.light}>
                  Endereço:
                </Typography>
                <Typography variant="body2" color="grey.300">
                  Avenida Cristovão Colombo, 2955<br />
                  Sala 402<br />
                  Porto Alegre/RS
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        
        <Box sx={{ pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="grey.400">
            © {year} D<span style={{ fontFamily: 'serif' }}>&</span>R Advocacia - Todos os direitos reservados
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 