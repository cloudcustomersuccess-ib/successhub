import * as React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
  target?: string;
}

export function Button({
  className,
  variant = 'default',
  size = 'md',
  href,
  target,
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005657] disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    default: 'bg-[#005657] text-white hover:bg-[#003031]',
    outline: 'border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--muted)] hover:border-[#005657]',
    ghost: 'text-[var(--foreground)] hover:bg-[var(--muted)]',
    link: 'text-[#005657] underline-offset-4 hover:underline p-0 h-auto',
  };

  const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-9 px-4 text-sm',
    lg: 'h-10 px-6 text-sm',
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={cn(base, variants[variant], sizes[size], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
