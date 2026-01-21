'use client';

import { ReactNode } from 'react';
import { Box, Typography, Divider } from '@mui/material';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export function SectionHeader({ title, subtitle, icon, action }: SectionHeaderProps) {
  return (
    <Box sx={{ mb: 4 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {icon && (
            <Box
              sx={{
                color: 'primary.main',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {icon}
            </Box>
          )}
          <Typography variant="h4" component="h2" fontWeight="bold">
            {title}
          </Typography>
        </Box>
        {action && <Box>{action}</Box>}
      </Box>
      {subtitle && (
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {subtitle}
        </Typography>
      )}
      <Divider />
    </Box>
  );
}
