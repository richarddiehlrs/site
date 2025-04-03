'use client';

import { motion } from 'framer-motion';
import { FaLightbulb, FaFileAlt, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { Box, Typography, Container, Grid, Card, CardContent, useTheme, Avatar, alpha } from '@mui/material';

// Mesma cor bordô usada no Header e outras seções
const bordeauxColor = '#260d0d';

const Planejamento = () => {
  const theme = useTheme();
  
  const steps = [
    {
      icon: <FaLightbulb style={{ fontSize: '1.75rem' }} />,
      title: 'Diagnóstico Jurídico Personalizado',
      description: 'Identificamos riscos ocultos e oportunidades estratégicas com base em uma análise profunda da sua realidade empresarial ou patrimonial.'
    },
    {
      icon: <FaFileAlt style={{ fontSize: '1.75rem' }} />,
      title: 'Estratégia Jurídica Sob Medida',
      description: 'Desenhamos um plano jurídico totalmente alinhado aos seus objetivos, protegendo você e sua empresa com inteligência e antecipação.'
    },
    {
      icon: <FaChartLine style={{ fontSize: '1.75rem' }} />,
      title: 'Execução com Acompanhamento Inteligente',
      description: 'Implementamos a estratégia traçada e ajustamos o plano de ação conforme os resultados, garantindo eficiência e segurança contínua.'
    },
    {
      icon: <FaShieldAlt style={{ fontSize: '1.75rem' }} />,
      title: 'Proteção e Segurança Jurídica',
      description: 'Cuidamos da regularidade legal e da proteção de tudo o que você construiu — para que você cresça com tranquilidade, sem surpresas.'
    }
  ];

  const servicos = [
    {
      title: 'Proteção e Segurança Jurídica',
      description: 'Implementamos estratégias personalizadas para proteger seu patrimônio, com foco em estruturas societárias seguras e planejamento tributário eficiente.'
    },
    {
      title: 'Planejamento Tributário',
      description: 'Desenvolvemos estratégias legais para reduzir a carga tributária, garantindo conformidade fiscal e otimização de recursos.'
    },
    {
      title: 'Consultoria Empresarial',
      description: 'Oferecemos orientação estratégica para tomada de decisões, com foco em crescimento sustentável e redução de riscos.'
    }
  ];

  return (
    <Box
      id="planejamento"
      component="section"
      sx={{
        py: 10,
        color: theme.palette.text.primary,
        background: 'white',
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
          opacity: 0.03,
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
              color: bordeauxColor,
              mb: 2,
            }}
          >
            Planejamento Jurídico Estratégico
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
            Protegemos empresas e patrimônios com inteligência jurídica, antecipando riscos e criando estruturas sólidas para decisões seguras e crescimento sustentável.
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
                  elevation={2}
                  sx={{
                    height: '100%',
                    background: bordeauxColor,
                    borderRadius: 1,
                    transition: 'all 0.3s ease',
                    border: `1px solid ${alpha(bordeauxColor, 0.3)}`,
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 10px 30px ${alpha(bordeauxColor, 0.3)}`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        bgcolor: 'white',
                        width: 70,
                        height: 70,
                        mx: 'auto',
                        mb: 3,
                        boxShadow: `0 0 20px ${alpha('#000', 0.2)}`,
                      }}
                    >
                      <Box sx={{ color: theme.palette.secondary.main }}>
                      {step.icon}
                      </Box>
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
                        color: alpha('#ffffff', 0.9),
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
            elevation={2}
            sx={{
              py: 4,
              px: 6,
              background: 'white',
              borderRadius: 1,
              border: `1px solid ${alpha(bordeauxColor, 0.15)}`,
              width: '100%',
              maxWidth: '900px',
              mx: 'auto',
              boxShadow: `0 10px 30px ${alpha(bordeauxColor, 0.1)}`,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                maxWidth: '900px',
                mx: 'auto',
                fontSize: '1.125rem',
                color: theme.palette.text.secondary,
                lineHeight: 1.7,
              }}
            >
              <Typography
                component="span"
                sx={{
                  display: 'block',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  mb: 1,
                  color: bordeauxColor,
                }}
              >
                Na D&R Advocacia, planejamento jurídico estratégico não é apenas prevenção.
              </Typography>
              <Typography
                component="span"
                sx={{
                  display: 'block',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  mb: 1.5,
                  color: theme.palette.secondary.main,
                }}
              >
                É o que garante que você tome decisões com segurança, proteja o que já construiu e cresça com confiança.
              </Typography>
            </Typography>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ marginTop: '2rem', textAlign: 'center' }}
        >
          <Card
            elevation={2}
            sx={{
              py: 4,
              px: 6,
              background: alpha(bordeauxColor, 0.03),
              borderRadius: 1,
              border: `1px solid ${alpha(bordeauxColor, 0.15)}`,
              width: '100%',
              maxWidth: '900px',
              mx: 'auto',
              boxShadow: `0 10px 30px ${alpha(bordeauxColor, 0.08)}`,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                maxWidth: '900px',
                mx: 'auto',
                fontSize: '1.125rem',
                color: theme.palette.text.secondary,
                lineHeight: 1.7,
              }}
            >
              <Typography
                component="span"
                sx={{
                  display: 'block',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  mb: 1,
                  color: bordeauxColor,
                }}
              >
                Você está pronto para tomar decisões com segurança e crescer com tranquilidade?
              </Typography>
              <Typography
                component="span"
                sx={{
                  display: 'block',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  mb: 1.5,
                  color: theme.palette.secondary.main,
                }}
              >
                Aqui, você não será mais um processo. Será um projeto estratégico.
              </Typography>
              <Typography
                component="span"
                sx={{
                  color: theme.palette.secondary.main,
                  fontWeight: 500,
                }}
              >
                Fale com a D&R e veja como nosso atendimento consultivo pode proteger sua empresa e ampliar seus resultados.
              </Typography>
            </Typography>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Planejamento; 