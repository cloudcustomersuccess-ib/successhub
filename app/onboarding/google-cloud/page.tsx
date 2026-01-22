'use client';

import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { ArrowBack, Cloud, Construction } from '@mui/icons-material';
import Link from 'next/link';
import { Callout } from '@/components/ui';

export default function GoogleCloudOnboardingPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Button
          component={Link}
          href="/onboarding"
          startIcon={<ArrowBack />}
          variant="outlined"
          size="small"
          sx={{ mb: 2 }}
        >
          Volver a Onboarding
        </Button>
        <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
          Alta en Google Cloud Platform (GCP)
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Guía completa para el proceso de alta en Google Cloud a través de TD SYNNEX
        </Typography>
      </Box>

      {/* Under Construction */}
      <Card sx={{ p: 4, textAlign: 'center' }}>
        <Construction sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Página en construcción
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Estamos trabajando en la guía de onboarding para Google Cloud Platform.
          Próximamente encontrarás aquí toda la información necesaria para comenzar.
        </Typography>
        <Button
          component={Link}
          href="/onboarding"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Volver a Onboarding
        </Button>
      </Card>

      {/* Coming Soon Info */}
      <Callout type="info" title="Próximamente" sx={{ mt: 4 }}>
        La guía de alta en Google Cloud estará disponible pronto. Mientras tanto,
        si necesitas asistencia inmediata, contacta con tu Partner Development Manager.
      </Callout>
    </Container>
  );
}
