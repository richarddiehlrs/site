'use client';

import { useState, useEffect } from 'react';
import { Box, Tooltip, Zoom, alpha } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Número de WhatsApp com DDD - substitua pelo número correto
const WHATSAPP_NUMBER = '5551999999999'; // Exemplo: 5551999999999 (55 = Brasil, 51 = DDD)
const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre os serviços da D&R Advocacia.'.replace('D&R', 'D&R');

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);

  // Controle de visibilidade - só aparece após rolar um pouco
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Para garantir que aparece mesmo se a página for carregada já rolada
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // URL do WhatsApp com texto pré-definido
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <AnimatePresence>
      {visible && (
        <Tooltip 
          title="Fale com um especialista agora" 
          placement="left"
          TransitionComponent={Zoom}
          arrow
        >
          <Box 
            component={motion.a}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            sx={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: '#25D366', // Cor oficial do WhatsApp
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 1000,
              boxShadow: `0 4px 15px ${alpha('#000', 0.2)}`,
              '&::before': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: '#25D366',
                animation: `ripple 1.8s infinite`,
                zIndex: -1,
              },
              '@keyframes ripple': {
                '0%': {
                  transform: 'scale(1)',
                  opacity: 0.4,
                },
                '100%': {
                  transform: 'scale(1.5)',
                  opacity: 0,
                }
              }
            }}
          >
            <FaWhatsapp size={32} />
          </Box>
        </Tooltip>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton; 