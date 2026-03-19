import { Rocket, Cloud, CheckCircle2, Construction, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Callout } from '@/components/ui/callout';

const providers = [
  {
    name: 'Amazon Web Services',
    description:
      'Guía completa para el proceso de alta en AWS. Incluye registro en TD SYNNEX, configuración en AWS Partner Central y activación en StreamOne ION.',
    color: '#FF9900',
    href: '/onboarding/aws',
    available: true,
    time: '5–7 días laborables',
    cta: 'Comenzar alta en AWS',
  },
  {
    name: 'Microsoft CSP',
    description:
      'Guía completa para el proceso de alta en Microsoft Cloud Solution Provider. Incluye registro, validación de cuenta y configuración de CSP.',
    color: '#00A4EF',
    href: '/onboarding/microsoft-csp',
    available: true,
    time: '5–8 días laborables',
    cta: 'Comenzar alta en Microsoft CSP',
  },
  {
    name: 'Google Cloud Platform',
    description:
      'Guía completa para el proceso de alta en Google Cloud. Documentación en desarrollo.',
    color: '#4285F4',
    href: '/onboarding/google-cloud',
    available: false,
    time: 'Disponible próximamente',
    cta: 'Ver página',
  },
];

export default function OnboardingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <SectionHeader
        title="Onboarding"
        subtitle="Bienvenido a tu viaje en la nube con TD SYNNEX. Selecciona tu proveedor cloud para comenzar con el proceso de alta."
        icon={<Rocket className="h-7 w-7" />}
      />

      <Callout type="info" title="Proceso de alta en proveedores cloud">
        Selecciona el proveedor cloud con el que deseas trabajar para acceder a la guía
        completa de onboarding. Cada proceso está diseñado para ser sencillo y guiado paso a paso.
      </Callout>

      <h2 className="text-lg font-bold text-[var(--foreground)] mt-8 mb-4">
        Proveedores Cloud
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {providers.map((p) => (
          <div
            key={p.href}
            className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--background)] overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex-1 p-5">
              <div className="flex items-start justify-between mb-3">
                <Cloud className="h-10 w-10" style={{ color: p.color }} />
                {p.available ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                    <CheckCircle2 className="h-3 w-3" />
                    Disponible
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 dark:bg-amber-950/40 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">
                    <Construction className="h-3 w-3" />
                    Próximamente
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">{p.name}</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-3">{p.description}</p>
              <div className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)]">
                <Clock className="h-3.5 w-3.5" />
                {p.time}
              </div>
            </div>
            <div className="px-5 pb-5">
              <Button
                href={p.href}
                variant={p.available ? 'default' : 'outline'}
                className="w-full"
              >
                {p.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Support */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-[var(--foreground)] mb-3">¿Necesitas ayuda?</h2>
        <div className="rounded-xl bg-[#005657] text-white p-6">
          <p className="text-sm leading-relaxed mb-4 opacity-90">
            Si tienes dudas sobre qué proveedor cloud elegir o necesitas asistencia durante el
            proceso de alta, nuestro equipo está disponible para ayudarte.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button variant="ghost" className="bg-white/10 text-white hover:bg-white/20 border-0">
              Contactar con soporte
            </Button>
            <Button variant="outline" className="border-white/40 text-white hover:bg-white/10">
              Programar asesoría
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
