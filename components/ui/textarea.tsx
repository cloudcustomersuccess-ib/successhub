import * as React from 'react';
import { cn } from '@/lib/utils';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/15 aria-invalid:ring-red-500/10 aria-invalid:border-red-500 dark:aria-invalid:ring-red-500/20 flex min-h-16 w-full rounded-md border bg-white px-3 py-2 text-base text-slate-700 shadow-xs outline-none transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-[3px] md:text-sm',
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
