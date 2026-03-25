'use client';

import { useEffect, useState } from 'react';
import { BellRing, CheckCircle2, CircleCheckBig, Circle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const phases = [
  {
    label: '1. Abre el correo',
    helper: 'Identifica el email con los términos de StreamOne ION.',
  },
  {
    label: '2. Haz clic en la URL',
    helper: 'Pulsa el enlace del correo para abrir la firma en Bryter.',
  },
  {
    label: '3. Marca Yes',
    helper: 'Confirma que eres representante autorizado de tu empresa.',
  },
  {
    label: '4. Haz scroll por el contrato',
    helper: 'Recorre el PDF hasta el final para revisar los términos.',
  },
  {
    label: '5. Marca Acknowledge',
    helper: 'Acepta la casilla final para habilitar la firma.',
  },
  {
    label: '6. Pulsa Next',
    helper: 'Envía la aceptación para firmar los T&C de StreamOne ION.',
  },
];

function PhaseBadge({
  index,
  label,
  active,
  done,
}: {
  index: number;
  label: string;
  active: boolean;
  done: boolean;
}) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium transition-colors',
        active
          ? 'border-[#005657]/25 bg-[#ecf8f8] text-[#005657]'
          : done
            ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
            : 'border-slate-200 bg-white text-slate-400'
      )}
    >
      {done ? (
        <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
      ) : (
        <span
          className={cn(
            'inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-semibold',
            active ? 'bg-[#005657] text-white' : 'bg-slate-200 text-slate-500'
          )}
        >
          {index + 1}
        </span>
      )}
      {label.replace(/^\d+\.\s*/, '')}
    </div>
  );
}

const SCREEN_HEIGHT = 'h-[400px]';

