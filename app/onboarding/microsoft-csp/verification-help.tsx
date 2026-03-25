import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import {
  AlertCircle,
  BadgeCheck,
  ExternalLink,
  FileSearch,
  Info,
  Users,
} from 'lucide-react';

const bodyText = 'text-base font-[450] leading-6 antialiased text-slate-700';
const linkClass =
  'font-medium text-[#005657] underline decoration-[#005657]/35 underline-offset-4 transition-colors hover:text-[#003031] hover:decoration-[#005657]';

const VERIFICATION_DOC =
  'https://learn.microsoft.com/es-es/partner-center/enroll/verification-responses';

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

function BulletList({ items }: { items: React.ReactNode[] }) {
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

function ExtLink({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) {
  let hostname = '';
  try {
    hostname = new URL(href).hostname.replace(/^www\./, '');
  } catch {
    /* noop */
  }

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

function StatusItem({
  icon,
  title,
  children,
  tone = 'default',
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  tone?: 'default' | 'success' | 'warning';
}) {
  const toneClass =
    tone === 'success'
      ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
      : tone === 'warning'
        ? 'border-amber-200 bg-amber-50 text-amber-900'
        : 'border-[var(--border)] bg-white text-slate-900';

  return (
    <div className={cn('rounded-xl border p-4', toneClass)}>
      <div className="mb-2 flex items-center gap-2">
        {icon}
        <span className="text-sm font-semibold">{title}</span>
      </div>
      <p className={cn(bodyText, 'text-sm leading-6')}>{children}</p>
    </div>
  );
}

export function VerificationHelp() {
  return (
    <div className="px-6 pb-12 pt-6">
      <div className="mb-5 flex flex-wrap items-center gap-1.5">
        <Users className="h-3.5 w-3.5 shrink-0 text-slate-400" />
        <span className="text-xs text-slate-500">Roles que suelen intervenir:</span>
        {[
          'Contacto principal',
          'Administrador de cuenta',
          'Administrador global',
        ].map((role) => (
          <Badge key={role} variant="outline" className="text-xs font-normal text-slate-500">
            {role}
          </Badge>
        ))}
      </div>

      <p className={bodyText}>
        Cuando te inscribes en un programa nuevo o cambias datos legales en Partner Center,
        Microsoft revisa el nombre de la empresa, la dirección y el contacto principal. En
        algunos casos también puede pedir documentación adicional por correo. La validación suele
        tardar entre 3 y 5 días laborables.
      </p>

      <Section title="Qué revisa Microsoft y cómo responder">
        <Subsection title="Propiedad del correo">
          <BulletList
            items={[
              'El correo principal debe ser una cuenta profesional real, asociada al dominio de tu empresa y con buzón operativo.',
              'Evita usar cuentas personales o credenciales sin bandeja de entrada activa.',
              <>
                Si no recibes el correo de validación en un día laborable, entra en tu perfil del
                programa y vuelve a enviarlo. Revisa spam y añade `microsoft.com` como dominio de
                confianza.
              </>,
            ]}
          />
        </Subsection>

        <Subsection title="Identidad">
          <BulletList
            items={[
              'Microsoft necesita confirmar la identidad de al menos una persona de la cuenta.',
              'Los datos personales deben coincidir exactamente con el documento oficial que se use para la verificación.',
              'Si aparece un estado de desafío, al menos un usuario deberá completar la validación con credenciales verificables.',
              'Si la validación queda rechazada y no aparece la opción para corregirla, normalmente no hay más acciones disponibles desde la cuenta y el registro puede quedar suspendido.',
            ]}
          />
        </Subsection>

        <Subsection title="Empleo">
          <BulletList
            items={[
              'El contacto principal debe poder demostrar que trabaja en la empresa y que el dominio del correo pertenece a la organización.',
              'Si se rechaza esta parte, suele ayudar aportar una carta firmada por la empresa, un registro de titularidad del dominio, una factura del dominio o documentación del registrador.',
            ]}
          />
        </Subsection>

        <Subsection title="Negocio">
          <BulletList
            items={[
              'El nombre legal y la dirección deben coincidir con los registros oficiales, sin abreviaturas raras, errores ortográficos ni variantes.',
              'Si Microsoft encuentra coincidencias externas, selecciónalas cuando encajen con tu empresa.',
              'Ten preparada documentación oficial: escritura o constitución, certificado fiscal, licencia comercial, registro mercantil, contrato de alquiler, carta bancaria o factura de suministros.',
            ]}
          />
        </Subsection>

        <Subsection title="Diligencia adicional">
          <BulletList
            items={[
              'En algunos casos Microsoft hace comprobaciones extra sobre la empresa.',
              'Si ocurre, puede pedirte que respondas un cuestionario o que aportes medidas o aclaraciones adicionales.',
            ]}
          />
        </Subsection>
      </Section>

      <Section title="Dónde mirar el estado">
        <p className={bodyText}>
          Puedes seguir todo el proceso desde{' '}
          <ExtLink
            href="https://partner.microsoft.com/en-us/dashboard/account/v3/settings/partnerprofile"
            title="Partner Center · Account Settings"
          >
            Account Settings
          </ExtLink>{' '}
          {'>'} Legal Info. Ahí verás las pestañas de Partner, Reseller o Developer según los
          programas que tenga activos tu organización.
        </p>

        <div className="mt-5 grid gap-3">
          <StatusItem
            icon={<BadgeCheck className="h-4 w-4 text-emerald-600" />}
            title="Authorized"
            tone="success"
          >
            La cuenta ya está validada y no necesitas hacer nada más.
          </StatusItem>
          <StatusItem
            icon={<Info className="h-4 w-4 text-slate-500" />}
            title="Pending o In progress"
          >
            La revisión sigue en curso. Lo normal es esperar y volver a comprobar el estado desde
            Legal Info.
          </StatusItem>
          <StatusItem
            icon={<AlertCircle className="h-4 w-4 text-amber-600" />}
            title="Rejected"
            tone="warning"
          >
            Microsoft no ha podido validar la información. En ese caso tendrás que revisar el
            motivo del rechazo y volver a subir documentación desde el panel de verificación.
          </StatusItem>
        </div>
      </Section>

      <Section title="Qué hacer si la validación se rechaza">
        <BulletList
          items={[
            'Entra en Account Settings > Legal Info y abre el resumen de verificación.',
            'Pulsa la acción para resolver o corregir el problema.',
            'Elige el tipo de documento que vas a subir.',
            'Añade contexto útil en el comentario para explicar por qué la documentación valida la cuenta.',
            'Sube el archivo y espera la nueva revisión.',
            'Lo ideal es que la apelación la presente el contacto principal de la empresa. Microsoft limita el número de apelaciones.',
          ]}
        />

        <div className="mt-5 rounded-xl border border-[var(--border)] bg-slate-50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <FileSearch className="h-4 w-4 text-[#005657]" />
            <span className="text-sm font-semibold text-slate-900">Recomendación práctica</span>
          </div>
          <p className={cn(bodyText, 'text-sm leading-6')}>
            Antes de volver a enviar nada, revisa que el nombre legal, la dirección, el correo
            principal y los documentos coincidan entre sí. La mayoría de bloqueos vienen de
            pequeños descuadres entre los datos del perfil y la documentación oficial.
          </p>
        </div>
      </Section>

      <div className="mt-10 border-t border-[var(--border)] pt-5">
        <a
          href={VERIFICATION_DOC}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 transition-colors hover:text-[#005657]"
        >
          Ver documentación oficial de Microsoft Learn
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
