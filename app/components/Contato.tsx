'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
import { Box, Typography, Container, Grid, Card, CardContent, Button, TextField, useTheme, Divider } from '@mui/material';

// Mesma cor bordô usada em outros componentes
const bordeauxColor = '#260d0d';

const Contato = () => {
  const theme = useTheme();
  
  const contatoInfo = [
    {
      icon: <FaPhone style={{ fontSize: '1.5rem', color: theme.palette.secondary.main }} />,
      title: 'Telefone',
      info: '(51) 9 9707-8004',
      link: 'tel:5199707-8004'
    },
    {
      icon: <FaEnvelope style={{ fontSize: '1.5rem', color: theme.palette.secondary.main }} />,
      title: 'E-mail',
      info: 'contato@deradvocacia.com.br',
      link: 'mailto:contato@deradvocacia.com.br'
    },
    {
      icon: <FaMapMarkerAlt style={{ fontSize: '1.5rem', color: theme.palette.secondary.main }} />,
      title: 'Endereço',
      info: 'Avenida Cristovão Colombo, 2955 - Sala 402 - Porto Alegre/RS',
      link: 'https://maps.google.com/?q=Avenida+Cristovão+Colombo,+2955+-+Sala+402+-+Porto+Alegre/RS'
    },
    {
      icon: <FaInstagram style={{ fontSize: '1.5rem', color: theme.palette.secondary.main }} />,
      title: 'Instagram',
      info: '@der_advocacia',
      link: 'https://www.instagram.com/der_advocacia'
    }
  ];

  return (
    <Box
      id="contato"
      component="section"
      sx={{
        py: 10,
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: theme.typography.h2.fontFamily,
              fontWeight: 700,
              color: bordeauxColor,
              mb: 2,
            }}
          >
            Entre em Contato
          </Typography>
          <Box
            sx={{
              width: '5rem',
              height: '0.25rem',
              bgcolor: theme.palette.secondary.main,
              mx: 'auto',
              mb: 3,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.125rem',
              color: theme.palette.secondary.main,
            }}
          >
            Estamos à disposição para atender às suas necessidades jurídicas.
            Entre em contato conosco para agendar uma consulta.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Formulário de contato - Lado esquerdo */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card elevation={2} sx={{ borderRadius: 1, height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      fontFamily: theme.typography.h4.fontFamily,
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                      mb: 3,
                      fontSize: { xs: '1.5rem', md: '1.8rem' },
                    }}
                  >
                    Envie-nos uma mensagem
                  </Typography>
                  
                  <Box component="form" noValidate sx={{ mt: 2 }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="nome"
                          label="Nome"
                          name="nome"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="E-mail"
                          name="email"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="telefone"
                          label="Telefone"
                          name="telefone"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="assunto"
                          label="Assunto"
                          name="assunto"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="mensagem"
                          label="Sua mensagem"
                          name="mensagem"
                          multiline
                          rows={4}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          size="large"
                          fullWidth
                          sx={{
                            py: 1.5,
                            mt: 1,
                          }}
                        >
                          Enviar Mensagem
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          
          {/* Informações de contato - Lado direito */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card 
                elevation={2} 
                sx={{ 
                  borderRadius: 1, 
                  height: '100%',
                  bgcolor: bordeauxColor,
                  color: 'white',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      fontFamily: theme.typography.h4.fontFamily,
                      fontWeight: 700,
                      color: 'white',
                      mb: 3,
                      fontSize: { xs: '1.5rem', md: '1.8rem' },
                    }}
                  >
                    Informações de Contato
                  </Typography>
                  
                  <Typography variant="body1" sx={{ mb: 4 }}>
                    Ficamos no coração de Porto Alegre, com fácil acesso e estacionamento.
                    Agende uma visita ou entre em contato pelos canais abaixo:
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {contatoInfo.map((item, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box sx={{ pt: 0.5 }}>{item.icon}</Box>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: theme.palette.secondary.light }}>
                            {item.title}
                          </Typography>
                          <Typography 
                            component="a"
                            href={item.link}
                            target={item.title === 'Endereço' || item.title === 'Instagram' ? '_blank' : undefined}
                            rel={item.title === 'Endereço' || item.title === 'Instagram' ? 'noopener noreferrer' : undefined}
                            sx={{ 
                              color: 'white',
                              textDecoration: 'none',
                              '&:hover': {
                                color: theme.palette.secondary.light,
                              }
                            }}
                          >
                            {item.info}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />
                  
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: theme.palette.secondary.light }}>
                    Horário de Atendimento
                  </Typography>
                  <Typography variant="body2">
                    Segunda a sexta-feira, das 9h às 18h
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contato; 