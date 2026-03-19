import { Cloud } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Callout } from '@/components/ui/callout';

export default function StreamOneIONPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <SectionHeader
        title="StreamOne ION"
        subtitle="Portal de gestión cloud completo para tus operaciones diarias."
        icon={<Cloud className="h-7 w-7" />}
      />
      <Callout type="info" title="Próximamente">
        Esta sección está en construcción. Aquí encontrarás documentación completa sobre
        StreamOne ION, tutoriales, guías de uso y mejores prácticas para aprovechar al
        máximo la plataforma.
      </Callout>
    </div>
  );
}
