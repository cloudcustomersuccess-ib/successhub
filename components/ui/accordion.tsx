'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
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
        <span>{question}</span>
        <ChevronDown
          className={cn(
            'h-4 w-4 shrink-0 text-[var(--muted-foreground)] transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>
      {open && (
        <div className="pb-4 text-sm text-[var(--muted-foreground)] leading-relaxed">
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
    <div className="rounded-md border border-[var(--border)]  px-4">
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
