'use client';

import { ReactNode } from 'react';
import OwnerBadge, { OwnerType } from './owner-badge';

interface ProcessStepProps {
  title: string;
  owner: OwnerType;
  ownerLabel: string;
  substeps: {
    label: string;
    content: ReactNode;
  }[];
}

export default function ProcessStep({ title, owner, ownerLabel, substeps }: ProcessStepProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <h3 className="text-xl font-bold text-[var(--foreground)]">{title}</h3>
        <OwnerBadge owner={owner} label={ownerLabel} />
      </div>

      <div className="pl-4 border-l-2 border-[var(--border)] space-y-6">
        {substeps.map((substep, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[1.375rem] top-1 h-4 w-4 rounded-full border-2 border-[#005657] bg-[var(--background)]" />
            <p className="text-base font-semibold text-[var(--foreground)] mb-2">{substep.label}</p>
            <div className="text-sm text-[var(--muted-foreground)]">{substep.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
