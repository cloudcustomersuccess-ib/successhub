import { Shield } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Callout } from '@/components/ui/callout';

export default function SeguridadPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <SectionHeader
        title="Seguridad"
        subtitle="Mejores prácticas y herramientas de seguridad en la nube."
        icon={<Shield className="h-7 w-7" />}
      />
      <Callout type="warning" title="Próximamente">
        Esta sección está en construcción. Aquí encontrarás guías de seguridad, mejores
        prácticas, compliance, certificaciones y herramientas para mantener tu
        infraestructura cloud segura.
      </Callout>
    </div>
  );
}
