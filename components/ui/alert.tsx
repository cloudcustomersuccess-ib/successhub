import * as React from 'react';
import { cn } from '@/lib/utils';

export function Alert({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      role="alert"
      className={cn(
        'relative w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-slate-900 shadow-lg',
        className
      )}
      {...props}
    >
      <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">{children}</div>
    </div>
  );
}

export function AlertTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'h5'>) {
  return (
    <h5 className={cn('col-start-2 font-semibold leading-none tracking-tight', className)} {...props} />
  );
}

export function AlertDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn('col-start-2 text-sm leading-6 text-slate-600', className)}
      {...props}
    />
  );
}
