import { ReactNode } from 'react';
import { Separator } from './separator';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export function SectionHeader({ title, subtitle, icon, action }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-3">
          {icon && (
            <span className="text-[#005657] flex items-center">{icon}</span>
          )}
          <h2 className="text-2xl font-bold text-[var(--foreground)]">{title}</h2>
        </div>
        {action && <div>{action}</div>}
      </div>
      {subtitle && (
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-3">
          {subtitle}
        </p>
      )}
      <Separator />
    </div>
  );
}
