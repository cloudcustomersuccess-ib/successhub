'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Info,
  AlertTriangle,
  CheckCircle2,
  AlertCircle,
  BadgeCheck,
  Mail,
  FileText,
  FileCheck,
  Fingerprint,
  User,
  Building2,
  Clock,
  BarChart3,
  Menu,
  RotateCcw,
  ChevronRight,
  Copy,
  Check,
  BookOpen,
  ShieldCheck,
  Square,
  VenetianMask,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/language-provider';
import { guideData as awsDataEs } from '../aws/data';
import { guideData as awsDataEn } from '../aws/data.en';
import { guideData as awsDataPt } from '../aws/data.pt';
import { guideData as msGuideData } from './data';
import type { AnyBullet, Seg } from './data';
import { MaicppInfo } from './maicpp-info';
import { CspOverview } from './csp-overview';
import { VerificationHelp } from './verification-help';
import { cn } from '@/lib/utils';
import { Accordion } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Sheet } from '@/components/ui/sheet';

// ─── Types ───────────────────────────────────────────────────────────────────

interface StepState {
  id: string;
  completed: boolean;
  inView: boolean;
}

type StepOwner = 'client' | 'tdsynnex';

type RichSegment = {
  type?: 'text' | 'link' | 'button';
  text?: string;
  label?: string;
  href?: string;
  className?: string;
};

const bodyTextClass = 'text-base font-[450] leading-6 antialiased text-slate-700';
const typographyPClass = `${bodyTextClass} [&:not(:first-child)]:mt-6`;

// ─── Link hover card ──────────────────────────────────────────────────────────

function getLinkPreview(href: string, title: string) {
  const isExternal = /^https?:\/\//i.test(href);
  try {
    const url = isExternal ? new URL(href) : new URL(href, 'https://successhub.local');
    const host = isExternal ? url.hostname.replace(/^www\./, '') : 'successhub';
    const description = isExternal
      ? `${host}${url.pathname === '/' ? '' : url.pathname}`
      : href;
    return {
      heading: title,
      description,
      meta: isExternal ? 'Enlace externo · se abre en una nueva pestaña' : 'Navegación interna',
    };
  } catch {
    return {
      heading: title,
      description: href,
      meta: isExternal ? 'Enlace externo · se abre en una nueva pestaña' : 'Navegación interna',
    };
  }
}

function LinkHoverCard({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactElement;
}) {
  const preview = getLinkPreview(href, title);
  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="flex w-72 flex-col gap-0.5">
        <div className="font-semibold text-slate-900">{preview.heading}</div>
        <div className="break-all text-slate-700">{preview.description}</div>
        <div className="mt-1 text-xs text-slate-500">{preview.meta}</div>
      </HoverCardContent>
    </HoverCard>
  );
}

// ─── Static data ─────────────────────────────────────────────────────────────

const ownerByStepId: Record<string, StepOwner> = {
  '1.1': 'client',
  '1.2': 'tdsynnex',
  '1.3': 'client',
  '1.4': 'tdsynnex',
  '2.1': 'client',
  '2.2': 'client',
  '2.3': 'client',
  '2.4': 'client',
  '3.1': 'client',
  '3.2': 'tdsynnex',
  '3.3': 'client',
  '3.4': 'tdsynnex',
};

const uiTextByLocale = {
  es: {
    contentsTitle: 'Contenido',
    resetProgress: 'Reiniciar progreso',
    resetConfirm: '¿Estás seguro de que quieres reiniciar todo el progreso?',
    progressTitle: 'Progreso',
    progressCompleted: 'completados',
    backToOnboarding: 'Volver a Onboarding',
    estimatedTime: '5–8 días laborables',
    difficulty: 'Dificultad media',
    stepsCompleted: 'pasos completados',
    prerequisites: 'Requisitos previos',
    documents: 'Documentos necesarios',
    expectedEmail: 'Correo electrónico esperado',
    completionTitle: '¡Enhorabuena!',
    completionMessage:
      'Has completado exitosamente el proceso de onboarding de Microsoft CSP con TD SYNNEX.',
    stepPrefix: 'Paso',
    ownerYou: 'Tu acción',
    ownerTds: 'TD SYNNEX',
    phaseLabel: 'Fase',
  },
  en: {
    contentsTitle: 'Contents',
    resetProgress: 'Reset progress',
    resetConfirm: 'Are you sure you want to reset all progress?',
    progressTitle: 'Progress',
    progressCompleted: 'completed',
    backToOnboarding: 'Back to Onboarding',
    estimatedTime: '5–8 business days',
    difficulty: 'Medium difficulty',
    stepsCompleted: 'steps completed',
    prerequisites: 'Prerequisites',
    documents: 'Required documents',
    expectedEmail: 'Expected email',
    completionTitle: 'Congratulations!',
    completionMessage:
      'You have successfully completed the Microsoft CSP onboarding process with TD SYNNEX.',
    stepPrefix: 'Step',
    ownerYou: 'Your action',
    ownerTds: 'TD SYNNEX',
    phaseLabel: 'Phase',
  },
  pt: {
    contentsTitle: 'Conteúdo',
    resetProgress: 'Reiniciar progresso',
    resetConfirm: 'Tens a certeza de que queres reiniciar todo o progresso?',
    progressTitle: 'Progresso',
    progressCompleted: 'concluídos',
    backToOnboarding: 'Voltar ao Onboarding',
    estimatedTime: '5–8 dias úteis',
    difficulty: 'Dificuldade média',
    stepsCompleted: 'passos concluídos',
    prerequisites: 'Requisitos prévios',
    documents: 'Documentos necessários',
    expectedEmail: 'Email esperado',
    completionTitle: 'Parabéns!',
    completionMessage:
      'Concluíste com sucesso o processo de onboarding de Microsoft CSP com a TD SYNNEX.',
    stepPrefix: 'Passo',
    ownerYou: 'A tua ação',
    ownerTds: 'TD SYNNEX',
    phaseLabel: 'Fase',
  },
};

