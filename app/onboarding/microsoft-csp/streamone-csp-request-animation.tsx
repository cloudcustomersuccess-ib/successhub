'use client';

import { useEffect, useState } from 'react';
import {
  Building2,
  CheckCircle2,
  ChevronRight,
  FileText,
  LockKeyhole,
  Search,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const SCREEN_HEIGHT = 'h-[460px]';

const phases = [
  { label: '1. Abre TD SYNNEX - Spain', helper: 'Dentro de Partners, entra en la ficha de TD SYNNEX - Spain.' },
  { label: '2. Ve a Programs',           helper: 'En el menú izquierdo del partner, pulsa sobre Programs.' },
  { label: '3. Selecciona Microsoft CSP',helper: 'Marca Microsoft CSP en el listado para habilitar REQUEST ACCESS.' },
  { label: '4. Acepta los términos',      helper: 'Se abre el modal del programa y debes pulsar en ACCEPT.' },
  { label: '5. Indica tu MPN ID',         helper: 'Introduce tu MPN ID de CSP (PLA) y pulsa en NEXT.' },
];

const PHASE_DURATIONS = [2800, 2800, 3200, 3600, 5000];
const MPN_ID = '5283741';
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

// ─── Shared components ─────────────────────────────────────────────────────────

function PhaseBadge({ index, label, active, done }: { index: number; label: string; active: boolean; done: boolean }) {
  return (
    <div className={cn(
      'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium transition-colors',
      active ? 'border-[#005657]/25 bg-[#ecf8f8] text-[#005657]'
             : done  ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                     : 'border-slate-200 bg-white text-slate-400'
    )}>
      {done
        ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
        : <span className={cn('inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-semibold',
            active ? 'bg-[#005657] text-white' : 'bg-slate-200 text-slate-500'
          )}>{index + 1}</span>
      }
      {label.replace(/^\d+\.\s*/, '')}
    </div>
  );
}

function SkeletonLine({ width, className }: { width: string; className?: string }) {
  return <div className={cn('h-2 rounded-full bg-slate-200/85', width, className)} />;
}

// ─── ION App shell ─────────────────────────────────────────────────────────────

function AppChrome() {
  return (
    <>
      {/* Top nav */}
      <div className="flex shrink-0 items-center gap-3 bg-[#00578d] px-4 py-2 text-white">
        <div className="text-[15px] tracking-tight">
          <span className="font-extralight">Stream</span>
          <span className="font-bold">One</span>
          <span className="font-bold italic text-[#dbe4ea]"> Ion</span>
        </div>
        <div className="mx-auto flex w-[220px] items-center gap-2 rounded-sm bg-white/95 px-3 py-1.5 text-[11px] text-slate-400">
          <Search className="h-3 w-3 shrink-0" />
          Global Search
        </div>
        <div className="flex items-center gap-3 text-[11px] font-medium text-white/90">
          <span>EN</span>
          <span className="text-base leading-none">≡</span>
        </div>
      </div>
      {/* Menu bar */}
      <div className="flex shrink-0 items-center gap-5 border-b border-slate-200 bg-white px-5 py-2 text-[11px] text-slate-600">
        {['Dashboard','Reports','Products','Billing','Partners','Customers','Support','Orders','Subscriptions'].map((item) => (
          <div key={item} className={cn('relative pb-0.5', item === 'Partners' && 'font-semibold text-[#1e88c9] after:absolute after:inset-x-0 after:-bottom-[9px] after:h-0.5 after:bg-[#1e88c9]')}>
            {item}
          </div>
        ))}
      </div>
    </>
  );
}

// ─── Sidebar ───────────────────────────────────────────────────────────────────

function PartnerSidebar({ phase }: { phase: number }) {
  return (
    <aside className="flex w-[190px] shrink-0 flex-col bg-[#efefef]">
      <div className="px-4 py-3">
        <div className="flex h-[64px] items-center justify-center bg-[#d9dde1] text-slate-400">
          <Building2 className="h-6 w-6" />
        </div>
        <div className="mt-2.5 text-center">
          <p className="text-[12px] font-semibold leading-5 text-slate-800">TD SYNNEX - Spain</p>
          <p className="text-[10px] leading-4 text-slate-500">StreamOne Ion Cloud Support</p>
          <p className="text-[10px] leading-4 text-slate-400">CloudSupport.emea@techdata.com</p>
        </div>
      </div>
      <div className="mt-1 space-y-0.5">
        {[
          { label: 'Partner information', active: phase === 1 },
          { label: 'Partner options',     active: false },
          { label: 'Programs',            active: phase >= 1 },
        ].map((item) => (
          <div key={item.label} className={cn(
            'flex items-center px-5 py-2.5 text-[11px] transition-all',
            item.active ? 'bg-[#c9daea] font-semibold text-slate-900' : 'text-slate-500'
          )}>
            {item.label}
            {item.label === 'Programs' && phase === 1 && (
              <span className="ml-auto animate-pulse rounded-full bg-[#005657] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white">
                Pulsa
              </span>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

// ─── View: Partners list ───────────────────────────────────────────────────────

function PartnersListView({ phase }: { phase: number }) {
  return (
    <div className="p-4">
      <div className="bg-white px-4 py-4 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="h-3.5 w-3.5 text-slate-400" />
          <span className="text-[13px] font-semibold text-slate-700">Partners</span>
        </div>
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-2 w-[200px] rounded-sm border border-[#0d66a9] px-2.5 py-1.5 text-[11px] text-slate-400">
            search
            <Search className="ml-auto h-3 w-3 shrink-0 text-[#0d66a9]" />
          </div>
        </div>
        <div className="grid grid-cols-[1.5fr_0.8fr_1.6fr_1.2fr] gap-4 border-b border-slate-300 pb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
          <span>Partner Name</span><span>Type</span><span>Primary contact email</span><span className="text-right">Created At</span>
        </div>
        <div className={cn(
          'grid grid-cols-[1.5fr_0.8fr_1.6fr_1.2fr] gap-4 border-b px-1 py-3 text-[11px] transition-colors duration-500',
          phase === 0 ? 'border-[#7bc6cf] bg-[#edf9fb]' : 'border-slate-200 bg-white'
        )}>
          <div className="flex items-center gap-2 text-slate-700">
            <span>TD SYNNEX - Spain</span>
            {phase === 0 && (
              <span className="animate-pulse rounded-full bg-[#005657] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white">
                Abrir
              </span>
            )}
          </div>
          <span className="text-slate-500">Provider</span>
          <span className="truncate text-slate-500">CloudSupport.emea@techdata.com</span>
          <span className="text-right text-slate-500">07/04/2024, 11:54</span>
        </div>
      </div>
    </div>
  );
}

// ─── View: Partner detail (intermediate) ──────────────────────────────────────

function PartnerDetailView() {
  return (
    <div className="flex h-full">
      <PartnerSidebar phase={1} />
      <div className="flex-1 bg-[#f0f1f3] px-5 py-4">
        <div className="mb-3 flex items-center gap-2 text-slate-700">
          <span className="text-lg leading-none">←</span>
          <span className="text-[14px] font-semibold">Partners</span>
        </div>
        <div className="bg-white px-5 py-4 shadow-[0_1px_3px_rgba(15,23,42,0.10)]">
          <div className="mb-4 text-[13px] font-semibold text-slate-800">Partner Information</div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {['Partner name','Partner type','Country','Primary contact','Street address','Email'].map((l) => (
              <div key={l} className="space-y-1.5">
                <div className="text-[10px] text-slate-400">{l}</div>
                <SkeletonLine width="w-[80%]" className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Modal: Terms ──────────────────────────────────────────────────────────────

function TermsModal({ visible }: { visible: boolean }) {
  return (
    <div className={cn(
      'absolute left-1/2 top-1/2 w-[360px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500',
      visible ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-[0.97] pointer-events-none'
    )}>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-[#005657]" />
            <span className="text-[12px] font-semibold text-slate-800">Microsoft CSP Terms</span>
          </div>
          <FileText className="h-3.5 w-3.5 text-slate-400" />
        </div>
        <div className="relative h-[160px] overflow-hidden px-4 py-3">
          <div className="absolute right-2 top-3 h-[140px] w-1 rounded-full bg-slate-200">
            <div className="absolute left-0 top-10 h-10 w-full rounded-full bg-slate-400" />
          </div>
          <div className="space-y-2.5 pr-3">
            <SkeletonLine width="w-[46%]" className="h-2.5" />
            <SkeletonLine width="w-[60%]" className="h-2.5" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-1.5 pt-1">
                <SkeletonLine width="w-full" />
                <SkeletonLine width="w-[88%]" />
                <SkeletonLine width="w-[70%]" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-slate-200 px-4 py-3">
          <button className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Decline</button>
          <button className="animate-pulse rounded-lg bg-[#005657] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white shadow-[0_0_0_3px_rgba(0,86,87,0.15)]">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Modal: MPN form ──────────────────────────────────────────────────────────

function MpnModal({ visible }: { visible: boolean }) {
  const [typed, setTyped] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    if (!visible) { setTyped(''); setSubmitted(false); setCancelled(false); return; }
    setCancelled(false);
    let isCancelled = false;

    async function run() {
      await sleep(500);
      if (isCancelled) return;
      for (let i = 1; i <= MPN_ID.length; i++) {
        await sleep(110);
        if (isCancelled) return;
        setTyped(MPN_ID.slice(0, i));
      }
      await sleep(700);
      if (isCancelled) return;
      setSubmitted(true);
    }

    run();
    return () => { isCancelled = true; };
  }, [visible]);

  return (
    <div className={cn(
      'absolute left-1/2 top-1/2 w-[320px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500',
      visible ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-[0.97] pointer-events-none'
    )}>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
        <div className="border-b border-slate-200 px-4 py-3">
          <span className="text-[12px] font-semibold text-slate-800">Program Access Request</span>
        </div>
        <div className="space-y-3.5 px-4 py-4">
          <div>
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400">Program</div>
            <div className="text-[12px] font-semibold text-slate-800">Microsoft CSP</div>
          </div>
          <div>
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400">MPN ID de CSP (PLA)</div>
            <div className={cn(
              'flex h-9 items-center rounded-lg border px-3 text-[12px] transition-colors',
              typed ? 'border-[#005657]/40 bg-[#f7fbfb]' : 'border-slate-200 bg-white'
            )}>
              {typed
                ? <span className="font-medium text-slate-800">
                    {typed}
                    {typed !== MPN_ID && <span className="ml-0.5 inline-block h-3 w-0.5 animate-pulse bg-slate-700 align-middle" />}
                  </span>
                : <span className="text-slate-400">Introduce tu identificador</span>
              }
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 border-t border-slate-200 px-4 py-3">
          <button className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Cancel</button>
          <button className={cn(
            'inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide transition-all duration-300',
            submitted      ? 'scale-[0.96] bg-[#004446] text-white'
            : typed === MPN_ID ? 'animate-pulse bg-[#005657] text-white shadow-[0_0_0_3px_rgba(0,86,87,0.15)]'
                              : 'bg-slate-100 text-slate-400'
          )}>
            Next <ChevronRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── View: Programs ────────────────────────────────────────────────────────────

function ProgramsView({ phase }: { phase: number }) {
  const requestEnabled = phase >= 2;
  const termsOpen = phase === 3;
  const formOpen = phase >= 4;

  return (
    <div className="relative flex h-full">
      <PartnerSidebar phase={phase} />
      <div className="flex-1 overflow-hidden bg-[#f0f1f3] px-4 py-3">
        <div className="mb-3 flex items-center gap-2 text-slate-700">
          <span className="text-base leading-none">←</span>
          <span className="text-[13px] font-semibold">Partners</span>
        </div>
        <div className="bg-white shadow-[0_1px_3px_rgba(15,23,42,0.10)]">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-[13px] font-semibold text-slate-800">Active Programs</span>
            <span className="text-[10px] uppercase tracking-wide text-slate-400">Edit</span>
          </div>
          <div className="grid grid-cols-[1.2fr_1fr] gap-3 border-y border-slate-200 px-4 py-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
            <span>Program</span><span>Partner</span>
          </div>
          <div className="px-4 py-3 text-center text-[12px] italic text-slate-400">No active program</div>

          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-[13px] font-semibold text-slate-800">Request Program Access</span>
            <button className={cn(
              'text-[11px] font-semibold uppercase tracking-wide transition-all',
              requestEnabled
                ? phase === 2
                  ? 'animate-pulse text-[#3c43c7] drop-shadow-[0_0_6px_rgba(60,67,199,0.25)]'
                  : 'text-[#3c43c7]'
                : 'text-slate-300'
            )}>
              Request Access
            </button>
          </div>

          <div className="grid grid-cols-[1.2fr_1fr] gap-3 border-y border-slate-200 px-4 py-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
            <span>Program</span><span>Partner</span>
          </div>

          <div className="px-4 pb-2">
            {['Microsoft CSP','Amazon Web Services','Microsoft Azure','SoftLayer','Marketplace Basic'].map((program) => {
              const selected = program === 'Microsoft CSP';
              return (
                <div key={program} className={cn(
                  'grid grid-cols-[1.2fr_1fr] items-center gap-3 border-b py-3 text-[11px] transition-all',
                  selected ? 'border-[#c8d6ee] bg-[#e9edf9]' : 'border-slate-200 bg-white text-slate-500'
                )}>
                  <div className="flex items-center gap-2">
                    {selected && phase >= 2
                      ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#3c43c7]" />
                      : <span className="h-3.5 w-3.5 rounded-full border border-slate-300" />
                    }
                    <span className={cn(selected ? 'font-semibold text-slate-800' : '')}>{program}</span>
                  </div>
                  <span className="truncate text-slate-400">StreamOne Ion Cloud Support - Spain</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className={cn('absolute inset-0 bg-slate-950/25 transition-opacity duration-500', (termsOpen || formOpen) ? 'opacity-100' : 'pointer-events-none opacity-0')} />
      <TermsModal visible={termsOpen} />
      <MpnModal visible={formOpen} />
    </div>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────────

type ViewKey = 'partners' | 'partner-detail' | 'programs';
const ALL_VIEWS: ViewKey[] = ['partners', 'partner-detail', 'programs'];

export function StreamoneCspRequestAnimation({ label }: { label: string }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = window.setTimeout(() => setPhase((p) => (p + 1) % phases.length), PHASE_DURATIONS[phase]);
    return () => window.clearTimeout(t);
  }, [phase]);

  const activeView: ViewKey = phase === 0 ? 'partners' : phase === 1 ? 'partner-detail' : 'programs';
  const url =
    activeView === 'partners'         ? 'ion.tdsynnex.com/v2/partners'
    : activeView === 'partner-detail' ? 'ion.tdsynnex.com/v2/partners/td-synnex-spain'
                                      : 'ion.tdsynnex.com/v2/partners/td-synnex-spain/programs';

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]">{label}</span>
        <div className="flex flex-wrap gap-1.5">
          {phases.map((item, index) => (
            <PhaseBadge key={item.label} index={index} label={item.label} active={phase === index} done={phase > index} />
          ))}
        </div>
        <p className="text-[13px] text-slate-600">{phases[phase]?.helper}</p>
      </div>

      {/* Browser mock — same style as other animations */}
      <div className={cn('flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md', SCREEN_HEIGHT)}>
        {/* Chrome bar */}
        <div className="flex shrink-0 items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ea4335]" />
            <span className="h-2 w-2 rounded-full bg-[#fbbc05]" />
            <span className="h-2 w-2 rounded-full bg-[#34a853]" />
          </div>
          <div className="mx-auto flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-500 transition-all duration-500">
            <LockKeyhole className="h-3 w-3 shrink-0 text-slate-400" />
            {url}
          </div>
        </div>

        {/* ION App */}
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden bg-[#f0f1f3]">
          <AppChrome />

          <div className="relative flex-1">
            {ALL_VIEWS.map((view) => {
              const isActive = activeView === view;
              return (
                <div
                  key={view}
                  className={cn(
                    'absolute inset-0 transition-all duration-700 ease-in-out',
                    isActive
                      ? 'pointer-events-auto opacity-100 translate-x-0'
                      : view === 'partners'
                        ? 'pointer-events-none opacity-0 -translate-x-2'
                        : 'pointer-events-none opacity-0 translate-x-2'
                  )}
                >
                  {view === 'partners'      && <PartnersListView phase={phase} />}
                  {view === 'partner-detail'&& <PartnerDetailView />}
                  {view === 'programs'      && <ProgramsView phase={phase} />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
