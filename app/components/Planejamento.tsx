'use client';

import { motion } from 'framer-motion';
import { FaLightbulb, FaFileAlt, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { Box, Typography, Container, Grid, Card, CardContent, useTheme, Avatar, alpha } from '@mui/material';

const Planejamento = () => {
  const theme = useTheme();
  
  const steps = [
    {
      icon: <FaLightbulb style={{ fontSize: '1.75rem', color: 'white' }} />,
      title: 'Análise e Consultoria',
      description: 'Identificamos oportunidades e riscos jurídicos através de uma análise detalhada da sua situação específica.'
    },
    {
      icon: <FaFileAlt style={{ fontSize: '1.75rem', color: 'white' }} />,
      title: 'Planejamento Estratégico',
      description: 'Desenvolvemos estratégias jurídicas personalizadas para alcançar seus objetivos e proteger seus interesses.'
    },
    {
      icon: <FaChartLine style={{ fontSize: '1.75rem', color: 'white' }} />,
      title: 'Implementação e Acompanhamento',
      description: 'Colocamos o plano em prática e monitoramos sua eficácia, fazendo ajustes quando necessário para resultados efetivos.'
    },
    {
      icon: <FaShieldAlt style={{ fontSize: '1.75rem', color: 'white' }} />,
      title: 'Segurança Jurídica',
      description: 'Garantimos a conformidade legal e a proteção dos seus direitos e patrimônio a longo prazo com soluções consistentes.'
    }
  ];

  return (
    <Box
      id="planejamento"
      component="section"
      sx={{
        py: 10,
        color: 'white',
        background: `linear-gradient(120deg, ${theme.palette.primary.main} 0%, #2c5364 100%)`,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/images/pattern.png")',
          backgroundSize: '400px',
          opacity: 0.05,
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: theme.typography.h2.fontFamily,
              fontWeight: 700,
              color: 'white',
              mb: 2,
            }}
          >
            Planejamento Jurídico
          </Typography>
          <Box
            sx={{
              width: '5rem',
              height: '0.25rem',
              bgcolor: theme.palette.secondary.light,
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
              color: alpha('#fff', 0.9),
            }}
          >
            Nossa abordagem estratégica garante soluções jurídicas eficientes e personalizadas para cada cliente.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    background: alpha('#fff', 0.08),
                    backdropFilter: 'blur(8px)',
                    borderRadius: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: alpha('#fff', 0.12),
                      transform: 'translateY(-5px)',
                    },
                    border: `1px solid ${alpha('#fff', 0.1)}`,
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        bgcolor: theme.palette.secondary.main,
                        width: 70,
                        height: 70,
                        mx: 'auto',
                        mb: 3,
                        boxShadow: `0 0 20px ${alpha(theme.palette.secondary.main, 0.5)}`,
                      }}
                    >
                      {step.icon}
                    </Avatar>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontFamily: theme.typography.h5.fontFamily,
                        fontWeight: 600,
                        mb: 2,
                        color: 'white',
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: alpha('#fff', 0.8),
                        lineHeight: 1.6,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ marginTop: '4rem', textAlign: 'center' }}
        >
          <Card
            elevation={0}
            sx={{
              py: 4,
              px: 6,
              background: alpha('#fff', 0.05),
              backdropFilter: 'blur(8px)',
              borderRadius: 1,
              border: `1px solid ${alpha('#fff', 0.1)}`,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                maxWidth: '900px',
                mx: 'auto',
                fontSize: '1.125rem',
                color: alpha('#fff', 0.9),
                lineHeight: 1.7,
              }}
            >
              Na D&R Advocacia, acreditamos que um bom planejamento jurídico é essencial para evitar problemas futuros. 
              Nossa equipe está pronta para auxiliar você ou sua empresa a navegar pelo complexo sistema legal brasileiro 
              com segurança e eficiência.
            </Typography>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Planejamento; 