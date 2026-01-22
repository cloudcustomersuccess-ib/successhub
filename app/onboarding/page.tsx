'use client';

import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Grid,
  Chip,
} from '@mui/material';
import { RocketLaunch, Cloud, CheckCircle, Construction } from '@mui/icons-material';
import Link from 'next/link';
import { Callout, SectionHeader } from '@/components/ui';

export default function OnboardingPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <SectionHeader
        title="Onboarding"
        subtitle="Bienvenido a tu viaje en la nube con TD SYNNEX. Selecciona tu proveedor cloud para comenzar con el proceso de alta."
        icon={<RocketLaunch fontSize="large" />}
      />

      <Callout type="info" title="Proceso de alta en proveedores cloud">
        Selecciona el proveedor cloud con el que deseas trabajar para acceder a la guía
        completa de onboarding. Cada proceso está diseñado para ser sencillo y guiado paso a paso.
      </Callout>

      {/* Cloud Providers */}
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 5, mb: 3 }}>
        Proveedores Cloud
      </Typography>

      <Grid container spacing={3}>
        {/* AWS */}
        <Grid item xs={12} md={4}>
          <Card
            elevation={3}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 6,
              },
            }}
          >
            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                <Box sx={{ color: '#FF9900' }}>
                  <Cloud sx={{ fontSize: 48 }} />
                </Box>
                <Chip
                  icon={<CheckCircle />}
                  label="Disponible"
                  color="success"
                  size="small"
                />
              </Box>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Amazon Web Services
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flex: 1 }}>
                Guía completa para el proceso de alta en AWS. Incluye registro en TD SYNNEX,
                configuración en AWS Partner Central y activación en StreamOne ION.
              </Typography>
              <Box>
                <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                  Tiempo estimado: 5-7 días laborables
                </Typography>
                <Button
                  component={Link}
                  href="/onboarding/aws"
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: '#FF9900',
                    '&:hover': { bgcolor: '#EC7211' },
                  }}
                >
                  Comenzar alta en AWS
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Google Cloud */}
        <Grid item xs={12} md={4}>
          <Card
            elevation={3}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 6,
              },
            }}
          >
            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                <Box sx={{ color: '#4285F4' }}>
                  <Cloud sx={{ fontSize: 48 }} />
                </Box>
                <Chip
                  icon={<Construction />}
                  label="Próximamente"
                  color="warning"
                  size="small"
                />
              </Box>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Google Cloud Platform
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flex: 1 }}>
                Guía completa para el proceso de alta en Google Cloud. Documentación en desarrollo.
              </Typography>
              <Box>
                <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                  Disponible próximamente
                </Typography>
                <Button
                  component={Link}
                  href="/onboarding/google-cloud"
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderColor: '#4285F4',
                    color: '#4285F4',
                    '&:hover': { borderColor: '#4285F4', bgcolor: '#4285F410' },
                  }}
                >
                  Ver página
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Microsoft CSP */}
        <Grid item xs={12} md={4}>
          <Card
            elevation={3}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 6,
              },
            }}
          >
            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                <Box sx={{ color: '#00A4EF' }}>
                  <Cloud sx={{ fontSize: 48 }} />
                </Box>
                <Chip
                  icon={<Construction />}
                  label="Próximamente"
                  color="warning"
                  size="small"
                />
              </Box>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Microsoft CSP
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flex: 1 }}>
                Guía completa para el proceso de alta en Microsoft Cloud Solution Provider.
                Documentación en desarrollo.
              </Typography>
              <Box>
                <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                  Disponible próximamente
                </Typography>
                <Button
                  component={Link}
                  href="/onboarding/microsoft-csp"
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderColor: '#00A4EF',
                    color: '#00A4EF',
                    '&:hover': { borderColor: '#00A4EF', bgcolor: '#00A4EF10' },
                  }}
                >
                  Ver página
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Support Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          ¿Necesitas ayuda?
        </Typography>
        <Card sx={{ p: 3, bgcolor: 'primary.light', color: 'primary.contrastText' }}>
          <Typography variant="body1" paragraph>
            Si tienes dudas sobre qué proveedor cloud elegir o necesitas asistencia durante el
            proceso de alta, nuestro equipo está disponible para ayudarte.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button variant="contained" color="primary">
              Contactar con soporte
            </Button>
            <Button variant="outlined" color="primary">
              Programar asesoría
            </Button>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
