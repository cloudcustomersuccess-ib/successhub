'use client';

import { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip,
  TextField,
  InputAdornment
} from '@mui/material';
import { ContentCopy, OpenInNew, Search } from '@mui/icons-material';
import { pagesConfig, getPageUrl } from '@/lib/pages-config';

export default function Home() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCopyUrl = (pageId: string, path: string) => {
    const url = getPageUrl(path);
    navigator.clipboard.writeText(url);
    setCopiedId(pageId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredPages = pagesConfig.filter(page =>
    page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.path.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          SuccessHub - Índice de Páginas
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Listado de todas las páginas disponibles. Cada página es independiente y puede ser compartida individualmente con clientes.
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Buscar páginas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mt: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {filteredPages.length === 0 ? (
          <Card>
            <CardContent>
              <Typography variant="body1" color="text.secondary" align="center">
                No se encontraron páginas que coincidan con tu búsqueda.
              </Typography>
            </CardContent>
          </Card>
        ) : (
          filteredPages.map((page) => (
            <Card key={page.id} elevation={2} sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                  <Typography variant="h5" component="h2" fontWeight="600">
                    {page.title}
                  </Typography>
                  <Chip
                    label={page.id}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                </Box>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {page.description}
                </Typography>

                <Box sx={{
                  bgcolor: 'grey.100',
                  p: 1.5,
                  borderRadius: 1,
                  fontFamily: 'monospace',
                  fontSize: '0.875rem'
                }}>
                  <Typography variant="body2" color="text.primary">
                    {getPageUrl(page.path)}
                  </Typography>
                </Box>
              </CardContent>

              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  size="small"
                  startIcon={<OpenInNew />}
                  href={page.path}
                  variant="contained"
                  sx={{ mr: 1 }}
                >
                  Abrir Página
                </Button>
                <Button
                  size="small"
                  startIcon={<ContentCopy />}
                  onClick={() => handleCopyUrl(page.id, page.path)}
                  variant="outlined"
                  color={copiedId === page.id ? "success" : "primary"}
                >
                  {copiedId === page.id ? "¡Copiado!" : "Copiar URL"}
                </Button>
              </CardActions>
            </Card>
          ))
        )}
      </Box>

      {filteredPages.length > 0 && (
        <Box sx={{ mt: 4, p: 3, bgcolor: 'info.light', borderRadius: 2 }}>
          <Typography variant="body2" color="info.dark">
            <strong>Total de páginas:</strong> {filteredPages.length} {searchTerm && `(filtradas de ${pagesConfig.length})`}
          </Typography>
        </Box>
      )}
    </Container>
  );
}
