'use client';

import { motion } from 'framer-motion';
import { FaBuilding, FaHandshake, FaUserTie, FaBriefcase, FaCalculator, FaFileContract } from 'react-icons/fa';
import { Box, Typography, Container, Grid, Paper, useTheme } from '@mui/material';

// Mesma cor bordô usada em outros componentes
const bordeauxColor = '#260d0d';

const AreasAtuacao = () => {
  const theme = useTheme();
  
  const areas = [
    {
      icon: <FaBriefcase style={{ fontSize: '2.5rem', marginBottom: '1rem', color: theme.palette.secondary.main }} />,
      title: 'Advocacia Corporativa',
      description: 'Evite conflitos e garanta segurança nas suas relações jurídicas.\n\nOferecemos assessoria especializada em contratos, responsabilidade civil e defesa do consumidor. Atuamos com foco preventivo em consultoria jurídica, contratos, gestão de riscos e atuação contenciosa, assegurando soluções eficazes e protegendo seus interesses.'
    },
    {
      icon: <FaBuilding style={{ fontSize: '2.5rem', marginBottom: '1rem', color: theme.palette.secondary.main }} />,
      title: 'Direito Empresarial',
      description: 'Proteja sua empresa e tome decisões com segurança jurídica.\n\nOferecemos assessoria especializada em estruturação jurídica e operações societárias. Atuamos com foco preventivo em consultoria jurídica, contratos, gestão de riscos e atuação contenciosa, assegurando soluções eficazes e protegendo seus interesses.'
    },
    {
      icon: <FaCalculator style={{ fontSize: '2.5rem', marginBottom: '1rem', color: theme.palette.secondary.main }} />,
      title: 'Direito Tributário',
      description: 'Reduza a carga tributária de forma legal e proteja seu patrimônio.\n\nOferecemos assessoria especializada em planejamento tributário e contencioso fiscal. Atuamos com foco preventivo em consultoria jurídica, contratos, gestão de riscos e atuação contenciosa, assegurando soluções eficazes e protegendo seus interesses.'
    },
    {
      icon: <FaHandshake style={{ fontSize: '2.5rem', marginBottom: '1rem', color: theme.palette.secondary.main }} />,
      title: 'Direito de Família e Sucessões',
      description: 'Soluções jurídicas com sensibilidade e estratégia para proteger o que realmente importa.\n\nOferecemos assessoria especializada em divórcios, inventários e planejamento sucessório. Atuamos com foco preventivo em consultoria jurídica, contratos, gestão de riscos e atuação contenciosa, assegurando soluções eficazes e protegendo seus interesses.'
    },
    {
      icon: <FaUserTie style={{ fontSize: '2.5rem', marginBottom: '1rem', color: theme.palette.secondary.main }} />,
      title: 'Direito do Trabalho',
      description: 'Reduza riscos trabalhistas e preserve sua empresa.\n\nOferecemos assessoria especializada em contratos e rotinas trabalhistas. Atuamos com foco preventivo em consultoria jurídica, contratos, gestão de riscos e atuação contenciosa, assegurando soluções eficazes e protegendo seus interesses.'
    },
    {
      icon: <FaFileContract style={{ fontSize: '2.5rem', marginBottom: '1rem', color: theme.palette.secondary.main }} />,
      title: 'Direito Societário',
      description: 'Estruture sua empresa com segurança jurídica e visão estratégica.\n\nOferecemos assessoria especializada em constituição societária e acordos de acionistas. Atuamos com foco preventivo em consultoria jurídica, contratos, gestão de riscos e atuação contenciosa, assegurando soluções eficazes e protegendo seus interesses.'
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
              color: bordeauxColor,
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
              maxWidth: '700px',
              mx: 'auto',
              fontSize: '1.125rem',
            }}
          >
            <Typography
              component="span"
              sx={{
                display: 'block',
                fontSize: '1.35rem',
                fontWeight: 700,
                mb: 1.5,
                color: bordeauxColor,
              }}
            >
              Soluções Jurídicas que Protegem o que Importa
            </Typography>
            <Typography
              component="span"
              sx={{
                color: theme.palette.secondary.main,
                fontWeight: 500,
                display: 'block'
              }}
            >
              Oferecemos assessoria estratégica nas principais áreas do Direito, com foco em proteger patrimônio, prevenção de riscos e crescimento com segurança.
            </Typography>
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
                    minHeight: '300px',
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
                      color: bordeauxColor,
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