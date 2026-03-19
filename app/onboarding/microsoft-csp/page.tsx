'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Info,
  AlertTriangle,
  CheckCircle2,
  AlertCircle,
  Mail,
  FileText,
  User,
  Building2,
  Clock,
  BarChart3,
  Menu,
  RotateCcw,
  Circle,
  Check,
  ChevronRight,
  FileCheck,
  BadgeCheck,
  Fingerprint,
  ShieldCheck,
  EyeOff,
  Copy,
  Settings,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/language-provider';
import { guideData } from './data';
import type { AnyBullet, Seg, StepNote } from './data';
import { cn } from '@/lib/utils';
import { Accordion } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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

const uiText = {
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
};

// ─── Icon map ─────────────────────────────────────────────────────────────────

const iconMap: Record<string, React.ReactNode> = {
  FileCheck: <FileCheck className="h-4 w-4 mt-0.5 shrink-0" />,
  BadgeCheck: <BadgeCheck className="h-4 w-4 mt-0.5 shrink-0" />,
  Fingerprint: <Fingerprint className="h-4 w-4 mt-0.5 shrink-0" />,
  ShieldCheck: <ShieldCheck className="h-4 w-4 mt-0.5 shrink-0" />,
  Settings: <Settings className="h-4 w-4 mt-0.5 shrink-0" />,
  EyeOff: <EyeOff className="h-4 w-4 mt-0.5 shrink-0" />,
};

// ─── Inline segment renderer ──────────────────────────────────────────────────

