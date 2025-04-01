'use client';

import { motion } from 'framer-motion';
import { FaLightbulb, FaFileAlt, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { Box, Typography, Container, Grid, Card, CardContent, useTheme, Avatar, alpha } from '@mui/material';

const Planejamento = () => {
  const theme = useTheme();
  
  const steps = [
    {
      icon: <FaLightbulb style={{ fontSize: '1.75rem', color: 'white' }} />,
      title: 'Diagnóstico Jurídico Personalizado',
      description: 'Identificamos riscos ocultos e oportunidades estratégicas com base em uma análise profunda da sua realidade empresarial ou patrimonial.'
    },
    {
      icon: <FaFileAlt style={{ fontSize: '1.75rem', color: 'white' }} />,
      title: 'Estratégia Jurídica Sob Medida',
      description: 'Desenhamos um plano jurídico totalmente alinhado aos seus objetivos, protegendo você e sua empresa com inteligência e antecipação.'
    },
    {
      icon: <FaChartLine style={{ fontSize: '1.75rem', color: 'white' }} />,
      title: 'Execução com Acompanhamento Inteligente',
      description: 'Implementamos a estratégia traçada e ajustamos o plano de ação conforme os resultados, garantindo eficiência e segurança contínua.'
    },
    {
      icon: <FaShieldAlt style={{ fontSize: '1.75rem', color: 'white' }} />,
      title: 'Blindagem e Segurança Jurídica',
      description: 'Cuidamos da regularidade legal e da proteção de tudo o que você construiu — para que você cresça com tranquilidade, sem surpresas.'
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
            Planejamento Jurídico Estratégico
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
            Blindamos empresas e patrimônios com inteligência jurídica, antecipando riscos e criando estruturas sólidas para decisões seguras e crescimento sustentável.
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
              Na D&R Advocacia, planejamento jurídico estratégico não é apenas prevenção. É o que garante que você tome decisões com segurança, proteja o que já construiu e cresça com confiança.
            </Typography>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Planejamento; 