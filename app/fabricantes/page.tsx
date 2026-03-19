import { Factory } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Callout } from '@/components/ui/callout';

export default function FabricantesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <SectionHeader
        title="Fabricantes"
        subtitle="Información y recursos de los principales fabricantes cloud."
        icon={<Factory className="h-7 w-7" />}
      />
      <Callout type="info" title="Próximamente">
        Esta sección está en construcción. Aquí encontrarás información detallada sobre
        fabricantes como Microsoft, AWS, Google Cloud, y muchos más, incluyendo
        documentación, ofertas especiales y mejores prácticas.
      </Callout>
    </div>
  );
}
