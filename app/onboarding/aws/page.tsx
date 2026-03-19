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
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/language-provider';
import { guideData as guideDataEs } from './data';
import { guideData as guideDataEn } from './data.en';
import { guideData as guideDataPt } from './data.pt';
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

const guideDataByLocale = {
  es: guideDataEs,
  en: guideDataEn,
  pt: guideDataPt,
};

const ownerByStepId: Record<string, StepOwner> = {
  '1.1': 'client',
  '1.2': 'tdsynnex',
  '1.3': 'client',
  '1.4': 'tdsynnex',
  '2.1': 'client',
  '2.2': 'client',
  '2.3': 'client',
  '2.4': 'client',
  '2.5': 'client',
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
    estimatedTime: '5–7 días laborables',
    difficulty: 'Dificultad media',
    stepsCompleted: 'pasos completados',
    prerequisites: 'Requisitos previos',
    documents: 'Documentos necesarios',
    expectedEmail: 'Correo electrónico esperado',
    completionTitle: '¡Enhorabuena!',
    completionMessage:
      'Has completado exitosamente el proceso de onboarding de Amazon Web Services con TD SYNNEX.',
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
    estimatedTime: '5–7 business days',
    difficulty: 'Medium difficulty',
    stepsCompleted: 'steps completed',
    prerequisites: 'Prerequisites',
    documents: 'Required documents',
    expectedEmail: 'Expected email',
    completionTitle: 'Congratulations!',
    completionMessage:
      'You have successfully completed the Amazon Web Services onboarding process with TD SYNNEX.',
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
    estimatedTime: '5–7 dias úteis',
    difficulty: 'Dificuldade média',
    stepsCompleted: 'passos concluídos',
    prerequisites: 'Requisitos prévios',
    documents: 'Documentos necessários',
    expectedEmail: 'Email esperado',
    completionTitle: 'Parabéns!',
    completionMessage:
      'Concluíste com sucesso o processo de onboarding de Amazon Web Services com a TD SYNNEX.',
    stepPrefix: 'Passo',
    ownerYou: 'A tua ação',
    ownerTds: 'TD SYNNEX',
    phaseLabel: 'Fase',
  },
};

// ─── Helper: note callout ────────────────────────────────────────────────────

function NoteCallout({ note }: { note: any }) {
  const configs: Record<string, { icon: React.ReactNode; cls: string; labelCls: string; label: string }> = {
    info: {
      icon: <Info className="h-4 w-4 mt-0.5 shrink-0" />,
      cls: 'bg-blue-50 border-blue-300 text-blue-900 dark:bg-blue-950/40 dark:border-blue-700 dark:text-blue-200',
      labelCls: 'text-blue-700 dark:text-blue-400',
      label: 'Nota',
    },
    warning: {
      icon: <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />,
      cls: 'bg-amber-50 border-amber-300 text-amber-900 dark:bg-amber-950/40 dark:border-amber-700 dark:text-amber-200',
      labelCls: 'text-amber-700 dark:text-amber-400',
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
      cls: 'bg-[var(--muted)] border-[var(--border)] text-[var(--foreground)]',
      labelCls: 'text-[var(--muted-foreground)]',
      label: 'Nota',
    },
  };

  const cfg = configs[note.type] ?? configs['note'];

  return (
    <div className={cn('flex gap-3 rounded-md border px-4 py-3 text-sm', cfg.cls)}>
      <span className={cfg.labelCls}>{cfg.icon}</span>
      <div className="flex-1 min-w-0">
        {note.title && (
          <p className={cn('font-semibold mb-0.5', cfg.labelCls)}>{note.title}</p>
        )}
        <p className="leading-relaxed">{note.text}</p>
      </div>
    </div>
  );
}

// ─── Helper: email preview ───────────────────────────────────────────────────

function EmailPreview({ anim, label }: { anim: any; label: string }) {
  return (
    <div className="rounded-md border border-[var(--border)] overflow-hidden">
      <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--muted)] px-4 py-2">
        <Mail className="h-4 w-4 text-[#005657]" />
        <span className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
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

// ─── Helper: asset chip ──────────────────────────────────────────────────────

