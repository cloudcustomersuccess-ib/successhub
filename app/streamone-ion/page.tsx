'use client';

import { Container } from '@mui/material';
import { CloudQueue } from '@mui/icons-material';
import { Callout, SectionHeader } from '@/components/ui';

export default function StreamOneIONPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <SectionHeader
        title="StreamOne ION"
        subtitle="Portal de gestión cloud completo para tus operaciones diarias."
        icon={<CloudQueue fontSize="large" />}
      />

      <Callout type="info" title="Próximamente">
        Esta sección está en construcción. Aquí encontrarás documentación completa sobre
        StreamOne ION, tutoriales, guías de uso y mejores prácticas para aprovechar al
        máximo la plataforma.
      </Callout>
    </Container>
  );
}
