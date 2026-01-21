'use client';

import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Chip,
  LinearProgress,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Button
} from '@mui/material';
import {
  TrendingUp,
  Assessment,
  People,
  ShoppingCart,
  CheckCircle,
  Schedule,
  Warning,
  ArrowBack
} from '@mui/icons-material';
import Link from 'next/link';

// Datos de ejemplo para el dashboard
const statsCards = [
  {
    title: 'Ventas Totales',
    value: '€124,592',
    change: '+12.5%',
    icon: <TrendingUp />,
    color: '#1976d2',
  },
  {
    title: 'Clientes Activos',
    value: '1,423',
    change: '+8.2%',
    icon: <People />,
    color: '#2e7d32',
  },
  {
    title: 'Pedidos Pendientes',
    value: '64',
    change: '-3.1%',
    icon: <ShoppingCart />,
    color: '#ed6c02',
  },
  {
    title: 'Tasa de Éxito',
    value: '94.2%',
    change: '+2.4%',
    icon: <Assessment />,
    color: '#9c27b0',
  },
];

const recentActivities = [
  {
    title: 'Nuevo pedido #4523',
    subtitle: 'Cliente: Empresa ABC S.L.',
    time: 'Hace 5 minutos',
    status: 'success',
    icon: <CheckCircle />,
  },
  {
    title: 'Pedido #4521 en proceso',
    subtitle: 'Cliente: Tech Solutions',
    time: 'Hace 15 minutos',
    status: 'warning',
    icon: <Schedule />,
  },
  {
    title: 'Alerta de inventario bajo',
    subtitle: 'Producto: Widget Pro 2000',
    time: 'Hace 1 hora',
    status: 'error',
    icon: <Warning />,
  },
];

const projectProgress = [
  { name: 'Implementación Q1', progress: 85, color: 'primary' },
  { name: 'Migración de Datos', progress: 60, color: 'secondary' },
  { name: 'Capacitación de Personal', progress: 40, color: 'success' },
  { name: 'Optimización SEO', progress: 95, color: 'warning' },
];

export default function CustomerDashboard() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Button
          component={Link}
          href="/"
          startIcon={<ArrowBack />}
          variant="outlined"
          size="small"
          sx={{ mb: 2 }}
        >
          Volver al Índice
        </Button>
        <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
          Dashboard de Cliente
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Resumen de métricas y actividades del cliente
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statsCards.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card elevation={2}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                      {stat.value}
                    </Typography>
                    <Chip
                      label={stat.change}
                      size="small"
                      color={stat.change.startsWith('+') ? 'success' : 'error'}
                      sx={{ fontWeight: 'bold' }}
                    />
                  </Box>
                  <Avatar sx={{ bgcolor: stat.color, width: 56, height: 56 }}>
                    {stat.icon}
                  </Avatar>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Recent Activities */}
        <Grid item xs={12} md={6}>
          <Card elevation={2}>
            <CardHeader
              title="Actividad Reciente"
              titleTypographyProps={{ fontWeight: 'bold' }}
            />
            <Divider />
            <List>
              {recentActivities.map((activity, index) => (
                <Box key={index}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          bgcolor:
                            activity.status === 'success'
                              ? 'success.main'
                              : activity.status === 'warning'
                              ? 'warning.main'
                              : 'error.main',
                        }}
                      >
                        {activity.icon}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={activity.title}
                      secondary={
                        <>
                          {activity.subtitle}
                          <br />
                          <Typography
                            component="span"
                            variant="caption"
                            color="text.secondary"
                          >
                            {activity.time}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  {index < recentActivities.length - 1 && <Divider variant="inset" component="li" />}
                </Box>
              ))}
            </List>
          </Card>
        </Grid>

        {/* Project Progress */}
        <Grid item xs={12} md={6}>
          <Card elevation={2}>
            <CardHeader
              title="Progreso de Proyectos"
              titleTypographyProps={{ fontWeight: 'bold' }}
            />
            <Divider />
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {projectProgress.map((project, index) => (
                  <Box key={index}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" fontWeight="medium">
                        {project.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" fontWeight="bold">
                        {project.progress}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={project.progress}
                      color={project.color as any}
                      sx={{ height: 8, borderRadius: 1 }}
                    />
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Info Card */}
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3, bgcolor: 'primary.light', color: 'primary.contrastText' }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Página de Ejemplo con Material UI
            </Typography>
            <Typography variant="body2">
              Esta es una página independiente creada con componentes de Material UI.
              Puedes duplicar esta estructura para crear más páginas específicas para cada cliente o propósito.
              Cada página tiene su propia URL y puede ser compartida de forma individual.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
