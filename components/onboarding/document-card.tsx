'use client';

import { FileText, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface DocumentCardProps {
  title: string;
  description?: string;
  size?: string;
  downloadUrl?: string;
  viewUrl?: string;
  index?: number;
}

export default function DocumentCard({
  title,
  description,
  size,
  downloadUrl,
  viewUrl,
  index = 0,
}: DocumentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 transition-all hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-subtle)]">
          <FileText className="h-6 w-6 text-[#005657]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-[var(--foreground)]">{title}</p>
          {description && (
            <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{description}</p>
          )}
          {size && (
            <p className="text-xs text-[var(--muted-foreground)]">{size}</p>
          )}
        </div>
        <div className="flex gap-1">
          {downloadUrl && (
            <a
              href={downloadUrl}
              className="rounded-md p-1.5 text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[#005657] transition-colors"
            >
              <Download className="h-4 w-4" />
            </a>
          )}
          {viewUrl && (
            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-1.5 text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[#005657] transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
