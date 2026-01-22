'use client';

import { Box, Typography, Stepper, Step, StepLabel, StepContent } from '@mui/material';
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
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>
        <OwnerBadge owner={owner} label={ownerLabel} />
      </Box>

      <Stepper orientation="vertical" sx={{ pl: 2 }}>
        {substeps.map((substep, index) => (
          <Step key={index} active expanded>
            <StepLabel
              sx={{
                '& .MuiStepLabel-label': {
                  fontSize: '1.1rem',
                  fontWeight: 600,
                },
              }}
            >
              {substep.label}
            </StepLabel>
            <StepContent>
              <Box sx={{ py: 2 }}>{substep.content}</Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
