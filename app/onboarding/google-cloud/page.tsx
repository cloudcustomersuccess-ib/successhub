import { ArrowLeft, Construction } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Callout } from '@/components/ui/callout';

export default function GoogleCloudOnboardingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <Button href="/onboarding" variant="outline" size="sm" className="mb-4">
          <ArrowLeft className="h-3.5 w-3.5" />
          Volver a Onboarding
        </Button>
        <h1 className="text-3xl font-bold text-[var(--foreground)]">
          Alta en Google Cloud Platform (GCP)
        </h1>
        <p className="mt-2 text-[var(--muted-foreground)]">
          Guía completa para el proceso de alta en Google Cloud a través de TD SYNNEX
        </p>
      </div>

      <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-12 text-center mb-6">
        <Construction className="mx-auto h-20 w-20 text-[#005657] mb-4" />
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-2">
          Página en construcción
        </h2>
        <p className="text-[var(--muted-foreground)] mb-6 max-w-md mx-auto">
          Estamos trabajando en la guía de onboarding para Google Cloud Platform.
          Próximamente encontrarás aquí toda la información necesaria para comenzar.
        </p>
        <Button href="/onboarding" variant="default">
          Volver a Onboarding
        </Button>
      </div>

      <Callout type="info" title="Próximamente">
        La guía de alta en Google Cloud estará disponible pronto. Mientras tanto,
        si necesitas asistencia inmediata, contacta con tu Partner Development Manager.
      </Callout>
    </div>
  );
}
