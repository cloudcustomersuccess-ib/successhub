import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { ExternalLink, Users } from 'lucide-react';

const bodyText = 'text-base font-[450] leading-6 antialiased text-slate-700';
const linkClass =
  'font-medium text-[#005657] underline decoration-[#005657]/35 underline-offset-4 transition-colors hover:text-[#003031] hover:decoration-[#005657]';

const MS_LEARN = 'https://learn.microsoft.com/es-es/partner-center/membership';

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
    <div className="mt-5">
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#005657]">
        {title}
      </h3>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="ml-5 mt-2 space-y-1.5 list-disc marker:text-slate-400">
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
  try {
    hostname = new URL(href).hostname.replace(/^www\./, '');
  } catch { /* noop */ }

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
        <div className="mt-1 text-xs text-slate-500">
          Enlace externo · se abre en una nueva pestaña
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function MaicppInfo() {
  return (
    <div className="px-6 pb-12 pt-6">
      {/* Roles */}
      <div className="mb-5 flex flex-wrap items-center gap-1.5">
        <Users className="h-3.5 w-3.5 shrink-0 text-slate-400" />
        <span className="text-xs text-slate-500">Roles necesarios:</span>
        {[
          'Administrador de partners de MAICPP',
          'Administrador de usuarios',
          'Agente de administración',
        ].map((role) => (
          <Badge key={role} variant="outline" className="text-xs font-normal text-slate-500">
            {role}
          </Badge>
        ))}
      </div>

      {/* Intro */}
      <p className={bodyText}>
        Al unirte al{' '}
        <ExtLink
          href="https://partner.microsoft.com/en-us/partnership"
          title="Programa Microsoft AI Cloud Partner Program"
        >
          Programa Microsoft AI Cloud Partner Program
        </ExtLink>
        , pasas a formar parte de una comunidad global que te conecta con las relaciones,
        herramientas, recursos y programas que necesitas para hacer crecer tu negocio y ofrecer
        una mejor experiencia a tus clientes. Puedes participar en el nivel que mejor se adapte a
        tus objetivos para ir accediendo a más ventajas progresivamente.
      </p>

      {/* Programas clave */}
      <Section title="Programas clave">
        <p className={bodyText}>
          El programa te ofrece distintas opciones para diferenciarte, salir al mercado y vender
          tus soluciones. A continuación encontrarás los programas principales que Microsoft pone
          a tu disposición según tu perfil como partner. Para más información, consulta{' '}
          <ExtLink
            href={`${MS_LEARN}/mpn-overview`}
            title="Gestionar tu membresía en el Partner Center"
          >
            cómo gestionar tu membresía en el Partner Center
          </ExtLink>
          .
        </p>

        <Subsection title="Socio de servicios">
          <BulletList
            items={[
              <ExtLink
                key="pcs"
                href={`${MS_LEARN}/introduction-to-pcs`}
                title="Designación de partner de soluciones"
              >
                Designación de partner de soluciones
              </ExtLink>,
              <ExtLink
                key="core"
                href={`${MS_LEARN}/partner-success-core-benefits`}
                title="Ventajas principales de Partner Success"
              >
                Ventajas principales de Partner Success
              </ExtLink>,
              <ExtLink
                key="expanded"
                href={`${MS_LEARN}/partner-success-expanded-benefits`}
                title="Ventajas ampliadas de Partner Success"
              >
                Ventajas ampliadas de Partner Success
              </ExtLink>,
              <ExtLink
                key="msp"
                href={`${MS_LEARN}/azure-expert-msp`}
                title="MSP experto en Azure"
              >
                MSP experto en Azure
              </ExtLink>,
            ]}
          />
        </Subsection>

        <Subsection title="Partner ISV">
          <BulletList
            items={[
              <ExtLink key="isv" href={`${MS_LEARN}/isv-success`} title="ISV Success">
                ISV Success
              </ExtLink>,
              <ExtLink
                key="marketplace"
                href={`${MS_LEARN}/marketplace-rewards`}
                title="Marketplace Rewards"
              >
                Marketplace Rewards
              </ExtLink>,
            ]}
          />
        </Subsection>

        <Subsection title="Partners de servicios de aprendizaje">
          <BulletList
            items={[
              <ExtLink
                key="training"
                href={`${MS_LEARN}/qualification-dashboard-training-service-partner`}
                title="Programa de partners de Training Services"
              >
                Programa de partners de Training Services
              </ExtLink>,
            ]}
          />
        </Subsection>
      </Section>

      {/* Únete */}
      <Section title="Únete al Programa Microsoft AI Cloud Partner Program">
        <p className={bodyText}>
          Para unirte al programa, ve a la{' '}
          <ExtLink
            href="https://partner.microsoft.com/en-us/membership"
            title="Página de inicio de sesión del Partner Program"
          >
            página de inicio de sesión
          </ExtLink>{' '}
          y selecciona{' '}
          <strong className="font-semibold text-slate-800">Convertirse en partner</strong>.
        </p>
        <p className={cn(bodyText, 'mt-4')}>
          Una vez dentro, puedes gestionar tus afiliaciones y programas desde la{' '}
          <ExtLink
            href="https://partner.microsoft.com/dashboard/v2/membership/program/solutionspartner/solutionareas/overview"
            title="Página de Membresía del Partner Center"
          >
            página de Membresía
          </ExtLink>{' '}
          para salir al mercado y ampliar tu presencia como partner.
        </p>
      </Section>

      {/* Footer */}
      <div className="mt-10 border-t border-[var(--border)] pt-5">
        <a
          href="https://learn.microsoft.com/es-es/partner-center/membership/intro-to-cloud-partner-program-membership"
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
