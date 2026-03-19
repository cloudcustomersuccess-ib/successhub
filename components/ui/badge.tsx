import * as React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'accent';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: 'bg-[#005657] text-white',
    outline: 'border border-[#005657] text-[#005657] bg-transparent',
    secondary: 'bg-[var(--muted)] text-[var(--muted-foreground)]',
    accent: 'bg-[var(--accent-subtle)] text-[#005657] border border-[#005657]/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
