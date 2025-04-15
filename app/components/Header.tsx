'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material';

// Definindo a cor bordô para consistência com a seção Sobre Nós
const bordeauxColor = '#260d0d';

const pages = [
  { title: 'Home', id: 'home' },
  { title: 'Áreas de Atuação', id: 'atuacao' }, 
  { title: 'Sobre Nós', id: 'sobre' },
  { title: 'Depoimentos', id: 'depoimentos' },
  { title: 'Planejamento', id: 'planejamento' },
  { title: 'Contato', id: 'contato' }
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  
  // Detector de rolagem para alterar a aparência do cabeçalho
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  // Calcular altura do AppBar para padding do conteúdo
  const headerHeight = { xs: 70, md: 90 };
  
  // Adicionar padding-top ao conteúdo principal
  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.style.paddingTop = window.innerWidth < 900 ? `${headerHeight.xs}px` : `${headerHeight.md}px`;
      // Adicionando uma margem superior à primeira seção para melhor espaçamento
      const firstSection = mainContent.querySelector('section');
      if (firstSection) {
        firstSection.style.marginTop = '20px';
      }
    }
    
    const handleResize = () => {
      if (mainContent) {
        mainContent.style.paddingTop = window.innerWidth < 900 ? `${headerHeight.xs}px` : `${headerHeight.md}px`;
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScrollToSection = (id: string) => {
    handleCloseNavMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: bordeauxColor,
        boxShadow: trigger ? '0 4px 20px rgba(0, 0, 0, 0.25)' : '0 2px 10px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          disableGutters
          sx={{ 
            py: { xs: 0.25, md: 0.75 },
            minHeight: { xs: '50px', md: '70px' } 
          }}
        >
          {/* Logo Desktop */}
          <Box
            component="a"
            href="#home"
            sx={{
              mr: 3,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              textDecoration: 'none',
              transform: 'translateY(4px)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(4px) scale(1.02)',
              },
            }}
          >
            <Box 
              sx={{ 
                position: 'relative',
                boxShadow: trigger ? `0 4px 20px ${alpha('#000', 0.2)}` : 'none',
                borderRadius: '4px',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease',
                padding: '2px',
                backgroundColor: 'transparent',
              }}
            >
              <Image
                src="/images/4ce7142d-36b2-42ed-ac5b-97103c248abd.png"
                alt="D&R Advocacia Logo"
                width={240}
                height={67}
                style={{ 
                  transition: 'filter 0.3s ease',
                }}
                priority
              />
            </Box>
          </Box>

          {/* Menu Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu de navegação"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ 
                color: 'white'
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={() => handleScrollToSection(page.id)}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo Mobile */}
          <Box
            component="a"
            href="#home"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
            }}
          >
            <Box 
              sx={{ 
                position: 'relative',
                boxShadow: trigger ? `0 4px 15px ${alpha('#000', 0.2)}` : 'none',
                borderRadius: '4px',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease',
                padding: '2px',
                backgroundColor: 'transparent',
              }}
            >
              <Image
                src="/images/4ce7142d-36b2-42ed-ac5b-97103c248abd.png"
                alt="D&R Advocacia Logo"
                width={200}
                height={56}
                style={{ 
                  transition: 'filter 0.3s ease',
                }}
                priority
              />
            </Box>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => handleScrollToSection(page.id)}
                sx={{ 
                  my: 2, 
                  color: 'white',
                  display: 'block',
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: theme.palette.secondary.light,
                  }
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 