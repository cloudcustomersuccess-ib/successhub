'use client';

import * as React from 'react';
import { ChevronDown, CircleHelp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <div className="border-b border-[var(--border)] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[#005657]"
      >
        <span className="flex min-w-0 items-center gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)]">
            <CircleHelp className="h-3.5 w-3.5" />
          </span>
          <span className="min-w-0">{question}</span>
        </span>
        <ChevronDown
          className={cn(
            'h-4 w-4 shrink-0 text-[var(--muted-foreground)] transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>
      {open && (
        <div className="pb-4 text-sm leading-7 text-[var(--muted-foreground)]">
          {answer}
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  items: { question?: string; title?: string; answer?: string; content?: string }[];
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="border-y border-[var(--border)] px-0">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          question={item.question ?? item.title ?? ''}
          answer={item.answer ?? item.content ?? ''}
        />
      ))}
    </div>
  );
}
