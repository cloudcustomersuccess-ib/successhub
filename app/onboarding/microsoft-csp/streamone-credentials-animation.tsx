'use client';

import { useEffect, useRef, useState } from 'react';
import { BellRing, CheckCircle2, LockKeyhole } from 'lucide-react';
import { cn } from '@/lib/utils';

const EMAIL_ADDRESS = 'lara.martinez@tdsynnex.com';
// Fixed height all screens share — determined by the tallest (credentials email)
const SCREEN_HEIGHT = 'h-[316px]';

const phases = [
  { label: '1. Abre el correo',    helper: 'Recibes las credenciales de acceso a StreamOne® ION.' },
  { label: '2. Accede a ION',      helper: 'Haz clic en el enlace del correo para ir al login de StreamOne® ION.' },
  { label: '3. Forgot Password',   helper: 'En el login, pulsa "Forgot Password" para generar tu contraseña.' },
  { label: '4. Introduce tu email',helper: 'Escribe tu email y pulsa Submit para recibir el enlace de restablecimiento.' },
  { label: '5. Nuevo correo',      helper: 'Recibes un email con el enlace para restablecer tu contraseña.' },
  { label: '6. Crea tu contraseña',helper: 'Introduce tu nueva contraseña y pulsa Submit.' },
];

// ─── Phase badge ───────────────────────────────────────────────────────────────

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

// ─── Shared chrome bar ─────────────────────────────────────────────────────────

