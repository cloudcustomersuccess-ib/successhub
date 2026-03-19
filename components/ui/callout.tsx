import { ReactNode } from 'react';
import { Info, CheckCircle2, AlertTriangle, AlertCircle, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

export type CalloutType = 'info' | 'success' | 'warning' | 'error' | 'tip';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

const configs: Record<CalloutType, { icon: ReactNode; cls: string; labelCls: string }> = {
  info: {
    icon: <Info className="h-4 w-4 mt-0.5 shrink-0" />,
    cls: 'bg-blue-50 border-blue-300 text-blue-900 dark:bg-blue-950/40 dark:border-blue-700 dark:text-blue-200',
    labelCls: 'text-blue-700 dark:text-blue-400',
  },
  success: {
    icon: <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />,
    cls: 'bg-emerald-50 border-emerald-300 text-emerald-900 dark:bg-emerald-950/40 dark:border-emerald-700 dark:text-emerald-200',
    labelCls: 'text-emerald-700 dark:text-emerald-400',
  },
  warning: {
    icon: <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />,
    cls: 'bg-amber-50 border-amber-300 text-amber-900 dark:bg-amber-950/40 dark:border-amber-700 dark:text-amber-200',
    labelCls: 'text-amber-700 dark:text-amber-400',
  },
  error: {
    icon: <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />,
    cls: 'bg-red-50 border-red-300 text-red-900 dark:bg-red-950/40 dark:border-red-700 dark:text-red-200',
    labelCls: 'text-red-700 dark:text-red-400',
  },
  tip: {
    icon: <Lightbulb className="h-4 w-4 mt-0.5 shrink-0" />,
    cls: 'bg-yellow-50 border-yellow-300 text-yellow-900 dark:bg-yellow-950/40 dark:border-yellow-700 dark:text-yellow-200',
    labelCls: 'text-yellow-700 dark:text-yellow-400',
  },
};

export function Callout({ type = 'info', title, children, icon, className }: CalloutProps) {
  const cfg = configs[type];

  return (
    <div className={cn('rounded-md border px-4 py-3 text-sm mb-4', cfg.cls, className)}>
      <div className="flex gap-3">
        <span className={cfg.labelCls}>{icon ?? cfg.icon}</span>
        <div className="flex-1 min-w-0">
          {title && (
            <p className={cn('font-semibold mb-1', cfg.labelCls)}>{title}</p>
          )}
          <div className="leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
