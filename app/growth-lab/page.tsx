import { TrendingUp } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Callout } from '@/components/ui/callout';

export default function GrowthLabPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <SectionHeader
        title="Growth Lab"
        subtitle="Estrategias y herramientas para hacer crecer tu negocio cloud."
        icon={<TrendingUp className="h-7 w-7" />}
      />
      <Callout type="success" title="Próximamente">
        Esta sección está en construcción. Aquí encontrarás estrategias de crecimiento,
        análisis de mercado, estudios de caso y herramientas para maximizar tus
        oportunidades de negocio en el sector cloud.
      </Callout>
    </div>
  );
}
