import * as React from 'react';
import { cn } from '@/lib/utils';

interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
}

export function Separator({ className, orientation = 'horizontal', ...props }: SeparatorProps) {
  return (
    <hr
      className={cn(
        'shrink-0 border-[var(--border)]',
        orientation === 'horizontal' ? 'border-t w-full' : 'border-l h-full',
        className
      )}
      {...props}
    />
  );
}