function RenderSegs({ segs }: { segs: Seg[] }) {
  return (
    <>
      {segs.map((seg, i) => {
        if (seg.t === 'text') return <span key={i}>{seg.s}</span>;
        if (seg.t === 'link')
          return (
            <a
              key={i}
              href={seg.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#005657] underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              {seg.s}
            </a>
          );
        if (seg.t === 'btn')
          return (
            <a
              key={i}
              href={seg.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded bg-[#0078d4] px-2.5 py-0.5 text-xs font-semibold text-white hover:bg-[#106ebe] transition-colors border border-[#0078d4] rounded-[2px]"
            >
              {seg.s}
            </a>
          );
        return null;
      })}
    </>
  );
}

// ─── Browser mockup ───────────────────────────────────────────────────────────

function EdgeBrowserMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-lg overflow-hidden border border-[var(--border)] shadow-sm">
      {/* Edge titlebar */}
      <div className="flex items-center gap-2 bg-[#f3f3f3] dark:bg-[#2d2d2d] border-b border-[var(--border)] px-3 py-1.5">
        {/* Window controls */}
        <div className="flex gap-1.5 shrink-0">
          <div className="h-2.5 w-2.5 rounded-full bg-[#e74c3c]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#f39c12]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#2ecc71]" />
        </div>
        {/* Edge logo + address bar */}
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
      {/* Screenshot */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full object-cover" loading="lazy" />
    </div>
  );
}

// ─── Note callout ─────────────────────────────────────────────────────────────

function NoteCallout({ note }: { note: StepNote }) {
  const configs: Record<string, { icon: React.ReactNode; cls: string; labelCls: string }> = {
    info: {
      icon: <Info className="h-4 w-4 mt-0.5 shrink-0" />,
      cls: 'bg-blue-50 border-blue-300 text-blue-900 dark:bg-blue-950/40 dark:border-blue-700 dark:text-blue-200',
      labelCls: 'text-blue-700 dark:text-blue-400',
    },
    warning: {
      icon: <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />,
      cls: 'bg-amber-50 border-amber-300 text-amber-900 dark:bg-amber-950/40 dark:border-amber-700 dark:text-amber-200',
      labelCls: 'text-amber-700 dark:text-amber-400',
    },
    success: {
      icon: <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />,
      cls: 'bg-emerald-50 border-emerald-300 text-emerald-900 dark:bg-emerald-950/40 dark:border-emerald-700 dark:text-emerald-200',
      labelCls: 'text-emerald-700 dark:text-emerald-400',
    },
    danger: {
      icon: <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />,
      cls: 'bg-red-50 border-red-300 text-red-900 dark:bg-red-950/40 dark:border-red-700 dark:text-red-200',
      labelCls: 'text-red-700 dark:text-red-400',
    },
    error: {
      icon: <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />,
      cls: 'bg-red-50 border-red-300 text-red-900 dark:bg-red-950/40 dark:border-red-700 dark:text-red-200',
      labelCls: 'text-red-700 dark:text-red-400',
    },
    note: {
      icon: <Info className="h-4 w-4 mt-0.5 shrink-0" />,
      cls: 'bg-[var(--muted)] border-[var(--border)] text-[var(--foreground)]',
      labelCls: 'text-[var(--muted-foreground)]',
    },
  };

  const cfg = configs[note.type] ?? configs['note'];
  const resolvedIcon = note.icon && iconMap[note.icon] ? iconMap[note.icon] : cfg.icon;

  return (
    <div className={cn('rounded-md border px-4 py-3 text-sm', cfg.cls)}>
      <div className="flex gap-3">
        <span className={cfg.labelCls}>{resolvedIcon}</span>
        <div className="flex-1 min-w-0 space-y-2">
          {note.title && (
            <p className={cn('font-semibold', cfg.labelCls)}>{note.title}</p>
          )}

          {/* Plain text */}
          {note.text && !note.paragraphs && (
            <p className="leading-relaxed">{note.text}</p>
          )}

          {/* Rich paragraphs */}
          {note.paragraphs && note.paragraphs.map((para, i) =>
            typeof para === 'string' ? (
              <p key={i} className="leading-relaxed">{para}</p>
            ) : (
              <p key={i} className="leading-relaxed">
                <RenderSegs segs={para} />
              </p>
            )
          )}

          {/* Image in browser mockup */}
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

          {/* Nested callout */}
          {note.nested && (
            <div className="mt-3">
              <NoteCallout note={note.nested as StepNote} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Email preview ────────────────────────────────────────────────────────────

function EmailPreview({ anim }: { anim: any }) {
  return (
    <div className="rounded-md border border-[var(--border)] overflow-hidden">
      <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--muted)] px-4 py-2">
        <Mail className="h-4 w-4 text-[#005657]" />
        <span className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
          {uiText.expectedEmail}
        </span>
      </div>
      <div className="px-4 py-3 space-y-1">
        {anim.payload.map((line: string, idx: number) => (
          <p key={idx} className="text-sm text-[var(--foreground)] font-mono">{line}</p>
        ))}
      </div>
    </div>
  );
}

// ─── Asset chip ───────────────────────────────────────────────────────────────

function AssetChip({ asset }: { asset: any }) {
  return (
    <div className="flex items-center gap-2 rounded-md border border-[var(--border)] px-3 py-2 text-sm">
      <FileText className="h-4 w-4 text-[#005657] shrink-0" />
      <span className="font-medium text-[var(--foreground)]">{asset.title}</span>
      <span className="ml-auto text-xs text-[var(--muted-foreground)] font-mono">{asset.type}</span>
    </div>
  );
}

// ─── Copy button ──────────────────────────────────────────────────────────────

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
      {copied ? (
        <Check className="h-3.5 w-3.5" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
      {copied ? '¡Copiado!' : label}
    </button>
  );
}

// ─── Rich bullet renderer ─────────────────────────────────────────────────────

function RenderBullet({ bullet }: { bullet: AnyBullet }) {
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

  // RichBullet
  return (
    <span className="leading-relaxed text-[var(--foreground)]">
      <RenderSegs segs={bullet.segs} />
      {bullet.action && (
        <span className="block mt-2">
          {bullet.action.copy ? (
            <CopyButton text={bullet.action.copy} label={bullet.action.label} />
          ) : bullet.action.href ? (
            <a
              href={bullet.action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded border border-[#0078d4] bg-[#0078d4] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#106ebe] transition-colors rounded-[2px]"
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

// ─── TOC item ─────────────────────────────────────────────────────────────────

function TocItem({
  step,
  state,
  isActive,
  onClick,
}: {
  step: any;
  state: StepState | undefined;
  isActive: boolean;
  onClick: () => void;
}) {
  const shortTitle = step.title.replace(/^(Paso|Step|Passo)\s+[\d.]+\s*\|\s*/i, '');

  return (
    <button
      onClick={onClick}
      className={cn(
        'group flex w-full items-center gap-2.5 rounded-sm px-2 py-1.5 text-left text-sm transition-colors',
        isActive
          ? 'bg-[var(--accent-subtle)] text-[#005657] font-medium'
          : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
      )}
    >
      {state?.completed ? (
        <Check className={cn('h-3.5 w-3.5 shrink-0', isActive ? 'text-[#005657]' : 'text-emerald-500')} />
      ) : (
        <Circle className={cn('h-3.5 w-3.5 shrink-0', isActive ? 'text-[#005657]' : 'text-[var(--border)]')} />
      )}
      <span className="truncate leading-snug">{shortTitle}</span>
    </button>
  );
}

// ─── TOC sidebar ──────────────────────────────────────────────────────────────

function TableOfContents({
  stepStates,
  activeStep,
  scrollToStep,
  completedCount,
  totalCount,
  resetProgress,
}: {
  stepStates: StepState[];
  activeStep: string | null;
  scrollToStep: (id: string) => void;
  completedCount: number;
  totalCount: number;
  resetProgress: () => void;
}) {
  const mainSteps = guideData.steps.filter((s) => !s.id.includes('.'));
  const subSteps = guideData.steps.filter((s) => s.id.includes('.'));

  return (
    <nav className="flex flex-col gap-1">
      <div className="mb-4 space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
            {uiText.progressTitle}
          </span>
          <span className="text-xs text-[var(--muted-foreground)]">
            {completedCount}/{totalCount}
          </span>
        </div>
        <Progress value={completedCount} max={totalCount} />
      </div>

      <Separator className="mb-3" />

      {mainSteps.map((phase) => {
        const phaseSubSteps = subSteps.filter((s) => s.id.startsWith(phase.id + '.'));
        const phaseShortTitle = phase.title.replace(/^(Paso|Step|Passo)\s+\d+\.\s*/i, '');

        return (
          <div key={phase.id} className="mb-3">
            <p className="mb-1 px-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              {phaseShortTitle}
            </p>
            <div className="space-y-0.5">
              {phaseSubSteps.map((step) => (
                <TocItem
                  key={step.id}
                  step={step}
                  state={stepStates.find((s) => s.id === step.id)}
                  isActive={activeStep === step.id}
                  onClick={() => scrollToStep(step.id)}
                />
              ))}
            </div>
          </div>
        );
      })}

      <Separator className="my-3" />

      <button
        onClick={resetProgress}
        className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-xs text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        {uiText.resetProgress}
      </button>
    </nav>
  );
}

// ─── Step section ──────────────────────────────────────────────────────────────

function StepSection({
  step,
  state,
  stepRef,
}: {
  step: any;
  state: StepState | undefined;
  stepRef: (el: HTMLDivElement | null) => void;
}) {
  const owner = ownerByStepId[step.id];
  const titleMatch = step.title.match(/^(?:Paso|Step|Passo)\s+([\d.]+)\s*\|\s*(.+)$/i);
  const stepNum = titleMatch?.[1] ?? step.id;
  const stepName = titleMatch?.[2] ?? step.title;

  return (
    <div ref={stepRef} className="scroll-mt-20">
      <Separator className="mb-10" />

      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="inline-flex h-7 items-center rounded-full bg-[#005657] px-3 text-xs font-bold text-white shrink-0">
            {stepNum}
          </span>
          <h3 className="text-xl font-semibold text-[var(--foreground)] leading-snug">
            {stepName}
          </h3>
          {owner === 'client' ? (
            <Badge variant="accent" className="ml-auto sm:ml-0 shrink-0">
              <User className="h-3 w-3" />
              {uiText.ownerYou}
            </Badge>
          ) : owner === 'tdsynnex' ? (
            <Badge variant="secondary" className="ml-auto sm:ml-0 shrink-0">
              <Building2 className="h-3 w-3" />
              {uiText.ownerTds}
            </Badge>
          ) : null}
          {state?.completed && (
            <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
          )}
        </div>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-prose">
          {step.summary}
        </p>
      </div>

      {/* Prerequisites */}
      {step.prerequisites && step.prerequisites.length > 0 && (
        <div className="mb-6">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
            {uiText.prerequisites}
          </h4>
          <ul className="space-y-1.5">
            {step.prerequisites.map((req: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#005657]" />
                <span className="leading-relaxed">{req}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Instructions */}
      {step.instructions && step.instructions.map((inst: any, idx: number) => (
        <div key={idx} className="mb-6">
          {inst.title && (
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              {inst.title}
            </h4>
          )}
          <ol className="space-y-3">
            {inst.bullets.map((bullet: AnyBullet, bidx: number) => (
              <li key={bidx} className="flex gap-3 text-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--muted)] text-xs font-bold text-[#005657]">
                  {bidx + 1}
                </span>
                <RenderBullet bullet={bullet} />
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

      {/* Assets */}
      {step.assets && step.assets.length > 0 && (
        <div className="mb-6">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
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
      {step.animations && step.animations.map((anim: any, i: number) => (
        <div key={i} className="mb-6">
          <EmailPreview anim={anim} />
        </div>
      ))}

      {/* Notes */}
      {step.notes && step.notes.length > 0 && (
        <div className="space-y-3 mb-6">
          {step.notes.map((note: StepNote, i: number) => (
            <NoteCallout key={i} note={note} />
          ))}
        </div>
      )}

      {/* External links */}
      {step.links && step.links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {step.links.map((link: any, i: number) => (
            <Button key={i} variant="outline" size="sm" href={link.href} target="_blank">
              {link.label}
              <ExternalLink className="h-3.5 w-3.5" />
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Phase header ──────────────────────────────────────────────────────────────

function PhaseHeader({ step }: { step: any }) {
  const match = step.title.match(/^(?:Paso|Step|Passo)\s+(\d+)\.\s*(.+)$/i);
  const num = match?.[1] ?? step.id;
  const title = match?.[2] ?? step.title;

  return (
    <div className="mb-10 mt-16 first:mt-0">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs font-bold uppercase tracking-widest text-[#005657]">
          Fase {num}
        </span>
        <div className="h-px flex-1 bg-[#005657]/20" />
      </div>
      <h2 className="text-2xl font-bold text-[var(--foreground)]">{title}</h2>
      {step.summary && (
        <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed max-w-prose">
          {step.summary}
        </p>
      )}
      {step.links && step.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {step.links.map((link: any, i: number) => (
            <Button key={i} variant="outline" size="sm" href={link.href} target="_blank">
              {link.label}
              <ExternalLink className="h-3.5 w-3.5" />
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────

export default function MicrosoftCSPOnboardingPage() {
  const subSteps = useMemo(
    () => guideData.steps.filter((s) => s.id.includes('.')),
    []
  );

  const initialStepStates = useMemo(
    () => subSteps.map((s) => ({ id: s.id, completed: false, inView: false })),
    [subSteps]
  );

  const [stepStates, setStepStates] = useState<StepState[]>(initialStepStates);
  const [activeStep, setActiveStep] = useState<string | null>(subSteps[0]?.id ?? null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  const stepRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const prevScrollY = useRef(0);

  const completedCount = stepStates.filter((s) => s.completed).length;
  const totalCount = stepStates.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  useEffect(() => {
    const handleScroll = () => setShowProgress(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

          if (entry.isIntersecting) setActiveStep(key);

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
    stepStates,
    activeStep,
    scrollToStep,
    completedCount,
    totalCount,
    resetProgress,
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* ── Sticky progress bar ── */}
      {showProgress && (
        <div className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-screen-xl items-center gap-4 px-4 py-2 sm:px-6">
            <button
              onClick={() => setSheetOpen(true)}
              className="lg:hidden flex items-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
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

      {/* ── Main layout ── */}
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-12">

          {/* ── Desktop sidebar ── */}
          <aside className="hidden lg:block w-56 xl:w-64 shrink-0">
            <div className="sticky top-16 max-h-[calc(100vh-5rem)] overflow-y-auto py-12 pr-4">
              <a
                href="/onboarding"
                className="mb-6 flex items-center gap-1.5 text-xs text-[var(--muted-foreground)] hover:text-[#005657] transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                {uiText.backToOnboarding}
              </a>
              <TableOfContents {...tocProps} />
            </div>
          </aside>

          {/* ── Content ── */}
          <main className="flex-1 min-w-0 py-12 lg:py-12">

            {/* ── Hero ── */}
            <div className="mb-10">
              <a
                href="/onboarding"
                className="mb-6 flex items-center gap-1.5 text-xs text-[var(--muted-foreground)] hover:text-[#005657] transition-colors lg:hidden"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                {uiText.backToOnboarding}
              </a>

              <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                {guideData.title}
              </h1>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted-foreground)]">
                  <Clock className="h-3.5 w-3.5 text-[#005657]" />
                  {uiText.estimatedTime}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted-foreground)]">
                  <BarChart3 className="h-3.5 w-3.5 text-[#005657]" />
                  {uiText.difficulty}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted-foreground)]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  {completedCount}/{totalCount} {uiText.stepsCompleted}
                </span>
              </div>

              <div className="mt-6 space-y-3 max-w-prose">
                {guideData.intro.map((text, i) => (
                  <p key={i} className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {text}
                  </p>
                ))}
              </div>

              <div className="mt-6">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => scrollToStep(subSteps[0]?.id)}
                >
                  {guideData.primaryCta.label}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* ── Callouts ── */}
            <div className="space-y-2">
              {guideData.callouts.map((callout, i) => (
                <NoteCallout key={i} note={callout} />
              ))}
            </div>

            {/* ── Pre-step section ── */}
            {guideData.preStepSection && (
              <div className="my-8 border-l-2 border-[#005657] pl-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#005657] mb-1">
                  {guideData.preStepSection.title}
                </p>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {guideData.preStepSection.text}
                </p>
              </div>
            )}

            {/* ── Steps ── */}
            <div className="mt-10">
              {guideData.steps.map((step) => {
                const isPhase = !step.id.includes('.');

                if (isPhase) {
                  return <PhaseHeader key={step.id} step={step} />;
                }

                const state = stepStates.find((s) => s.id === step.id);
                return (
                  <div key={step.id} className="mb-10">
                    <StepSection
                      step={step}
                      state={state}
                      stepRef={(el) => { stepRefs.current[step.id] = el; }}
                    />
                  </div>
                );
              })}
            </div>

            {/* ── Completion banner ── */}
            {progress === 100 && (
              <div className="mt-16 rounded-lg border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/40 px-6 py-8 text-center">
                <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-emerald-500" />
                <h2 className="text-xl font-bold text-emerald-900 dark:text-emerald-200">
                  {uiText.completionTitle}
                </h2>
                <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-400 max-w-md mx-auto">
                  {uiText.completionMessage}
                </p>
                <div className="mt-6">
                  <Button href="/onboarding" variant="default" size="lg">
                    {uiText.backToOnboarding}
                  </Button>
                </div>
              </div>
            )}

            <div className="h-24" />
          </main>
        </div>
      </div>
    </div>
  );
}