// ─── Data merging ─────────────────────────────────────────────────────────────
// Step 1 comes from the AWS guide data; steps 2 & 3 come from the MS CSP guide.

function buildMergedGuide(awsData: any) {
  const awsPhase1Steps = awsData.steps
    .filter((s: any) => s.id === '1' || s.id.startsWith('1.'))
    .map((s: any) => ({ ...s, _format: 'aws' as const }));

  const msPhase23Steps = msGuideData.steps
    .filter((s: any) => s.id !== '1' && !s.id.startsWith('1.'))
    .map((s: any) => ({ ...s, _format: 'ms' as const }));

  return {
    title: msGuideData.title,
    intro: msGuideData.intro,
    callouts: msGuideData.callouts,
    primaryCta: msGuideData.primaryCta,
    preStepSection: msGuideData.preStepSection,
    steps: [...awsPhase1Steps, ...msPhase23Steps],
  };
}

const mergedDataByLocale = {
  es: buildMergedGuide(awsDataEs),
  en: buildMergedGuide(awsDataEn),
  pt: buildMergedGuide(awsDataPt),
};

// ─── AWS-style segment renderer ───────────────────────────────────────────────

function renderSegments(segments?: RichSegment[]) {
  if (!segments || segments.length === 0) return null;
  return segments.map((segment, index) => {
    if (segment.type === 'link' && segment.href) {
      return (
        <LinkHoverCard
          key={index}
          href={segment.href}
          title={segment.label ?? segment.text ?? segment.href}
        >
          <a
            href={segment.href}
            target="_blank"
            rel="noreferrer"
            className={cn(
              'font-medium text-[#005657] underline decoration-[#005657]/35 underline-offset-4 transition-colors hover:text-[#003031] hover:decoration-[#005657]',
              segment.className
            )}
          >
            {segment.label ?? segment.text}
          </a>
        </LinkHoverCard>
      );
    }
    if (segment.type === 'button' && segment.href) {
      return (
        <LinkHoverCard
          key={index}
          href={segment.href}
          title={segment.label ?? segment.text ?? segment.href}
        >
          <a
            href={segment.href}
            target="_blank"
            rel="noreferrer"
            className={cn(
              'inline-flex h-8 items-center rounded-md px-3 align-middle text-xs font-semibold transition-colors',
              'bg-[#005657] text-white hover:bg-[#003031]',
              segment.className
            )}
          >
            {segment.label ?? segment.text}
          </a>
        </LinkHoverCard>
      );
    }
    return (
      <span key={index} className={segment.className}>
        {segment.text}
      </span>
    );
  });
}

// ─── MS-style segment renderer ────────────────────────────────────────────────

