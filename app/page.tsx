'use client';

import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  alpha,
  useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  RocketLaunch,
  CloudQueue,
  Factory,
  Security,
  Support,
  TrendingUp,
  ArrowForward,
} from '@mui/icons-material';
import Link from 'next/link';
import { Callout } from '@/components/ui';

const sections = [
  {
    icon: <RocketLaunch fontSize="large" />,
    title: 'Onboarding',
    description: 'Guías paso a paso para comenzar tu viaje en la nube con TD SYNNEX',
    href: '/onboarding',
    color: '#0066cc',
  },
  {
    icon: <CloudQueue fontSize="large" />,
    title: 'StreamOne ION',
    description: 'Portal de gestión cloud completo para tus operaciones',
    href: '/streamone-ion',
    color: '#003031',
  },
  {
    icon: <Factory fontSize="large" />,
    title: 'Fabricantes',
    description: 'Información y recursos de los principales fabricantes cloud',
    href: '/fabricantes',
    color: '#2e7d32',
  },
  {
    icon: <Security fontSize="large" />,
    title: 'Seguridad',
    description: 'Mejores prácticas y herramientas de seguridad en la nube',
    href: '/seguridad',
    color: '#d32f2f',
  },
  {
    icon: <Support fontSize="large" />,
    title: 'Soporte',
    description: 'Centro de ayuda y contacto con nuestro equipo de soporte',
    href: '/soporte',
    color: '#ed6c02',
  },
  {
    icon: <TrendingUp fontSize="large" />,
    title: 'Growth Lab',
    description: 'Estrategias y herramientas para hacer crecer tu negocio cloud',
    href: '/growth-lab',
    color: '#9c27b0',
  },
];

export default function Home() {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 2 }}
          >
            Bienvenido al Cloud Customer Success Hub
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.95, maxWidth: 800 }}>
            Tu centro de recursos, conocimiento y herramientas para el éxito en soluciones
            cloud
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': {
                bgcolor: alpha('#ffffff', 0.9),
              },
            }}
            endIcon={<ArrowForward />}
            component={Link}
            href="/onboarding"
          >
            Comenzar Ahora
          </Button>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        {/* Intro Callout */}
        <Callout type="info" title="¿Qué encontrarás aquí?">
          Este hub centraliza todos los recursos que necesitas para maximizar el valor de
          tus soluciones cloud. Desde guías de inicio hasta herramientas avanzadas de
          gestión, todo en un solo lugar.
        </Callout>

        {/* Sections Grid */}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {sections.map((section) => (
            <Grid xs={12} sm={6} md={4} key={section.href}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      bgcolor: alpha(section.color, 0.1),
                      color: section.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    {section.icon}
                  </Box>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {section.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {section.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    component={Link}
                    href={section.href}
                    endIcon={<ArrowForward />}
                    fullWidth
                    variant="outlined"
                  >
                    Explorar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Info */}
        <Box sx={{ mt: 6 }}>
          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <Callout type="tip" title="¿Necesitas ayuda?">
                Nuestro equipo de Cloud Customer Success está disponible para ayudarte.
                Visita la sección de{' '}
                <Link href="/soporte" style={{ color: 'inherit', fontWeight: 'bold' }}>
                  Soporte
                </Link>{' '}
                para contactarnos.
              </Callout>
            </Grid>
            <Grid xs={12} md={6}>
              <Callout type="success" title="Nuevo contenido">
                Actualizamos regularmente este hub con nuevos recursos, guías y mejores
                prácticas. Revisa frecuentemente para mantenerte al día.
              </Callout>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
