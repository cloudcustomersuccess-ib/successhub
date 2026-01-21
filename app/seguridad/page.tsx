'use client';

import { Container } from '@mui/material';
import { Security } from '@mui/icons-material';
import { Callout, SectionHeader } from '@/components/ui';

export default function SeguridadPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <SectionHeader
        title="Seguridad"
        subtitle="Mejores prácticas y herramientas de seguridad en la nube."
        icon={<Security fontSize="large" />}
      />

      <Callout type="warning" title="Próximamente">
        Esta sección está en construcción. Aquí encontrarás guías de seguridad, mejores
        prácticas, compliance, certificaciones y herramientas para mantener tu
        infraestructura cloud segura.
      </Callout>
    </Container>
  );
}
