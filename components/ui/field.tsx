import * as React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

export type FieldGroupProps = React.HTMLAttributes<HTMLDivElement>;

export function FieldGroup({ className, ...props }: FieldGroupProps) {
  return <div className={cn('flex flex-col gap-6', className)} {...props} />;
}

export type FieldSetProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

export function FieldSet({ className, ...props }: FieldSetProps) {
  return <fieldset className={cn('flex flex-col gap-5', className)} {...props} />;
}

export type FieldLegendProps = React.HTMLAttributes<HTMLLegendElement>;

export function FieldLegend({ className, ...props }: FieldLegendProps) {
  return (
    <legend
      className={cn('text-base font-semibold tracking-tight text-slate-900', className)}
      {...props}
    />
  );
}

export type FieldDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export function FieldDescription({ className, ...props }: FieldDescriptionProps) {
  return (
    <p className={cn('text-sm leading-6 text-muted-foreground', className)} {...props} />
  );
}

export type FieldProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: 'vertical' | 'horizontal';
};

export function Field({
  className,
  orientation = 'vertical',
  ...props
}: FieldProps) {
  return (
    <div
      className={cn(
        orientation === 'horizontal'
          ? 'flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6'
          : 'flex flex-col gap-2',
        className
      )}
      {...props}
    />
  );
}

export type FieldLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function FieldLabel({ className, ...props }: FieldLabelProps) {
  return (
    <label className={cn('text-sm font-medium leading-none text-foreground', className)} {...props} />
  );
}

export type FieldSeparatorProps = React.ComponentProps<typeof Separator>;

export function FieldSeparator({ className, ...props }: FieldSeparatorProps) {
  return <Separator className={cn('border-slate-200', className)} {...props} />;
}
