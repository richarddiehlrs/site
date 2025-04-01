'use client';

import { useState, useEffect } from 'react';
import { Box, Tooltip, Zoom, alpha, useTheme } from '@mui/material';
import { FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Cor bordô usada no site
const bordeauxColor = '#260d0d';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Tooltip 
          title="Voltar ao topo" 
          placement="left"
          TransitionComponent={Zoom}
          arrow
        >
          <Box 
            component={motion.button}
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            sx={{
              position: 'fixed',
              bottom: '100px', // Posicionado acima do botão do WhatsApp
              right: '30px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: bordeauxColor,
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: 'none',
              outline: 'none',
              zIndex: 990, // Menor que o WhatsApp (1000)
              boxShadow: `0 4px 15px ${alpha('#000', 0.2)}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: theme.palette.secondary.main,
                boxShadow: `0 6px 20px ${alpha('#000', 0.25)}`,
              },
            }}
            aria-label="Voltar ao topo"
          >
            <FaChevronUp size={20} />
          </Box>
        </Tooltip>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop; 