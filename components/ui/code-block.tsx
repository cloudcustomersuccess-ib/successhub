'use client';

import { ReactNode, useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  children: ReactNode;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ children, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = typeof children === 'string' ? children : String(children);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg overflow-hidden border border-[var(--border)] mb-4">
      {language && (
        <div className="flex items-center justify-between bg-[var(--muted)] px-4 py-1.5 border-b border-[var(--border)]">
          <span className="text-xs font-semibold font-mono uppercase text-[var(--muted-foreground)]">
            {language}
          </span>
          <button
            onClick={handleCopy}
            title={copied ? 'Copiado!' : 'Copiar código'}
            className={cn(
              'rounded p-1 transition-colors',
              copied
                ? 'text-emerald-600'
                : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
            )}
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </div>
      )}
      <pre className="bg-[var(--muted)] dark:bg-[#111] p-4 m-0 overflow-auto font-mono text-sm leading-relaxed text-[var(--foreground)]">
        <code>{children}</code>
      </pre>
    </div>
  );
}
