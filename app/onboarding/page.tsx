'use client';

import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { RocketLaunch, Article, VideoLibrary, School } from '@mui/icons-material';
import { Callout, SectionHeader } from '@/components/ui';

export default function OnboardingPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <SectionHeader
        title="Onboarding"
        subtitle="Bienvenido a tu viaje en la nube con TD SYNNEX. Aquí encontrarás todo lo que necesitas para empezar."
        icon={<RocketLaunch fontSize="large" />}
      />

      <Callout type="info" title="Guía de inicio rápido">
        Esta sección está en construcción. Pronto encontrarás aquí guías completas paso a
        paso para comenzar con nuestras soluciones cloud.
      </Callout>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid xs={12} md={4}>
          <Card elevation={2}>
            <CardContent>
              <Box sx={{ mb: 2, color: 'primary.main' }}>
                <Article fontSize="large" />
              </Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Documentación
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Accede a guías completas y documentación técnica para comenzar.
              </Typography>
              <Button variant="outlined" sx={{ mt: 2 }} disabled>
                Próximamente
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} md={4}>
          <Card elevation={2}>
            <CardContent>
              <Box sx={{ mb: 2, color: 'primary.main' }}>
                <VideoLibrary fontSize="large" />
              </Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Video Tutoriales
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Aprende con nuestros videos tutoriales paso a paso.
              </Typography>
              <Button variant="outlined" sx={{ mt: 2 }} disabled>
                Próximamente
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} md={4}>
          <Card elevation={2}>
            <CardContent>
              <Box sx={{ mb: 2, color: 'primary.main' }}>
                <School fontSize="large" />
              </Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Cursos de Formación
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Inscríbete en nuestros cursos de formación especializados.
              </Typography>
              <Button variant="outlined" sx={{ mt: 2 }} disabled>
                Próximamente
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
