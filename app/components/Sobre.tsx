'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Box, Typography, Container, Grid, Paper, useTheme, alpha } from '@mui/material';

// Mesma cor bordô usada no Header
const bordeauxColor = '#260d0d';

const Sobre = () => {
  const theme = useTheme();
  
  return (
    <Box
      id="sobre"
      component="section"
      sx={{
        py: 10,
        bgcolor: bordeauxColor,
        color: 'white',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/images/pattern.png")',
          backgroundSize: '400px',
          opacity: 0.08,
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
          style={{ textAlign: 'center', marginBottom: '3rem' }}
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
            Sobre Nós
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
              color: alpha('#fff', 0.95),
            }}
          >
            <Typography
              component="span"
              sx={{
                display: 'block',
                fontSize: '1.35rem',
                fontWeight: 700,
                mb: 1.5,
                color: theme.palette.secondary.light
              }}
            >
              Especialistas em Advocacia Empresarial e Blindagem Patrimonial
            </Typography>
            Conheça os profissionais por trás da D&R, com experiência sólida e visão estratégica para proteger seu patrimônio e impulsionar seu crescimento.
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Primeiro Advogado */}
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3,
                  borderRadius: 1,
                  background: alpha('#fff', 0.99),
                  boxShadow: `0 10px 30px ${alpha('#000', 0.15)}`,
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: { xs: 'center', md: 'flex-start' } }}>
                  <Box
                    sx={{ 
                      width: 260,
                      height: 320,
                      flexShrink: 0,
                      position: 'relative',
                      boxShadow: `0 8px 25px ${alpha(bordeauxColor, 0.2)}`,
                      borderRadius: 1,
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src="/images/WhatsApp Image 2025-03-13 at 20.29.15.jpeg"
                      alt="Dr. Daniel Silva"
                      fill
                      style={{ 
                        objectFit: 'cover',
                        objectPosition: 'center top',
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography 
                      variant="h4" 
                      component="h3" 
                      sx={{ 
                        fontFamily: theme.typography.h4.fontFamily, 
                        fontWeight: 700, 
                        color: theme.palette.primary.main,
                        mb: 1
                      }}
                    >
                      Daniel Rolim
                    </Typography>
                    <Typography 
                      variant="subtitle1"
                      sx={{ 
                        color: bordeauxColor, 
                        fontWeight: 600,
                        mb: 2
                      }}
                    >
                      Advogado OAB/RS 108.354
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      Graduado em Direito pela Pontifícia Universidade Católica do Rio Grande do Sul (PUC-RS), com especialização em Direito Empresarial e Tributário pela PUC-RS.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      Possui mais de 15 anos de experiência na área jurídica, tendo atuado em grandes escritórios de advocacia antes de fundar a D&R Advocacia.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Dedica-se principalmente às áreas de Direito Empresarial, Tributário e Contratos, com foco em soluções jurídicas eficientes para empresas de todos os portes.
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Segundo Advogado */}
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3,
                  borderRadius: 1,
                  background: alpha('#fff', 0.99),
                  boxShadow: `0 10px 30px ${alpha('#000', 0.15)}`,
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: { xs: 'center', md: 'flex-start' } }}>
                  <Box
                    sx={{ 
                      width: 260,
                      height: 320,
                      flexShrink: 0,
                      position: 'relative',
                      boxShadow: `0 8px 25px ${alpha(bordeauxColor, 0.2)}`,
                      borderRadius: 1,
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src="/images/WhatsApp Image 2025-03-13 at 20.29.24.jpeg"
                      alt="Dra. Renata Oliveira"
                      fill
                      style={{ 
                        objectFit: 'cover',
                        objectPosition: 'center top',
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography 
                      variant="h4" 
                      component="h3" 
                      sx={{ 
                        fontFamily: theme.typography.h4.fontFamily, 
                        fontWeight: 700, 
                        color: theme.palette.primary.main,
                        mb: 1
                      }}
                    >
                      Dra. Jéssica Diehl
                    </Typography>
                    <Typography 
                      variant="subtitle1"
                      sx={{ 
                        color: bordeauxColor, 
                        fontWeight: 600,
                        mb: 2
                      }}
                    >
                      Advogada OAB/RS 100.015
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      Graduada em Direito pela Pontifícia Universidade Católica do Rio Grande do Sul (PUC-RS), com especialização em Direito Societário pela FBT.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      Possui experiência de mais de 10 anos na advocacia, com atuação destacada em Direito Tributário, Patrimonial e Sucessório.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Reconhecida por sua abordagem humanizada e atendimento personalizado, busca sempre as melhores soluções para seus clientes, seja por meio de acordos ou pela via judicial.
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Sobre; 