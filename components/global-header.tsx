'use client';

import { useState, MouseEvent } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Typography,
  Divider,
  alpha,
  useTheme,
  Container,
} from '@mui/material';
import {
  Search as SearchIcon,
  Language,
  Brightness4,
  Brightness7,
  KeyboardArrowDown,
} from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useThemeMode } from '@/lib/theme-registry';

// Configuración de navegación
const navigationItems = [
  { label: 'Onboarding', href: '/onboarding' },
  { label: 'StreamOne ION', href: '/streamone-ion' },
  { label: 'Fabricantes', href: '/fabricantes' },
  { label: 'Soporte', href: '/soporte' },
  { label: 'Growth Lab', href: '/growth-lab' },
];

// Idiomas disponibles
const languages = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
  { code: 'fr', label: 'Français' },
];

export default function GlobalHeader() {
  const pathname = usePathname();
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeMode();
  const [searchValue, setSearchValue] = useState('');
  const [languageAnchor, setLanguageAnchor] = useState<null | HTMLElement>(null);
  const [currentLanguage, setCurrentLanguage] = useState('es');

  const handleLanguageClick = (event: MouseEvent<HTMLElement>) => {
    setLanguageAnchor(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchor(null);
  };

  const handleLanguageSelect = (code: string) => {
    setCurrentLanguage(code);
    handleLanguageClose();
    // Aquí iría la lógica de cambio de idioma (i18n)
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // Aquí iría la lógica de búsqueda
      console.log('Searching for:', searchValue);
    }
  };

  const isActivePath = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Logo según el modo
  const logoUrl =
    mode === 'light'
      ? 'https://i.imgur.com/RTXa1q1.png'
      : 'https://i.imgur.com/uWm1GT5.png';

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ gap: 3 }}>
          {/* Logo y Brand */}
          <Box
            component={Link}
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src={logoUrl}
              alt="TD SYNNEX"
              sx={{
                height: 32,
                objectFit: 'contain',
              }}
            />
            <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                color: 'text.primary',
                whiteSpace: 'nowrap',
              }}
            >
              CX
            </Typography>
          </Box>

          {/* Navegación Principal */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, flex: 1 }}>
            {navigationItems.map((item) => (
              <Button
                key={item.href}
                component={Link}
                href={item.href}
                sx={{
                  color: isActivePath(item.href) ? 'primary.main' : 'text.primary',
                  fontWeight: isActivePath(item.href) ? 700 : 500,
                  position: 'relative',
                  '&::after': isActivePath(item.href)
                    ? {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '60%',
                        height: 3,
                        bgcolor: 'primary.main',
                        borderRadius: '3px 3px 0 0',
                      }
                    : {},
                  '&:hover': {
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Búsqueda Global */}
          <Box
            component="form"
            onSubmit={handleSearch}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              bgcolor: alpha(theme.palette.common.black, 0.05),
              borderRadius: 2,
              px: 2,
              py: 0.5,
              minWidth: 220,
              '&:hover': {
                bgcolor: alpha(theme.palette.common.black, 0.08),
              },
              '&:focus-within': {
                bgcolor: alpha(theme.palette.common.black, 0.08),
                boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.3)}`,
              },
            }}
          >
            <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
            <InputBase
              placeholder="Buscar..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              sx={{ flex: 1, fontSize: '0.875rem' }}
            />
          </Box>

          {/* Selector de Idioma */}
          <Box>
            <Button
              onClick={handleLanguageClick}
              startIcon={<Language />}
              endIcon={<KeyboardArrowDown />}
              sx={{
                color: 'text.primary',
                minWidth: 'auto',
                textTransform: 'uppercase',
              }}
            >
              {currentLanguage}
            </Button>
            <Menu
              anchorEl={languageAnchor}
              open={Boolean(languageAnchor)}
              onClose={handleLanguageClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              {languages.map((lang) => (
                <MenuItem
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  selected={lang.code === currentLanguage}
                  sx={{ minWidth: 150 }}
                >
                  {lang.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Toggle Modo Oscuro */}
          <IconButton onClick={toggleTheme} color="inherit" sx={{ color: 'text.primary' }}>
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
