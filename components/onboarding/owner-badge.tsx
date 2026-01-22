'use client';

import { Chip } from '@mui/material';
import { Person, Business, Cloud } from '@mui/icons-material';

export type OwnerType = 'client' | 'tdsynnex' | 'aws';

interface OwnerBadgeProps {
  owner: OwnerType;
  label: string;
}

const ownerConfig = {
  client: {
    color: '#1976d2',
    icon: <Person sx={{ fontSize: 16 }} />,
  },
  tdsynnex: {
    color: '#2e7d32',
    icon: <Business sx={{ fontSize: 16 }} />,
  },
  aws: {
    color: '#ed6c02',
    icon: <Cloud sx={{ fontSize: 16 }} />,
  },
};

export default function OwnerBadge({ owner, label }: OwnerBadgeProps) {
  const config = ownerConfig[owner];

  return (
    <Chip
      icon={config.icon}
      label={label}
      size="small"
      sx={{
        bgcolor: `${config.color}20`,
        color: config.color,
        border: `1px solid ${config.color}40`,
        fontWeight: 600,
        '& .MuiChip-icon': {
          color: config.color,
        },
      }}
    />
  );
}
