import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { ExternalLink, Users, CheckCircle2, AlertCircle } from 'lucide-react';

const bodyText = 'text-base font-[450] leading-6 antialiased text-slate-700';
const linkClass =
  'font-medium text-[#005657] underline decoration-[#005657]/35 underline-offset-4 transition-colors hover:text-[#003031] hover:decoration-[#005657]';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="mb-4 border-b border-[var(--border)] pb-2 text-xl font-semibold tracking-tight text-[var(--foreground)]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#005657]">
        {title}
      </h3>
      {children}
    </div>
  );
}

function RequirementList({ items }: { items: { label: string; description: string }[] }) {
  return (
    <ul className="mt-3 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#005657]" />
          <p className={bodyText}>
            <strong className="font-semibold text-slate-800">{item.label}.</strong>{' '}
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

function BenefitList({ items }: { items: string[] }) {
  return (
    <ul className="ml-5 mt-3 space-y-2 list-disc marker:text-slate-400">
      {items.map((item, i) => (
        <li key={i} className={cn(bodyText, 'pl-1')}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function ExtLink({ href, title, children }: { href: string; title: string; children: React.ReactNode }) {
  let hostname = '';
  try { hostname = new URL(href).hostname.replace(/^www\./, ''); } catch { /* noop */ }

  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {children}
          <ExternalLink className="ml-1 inline-block h-3 w-3 align-middle opacity-60" />
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-72 flex-col gap-0.5">
        <div className="font-semibold text-slate-900">{title}</div>
        <div className="break-all text-slate-700">{hostname}</div>
        <div className="mt-1 text-xs text-slate-500">Enlace externo · se abre en una nueva pestaña</div>
      </HoverCardContent>
    </HoverCard>
  );
}

function InfoCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 flex gap-3 border-l-2 border-l-amber-500 px-4 py-1 text-sm text-amber-950">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
      <p className={cn(bodyText, 'text-amber-900')}>{children}</p>
    </div>
  );
}

export function CspOverview() {
  return (
    <div className="px-6 pb-12 pt-6">
      {/* Roles */}
      <div className="mb-5 flex flex-wrap items-center gap-1.5">
        <Users className="h-3.5 w-3.5 shrink-0 text-slate-400" />
        <span className="text-xs text-slate-500">Roles necesarios:</span>
        <Badge variant="outline" className="text-xs font-normal text-slate-500">
          Todos los partners interesados en el Partner Center
        </Badge>
      </div>

      {/* Intro */}
      <p className={bodyText}>
        La autorización de{' '}
        <ExtLink
          href="https://partner.microsoft.com/en-us/membership/cloud-solution-provider"
          title="Cloud Solutions Provider (CSP)"
        >
          Cloud Solutions Provider (CSP)
        </ExtLink>{' '}
        te ayuda a aprovechar más oportunidades de crecimiento, construir relaciones valiosas y
        garantizar el éxito de tus clientes dentro del ecosistema de Microsoft.
      </p>

      <BenefitList
        items={[
          'Conecta con tus clientes: entiende mejor sus negocios y necesidades.',
          'Aumenta tus ingresos: ofrece servicios de implantación y soporte técnico como revendedor indirecto o a través de un proveedor indirecto.',
          'Aporta más valor: ofrece a tus clientes soluciones sectoriales combinadas con productos de Microsoft.',
          'Gestiona el ciclo de vida completo del cliente: cubre la demanda de servicios gestionados de principio a fin.',
        ]}
      />

      {/* Requisitos de idoneidad */}
      <Section title="Requisitos de idoneidad para partners de CSP">
        <p className={bodyText}>
          Estos criterios se aplican a todos los partners de CSP, independientemente del modelo
          de autorización elegido:
        </p>
        <RequirementList
          items={[
            {
              label: 'Supera el proceso de verificación empresarial',
              description:
                'Como parte del proceso de autorización de CSP, debes completar la verificación comercial: propiedad del correo, verificación de identidad, verificación de empleo y otras comprobaciones necesarias.',
            },
            {
              label: 'Mantén el estado de verificación activo',
              description:
                'Para seguir siendo elegible para transacciones de CSP, debes superar la evaluación empresarial anual.',
            },
            {
              label: 'Mantén tu perfil de partner actualizado',
              description:
                'Asegúrate de que el nombre de tu empresa, dirección y datos de contacto principales estén siempre al día en el Partner Center.',
            },
          ]}
        />
      </Section>

      {/* Tipos de autorización */}
      <Section title="Modelos de autorización de CSP">
        <p className={bodyText}>
          Existen dos modelos de ventas: el <strong className="font-semibold text-slate-800">modelo indirecto</strong> y
          el <strong className="font-semibold text-slate-800">modelo de facturación directa</strong>.
        </p>

        <Subsection title="Modelo indirecto">
          <p className={bodyText}>
            Como revendedor indirecto, trabajas con distribuidores autorizados que te proporcionan
            herramientas, soporte al cliente y facturación. Es la vía recomendada para empezar,
            con mínima complejidad operativa.
          </p>
          <div className="mt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              Requisitos
            </p>
            <BenefitList
              items={[
                'Membresía activa en MAICPP y Partner Location Account ID (PLA) para la ubicación donde quieres vender.',
                'Capacidad para aceptar o firmar acuerdos legales en nombre de tu organización.',
                'Asociación con un distribuidor autorizado.',
              ]}
            />
          </div>
        </Subsection>

        <Subsection title="Modelo de facturación directa">
          <p className={bodyText}>
            En el modelo directo, compras productos y suscripciones de Microsoft directamente y
            los vendes a tus clientes a través de tu propio equipo. Requiere una infraestructura
            propia de ventas, facturación y soporte técnico.
          </p>
          <InfoCallout>
            El estado de factura directa no garantiza que Microsoft te asigne un account manager.
          </InfoCallout>
          <div className="mt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              Requisitos principales
            </p>
            <BenefitList
              items={[
                'Membresía activa en MAICPP y PLA para la dirección de tu empresa.',
                'Al menos 12 meses como revendedor indirecto autorizado.',
                'Mínimo USD 1 millón en ingresos transaccionales de CSP en los últimos 12 meses (TTM).',
                'Evaluación de capacidades superada (facturación, aprovisionamiento, soporte técnico, cumplimiento y seguridad).',
                'Al menos un servicio gestionado, servicio IP o aplicación de solución de cliente.',
                'Al menos una designación de partner de solución MAICPP.',
                'Todos los requisitos obligatorios de puntuación de seguridad del Partner Center.',
                'Plan de soporte técnico avanzado o Premier de Microsoft para partners.',
              ]}
            />
          </div>
        </Subsection>
      </Section>

      {/* Dónde vender */}
      <Section title="¿Dónde puedes vender a través de CSP?">
        <p className={bodyText}>
          La ubicación de tu empresa determina tu mercado. Consulta los{' '}
          <ExtLink
            href="https://learn.microsoft.com/es-es/partner-center/enroll/regional-authorization-overview"
            title="Mercados y monedas del programa regional de CSP"
          >
            mercados y monedas del programa regional de CSP
          </ExtLink>{' '}
          para más información. Para vender a un cliente, este deberá aceptar el{' '}
          <ExtLink
            href="https://learn.microsoft.com/es-es/partner-center/customers/agreements"
            title="Contrato de cliente de Microsoft"
          >
            Contrato de cliente de Microsoft
          </ExtLink>
          .
        </p>
      </Section>

      {/* Qué vender */}
      <Section title="¿Qué puedes vender a través de CSP?">
        <p className={bodyText}>
          Puedes vender toda la gama de servicios en la nube de Microsoft y otras ofertas,
          incluido software perpetuo y de servidor.
        </p>
        <InfoCallout>
          No puedes vender servicios en línea a otros partners de CSP mediante tu propio tenant de
          partner. Para venderles servicios CSP, el partner comprador debe usar un tenant distinto,
          no vinculado a su cuenta de CSP.
        </InfoCallout>
      </Section>

      {/* Footer */}
      <div className="mt-10 border-t border-[var(--border)] pt-5">
        <a
          href="https://learn.microsoft.com/es-es/partner-center/enroll/csp-overview"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#005657] transition-colors"
        >
          Ver documentación completa en Microsoft Learn
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