function AssetChip({ asset }: { asset: any }) {
  return (
    <div className="flex items-center gap-2 rounded-md border border-[var(--border)] px-3 py-2 text-sm">
      <FileText className="h-4 w-4 text-[#005657] shrink-0" />
      <span className="font-medium text-[var(--foreground)]">{asset.title}</span>
      <span className="ml-auto text-xs text-[var(--muted-foreground)] font-mono">{asset.type}</span>
    </div>
  );
}

// ─── TOC item ────────────────────────────────────────────────────────────────

function TocItem({
  step,
  state,
  isActive,
  onClick,
  uiText,
}: {
  step: any;
  state: StepState | undefined;
  isActive: boolean;
  onClick: () => void;
  uiText: (typeof uiTextByLocale)['es'];
}) {
  // Strip the "Paso X.Y | " prefix to show only the short name
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
        <Check
          className={cn(
            'h-3.5 w-3.5 shrink-0',
            isActive ? 'text-[#005657]' : 'text-emerald-500'
          )}
        />
      ) : (
        <Circle
          className={cn(
            'h-3.5 w-3.5 shrink-0',
            isActive ? 'text-[#005657]' : 'text-[var(--border)]'
          )}
        />
      )}
      <span className="truncate leading-snug">{shortTitle}</span>
    </button>
  );
}

// ─── TOC sidebar ─────────────────────────────────────────────────────────────

