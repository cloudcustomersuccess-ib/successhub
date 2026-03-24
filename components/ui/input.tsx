import * as React from 'react';
import { cn } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          'border-input file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/15 aria-invalid:ring-red-500/10 aria-invalid:border-red-500 dark:aria-invalid:ring-red-500/20 flex h-9 w-full min-w-0 rounded-md border bg-white px-3 py-1 text-base text-slate-700 shadow-xs outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-[3px] md:text-sm',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
