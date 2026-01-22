'use client';

import { Card, CardContent, Box, Typography, IconButton } from '@mui/material';
import { Description, Download, OpenInNew } from '@mui/icons-material';
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
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 1.5,
          '&:hover': {
            boxShadow: 4,
            transform: 'translateY(-2px)',
            transition: 'all 0.3s ease',
          },
        }}
      >
        <Box
          sx={{
            bgcolor: 'primary.light',
            borderRadius: 1,
            p: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: 2,
          }}
        >
          <Description sx={{ color: 'primary.main', fontSize: 28 }} />
        </Box>
        <CardContent sx={{ flex: 1, p: 0, '&:last-child': { pb: 0 } }}>
          <Typography variant="body1" fontWeight={600} gutterBottom>
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          )}
          {size && (
            <Typography variant="caption" color="text.secondary">
              {size}
            </Typography>
          )}
        </CardContent>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          {downloadUrl && (
            <IconButton size="small" color="primary" href={downloadUrl}>
              <Download />
            </IconButton>
          )}
          {viewUrl && (
            <IconButton size="small" color="primary" href={viewUrl} target="_blank">
              <OpenInNew />
            </IconButton>
          )}
        </Box>
      </Card>
    </motion.div>
  );
}
