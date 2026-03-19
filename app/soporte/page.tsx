import { HeadphonesIcon } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Callout } from '@/components/ui/callout';

export default function SoportePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <SectionHeader
        title="Soporte"
        subtitle="Centro de ayuda y contacto con nuestro equipo de soporte."
        icon={<HeadphonesIcon className="h-7 w-7" />}
      />
      <Callout type="info" title="Próximamente">
        Esta sección está en construcción. Aquí encontrarás información de contacto, FAQs,
        formularios de soporte y acceso directo a nuestro equipo de Cloud Customer Success.
      </Callout>
    </div>
  );
}
