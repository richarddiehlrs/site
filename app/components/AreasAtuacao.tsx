'use client';

import { motion } from 'framer-motion';
import { FaBuilding, FaHandshake, FaUserTie, FaBriefcase, FaCalculator, FaFileContract } from 'react-icons/fa';
import { Box, Typography, Container, Grid, Paper, useTheme } from '@mui/material';

const AreasAtuacao = () => {
  const theme = useTheme();
  
  const areas = [
    {
      icon: <FaBriefcase style={{ fontSize: '2.5rem', marginBottom: '1rem', color: theme.palette.secondary.main }} />,
      title: 'Advocacia Corporativa',
      description: 'Evite conflitos e garanta segurança nas suas relações jurídicas. Atuamos com foco preventivo em contratos, responsabilidade civil e defesa do consumidor, assegurando soluções.'
    },
    {
      icon: <FaBuilding style={{ fontSize: '2.5rem', marginBottom: '1rem', color: theme.palette.secondary.main }} />,
      title: 'Direito Empresarial',
      description: 'Proteja sua empresa e tome decisões com segurança jurídica. Blindamos juridicamente negócios com estrutura contratual sólida, assessoria estratégica e suporte em operações societárias para garantir a solidez e longevidade do seu empreendimento.'
    },
    {
      icon: <FaCalculator style={{ fontSize: '2.5rem', marginBottom: '1rem', color: theme.palette.secondary.main }} />,
      title: 'Direito Tributário',
      description: 'Reduza a carga tributária de forma legal e proteja seu patrimônio. Desenvolvemos estratégias eficientes de planejamento tributário e oferecemos suporte em fiscalizações e contencioso administrativo e judicial.'
    },
    {
      icon: <FaHandshake style={{ fontSize: '2.5rem', marginBottom: '1rem', color: theme.palette.secondary.main }} />,
      title: 'Direito de Família e Sucessões',
      description: 'Resolva questões familiares com segurança emocional e jurídica. Orientamos com sensibilidade e estratégia em processos de divórcio, guarda, pensão, inventários e planejamento sucessório, protegendo vínculos e legados.'
    },
    {
      icon: <FaUserTie style={{ fontSize: '2.5rem', marginBottom: '1rem', color: theme.palette.secondary.main }} />,
      title: 'Direito do Trabalho',
      description: 'Reduza riscos trabalhistas e preserve sua empresa. Oferecemos orientação preventiva em contratos, rotinas trabalhistas e defesas judiciais para evitar passivos e garantir segurança nas relações de trabalho.'
    },
    {
      icon: <FaFileContract style={{ fontSize: '2.5rem', marginBottom: '1rem', color: theme.palette.secondary.main }} />,
      title: 'Direito Societário',
      description: 'Estruture sua empresa com segurança jurídica e visão estratégica. Oferecemos consultoria especializada em constituição societária, acordos de acionistas, reorganizações e planejamento sucessório empresarial para garantir a continuidade do seu negócio.'
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
                color: theme.palette.primary.main,
              }}
            >
              Soluções Jurídicas que Protegem o que Importa
            </Typography>
            Oferecemos assessoria estratégica nas principais áreas do Direito, com foco em blindagem patrimonial, prevenção de riscos e crescimento com segurança.
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