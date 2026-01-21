'use client';

import { Container } from '@mui/material';
import { Factory } from '@mui/icons-material';
import { Callout, SectionHeader } from '@/components/ui';

export default function FabricantesPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <SectionHeader
        title="Fabricantes"
        subtitle="Información y recursos de los principales fabricantes cloud."
        icon={<Factory fontSize="large" />}
      />

      <Callout type="info" title="Próximamente">
        Esta sección está en construcción. Aquí encontrarás información detallada sobre
        fabricantes como Microsoft, AWS, Google Cloud, y muchos más, incluyendo
        documentación, ofertas especiales y mejores prácticas.
      </Callout>
    </Container>
  );
}
