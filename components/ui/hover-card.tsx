'use client';

import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  FocusEvent,
  MouseEvent,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { cn } from '@/lib/utils';

type HoverCardContextValue = {
  open: boolean;
  openWithDelay: () => void;
  closeWithDelay: () => void;
};

const HoverCardContext = createContext<HoverCardContextValue | null>(null);

function useHoverCardContext() {
  const context = useContext(HoverCardContext);

  if (!context) {
    throw new Error('HoverCard components must be used inside <HoverCard>.');
  }

  return context;
}

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  openDelay?: number;
  closeDelay?: number;
}

export function HoverCard({
  children,
  className,
  openDelay = 200,
  closeDelay = 120,
}: HoverCardProps) {
  const [open, setOpen] = useState(false);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (openTimer.current) window.clearTimeout(openTimer.current);
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  const clearTimers = () => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  const value = useMemo<HoverCardContextValue>(
    () => ({
      open,
      openWithDelay: () => {
        clearTimers();
        openTimer.current = window.setTimeout(() => setOpen(true), openDelay);
      },
      closeWithDelay: () => {
        clearTimers();
        closeTimer.current = window.setTimeout(() => setOpen(false), closeDelay);
      },
    }),
    [open, openDelay, closeDelay]
  );

  return (
    <HoverCardContext.Provider value={value}>
      <span className={cn('relative inline-block', className)}>
        {children}
      </span>
    </HoverCardContext.Provider>
  );
}

interface HoverCardTriggerProps {
  children: ReactElement;
  asChild?: boolean;
}

type HoverTriggerElementProps = {
  onMouseEnter?: (event: MouseEvent) => void;
  onMouseLeave?: (event: MouseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
};

export function HoverCardTrigger({ children, asChild = false }: HoverCardTriggerProps) {
  const { openWithDelay, closeWithDelay } = useHoverCardContext();

  const child = Children.only(children) as ReactElement<HoverTriggerElementProps>;

  if (asChild && isValidElement(child)) {
    return cloneElement(child, {
      onMouseEnter: (event: MouseEvent) => {
        child.props.onMouseEnter?.(event);
        openWithDelay();
      },
      onMouseLeave: (event: MouseEvent) => {
        child.props.onMouseLeave?.(event);
        closeWithDelay();
      },
      onFocus: (event: FocusEvent) => {
        child.props.onFocus?.(event);
        openWithDelay();
      },
      onBlur: (event: FocusEvent) => {
        child.props.onBlur?.(event);
        closeWithDelay();
      },
    });
  }

  return child;
}

interface HoverCardContentProps {
  children: ReactNode;
  className?: string;
}

export function HoverCardContent({ children, className }: HoverCardContentProps) {
  const { open, openWithDelay, closeWithDelay } = useHoverCardContext();

  if (!open) return null;

  return (
    <div
      onMouseEnter={openWithDelay}
      onMouseLeave={closeWithDelay}
      className={cn(
        'absolute left-0 top-full z-50 mt-2 rounded-xl border border-slate-200/90 bg-white/95 p-4 text-sm text-slate-700 shadow-[0_12px_32px_rgba(15,23,42,0.10)] backdrop-blur-sm',
        className
      )}
    >
      {children}
    </div>
  );
}