function ChromeBar({ url }: { url?: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2">
      <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[#ea4335]" />
        <span className="h-2 w-2 rounded-full bg-[#fbbc05]" />
        <span className="h-2 w-2 rounded-full bg-[#34a853]" />
      </div>
      {url
        ? <div className="mx-auto flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-500">
            <LockKeyhole className="h-3 w-3 shrink-0 text-slate-400" />{url}
          </div>
        : <span className="text-[11px] font-medium text-slate-500">Correo electrónico</span>
      }
    </div>
  );
}

// ─── StreamOne Ion logo ────────────────────────────────────────────────────────

function IonLogo() {
  return (
    <div className="mb-4 text-center">
      <span className="text-[20px] font-light tracking-tight text-[#00b9d6]">Stream</span>
      <span className="text-[20px] font-bold tracking-tight text-[#00b9d6]">One</span>
      <span className="text-[20px] font-bold italic tracking-tight text-slate-500"> Ion</span>
    </div>
  );
}

// ─── Screen 1: Credentials email ──────────────────────────────────────────────

function CredentialsEmailScreen({ phase }: { phase: number }) {
  const linkActive = phase === 1;
  return (
    <div className={cn('flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md', SCREEN_HEIGHT)}>
      <ChromeBar />
      <div className={cn('flex shrink-0 items-center gap-2 border-b border-slate-200 px-4 py-2 transition-colors', phase === 0 ? 'bg-[#ecf8f8]' : 'bg-slate-50')}>
        <BellRing className={cn('h-3.5 w-3.5 text-[#005657]', phase === 0 && 'animate-pulse')} />
        <span className="text-[11px] font-medium text-slate-600">Has recibido tus credenciales de StreamOne® ION</span>
      </div>
      <div className="flex-1 overflow-hidden p-4">
        <div className="mb-3 flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1476d1] text-xs font-semibold text-white">TS</div>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-semibold leading-tight text-slate-900">StreamOne® ION Platform Credentials</p>
            <p className="mt-0.5 text-[11px] text-slate-500">businessexperiencesu@techdata.com · To {EMAIL_ADDRESS}</p>
          </div>
        </div>
        <div className="space-y-1.5 text-[13px] leading-relaxed text-slate-700">
          <p>Se ha creado tu cuenta en StreamOne® ION. El usuario de acceso es <span className="font-semibold text-slate-900">{EMAIL_ADDRESS}</span>.</p>
          <p>Para obtener tu contraseña dirígete a ION y haz un <span className="font-medium text-[#005657]">Forgot Password</span>.</p>
          <p className="pt-0.5 text-[12px] text-slate-500">Enlace a StreamOne® ION:</p>
          <div>
            <a
              className={cn(
                'break-all text-[12px] leading-relaxed underline underline-offset-4 transition-all',
                linkActive
                  ? 'rounded bg-[#ecf8f8] px-1 py-0.5 font-semibold text-[#005657] shadow-[0_0_0_3px_rgba(0,86,87,0.12)] decoration-[#005657]/40'
                  : 'text-[#2457d6] decoration-[#2457d6]/40'
              )}
              href="#" onClick={(e) => e.preventDefault()}
            >
              https://ion.tdsynnex.com/v2/login
            </a>
            {linkActive && (
              <span className="ml-2 inline-flex animate-pulse items-center rounded-full bg-[#005657] px-2 py-0.5 align-middle text-[10px] font-semibold text-white">
                Clic aquí
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 2: ION Login ───────────────────────────────────────────────────────

function IonLoginScreen({ phase }: { phase: number }) {
  const forgotActive = phase === 2;
  return (
    <div className={cn('flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md', SCREEN_HEIGHT)}>
      <ChromeBar url="ion.tdsynnex.com/v2/login" />
      <div className="flex flex-1 flex-col items-center justify-center px-8">
        <IonLogo />
        <p className="mb-5 text-[14px] text-slate-700">Sign in</p>
        <div className="w-full max-w-[240px] space-y-4">
          <div className="border-b border-slate-300 pb-1">
            <span className="text-[13px] text-slate-400">Username</span>
          </div>
          <div className="border-b border-slate-300 pb-1">
            <span className="text-[13px] text-slate-400">Password</span>
          </div>
          <div className="flex items-center justify-between pt-1">
            <button className={cn('text-[11px] font-bold uppercase tracking-wide transition-all', forgotActive ? 'text-[#005657] underline underline-offset-2' : 'text-slate-500')}>
              Forgot password
              {forgotActive && (
                <span className="ml-2 inline-flex animate-pulse items-center rounded-full bg-[#005657] px-1.5 py-0.5 text-[9px] font-semibold text-white no-underline">
                  Clic
                </span>
              )}
            </button>
            <button className="rounded border border-slate-300 bg-slate-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-slate-400">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 3: Reset — enter email ────────────────────────────────────────────

function IonResetEmailScreen({ phase }: { phase: number }) {
  const [typed, setTyped] = useState('');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (phase === 3) {
      setTyped('');
      let i = 0;
      intervalRef.current = setInterval(() => {
        i++;
        setTyped(EMAIL_ADDRESS.slice(0, i));
        if (i >= EMAIL_ADDRESS.length && intervalRef.current) clearInterval(intervalRef.current);
      }, 55);
    } else if (phase > 3) {
      setTyped(EMAIL_ADDRESS);
    } else {
      setTyped('');
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [phase]);

  const done = typed === EMAIL_ADDRESS;
  const submitActive = phase === 3 && done;

  return (
    <div className={cn('flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md', SCREEN_HEIGHT)}>
      <ChromeBar url="ion.tdsynnex.com/v2/login" />
      <div className="flex flex-1 flex-col items-center justify-center px-8">
        <IonLogo />
        <p className="mb-5 text-[14px] text-slate-700">Reset Password</p>
        <div className="w-full max-w-[240px] space-y-4">
          <div className={cn('border-b pb-1 transition-colors duration-300', typed.length > 0 ? 'border-[#005657]' : 'border-slate-300')}>
            {typed.length > 0
              ? <span className="text-[13px] text-slate-800">
                  {typed}
                  {!done && <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse bg-slate-700 align-middle" />}
                </span>
              : <span className="text-[13px] text-slate-400">
                  Email *
                  {phase === 2 && <span className="ml-2 inline-flex animate-pulse items-center rounded-full bg-[#005657] px-1.5 py-0.5 text-[9px] font-semibold text-white">Escribe aquí</span>}
                </span>
            }
          </div>
          <div className="flex items-center justify-between pt-1">
            <button className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Login</button>
            <button className={cn(
              'rounded border px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide transition-all duration-300',
              submitActive ? 'animate-pulse border-[#005657]/30 bg-[#005657] text-white'
                           : done ? 'border-[#005657]/30 bg-[#005657] text-white'
                                  : 'border-slate-300 bg-slate-100 text-slate-400'
            )}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 4: Reset-password email ───────────────────────────────────────────

function ResetEmailScreen({ phase }: { phase: number }) {
  const linkActive = phase === 5;
  return (
    <div className={cn('flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md', SCREEN_HEIGHT)}>
      <ChromeBar />
      <div className={cn('flex shrink-0 items-center gap-2 border-b border-slate-200 px-4 py-2 transition-colors', phase === 4 ? 'bg-[#ecf8f8]' : 'bg-slate-50')}>
        <BellRing className={cn('h-3.5 w-3.5 text-[#005657]', phase === 4 && 'animate-pulse')} />
        <span className="text-[11px] font-medium text-slate-600">Has recibido el enlace para restablecer tu contraseña</span>
      </div>
      <div className="flex-1 overflow-hidden p-4">
        <div className="mb-3 flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#005c70] text-xs font-semibold text-white">TD</div>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-semibold leading-tight text-slate-900">Tech Data España Password Reset Confirmation</p>
            <p className="mt-0.5 text-[11px] text-slate-500">noreply@email.ses.techdata.com · To {EMAIL_ADDRESS}</p>
          </div>
        </div>
        <div className="space-y-1.5 text-[13px] leading-relaxed text-slate-700">
          <p>A password reset was requested for your StreamOne Ion Cloud Support - Spain account on StreamOne Enterprise Solutions.</p>
          <p className="text-[12px] text-slate-500">If you did not make the request, you may ignore this email.</p>
          <div className="pt-1">
            <a
              className={cn(
                'break-all text-[11px] leading-relaxed underline underline-offset-4 transition-all',
                linkActive
                  ? 'rounded bg-[#ecf8f8] px-1 py-0.5 font-semibold text-[#005657] shadow-[0_0_0_3px_rgba(0,86,87,0.12)] decoration-[#005657]/40'
                  : 'text-[#2457d6] decoration-[#2457d6]/40'
              )}
              href="#" onClick={(e) => e.preventDefault()}
            >
              https://ion.tdsynnex.com/v2/resetpassword?u=lara.martinez%40tdsynnex.com&h=Q72NMRXZAK3B891267WVPYT
            </a>
            {linkActive && (
              <span className="ml-2 inline-flex animate-pulse items-center rounded-full bg-[#005657] px-2 py-0.5 align-middle text-[10px] font-semibold text-white">
                Clic aquí
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 5: New password form ──────────────────────────────────────────────
// sub-steps: 0=empty  1=typing pw1  2=pw1 done, typing pw2  3=both done, submit active  4=submitted

const DOTS = '••••••••••';
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

function IonNewPasswordScreen({ active }: { active: boolean }) {
  const [sub, setSub] = useState(0);
  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  const cancelledRef = useRef(false);

  useEffect(() => {
    cancelledRef.current = false;
    setSub(0);
    setPw1('');
    setPw2('');
    if (!active) return;

    async function run() {
      // 0 — empty fields, show hint
      await sleep(600);
      if (cancelledRef.current) return;

      // 1 — type new password
      setSub(1);
      for (let i = 1; i <= DOTS.length; i++) {
        await sleep(130);
        if (cancelledRef.current) return;
        setPw1(DOTS.slice(0, i));
      }

      // pause between fields so it's clearly sequential
      await sleep(600);
      if (cancelledRef.current) return;

      // 2 — type confirm password
      setSub(2);
      for (let j = 1; j <= DOTS.length; j++) {
        await sleep(130);
        if (cancelledRef.current) return;
        setPw2(DOTS.slice(0, j));
      }

      // 3 — both done, submit pulsing
      await sleep(400);
      if (cancelledRef.current) return;
      setSub(3);

      // 4 — submit pressed
      await sleep(1000);
      if (cancelledRef.current) return;
      setSub(4);
    }

    run();

    return () => { cancelledRef.current = true; };
  }, [active]);

  return (
    <div className={cn('flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md', SCREEN_HEIGHT)}>
      <ChromeBar url="ion.tdsynnex.com/v2/resetpassword" />
      <div className="flex flex-1 flex-col items-center justify-center px-8">
        <IonLogo />
        <p className="mb-5 text-[14px] text-slate-700">Reset Password</p>
        <div className="w-full max-w-[240px] space-y-4">
          {/* New password field */}
          <div className={cn('border-b pb-1 transition-colors duration-200', pw1.length > 0 ? 'border-[#005657]' : 'border-slate-300')}>
            {pw1.length > 0
              ? <span className="text-[13px] tracking-widest text-slate-800">
                  {pw1}
                  {sub === 1 && <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse bg-slate-700 align-middle" />}
                </span>
              : <span className="text-[13px] text-slate-400">
                  New password *
                  {active && sub === 0 && <span className="ml-2 inline-flex animate-pulse items-center rounded-full bg-[#005657] px-1.5 py-0.5 text-[9px] font-semibold text-white">Escribe</span>}
                </span>
            }
          </div>
          {/* Confirm password field */}
          <div className={cn('border-b pb-1 transition-colors duration-200', pw2.length > 0 ? 'border-[#005657]' : 'border-slate-300')}>
            {pw2.length > 0
              ? <span className="text-[13px] tracking-widest text-slate-800">
                  {pw2}
                  {sub === 2 && <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse bg-slate-700 align-middle" />}
                </span>
              : <span className="text-[13px] text-slate-400">Confirm new password *</span>
            }
          </div>
          <div className="flex items-center justify-between pt-1">
            <button className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Login</button>
            <button className={cn(
              'rounded border px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide transition-all duration-300',
              sub === 4 ? 'scale-[0.95] border-[#004446]/30 bg-[#004446] text-white shadow-none'
              : sub === 3 ? 'animate-pulse border-[#005657]/30 bg-[#005657] text-white shadow-[0_0_0_3px_rgba(0,86,87,0.18)]'
              : sub >= 1 && pw1 === DOTS && pw2 === DOTS ? 'border-[#005657]/30 bg-[#005657] text-white'
              : 'border-slate-300 bg-slate-100 text-slate-400'
            )}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

type ScreenKey = 'email1' | 'login' | 'resetForm' | 'email2' | 'newPassword';
const phaseToScreen: ScreenKey[] = ['email1', 'email1', 'login', 'resetForm', 'email2', 'email2'];
const ALL_SCREENS: ScreenKey[] = ['email1', 'login', 'resetForm', 'email2', 'newPassword'];

// Per-phase durations — phase 5 (new password) needs much more time
const PHASE_DURATIONS = [3500, 3500, 3500, 3800, 3500, 7000];
const NEW_PW_DELAY = 1400; // ms into phase 5 before switching to new-password screen

export function StreamoneCredentialsAnimation({ label }: { label: string }) {
  const [phase, setPhase] = useState(0);
  const [showNewPassword, setShowNewPassword] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setPhase((p) => (p + 1) % phases.length);
      setShowNewPassword(false);
    }, PHASE_DURATIONS[phase]);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase === 5) {
      const t = setTimeout(() => setShowNewPassword(true), NEW_PW_DELAY);
      return () => clearTimeout(t);
    } else {
      setShowNewPassword(false);
    }
  }, [phase]);

  const screen: ScreenKey = showNewPassword ? 'newPassword' : phaseToScreen[phase];

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

      {/* Fixed-height container — all screens are absolute inside it */}
      <div className={cn('relative', SCREEN_HEIGHT)}>
        {ALL_SCREENS.map((key) => {
          const isActive = screen === key;
          return (
            <div
              key={key}
              className={cn(
                'absolute inset-0 transition-all duration-700 ease-in-out',
                isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
              )}
            >
              {key === 'email1'      && <CredentialsEmailScreen phase={phase} />}
              {key === 'login'       && <IonLoginScreen phase={phase} />}
              {key === 'resetForm'   && <IonResetEmailScreen phase={phase} />}
              {key === 'email2'      && <ResetEmailScreen phase={phase} />}
              {key === 'newPassword' && <IonNewPasswordScreen active={isActive} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
