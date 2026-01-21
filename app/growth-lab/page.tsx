'use client';

import { Container } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';
import { Callout, SectionHeader } from '@/components/ui';

export default function GrowthLabPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <SectionHeader
        title="Growth Lab"
        subtitle="Estrategias y herramientas para hacer crecer tu negocio cloud."
        icon={<TrendingUp fontSize="large" />}
      />

      <Callout type="success" title="Próximamente">
        Esta sección está en construcción. Aquí encontrarás estrategias de crecimiento,
        análisis de mercado, estudios de caso y herramientas para maximizar tus
        oportunidades de negocio en el sector cloud.
      </Callout>
    </Container>
  );
}
