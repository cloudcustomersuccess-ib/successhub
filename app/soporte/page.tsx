'use client';

import { Container } from '@mui/material';
import { Support } from '@mui/icons-material';
import { Callout, SectionHeader } from '@/components/ui';

export default function SoportePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <SectionHeader
        title="Soporte"
        subtitle="Centro de ayuda y contacto con nuestro equipo de soporte."
        icon={<Support fontSize="large" />}
      />

      <Callout type="info" title="Próximamente">
        Esta sección está en construcción. Aquí encontrarás información de contacto, FAQs,
        formularios de soporte y acceso directo a nuestro equipo de Cloud Customer Success.
      </Callout>
    </Container>
  );
}