function RenderMsSegs({ segs }: { segs: Seg[] }) {
  return (
    <>
      {segs.map((seg, i) => {
        if (seg.t === 'text') return <span key={i}>{seg.s}</span>;
        if (seg.t === 'breadcrumb')
          return (
            <PartnerCenterBreadcrumb key={i} items={seg.items} />
          );
        if (seg.t === 'link')
          return (
            <LinkHoverCard key={i} href={seg.href} title={seg.s}>
              <a
                href={seg.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[#005657] underline decoration-[#005657]/35 underline-offset-4 transition-colors hover:text-[#003031] hover:decoration-[#005657]"
              >
                {seg.s}
                <ExternalLink className="h-3 w-3 shrink-0" />
              </a>
            </LinkHoverCard>
          );
        if (seg.t === 'btn')
          return (
            <a
              key={i}
              href={seg.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-[2px] border border-[#0078d4] bg-[#0078d4] px-2.5 py-0.5 text-xs font-semibold text-white hover:bg-[#106ebe] transition-colors"
            >
              {seg.s}
              <ExternalLink className="h-3 w-3 shrink-0" />
            </a>
          );
        if (seg.t === 'option')
          return (
            <span
              key={i}
              className="mx-0.5 inline-flex items-center gap-1 rounded border border-slate-300 bg-white px-1.5 py-0.5 align-middle font-sans text-xs font-medium text-slate-700 shadow-sm"
            >
              <Square className="h-2.5 w-2.5 shrink-0 text-slate-400" />
              {seg.s}
            </span>
          );
        if (seg.t === 'tag')
          return (
            <span
              key={i}
              className="mx-0.5 inline-flex items-center gap-1 align-middle text-slate-700"
            >
              {seg.icon === 'incognito' && (
                <VenetianMask className="h-3.5 w-3.5 shrink-0 text-slate-500" />
              )}
              <span className="font-medium">{seg.s}</span>
            </span>
          );
        if (seg.t === 'status')
          return (
            <span
              key={i}
              className={cn(
                'mx-1 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 align-middle text-xs font-semibold shadow-sm',
                seg.tone === 'success'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  : seg.tone === 'warning'
                    ? 'border-amber-200 bg-amber-50 text-amber-700'
                    : 'border-slate-200 bg-slate-50 text-slate-700'
              )}
            >
              <BadgeCheck className="h-3.5 w-3.5 shrink-0" />
              {seg.s}
            </span>
          );
        return null;
      })}
    </>
  );
}

// ─── Copy button (MS steps) ───────────────────────────────────────────────────

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        'mt-2 inline-flex items-center gap-1.5 rounded border px-3 py-1.5 text-xs font-medium transition-colors',
        copied
          ? 'border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
          : 'border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[#005657]'
      )}
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? '¡Copiado!' : label}
    </button>
  );
}

// ─── MS-style bullet renderer ─────────────────────────────────────────────────

function RenderMsBullet({ bullet }: { bullet: AnyBullet }) {
  if (typeof bullet === 'string') {
    const colonIdx = bullet.indexOf(':');
    const hasLabel = colonIdx > 0 && colonIdx < 60;
    const label = hasLabel ? bullet.slice(0, colonIdx) : null;
    const body = hasLabel ? bullet.slice(colonIdx + 1).trim() : bullet;
    return (
      <span className="leading-relaxed text-[var(--foreground)]">
        {label ? (
          <>
            <strong className="font-semibold">{label}:</strong> {body}
          </>
        ) : (
          body
        )}
      </span>
    );
  }
  return (
    <span className="leading-relaxed text-[var(--foreground)]">
      <RenderMsSegs segs={bullet.segs} />
      {bullet.action && (
        <span className="block mt-2">
          {bullet.action.copy ? (
            <CopyButton text={bullet.action.copy} label={bullet.action.label} />
          ) : bullet.action.href ? (
            <a
              href={bullet.action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[2px] border border-[#0078d4] bg-[#0078d4] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#106ebe] transition-colors"
            >
              {bullet.action.label}
              <ExternalLink className="h-3 w-3" />
            </a>
          ) : null}
        </span>
      )}
    </span>
  );
}

// ─── AWS bullet renderer (step 1) ─────────────────────────────────────────────

function renderAwsBulletContent(bullet: any) {
  const isStringBullet = typeof bullet === 'string';
  const plainText = isStringBullet ? bullet : (bullet.text ?? '');
  const colonIdx = plainText.indexOf(':');
  const hasLabel = isStringBullet && colonIdx > 0 && colonIdx < 60;
  const label = hasLabel ? plainText.slice(0, colonIdx) : null;
  const body = hasLabel ? plainText.slice(colonIdx + 1).trim() : plainText;

  if (!isStringBullet && bullet.segments) {
    return renderSegments(bullet.segments);
  }
  if (label) {
    return (
      <>
        <strong className="font-semibold text-slate-800">{label}:</strong> {body}
      </>
    );
  }
  return body;
}

// ─── Edge browser mockup (MS notes) ──────────────────────────────────────────

function EdgeBrowserMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-lg overflow-hidden border border-[var(--border)] shadow-sm">
      <div className="flex items-center gap-2 bg-[#f3f3f3] dark:bg-[#2d2d2d] border-b border-[var(--border)] px-3 py-1.5">
        <div className="flex gap-1.5 shrink-0">
          <div className="h-2.5 w-2.5 rounded-full bg-[#e74c3c]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#f39c12]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#2ecc71]" />
        </div>
        <div className="flex flex-1 items-center gap-2">
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#0078d4" />
            <path d="M12 6c-3.31 0-6 2.69-6 6 0 2.97 2.16 5.44 5 5.92V16H9v-2h2v-1.5c0-1.93 1.57-3.5 3.5-3.5H16v2h-1.5c-.83 0-1.5.67-1.5 1.5V14h3l-.5 2H13v3.92c2.84-.48 5-2.95 5-5.92 0-3.31-2.69-6-6-6z" fill="white" />
          </svg>
          <div className="flex-1 rounded bg-white dark:bg-[#3c3c3c] border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--muted-foreground)] truncate">
            partner.microsoft.com
          </div>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full object-cover" loading="lazy" />
    </div>
  );
}