function TableOfContents({
  guideData,
  stepStates,
  activeStep,
  scrollToStep,
  uiText,
  completedCount,
  totalCount,
  progress,
  resetProgress,
}: {
  guideData: any;
  stepStates: StepState[];
  activeStep: string | null;
  scrollToStep: (id: string) => void;
  uiText: (typeof uiTextByLocale)['es'];
  completedCount: number;
  totalCount: number;
  progress: number;
  resetProgress: () => void;
}) {
  const mainSteps = guideData.steps.filter((s: any) => !s.id.includes('.'));
  const subSteps = guideData.steps.filter((s: any) => s.id.includes('.'));

  return (
    <nav className="flex flex-col gap-1">
      {/* Progress */}
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

      {/* Steps grouped by phase */}
      {mainSteps.map((phase: any) => {
        const phaseSubSteps = subSteps.filter((s: any) =>
          s.id.startsWith(phase.id + '.')
        );
        const phaseShortTitle = phase.title.replace(
          /^(Paso|Step|Passo)\s+\d+\.\s*/i,
          ''
        );

        return (
          <div key={phase.id} className="mb-3">
            <p className="mb-1 px-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              {phaseShortTitle}
            </p>
            <div className="space-y-0.5">
              {phaseSubSteps.map((step: any) => (
                <TocItem
                  key={step.id}
                  step={step}
                  state={stepStates.find((s) => s.id === step.id)}
                  isActive={activeStep === step.id}
                  onClick={() => scrollToStep(step.id)}
                  uiText={uiText}
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

// ─── Step section ─────────────────────────────────────────────────────────────

function StepSection({
  step,
  state,
  uiText,
  stepRef,
}: {
  step: any;
  state: StepState | undefined;
  uiText: (typeof uiTextByLocale)['es'];
  stepRef: (el: HTMLDivElement | null) => void;
}) {
  const owner = ownerByStepId[step.id];
  // "Paso 1.1 | Hola TD SYNNEX"  →  ["1.1", "Hola TD SYNNEX"]
  const titleMatch = step.title.match(/^(?:Paso|Step|Passo)\s+([\d.]+)\s*\|\s*(.+)$/i);
  const stepNum = titleMatch?.[1] ?? step.id;
  const stepName = titleMatch?.[2] ?? step.title;

  return (
    <div ref={stepRef} className="scroll-mt-20">
      {/* Divider between steps */}
      <Separator className="mb-10" />

      <div className="mb-8">
        {/* Step identifier row */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          {/* Number badge */}
          <span className="inline-flex h-7 items-center rounded-full bg-[#005657] px-3 text-xs font-bold text-white shrink-0">
            {stepNum}
          </span>

          {/* Step name */}
          <h3 className="text-xl font-semibold text-[var(--foreground)] leading-snug">
            {stepName}
          </h3>

          {/* Owner badge */}
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

          {/* Completion indicator */}
          {state?.completed && (
            <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
          )}
        </div>

        {/* Summary */}
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
      {step.instructions &&
        step.instructions.map((inst: any, idx: number) => (
          <div key={idx} className="mb-6">
            {inst.title && (
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                {inst.title}
              </h4>
            )}
            <ol className="space-y-2">
              {inst.bullets.map((bullet: string, bidx: number) => {
                const colonIdx = bullet.indexOf(':');
                const hasLabel = colonIdx > 0 && colonIdx < 60;
                const label = hasLabel ? bullet.slice(0, colonIdx) : null;
                const body = hasLabel ? bullet.slice(colonIdx + 1).trim() : bullet;

                return (
                  <li key={bidx} className="flex gap-3 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--muted)] text-xs font-bold text-[#005657]">
                      {bidx + 1}
                    </span>
                    <span className="leading-relaxed text-[var(--foreground)]">
                      {label ? (
                        <>
                          <strong className="font-semibold">{label}:</strong> {body}
                        </>
                      ) : (
                        body
                      )}
                    </span>
                  </li>
                );
              })}
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
      {step.animations &&
        step.animations.map((anim: any, i: number) => (
          <div key={i} className="mb-6">
            <EmailPreview anim={anim} label={uiText.expectedEmail} />
          </div>
        ))}

      {/* Notes */}
      {step.notes && step.notes.length > 0 && (
        <div className="space-y-2 mb-6">
          {step.notes.map((note: any, i: number) => (
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

// ─── Phase header ─────────────────────────────────────────────────────────────

function PhaseHeader({ step }: { step: any }) {
  // "Paso 2. AWS Partner Central" → number "2", title "AWS Partner Central"
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
      {/* Phase-level links */}
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

// ─── Main page ────────────────────────────────────────────────────────────────

export default function AWSOnboardingPage() {
  const { language } = useLanguage();
  const guideData = guideDataByLocale[language];
  const uiText = uiTextByLocale[language];

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

  const stepRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const prevScrollY = useRef(0);

  const completedCount = stepStates.filter((s) => s.completed).length;
  const totalCount = stepStates.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  // Re-init when language changes
  useEffect(() => {
    setStepStates(initialStepStates);
  }, [initialStepStates]);

  // Show progress bar after first interaction
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
    stepStates,
    activeStep,
    scrollToStep,
    uiText,
    completedCount,
    totalCount,
    progress,
    resetProgress,
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* ── Sticky progress bar ── */}
      {showProgress && (
        <div className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-screen-xl items-center gap-4 px-4 py-2 sm:px-6">
            {/* Mobile TOC trigger */}
            <button
              onClick={() => setSheetOpen(true)}
              className="lg:hidden flex items-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <Menu className="h-4 w-4" />
              {uiText.contentsTitle}
            </button>

            {/* Progress info */}
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
              {/* Back link */}
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
              {/* Mobile back */}
              <a
                href="/onboarding"
                className="mb-6 flex items-center gap-1.5 text-xs text-[var(--muted-foreground)] hover:text-[#005657] transition-colors lg:hidden"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                {uiText.backToOnboarding}
              </a>

              {/* Title */}
              <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                {guideData.title}
              </h1>

              {/* Meta chips */}
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

              {/* Intro paragraphs */}
              <div className="mt-6 space-y-3 max-w-prose">
                {guideData.intro.map((text: string, i: number) => (
                  <p key={i} className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {text}
                  </p>
                ))}
              </div>

              {/* CTA */}
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

            {/* ── Callout(s) ── */}
            {guideData.callouts.map((callout: any, i: number) => (
              <NoteCallout key={i} note={{ type: callout.type ?? 'info', text: callout.text }} />
            ))}

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
              {guideData.steps.map((step: any) => {
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
                      uiText={uiText}
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

            {/* Bottom spacer */}
            <div className="h-24" />
          </main>
        </div>
      </div>
    </div>
  );
}
