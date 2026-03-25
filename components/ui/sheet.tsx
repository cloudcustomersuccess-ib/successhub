'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SheetProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: 'left' | 'right';
  title?: string;
  panelClassName?: string;
  contentClassName?: string;
}

export function Sheet({
  open,
  onClose,
  children,
  side = 'left',
  title = 'Contenido',
  panelClassName,
  contentClassName,
}: SheetProps) {
  const panelRef = React.useRef<HTMLDivElement>(null);

  // Stop wheel events from reaching Lenis (which listens on window) while
  // still allowing native scroll inside the panel's overflow container.
  React.useEffect(() => {
    if (!open || !panelRef.current) return;
    const el = panelRef.current;

    const stopWheel = (e: WheelEvent) => {
      e.stopPropagation();
    };

    // Non-passive so stopPropagation is fully honoured; no preventDefault so
    // the browser can still scroll the overflow-y-auto content div natively.
    el.addEventListener('wheel', stopWheel, { passive: false });
    return () => el.removeEventListener('wheel', stopWheel);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Panel */}
      <div
        ref={panelRef}
        className={cn(
          'relative z-10 flex h-full w-72 flex-col bg-[var(--background)] shadow-xl',
          side === 'right' && 'ml-auto',
          panelClassName
        )}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-[var(--border)] px-4 py-3">
          <span className="text-sm font-semibold text-[var(--foreground)]">{title}</span>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className={cn('min-h-0 flex-1 overflow-y-auto px-4 py-4', contentClassName)}>
          {children}
        </div>
      </div>
    </div>
  );
}