function EmailWindow({ phase }: { phase: number }) {
  return (
    <div className={cn('flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md', SCREEN_HEIGHT)}>
      {/* Chrome bar */}
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#ea4335]" />
          <span className="h-2 w-2 rounded-full bg-[#fbbc05]" />
          <span className="h-2 w-2 rounded-full bg-[#34a853]" />
        </div>
        <span className="text-[11px] font-medium text-slate-500">Correo electrónico</span>
        <div className="ml-auto rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[10px] text-slate-500">
          1 nuevo
        </div>
      </div>

      {/* Notification banner */}
      <div
        className={cn(
          'flex items-center gap-2 border-b border-slate-200 px-4 py-2 transition-colors',
          phase === 0 ? 'bg-[#ecf8f8]' : 'bg-slate-50'
        )}
      >
        <BellRing className={cn('h-3.5 w-3.5 text-[#005657]', phase === 0 && 'animate-pulse')} />
        <span className="text-[11px] font-medium text-slate-600">
          Has recibido un correo para firmar los términos
        </span>
      </div>

      {/* Email body */}
      <div className="flex-1 overflow-hidden p-4">
        <div className="mb-4 flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1476d1] text-xs font-semibold text-white">
            TS
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-semibold leading-tight text-slate-900">
              TD SYNNEX – StreamOne Ion Platform Agreement Terms
            </p>
            <p className="mt-0.5 text-[11px] text-slate-500">no-reply@bryter.io · To Barros, Sergi</p>
          </div>
        </div>

        <div className="space-y-2 text-[13px] leading-relaxed text-slate-700">
          <p>Sergi, please follow the link below to accept and acknowledge the StreamOne Ion Platform Agreement Terms.</p>
          <p>Regards, TD SYNNEX</p>

          {/* URL — styled like the original but with modified values */}
          <div className="relative pt-2">
            <a
              className={cn(
                'break-all text-[#2457d6] underline decoration-[#2457d6]/40 underline-offset-4 text-[12px] transition-all leading-relaxed',
                phase === 1
                  ? 'font-semibold decoration-[#005657]/60 text-[#005657] bg-[#ecf8f8] rounded px-1 py-0.5 shadow-[0_0_0_3px_rgba(0,86,87,0.12)]'
                  : ''
              )}
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              https://techdata-legal.bryter.io/s/Xm3pK9nRqyZwHeIBFdGcTN/SIE-Platform-Agreement-Terms/sessions/hW8kLPRMXBDfvvZTQzgMnS?id=id_8a4c2de1f9b6e3a0c7d5f2
            </a>
            {phase === 1 && (
              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-[#005657] px-2 py-0.5 text-[10px] font-semibold text-white animate-pulse align-middle">
                <ArrowRight className="h-2.5 w-2.5" /> Clic aquí
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

type CheckStage = 'idle' | 'checking' | 'checked';

function CheckItem({
  stage,
  label,
  description,
}: {
  stage: CheckStage;
  label: string;
  description?: string;
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 rounded-xl border px-3 py-2 transition-all duration-400',
        stage === 'checked'
          ? 'border-[#005657]/30 bg-[#ecf8f8]'
          : stage === 'checking'
            ? 'border-[#005657]/50 bg-[#f0fafa] shadow-[0_0_0_3px_rgba(0,86,87,0.12)]'
            : 'border-slate-200 bg-white'
      )}
    >
      <div className="relative shrink-0">
        {stage === 'checked' ? (
          <CircleCheckBig
            className="h-4.5 w-4.5 text-[#005657] transition-all duration-300"
            style={{ animation: 'popIn 0.3s ease-out' }}
          />
        ) : stage === 'checking' ? (
          <Circle className="h-4.5 w-4.5 text-[#005657] animate-pulse" />
        ) : (
          <Circle className="h-4.5 w-4.5 text-slate-300" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        {description && (
          <p className="text-[10px] leading-4 text-slate-500 mb-1">{description}</p>
        )}
        <span className="text-[12px] font-semibold text-slate-700">{label}</span>
      </div>
      {stage === 'checking' && (
        <span className="shrink-0 rounded-full bg-[#005657] px-1.5 py-0.5 text-[9px] font-semibold text-white animate-pulse">
          Marca
        </span>
      )}
    </div>
  );
}

function BryterWindow({ phase }: { phase: number }) {
  const [yesStage, setYesStage] = useState<CheckStage>('idle');
  const [ackStage, setAckStage] = useState<CheckStage>('idle');

  // Yes animation: phase 2 = checking → after 1s = checked
  useEffect(() => {
    if (phase === 2) {
      setYesStage('checking');
      const t = setTimeout(() => setYesStage('checked'), 1100);
      return () => clearTimeout(t);
    } else if (phase > 2) {
      setYesStage('checked');
    } else {
      setYesStage('idle');
    }
  }, [phase]);

  // Acknowledge animation: phase 4 = checking → after 1s = checked
  useEffect(() => {
    if (phase === 4) {
      setAckStage('checking');
      const t = setTimeout(() => setAckStage('checked'), 1100);
      return () => clearTimeout(t);
    } else if (phase > 4) {
      setAckStage('checked');
    } else {
      setAckStage('idle');
    }
  }, [phase]);

  const scrolled = phase >= 3;
  const nextEnabled = ackStage === 'checked';
  const nextClicked = phase >= 5;

  return (
    <>
      <style>{`
        @keyframes popIn {
          0%   { transform: scale(0.5); opacity: 0.4; }
          60%  { transform: scale(1.25); opacity: 1; }
          100% { transform: scale(1); }
        }
      `}</style>
      <div className={cn('flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md', SCREEN_HEIGHT)}>
        {/* Chrome bar */}
        <div className="flex shrink-0 items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ea4335]" />
            <span className="h-2 w-2 rounded-full bg-[#fbbc05]" />
            <span className="h-2 w-2 rounded-full bg-[#34a853]" />
          </div>
          <span className="text-[11px] font-medium text-slate-500">Bryter · StreamOne Ion</span>
        </div>

        <div className="flex min-h-0 flex-1">
          {/* LEFT PANEL — form */}
          <div className="flex w-[45%] shrink-0 flex-col border-r border-slate-200">
            <div className="border-b border-slate-200 px-3 py-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/TD%20SYNNEX_Logo_Standard.png" alt="TD SYNNEX" className="h-6 w-auto object-contain" />
            </div>

            <div className="flex-1 space-y-3 overflow-hidden px-3 py-3">
              {/* Authorized representative question */}
              <div>
                <p className="text-[12px] font-semibold leading-tight text-[#005c70]">
                  Are you an authorized representative of your company?
                </p>
                <p className="mt-1 text-[10px] italic text-slate-400">
                  *authorized to accept terms on behalf of company
                </p>

                {/* Yes / No options */}
                <div className="mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  {['Yes', 'No'].map((option, index) => {
                    const isYes = index === 0;
                    const selected = isYes && yesStage === 'checked';
                    const isChecking = isYes && yesStage === 'checking';
                    return (
                      <div
                        key={option}
                        className={cn(
                          'flex items-center gap-3 border-b border-slate-200 px-3 py-2 last:border-b-0 transition-all duration-500',
                          selected
                            ? 'bg-[#ecf8f8]'
                            : isChecking
                              ? 'bg-[#f0fafa] shadow-[inset_0_0_0_2px_rgba(0,86,87,0.25)]'
                              : ''
                        )}
                      >
                        {selected ? (
                          <CircleCheckBig
                            className="h-4 w-4 shrink-0 text-[#005657]"
                            style={{ animation: 'popIn 0.3s ease-out' }}
                          />
                        ) : (
                          <Circle
                            className={cn(
                              'h-4 w-4 shrink-0 transition-colors duration-300',
                              isChecking ? 'text-[#005657] animate-pulse' : 'text-slate-300'
                            )}
                          />
                        )}
                        <span className="text-[13px] text-slate-700">{option}</span>
                        {isYes && yesStage === 'idle' && phase === 2 && (
                          <span className="ml-auto rounded-full bg-[#005657] px-1.5 py-0.5 text-[9px] font-semibold text-white animate-pulse">
                            Selecciona
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Fields placeholder */}
              <div className="space-y-2">
                {['Authorized Rep. Name', 'Organization Legal Name'].map((field) => (
                  <div key={field}>
                    <div className="mb-1 text-[10px] font-semibold text-[#005c70]">{field}</div>
                    <div className="h-2.5 w-36 rounded-full bg-slate-200/80" />
                  </div>
                ))}
              </div>

              {/* Acknowledge */}
              <div
                className={cn(
                  'rounded-xl border p-2.5 transition-all duration-500',
                  ackStage === 'checked'
                    ? 'border-[#005657]/30 bg-[#ecf8f8]'
                    : ackStage === 'checking'
                      ? 'border-[#005657]/50 bg-[#f0fafa] shadow-[0_0_0_3px_rgba(0,86,87,0.12)]'
                      : 'border-slate-200 bg-white opacity-60'
                )}
              >
                <p className="mb-2 text-[10px] leading-4 text-slate-500">
                  Accept and acknowledge the StreamOne Ion Platform Agreement Terms.
                </p>
                <div className="flex items-center gap-2">
                  {ackStage === 'checked' ? (
                    <CircleCheckBig
                      className="h-4 w-4 shrink-0 text-[#005657]"
                      style={{ animation: 'popIn 0.3s ease-out' }}
                    />
                  ) : (
                    <Circle
                      className={cn(
                        'h-4 w-4 shrink-0 transition-colors duration-300',
                        ackStage === 'checking' ? 'text-[#005657] animate-pulse' : 'text-slate-300'
                      )}
                    />
                  )}
                  <span className="text-[12px] font-semibold text-slate-700">Acknowledge</span>
                  {ackStage === 'checking' && (
                    <span className="ml-auto rounded-full bg-[#005657] px-1.5 py-0.5 text-[9px] font-semibold text-white animate-pulse">
                      Marca
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Footer with Next */}
            <div className="flex items-center gap-2 border-t border-slate-200 bg-white px-3 py-2">
              <button className="flex h-8 w-10 items-center justify-center rounded-lg border border-slate-200 text-xs text-slate-500">
                ←
              </button>
              <button
                className={cn(
                  'flex h-8 flex-1 items-center justify-center gap-1.5 rounded-lg text-xs font-semibold transition-all duration-300',
                  nextEnabled
                    ? nextClicked
                      ? 'bg-[#004446] text-white scale-[0.97]'
                      : 'bg-[#005657] text-white shadow-[0_0_0_3px_rgba(0,86,87,0.15)] animate-pulse'
                    : 'bg-slate-100 text-slate-400'
                )}
              >
                Next →
              </button>
            </div>
          </div>

          {/* RIGHT PANEL — PDF viewer */}
          <div className="flex flex-1 flex-col bg-[#f4f5f7]">
            <div className="flex shrink-0 items-center gap-2 border-b border-slate-200 bg-white px-3 py-1.5 text-slate-400">
              <span className="text-xs">↑</span>
              <span className="text-xs">↓</span>
              <div className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px]">1</div>
              <span className="text-[10px]">of 11</span>
            </div>

            <div className="relative flex-1 overflow-hidden p-3">
              {/* Scrollbar */}
              <div className="absolute right-2 top-3 h-[80%] w-1 rounded-full bg-slate-200">
                <div
                  className={cn(
                    'absolute left-0 w-full rounded-full bg-slate-400 transition-all duration-700',
                    scrolled ? 'top-[55%] h-10' : 'top-[5%] h-8'
                  )}
                />
              </div>

              {/* PDF mock */}
              <div
                className={cn(
                  'rounded-lg bg-white p-3 shadow-sm transition-transform duration-700',
                  scrolled ? '-translate-y-16' : 'translate-y-0'
                )}
              >
                <div className="mb-3 flex items-start justify-between">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/TD%20SYNNEX_Logo_Standard.png" alt="TD SYNNEX" className="h-6 w-auto object-contain" />
                  <div className="text-right text-[10px] text-slate-400">
                    <div>Version:</div>
                    <div>July 2023</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-3 w-[60%] rounded-full bg-slate-200/90" />
                  <div className="h-3 w-[50%] rounded-full bg-slate-200/90" />
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="h-2 w-full rounded-full bg-slate-200/70" />
                      <div className="h-2 w-[90%] rounded-full bg-slate-200/70" />
                      <div className="h-2 w-[75%] rounded-full bg-slate-200/70" />
                    </div>
                  ))}
                  <div className="h-16 rounded-xl bg-slate-100" />
                </div>
              </div>

              {/* Scroll hint */}
              {phase === 3 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-[#005657] px-3 py-1 text-[10px] font-semibold text-white shadow-md animate-bounce">
                  ↓ Scroll al final
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function StreamoneTermsAnimation({ label }: { label: string }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setPhase((current) => (current + 1) % phases.length);
    }, 2400);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
          {label}
        </span>
        <div className="flex flex-wrap gap-1.5">
          {phases.map((item, index) => (
            <PhaseBadge
              key={item.label}
              index={index}
              label={item.label}
              active={phase === index}
              done={phase > index}
            />
          ))}
        </div>
        <p className="text-[13px] text-slate-600">{phases[phase]?.helper}</p>
      </div>

      <div className={cn('relative', SCREEN_HEIGHT)}>
        <div
          className={cn(
            'absolute inset-0 transition-all duration-500',
            phase < 2
              ? 'pointer-events-auto opacity-100 translate-y-0'
              : 'pointer-events-none opacity-0 -translate-y-4'
          )}
        >
          <EmailWindow phase={phase} />
        </div>

        <div
          className={cn(
            'absolute inset-0 transition-all duration-500',
            phase >= 2
              ? 'pointer-events-auto opacity-100 translate-y-0'
              : 'pointer-events-none opacity-0 translate-y-4'
          )}
        >
          <BryterWindow phase={phase} />
        </div>
      </div>
    </div>
  );
}
