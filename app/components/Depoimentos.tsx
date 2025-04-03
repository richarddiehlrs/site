'use client';

import { motion } from 'framer-motion';
import { Box, Typography, Container, Grid, useTheme, alpha, Avatar, Card, CardContent, Rating } from '@mui/material';

// Mesma cor bordô usada no Header e outros componentes
const bordeauxColor = '#260d0d';

const Depoimentos = () => {
  const theme = useTheme();
  
  const testimonials = [
    {
      name: 'Natália C.',
      role: 'Empresária',
      avatar: '/images/natalia.jpg', // Placeholder - precisa ser adicionada
      quote: 'Trabalhar com Daniel e Jéssica da D&R Advocacia tem sido uma experiência transformadora para a minha empresa. Eles não são apenas advogados, são verdadeiros parceiros estratégicos. Desde o início, me impressionou a forma como eles se dedicam a entender profundamente o meu negócio e a antecipar os desafios jurídicos que poderíamos enfrentar.\n\nA D&R Advocacia nos proporcionou muito mais do que segurança jurídica. Eles nos ajudaram a construir uma base sólida para o crescimento sustentável da nossa empresa, com um planejamento jurídico estratégico e eficaz. A consultoria deles nos permitiu focar no que realmente importa: expandir nosso negócio, sabendo que estamos protegidos contra riscos.\n\nO profissionalismo, a expertise e a paixão que Daniel e Jéssica dedicam ao trabalho são realmente inspiradores. A D&R Advocacia não é apenas um escritório de advocacia, é um motor de crescimento para empresas que buscam o sucesso a longo prazo.\n\nMe sinto realmente segura e bem direcionada com eles.',
      rating: 5,
      featured: false,
    },
    {
      name: 'Rodrigo C.',
      role: 'Empresário',
      avatar: '/images/rodrigo.jpg', // Placeholder - precisa ser adicionada
      quote: 'Antes da D&R, cada decisão jurídica era um risco. Hoje, tenho um parceiro estratégico que antecipa tudo e protege meu negócio.',
      rating: 5,
      featured: false,
    }
  ];

  return (
    <Box
      id="depoimentos"
      component="section"
      sx={{
        py: 10,
        bgcolor: '#f8f8f8',
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
              color: bordeauxColor,
              mb: 2,
            }}
          >
            O Que Falam Sobre Nós
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
              color: alpha('#000', 0.8),
            }}
          >
            <Typography
              component="span"
              sx={{
                display: 'block',
                fontSize: '1.35rem',
                fontWeight: 700,
                mb: 1.5,
                color: bordeauxColor
              }}
            >
              A visão de quem confia em nosso trabalho
            </Typography>
            <Typography
              component="span"
              sx={{
                color: theme.palette.secondary.main,
                fontWeight: 500,
                display: 'block'
              }}
            >
              Conheça a experiência de clientes que transformaram seus negócios com nossa advocacia estratégica e proteção patrimonial.
            </Typography>
          </Typography>
        </motion.div>

        {/* Depoimentos */}
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  elevation={2}
                  sx={{ 
                    height: '100%', 
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 10px 30px ${alpha('#000', 0.15)}`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar 
                        sx={{ width: 70, height: 70, bgcolor: bordeauxColor, mr: 2 }}
                        alt={testimonial.name}
                        src={testimonial.avatar}
                      >
                        {testimonial.name.substring(0, 1)}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 600, color: bordeauxColor }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                        <Rating 
                          value={testimonial.rating} 
                          readOnly 
                          size="small" 
                          sx={{ mt: 0.5 }}
                        />
                      </Box>
                    </Box>
                    <Typography variant="body1" color="text.secondary" sx={{ 
                      lineHeight: 1.6,
                      whiteSpace: testimonial.quote.length > 100 ? 'pre-line' : 'normal' // Usar pre-line apenas para depoimentos longos
                    }}>
                      {testimonial.quote}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Depoimentos; 