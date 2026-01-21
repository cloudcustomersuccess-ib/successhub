'use client';

import { ReactNode, useState } from 'react';
import { Box, IconButton, Tooltip, Typography, useTheme } from '@mui/material';
import { ContentCopy, Check } from '@mui/icons-material';

interface CodeBlockProps {
  children: ReactNode;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ children, language, showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const theme = useTheme();

  const handleCopy = () => {
    const text = typeof children === 'string' ? children : String(children);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        mb: 2,
      }}
    >
      {language && (
        <Box
          sx={{
            bgcolor: theme.palette.mode === 'light' ? 'grey.200' : 'grey.800',
            px: 2,
            py: 0.5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            {language}
          </Typography>
          <Tooltip title={copied ? 'Copiado!' : 'Copiar código'}>
            <IconButton size="small" onClick={handleCopy}>
              {copied ? <Check fontSize="small" /> : <ContentCopy fontSize="small" />}
            </IconButton>
          </Tooltip>
        </Box>
      )}
      <Box
        component="pre"
        sx={{
          bgcolor: theme.palette.mode === 'light' ? 'grey.100' : 'grey.900',
          p: 2,
          m: 0,
          overflow: 'auto',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          lineHeight: 1.6,
        }}
      >
        <code>{children}</code>
      </Box>
    </Box>
  );
}
