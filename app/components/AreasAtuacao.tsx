'use client';

import { motion } from 'framer-motion';
import { FaBalanceScale, FaHome, FaBuilding, FaHandshake, FaUserTie, FaUsers } from 'react-icons/fa';
import { Box, Typography, Container, Grid, Paper, useTheme } from '@mui/material';

const AreasAtuacao = () => {
  const theme = useTheme();
  
  const areas = [
    {
      icon: <FaBalanceScale style={{ fontSize: '2.5rem', marginBottom: '1rem', color: theme.palette.secondary.main }} />,
      title: 'Direito Civil',
      description: 'Assessoria jurídica em questões de direito civil, incluindo contratos, responsabilidade civil e direitos do consumidor.'
    },
    {
      icon: <FaHome style={{ fontSize: '2.5rem', marginBottom: '1rem', color: theme.palette.secondary.main }} />,
      title: 'Direito Imobiliário',
      description: 'Suporte legal para compra, venda e locação de imóveis, análise de contratos e assessoria em questões condominiais.'
    },
    {
      icon: <FaBuilding style={{ fontSize: '2.5rem', marginBottom: '1rem', color: theme.palette.secondary.main }} />,
      title: 'Direito Empresarial',
      description: 'Consultoria jurídica para empresas, elaboração de contratos comerciais e assessoria em operações societárias.'
    },
    {
      icon: <FaHandshake style={{ fontSize: '2.5rem', marginBottom: '1rem', color: theme.palette.secondary.main }} />,
      title: 'Direito de Família e Sucessões',
      description: 'Orientação jurídica em divórcios, inventários, testamentos e questões de guarda e pensão alimentícia.'
    },
    {
      icon: <FaUserTie style={{ fontSize: '2.5rem', marginBottom: '1rem', color: theme.palette.secondary.main }} />,
      title: 'Direito do Trabalho',
      description: 'Assessoria a empresas e trabalhadores em questões trabalhistas, contratos de trabalho e processos judiciais.'
    },
    {
      icon: <FaUsers style={{ fontSize: '2.5rem', marginBottom: '1rem', color: theme.palette.secondary.main }} />,
      title: 'Direito Previdenciário',
      description: 'Orientação sobre benefícios previdenciários, aposentadorias, pensões e recursos administrativos junto ao INSS.'
    }
  ];

  return (
    <Box
      id="atuacao"
      component="section"
      sx={{
        py: 10,
        bgcolor: 'background.paper',
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
              color: theme.palette.primary.main,
              mb: 2,
            }}
          >
            Áreas de Atuação
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
            }}
          >
            Oferecemos assessoria jurídica especializada nas principais áreas do Direito, com foco em soluções personalizadas para cada cliente.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {areas.map((area, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={1}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'box-shadow 0.3s ease',
                    '&:hover': {
                      boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)',
                    },
                    borderRadius: '2px',
                  }}
                >
                  {area.icon}
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontFamily: theme.typography.h6.fontFamily,
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                      mb: 1.5,
                    }}
                  >
                    {area.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {area.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AreasAtuacao; 