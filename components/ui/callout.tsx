'use client';

import { ReactNode } from 'react';
import { Box, Typography, Paper, useTheme } from '@mui/material';
import {
  Info,
  CheckCircle,
  Warning,
  Error as ErrorIcon,
  Lightbulb,
} from '@mui/icons-material';

export type CalloutType = 'info' | 'success' | 'warning' | 'error' | 'tip';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
  icon?: ReactNode;
}

const getCalloutConfig = (type: CalloutType, theme: any) => {
  const configs = {
    info: {
      icon: <Info />,
      bgcolor: theme.palette.mode === 'light' ? '#e3f2fd' : '#0d47a1',
      borderColor: theme.palette.mode === 'light' ? '#1976d2' : '#42a5f5',
      iconColor: theme.palette.mode === 'light' ? '#1976d2' : '#90caf9',
      textColor: theme.palette.mode === 'light' ? '#0d47a1' : '#e3f2fd',
    },
    success: {
      icon: <CheckCircle />,
      bgcolor: theme.palette.mode === 'light' ? '#e8f5e9' : '#1b5e20',
      borderColor: theme.palette.mode === 'light' ? '#2e7d32' : '#66bb6a',
      iconColor: theme.palette.mode === 'light' ? '#2e7d32' : '#81c784',
      textColor: theme.palette.mode === 'light' ? '#1b5e20' : '#e8f5e9',
    },
    warning: {
      icon: <Warning />,
      bgcolor: theme.palette.mode === 'light' ? '#fff3e0' : '#e65100',
      borderColor: theme.palette.mode === 'light' ? '#ed6c02' : '#ffb74d',
      iconColor: theme.palette.mode === 'light' ? '#ed6c02' : '#ffcc80',
      textColor: theme.palette.mode === 'light' ? '#e65100' : '#fff3e0',
    },
    error: {
      icon: <ErrorIcon />,
      bgcolor: theme.palette.mode === 'light' ? '#ffebee' : '#b71c1c',
      borderColor: theme.palette.mode === 'light' ? '#d32f2f' : '#ef5350',
      iconColor: theme.palette.mode === 'light' ? '#d32f2f' : '#e57373',
      textColor: theme.palette.mode === 'light' ? '#b71c1c' : '#ffebee',
    },
    tip: {
      icon: <Lightbulb />,
      bgcolor: theme.palette.mode === 'light' ? '#fff9c4' : '#f57f17',
      borderColor: theme.palette.mode === 'light' ? '#f9a825' : '#ffeb3b',
      iconColor: theme.palette.mode === 'light' ? '#f57f17' : '#fff59d',
      textColor: theme.palette.mode === 'light' ? '#f57f17' : '#fff9c4',
    },
  };

  return configs[type];
};

export function Callout({ type = 'info', title, children, icon }: CalloutProps) {
  const theme = useTheme();
  const config = getCalloutConfig(type, theme);

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        bgcolor: config.bgcolor,
        borderLeft: '4px solid',
        borderColor: config.borderColor,
        borderRadius: 2,
        display: 'flex',
        gap: 2,
        mb: 2,
      }}
    >
      <Box
        sx={{
          color: config.iconColor,
          display: 'flex',
          alignItems: 'flex-start',
          pt: 0.5,
        }}
      >
        {icon || config.icon}
      </Box>
      <Box sx={{ flex: 1 }}>
        {title && (
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 0.5,
              color: config.textColor,
              fontSize: '1rem',
            }}
          >
            {title}
          </Typography>
        )}
        <Typography
          variant="body2"
          sx={{
            color: config.textColor,
            '& p': { mb: 1 },
            '& p:last-child': { mb: 0 },
          }}
        >
          {children}
        </Typography>
      </Box>
    </Paper>
  );
}