// ─── Note callout (unified: handles AWS and MS note formats) ──────────────────

function PartnerCenterBreadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <Breadcrumb className="mx-1 inline-flex align-middle">
      <BreadcrumbList className="gap-1 text-xs font-medium text-slate-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={`${item.label}-${index}`}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-xs">{item.label}</BreadcrumbPage>
                ) : item.href ? (
                  <BreadcrumbLink
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-500 hover:text-slate-900"
                  >
                    {item.label}
                  </BreadcrumbLink>
                ) : (
                  <span className="text-xs text-slate-500">{item.label}</span>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator className="text-slate-400" />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function NoteCallout({ note }: { note: any }) {
  const configs: Record<
    string,
    { icon: React.ReactNode; cls: string; labelCls: string; label: string }
  > = {
    info: {
      icon: <Info className="h-4 w-4 mt-0.5 shrink-0" />,
      cls: 'rounded-none border-x-0 border-y-0 border-l-2 border-l-[#005657] bg-transparent text-slate-800',
      labelCls: 'text-[#005657]',
      label: 'Nota',
    },
    warning: {
      icon: <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />,
      cls: 'rounded-none border-x-0 border-y-0 border-l-2 border-l-amber-500 bg-transparent text-amber-950',
      labelCls: 'text-amber-700',
      label: 'Aviso',
    },
    success: {
      icon: <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />,
      cls: 'bg-emerald-50 border-emerald-300 text-emerald-900 dark:bg-emerald-950/40 dark:border-emerald-700 dark:text-emerald-200',
      labelCls: 'text-emerald-700 dark:text-emerald-400',
      label: 'Tip',
    },
    danger: {
      icon: <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />,
      cls: 'bg-red-50 border-red-300 text-red-900 dark:bg-red-950/40 dark:border-red-700 dark:text-red-200',
      labelCls: 'text-red-700 dark:text-red-400',
      label: 'Importante',
    },
    error: {
      icon: <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />,
      cls: 'bg-red-50 border-red-300 text-red-900 dark:bg-red-950/40 dark:border-red-700 dark:text-red-200',
      labelCls: 'text-red-700 dark:text-red-400',
      label: 'Error',
    },
    note: {
      icon: <Info className="h-4 w-4 mt-0.5 shrink-0" />,
      cls: 'rounded-none border-x-0 border-y-0 border-l-2 border-l-[#005657] bg-transparent text-[var(--foreground)]',
      labelCls: 'text-[#005657]',
      label: 'Nota',
    },
  };

  const cfg = configs[note.type] ?? configs['note'];
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    FileCheck,
    BadgeCheck,
    Fingerprint,
    ShieldCheck,
  };
  const CustomIcon = note.icon ? iconMap[note.icon] : null;
  const renderedIcon = CustomIcon ? (
    <CustomIcon className="h-4 w-4 mt-0.5 shrink-0" />
  ) : (
    cfg.icon
  );

  return (
    <div className={cn('flex gap-3 border px-4 py-1 text-sm', cfg.cls)}>
      <span className={cfg.labelCls}>{renderedIcon}</span>
      <div className="flex-1 min-w-0">
        {note.title && (
          <p className={cn('font-semibold mb-0.5', cfg.labelCls)}>{note.title}</p>
        )}

        {/* Plain text */}
        {note.text && !note.paragraphs && (
          <p className={cn(typographyPClass, 'text-slate-700')}>{note.text}</p>
        )}

        {/* AWS format: body (array of segment paragraphs) */}
        {note.body &&
          note.body.map((paragraph: any, index: number) => (
            <p
              key={index}
              className={cn(typographyPClass, 'text-slate-700', index === 0 && 'mt-0')}
            >
              {renderSegments(paragraph.segments)}
            </p>
          ))}

        {/* AWS format: items (bullet list) */}
        {note.items && note.items.length > 0 && (
          <ul className="mt-3 ml-6 list-disc space-y-2 marker:text-[var(--muted-foreground)]">
            {note.items.map((item: string, index: number) => (
              <li key={index} className="pl-1">
                <p className={cn(bodyTextClass, 'mt-0 text-slate-700')}>{item}</p>
              </li>
            ))}
          </ul>
        )}

        {/* MS format: rich paragraphs */}
        {note.paragraphs &&
          note.paragraphs.map((para: any, i: number) =>
            typeof para === 'string' ? (
              <div key={i} className={cn('leading-relaxed', i > 0 && 'mt-3')}>
                {para}
              </div>
            ) : (
              <div key={i} className={cn('leading-relaxed', i > 0 && 'mt-3')}>
                <RenderMsSegs segs={para} />
              </div>
            )
          )}

        {/* MS format: image in browser mockup */}
        {note.image && (
          <div className="mt-3">
            {note.image.browser === 'edge' ? (
              <EdgeBrowserMockup src={note.image.src} alt={note.image.alt} />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={note.image.src}
                alt={note.image.alt}
                className="w-full rounded-md border border-[var(--border)]"
                loading="lazy"
              />
            )}
          </div>
        )}

        {/* MS format: nested callout */}
        {note.nested && (
          <div className="mt-3">
            <NoteCallout note={note.nested} />
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Email preview ────────────────────────────────────────────────────────────

function EmailPreview({ anim, label }: { anim: any; label: string }) {
  return (
    <div className="overflow-hidden rounded-none border border-[var(--border)] bg-transparent">
      <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-2">
        <Mail className="h-4 w-4 text-[#005657]" />
        <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
          {label}
        </span>
      </div>
      <div className="px-4 py-3 space-y-1">
        {anim.payload.map((line: string, idx: number) => (
          <p key={idx} className="text-sm text-[var(--foreground)] font-mono">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

// ─── Asset chip ───────────────────────────────────────────────────────────────

function AssetChip({ asset }: { asset: any }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-[var(--border)]/80 px-3 py-2.5 text-sm">
      <FileText className="h-4 w-4 text-[#005657] shrink-0" />
      <span className="font-medium text-[var(--foreground)]">{asset.title}</span>
      <span className="ml-auto text-xs text-[var(--muted-foreground)] font-mono">{asset.type}</span>
    </div>
  );
}

// ─── TOC item ─────────────────────────────────────────────────────────────────

function TocItem({
  step,
  isActive,
  onClick,
}: {
  step: any;
  isActive: boolean;
  onClick: () => void;
}) {
  const shortTitle = step.title.replace(/^(Paso|Step|Passo)\s+[\d.]+\s*\|\s*/i, '');

  return (
    <button
      onClick={onClick}
      className={cn(
        'group flex w-full items-center border-l px-4 py-2.5 text-left transition-colors',
        isActive
          ? 'border-l-[#005657] text-slate-900'
          : 'border-l-transparent text-slate-500 hover:border-l-slate-300 hover:text-slate-800'
      )}
    >
      <span
        className={cn(
          'truncate text-[14px] leading-6 tracking-[-0.01em]',
          isActive ? 'font-medium' : 'font-normal'
        )}
      >
        {shortTitle}
      </span>
    </button>
  );
}

// ─── TOC sidebar ──────────────────────────────────────────────────────────────

function TableOfContents({
  guideData,
  activeStep,
  scrollToStep,
  uiText,
  resetProgress,
}: {
  guideData: any;
  activeStep: string | null;
  scrollToStep: (id: string) => void;
  uiText: (typeof uiTextByLocale)['es'];
  resetProgress: () => void;
}) {
  const mainSteps = guideData.steps.filter((s: any) => !s.id.includes('.'));
  const subSteps = guideData.steps.filter((s: any) => s.id.includes('.'));

  return (
    <nav className="flex flex-col gap-1">
      {mainSteps.map((phase: any) => {
        const phaseSubSteps = subSteps.filter((s: any) =>
          s.id.startsWith(phase.id + '.')
        );
        const phaseShortTitle = phase.title.replace(
          /^(Paso|Step|Passo)\s+\d+\.\s*/i,
          ''
        );

        return (
          <div key={phase.id} className="mb-5">
            <p className="mb-2 px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {phaseShortTitle}
            </p>
            <div className="space-y-0.5 border-l border-slate-200/80">
              {phaseSubSteps.map((step: any) => (
                <TocItem
                  key={step.id}
                  step={step}
                  isActive={activeStep === step.id}
                  onClick={() => scrollToStep(step.id)}
                />
              ))}
            </div>
          </div>
        );
      })}

      <Separator className="my-4" />

      <button
        onClick={resetProgress}
        className="flex w-full items-center gap-2 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 transition-colors hover:text-slate-800"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        {uiText.resetProgress}
      </button>
    </nav>
  );
}

// ─── Step section ─────────────────────────────────────────────────────────────

function StepSection({
  step,
  state,
  uiText,
  stepRef,
  onOpenOfficialGuide,
}: {
  step: any;
  state: StepState | undefined;
  uiText: (typeof uiTextByLocale)['es'];
  stepRef: (el: HTMLDivElement | null) => void;
  onOpenOfficialGuide: (guide: any) => void;
}) {
  const owner = ownerByStepId[step.id];
  const titleMatch = step.title.match(/^(?:Paso|Step|Passo)\s+([\d.]+)\s*\|\s*(.+)$/i);
  const stepNum = titleMatch?.[1] ?? step.id;
  const stepName = titleMatch?.[2] ?? step.title;
  const isAwsFormat = step._format === 'aws';

  return (
    <div ref={stepRef} className="scroll-mt-24">
      <Separator className="mb-10 bg-[var(--border)]/70" />

      <div className="mb-8">
        <p className="mb-2 text-sm font-medium tracking-tight text-slate-500">{stepNum}</p>

        <div className="mb-3 flex flex-wrap items-start gap-3">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            {stepName}
          </h3>

          {owner === 'client' ? (
            <Badge
              variant="outline"
              className="ml-auto shrink-0 border-[var(--border)] text-[var(--muted-foreground)] sm:ml-0"
            >
              <User className="h-3 w-3" />
              {uiText.ownerYou}
            </Badge>
          ) : owner === 'tdsynnex' ? (
            <Badge
              variant="outline"
              className="ml-auto shrink-0 border-[var(--border)] text-[var(--muted-foreground)] sm:ml-0"
            >
              <Building2 className="h-3 w-3" />
              {uiText.ownerTds}
            </Badge>
          ) : null}

          {state?.completed && (
            <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
          )}
        </div>

        <p className={cn(typographyPClass, 'max-w-3xl text-slate-600')}>{step.summary}</p>

        {step.officialGuide && (
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button
              variant={step.officialGuide.variant ?? 'outline'}
              size="sm"
              onClick={() => onOpenOfficialGuide(step.officialGuide)}
              className={cn(
                step.officialGuide.variant === 'link'
                  ? 'h-auto px-0 text-sm font-medium text-[#005657] hover:text-[#003031]'
                  : 'border-[var(--border)] bg-white/80 font-medium shadow-none hover:border-[#005657] hover:bg-white'
              )}
            >
              {step.officialGuide.variant !== 'link' && <BookOpen className="h-4 w-4" />}
              {step.officialGuide.buttonLabel}
            </Button>
          </div>
        )}
      </div>

      {/* Prerequisites */}
      {step.prerequisites && step.prerequisites.length > 0 && (
        <div className="mb-6">
          <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
            {uiText.prerequisites}
          </h4>
          <ul className="space-y-1.5">
            {step.prerequisites.map((req: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-[var(--foreground)]">
                <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-[#005657]" />
                <span className={cn(bodyTextClass, 'text-slate-700')}>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Instructions */}
      {step.instructions &&
        step.instructions.map((inst: any, idx: number) => (
          <div key={idx} className="mb-6">
            {inst.title && (
              <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
                {inst.title}
              </h4>
            )}
            <ol className="relative space-y-4 before:absolute before:bottom-4 before:left-4 before:top-4 before:w-px before:bg-[linear-gradient(180deg,rgba(148,163,184,0.28),rgba(148,163,184,0.12))]">
              {inst.bullets.map((bullet: any, bidx: number) => (
                <li
                  key={bidx}
                  className="relative grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-x-4"
                >
                  <span className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-[#f8fafb] text-sm font-semibold leading-none text-[#005657]">
                    {bidx + 1}
                  </span>
                  <div className="min-w-0 pt-1">
                    <span className={cn('block min-w-0', bodyTextClass, 'text-slate-700')}>
                      {isAwsFormat ? (
                        renderAwsBulletContent(bullet)
                      ) : (
                        <RenderMsBullet bullet={bullet} />
                      )}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}

      {/* FAQ accordion */}
      {step.accordion && step.accordion.length > 0 && (
        <div className="mb-6">
          <Accordion items={step.accordion} />
        </div>
      )}

      {/* Assets / Documents */}
      {step.assets && step.assets.length > 0 && (
        <div className="mb-6">
          <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
            {uiText.documents}
          </h4>
          <div className="grid gap-2 sm:grid-cols-2">
            {step.assets.map((asset: any, i: number) => (
              <AssetChip key={i} asset={asset} />
            ))}
          </div>
        </div>
      )}

      {/* Email animations */}
      {step.animations &&
        step.animations.map((anim: any, i: number) => (
          <div key={i} className="mb-6">
            <EmailPreview anim={anim} label={uiText.expectedEmail} />
          </div>
        ))}

      {/* Notes */}
      {step.notes && step.notes.length > 0 && (
        <div className="mb-6 space-y-4">
          {step.notes.map((note: any, i: number) => (
            <NoteCallout key={i} note={note} />
          ))}
        </div>
      )}

      {/* External links */}
      {step.links && step.links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {step.links.map((link: any, i: number) =>
            isAwsFormat ? (
              <LinkHoverCard key={i} href={link.href} title={link.label}>
                <Button
                  variant="outline"
                  size="sm"
                  href={link.href}
                  target="_blank"
                  className="border-[var(--border)] bg-transparent font-medium shadow-none hover:border-[#005657] hover:bg-transparent"
                >
                  {link.label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              </LinkHoverCard>
            ) : (
              <Button key={i} variant="outline" size="sm" href={link.href} target="_blank"
                className="border-[var(--border)] bg-transparent font-medium shadow-none hover:border-[#005657] hover:bg-transparent">
                {link.label}
                <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            )
          )}
        </div>
      )}
    </div>
  );
}

// ─── Phase header ─────────────────────────────────────────────────────────────

function PhaseHeader({
  step,
  uiText,
}: {
  step: any;
  uiText: (typeof uiTextByLocale)['es'];
}) {
  const match = step.title.match(/^(?:Paso|Step|Passo)\s+(\d+)\.\s*(.+)$/i);
  const num = match?.[1] ?? step.id;
  const title = match?.[2] ?? step.title;

  return (
    <div className="mb-12 mt-20 first:mt-0">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#005657]">
          {uiText.phaseLabel} {num}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-[#005657]/25 to-transparent" />
      </div>
      <h2 className="scroll-m-20 border-b border-[var(--border)] pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {title}
      </h2>
      {step.summary && (
        <p className={cn(typographyPClass, 'max-w-3xl text-slate-600')}>{step.summary}</p>
      )}
      {step.links && step.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {step.links.map((link: any, i: number) => (
            <Button
              key={i}
              variant="outline"
              size="sm"
              href={link.href}
              target="_blank"
              className="border-[var(--border)] bg-transparent font-medium shadow-none hover:border-[#005657] hover:bg-transparent"
            >
              {link.label}
              <ExternalLink className="h-3.5 w-3.5" />
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function MicrosoftCSPOnboardingPage() {
  const { language } = useLanguage();
  const guideData = mergedDataByLocale[language] ?? mergedDataByLocale.es;
  const uiText = uiTextByLocale[language] ?? uiTextByLocale.es;

  const subSteps = useMemo(
    () => guideData.steps.filter((s: any) => s.id.includes('.')),
    [guideData]
  );

  const initialStepStates = useMemo(
    () => subSteps.map((s: any) => ({ id: s.id, completed: false, inView: false })),
    [subSteps]
  );

  const [stepStates, setStepStates] = useState<StepState[]>(initialStepStates);
  const [activeStep, setActiveStep] = useState<string | null>(subSteps[0]?.id ?? null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [officialGuide, setOfficialGuide] = useState<any | null>(null);

  const stepRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const prevScrollY = useRef(0);

  const completedCount = stepStates.filter((s) => s.completed).length;
  const totalCount = stepStates.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  // Re-init when language changes
  useEffect(() => {
    setStepStates(initialStepStates);
  }, [initialStepStates]);

  // Show progress bar after scrolling
  useEffect(() => {
    const handleScroll = () => setShowProgress(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for scroll-spy + auto-complete
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.keys(stepRefs.current).forEach((key) => {
      const element = stepRefs.current[key];
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          const currentScrollY = window.scrollY;
          const isScrollingDown = currentScrollY > prevScrollY.current;
          const isScrollingUp = currentScrollY < prevScrollY.current;
          prevScrollY.current = currentScrollY;

          if (entry.isIntersecting) {
            setActiveStep(key);
          }

          setStepStates((prev) =>
            prev.map((s) => {
              if (s.id !== key) return s;
              let completed = s.completed;
              if (entry.isIntersecting) {
                if (isScrollingDown) completed = true;
                if (isScrollingUp) completed = false;
              } else {
                const isAbove = entry.boundingClientRect.bottom <= 0;
                const isBelow = entry.boundingClientRect.top >= window.innerHeight;
                if (isScrollingDown && isAbove) completed = true;
                if (isScrollingUp && isBelow) completed = false;
              }
              if (s.inView === entry.isIntersecting && s.completed === completed) return s;
              return { ...s, completed, inView: entry.isIntersecting };
            })
          );
        },
        { threshold: 0, rootMargin: '0px' }
      );
      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToStep = (stepId: string) => {
    stepRefs.current[stepId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setSheetOpen(false);
  };

  const resetProgress = () => {
    if (confirm(uiText.resetConfirm)) setStepStates(initialStepStates);
  };

  const tocProps = {
    guideData,
    activeStep,
    scrollToStep,
    uiText,
    resetProgress,
  };

  return (
    <div className="min-h-screen bg-[#f5f6f7] text-[var(--foreground)]">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(0,86,87,0.035),transparent)]" />

      {/* ── Sticky progress bar ── */}
      {showProgress && (
        <div className="sticky top-0 z-40 border-b border-[var(--border)] bg-[#f5f6f7]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-screen-xl items-center gap-4 px-4 py-2 sm:px-6">
            <button
              onClick={() => setSheetOpen(true)}
              className="lg:hidden flex items-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <Menu className="h-4 w-4" />
              {uiText.contentsTitle}
            </button>
            <div className="flex flex-1 items-center gap-3">
              <Progress value={completedCount} max={totalCount} className="flex-1" />
              <span className="shrink-0 text-xs font-medium text-[var(--muted-foreground)]">
                {completedCount}/{totalCount} {uiText.progressCompleted}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile Sheet TOC ── */}
      <Sheet open={sheetOpen} onClose={() => setSheetOpen(false)}>
        <TableOfContents {...tocProps} />
      </Sheet>

      {/* ── Official guide sheet ── */}
      <Sheet
        open={Boolean(officialGuide)}
        onClose={() => setOfficialGuide(null)}
        side="right"
        title={officialGuide?.sheetTitle ?? ''}
        panelClassName="ml-auto w-[92vw] max-w-2xl bg-[#f5f6f7]"
        contentClassName="p-0 overflow-y-auto"
      >
        {officialGuide?.id === 'maicpp' && <MaicppInfo />}
        {officialGuide?.id === 'csp-overview' && <CspOverview />}
        {officialGuide?.id === 'verification-help' && <VerificationHelp />}
      </Sheet>

      {/* ── Main layout ── */}
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-12">

          {/* ── Desktop sidebar ── */}
          <aside className="hidden lg:block w-56 xl:w-64 shrink-0">
            <div className="sticky top-16 max-h-[calc(100vh-5rem)] overflow-y-auto py-12 pr-4">
              <LinkHoverCard href="/onboarding" title={uiText.backToOnboarding}>
                <a
                  href="/onboarding"
                  className="mb-6 flex items-center gap-1.5 text-xs text-[var(--muted-foreground)] hover:text-[#005657] transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  {uiText.backToOnboarding}
                </a>
              </LinkHoverCard>
              <TableOfContents {...tocProps} />
            </div>
          </aside>

          {/* ── Content ── */}
          <main className="min-w-0 flex-1 py-12 lg:py-12">

            {/* ── Hero ── */}
            <div className="mb-12 border-b border-[var(--border)] pb-10">
              {/* Mobile back */}
              <LinkHoverCard href="/onboarding" title={uiText.backToOnboarding}>
                <a
                  href="/onboarding"
                  className="mb-6 flex items-center gap-1.5 text-xs text-[var(--muted-foreground)] hover:text-[#005657] transition-colors lg:hidden"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  {uiText.backToOnboarding}
                </a>
              </LinkHoverCard>

              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#005657]">
                Microsoft CSP Onboarding
              </p>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance text-[var(--foreground)] sm:text-5xl">
                {guideData.title}
              </h1>

              {/* Meta chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-transparent px-3 py-1.5 text-xs font-medium leading-none text-[var(--muted-foreground)]">
                  <Clock className="h-3.5 w-3.5 text-[#005657]" />
                  {uiText.estimatedTime}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-transparent px-3 py-1.5 text-xs font-medium leading-none text-[var(--muted-foreground)]">
                  <BarChart3 className="h-3.5 w-3.5 text-[#005657]" />
                  {uiText.difficulty}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-transparent px-3 py-1.5 text-xs font-medium leading-none text-[var(--muted-foreground)]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  {completedCount}/{totalCount} {uiText.stepsCompleted}
                </span>
              </div>

              {/* Intro paragraphs */}
              <div className="mt-6 max-w-3xl space-y-3">
                {guideData.intro.map((text: string, i: number) => (
                  <p key={i} className={cn(typographyPClass, 'max-w-4xl text-slate-600')}>
                    {text}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[var(--border)] bg-transparent font-medium shadow-none hover:border-[#005657] hover:bg-transparent"
                  onClick={() => scrollToStep(subSteps[0]?.id)}
                >
                  {guideData.primaryCta.label}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* ── Callout(s) ── */}
            {guideData.callouts.map((callout: any, i: number) => (
              <NoteCallout key={i} note={callout} />
            ))}

            {/* ── Pre-step section ── */}
            {guideData.preStepSection && (
              <div className="my-10 border-l-2 border-[#005657] pl-4">
                <p className="text-xs font-medium uppercase tracking-wider text-[#005657] mb-1">
                  {guideData.preStepSection.title}
                </p>
                <p className={cn(typographyPClass, 'max-w-3xl text-slate-600')}>
                  {guideData.preStepSection.text}
                </p>
              </div>
            )}

            {/* ── Steps ── */}
            <div className="mt-10">
              {guideData.steps.map((step: any) => {
                const isPhase = !step.id.includes('.');

                if (isPhase) {
                  return <PhaseHeader key={step.id} step={step} uiText={uiText} />;
                }

                const state = stepStates.find((s) => s.id === step.id);
                return (
                  <div key={step.id} className="mb-10">
                    <StepSection
                      step={step}
                      state={state}
                      uiText={uiText}
                      stepRef={(el) => {
                        stepRefs.current[step.id] = el;
                      }}
                      onOpenOfficialGuide={setOfficialGuide}
                    />
                  </div>
                );
              })}
            </div>

            {/* ── Completion banner ── */}
            {progress === 100 && (
              <div className="mt-16 border-t border-[var(--border)] pt-8 text-center">
                <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-[#005657]" />
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                  {uiText.completionTitle}
                </h2>
                <p className={cn(typographyPClass, 'mx-auto max-w-md text-slate-600')}>
                  {uiText.completionMessage}
                </p>
                <div className="mt-6">
                  <LinkHoverCard href="/onboarding" title={uiText.backToOnboarding}>
                    <Button
                      href="/onboarding"
                      variant="outline"
                      size="lg"
                      className="border-[var(--border)] bg-transparent font-medium shadow-none hover:border-[#005657] hover:bg-transparent"
                    >
                      {uiText.backToOnboarding}
                    </Button>
                  </LinkHoverCard>
                </div>
              </div>
            )}

            {/* Bottom spacer */}
            <div className="h-24" />
          </main>
        </div>
      </div>
    </div>
  );
}
