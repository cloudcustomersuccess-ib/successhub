'use client';

import { User, Building2, Cloud } from 'lucide-react';

export type OwnerType = 'client' | 'tdsynnex' | 'aws';

interface OwnerBadgeProps {
  owner: OwnerType;
  label: string;
}

const ownerConfig = {
  client: {
    cls: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800',
    icon: <User className="h-3.5 w-3.5" />,
  },
  tdsynnex: {
    cls: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800',
    icon: <Building2 className="h-3.5 w-3.5" />,
  },
  aws: {
    cls: 'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800',
    icon: <Cloud className="h-3.5 w-3.5" />,
  },
};

export default function OwnerBadge({ owner, label }: OwnerBadgeProps) {
  const { cls, icon } = ownerConfig[owner];
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${cls}`}>
      {icon}
      {label}
    </span>
  );
}
