'use client';

import { useEffect, useRef } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  alpha,
  useTheme,
  Chip,
  Paper,
} from '@mui/material';
import { Unstable_Grid2 as Grid } from '@mui/material';
import {
  RocketLaunch,
  CloudQueue,
  Factory,
  Support,
  TrendingUp,
  ArrowForward,
  Speed,
  Security,
  Cloud,
  Insights,
  AutoAwesome,
  CheckCircle,
} from '@mui/icons-material';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// Declaración de tipos para Vanta.js
declare global {
  interface Window {
    VANTA?: {
      FOG: (options: any) => any;
    };
    THREE?: any;
  }
}

const sections = [
  {
    icon: <RocketLaunch fontSize="large" />,
    title: 'Onboarding',
    description: 'Guías paso a paso para comenzar tu viaje en la nube con TD SYNNEX',
    href: '/onboarding',
    color: '#0066cc',
  },
  {
    icon: <CloudQueue fontSize="large" />,
    title: 'StreamOne ION',
    description: 'Portal de gestión cloud completo para tus operaciones',
    href: '/streamone-ion',
    color: '#003031',
  },
  {
    icon: <Factory fontSize="large" />,
    title: 'Fabricantes',
    description: 'Información y recursos de los principales fabricantes cloud',
    href: '/fabricantes',
    color: '#2e7d32',
  },
  {
    icon: <Support fontSize="large" />,
    title: 'Soporte',
    description: 'Centro de ayuda y contacto con nuestro equipo de soporte',
    href: '/soporte',
    color: '#ed6c02',
  },
  {
    icon: <TrendingUp fontSize="large" />,
    title: 'Growth Lab',
    description: 'Estrategias y herramientas para hacer crecer tu negocio cloud',
    href: '/growth-lab',
    color: '#9c27b0',
  },
];

// Stats data
const stats = [
  { label: 'Clientes Activos', value: '500+', icon: <Cloud /> },
  { label: 'Fabricantes Integrados', value: '25+', icon: <Factory /> },
  { label: 'Recursos Disponibles', value: '1000+', icon: <Insights /> },
  { label: 'Uptime Garantizado', value: '99.9%', icon: <Speed /> },
];

// Features data
const features = [
  {
    icon: <RocketLaunch />,
    title: 'Onboarding Rápido',
    description: 'Comienza en minutos con nuestras guías paso a paso y herramientas automatizadas',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    icon: <Security />,
    title: 'Seguridad de Nivel Empresarial',
    description: 'Protección avanzada con cumplimiento de estándares internacionales',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    icon: <Insights />,
    title: 'Analytics en Tiempo Real',
    description: 'Visualiza el rendimiento y métricas clave de tu infraestructura cloud',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    icon: <AutoAwesome />,
    title: 'Automatización Inteligente',
    description: 'Optimiza procesos con IA y machine learning integrado',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

export default function Home() {
  const theme = useTheme();
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const sectionsRef = useRef(null);

  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const sectionsInView = useInView(sectionsRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      const initVanta = () => {
        if (window.VANTA && window.THREE) {
          vantaEffect.current = window.VANTA.FOG({
            el: vantaRef.current,
            THREE: window.THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: 0x603b,
            midtoneColor: 0x56a53,
            lowlightColor: 0x86351,
            baseColor: 0x4332b,
            blurFactor: 0.45,
            speed: 1.5,
            zoom: 2.0,
          });
        }
      };

      if (window.VANTA && window.THREE) {
        initVanta();
      } else {
        const checkVanta = setInterval(() => {
          if (window.VANTA && window.THREE) {
            clearInterval(checkVanta);
            initVanta();
          }
        }, 100);

        return () => clearInterval(checkVanta);
      }
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section with Vanta.js */}
      <Box
        ref={vantaRef}
        sx={{
          height: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Chip
              label="Bienvenido a TD SYNNEX"
              sx={{
                mb: 3,
                bgcolor: alpha('#ffffff', 0.2),
                backdropFilter: 'blur(10px)',
                color: 'white',
                fontWeight: 600,
                px: 2,
                py: 2.5,
                fontSize: '0.875rem',
              }}
            />
            <Typography
              variant="h1"
              component="h1"
              fontWeight="800"
              gutterBottom
              sx={{
                mb: 2,
                color: 'white',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              }}
            >
              Cloud Customer
              <br />
              Success Hub
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.95,
                maxWidth: 700,
                color: 'white',
                fontSize: { xs: '1.125rem', md: '1.5rem' },
                lineHeight: 1.6,
                textShadow: '0 1px 10px rgba(0,0,0,0.2)',
              }}
            >
              Tu centro de recursos, conocimiento y herramientas para el éxito en
              soluciones cloud empresariales
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                href="/onboarding"
                endIcon={<ArrowForward />}
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                  '&:hover': {
                    bgcolor: alpha('#ffffff', 0.9),
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Comenzar Ahora
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                href="/soporte"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)',
                  bgcolor: alpha('#ffffff', 0.1),
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: alpha('#ffffff', 0.2),
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Contactar Soporte
              </Button>
            </Box>
          </motion.div>
        </Container>

        {/* Scroll indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Box
              sx={{
                width: 30,
                height: 50,
                border: '2px solid white',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                pt: 1,
                opacity: 0.7,
              }}
            >
              <Box
                sx={{
                  width: 4,
                  height: 8,
                  bgcolor: 'white',
                  borderRadius: '2px',
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* Stats Section */}
      <Box
        ref={statsRef}
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(
            theme.palette.background.default,
            1
          )} 100%)`,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate={statsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={scaleIn}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        textAlign: 'center',
                        bgcolor: 'background.paper',
                        borderRadius: 3,
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: theme.shadows[8],
                          borderColor: theme.palette.primary.main,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          color: 'primary.main',
                          mb: 2,
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Typography
                        variant="h3"
                        fontWeight="800"
                        color="primary.main"
                        gutterBottom
                      >
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" fontWeight={500}>
                        {stat.label}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
      <Box ref={featuresRef} sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate={featuresInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Chip
                label="Características"
                color="primary"
                sx={{ mb: 2, fontWeight: 600 }}
              />
              <Typography variant="h2" fontWeight="800" gutterBottom>
                Todo lo que necesitas para el éxito
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ maxWidth: 700, mx: 'auto' }}
              >
                Herramientas y recursos diseñados para maximizar tu inversión cloud
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={featuresInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid xs={12} sm={6} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Card
                      elevation={0}
                      sx={{
                        p: 4,
                        height: '100%',
                        borderRadius: 4,
                        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.4s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
                          '& .feature-icon': {
                            transform: 'scale(1.1) rotate(5deg)',
                          },
                        },
                      }}
                    >
                      <Box
                        className="feature-icon"
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: 3,
                          background: feature.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          mb: 3,
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography variant="h5" fontWeight="700" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" lineHeight={1.7}>
                        {feature.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Sections Navigation */}
      <Box
        ref={sectionsRef}
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(180deg, ${alpha(
            theme.palette.background.default,
            1
          )} 0%, ${alpha(theme.palette.primary.main, 0.03)} 100%)`,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate={sectionsInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Chip
                label="Explorar Secciones"
                color="primary"
                sx={{ mb: 2, fontWeight: 600 }}
              />
              <Typography variant="h2" fontWeight="800" gutterBottom>
                Navega por nuestras áreas especializadas
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ maxWidth: 700, mx: 'auto' }}
              >
                Cada sección está diseñada para proporcionarte información y herramientas
                específicas
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={sectionsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <Grid container spacing={3}>
              {sections.map((section, index) => (
                <Grid xs={12} sm={6} md={4} key={section.href}>
                  <motion.div variants={scaleIn} whileHover={{ scale: 1.03 }}>
                    <Card
                      component={Link}
                      href={section.href}
                      elevation={2}
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        textDecoration: 'none',
                        borderRadius: 3,
                        overflow: 'hidden',
                        position: 'relative',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'translateY(-12px)',
                          boxShadow: theme.shadows[12],
                          '& .section-arrow': {
                            transform: 'translateX(8px)',
                          },
                          '& .section-bg': {
                            transform: 'scale(1.1)',
                          },
                        },
                      }}
                    >
                      <Box
                        className="section-bg"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: '100%',
                          height: '100%',
                          background: `linear-gradient(135deg, ${alpha(
                            section.color,
                            0.05
                          )} 0%, transparent 100%)`,
                          transition: 'transform 0.6s ease',
                        }}
                      />
                      <CardContent sx={{ flex: 1, position: 'relative', p: 3 }}>
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: 2,
                            bgcolor: alpha(section.color, 0.15),
                            color: section.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                          }}
                        >
                          {section.icon}
                        </Box>
                        <Typography variant="h5" fontWeight="700" gutterBottom>
                          {section.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
                          {section.description}
                        </Typography>
                        <Box
                          className="section-arrow"
                          sx={{
                            mt: 2,
                            display: 'flex',
                            alignItems: 'center',
                            color: section.color,
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            transition: 'transform 0.3s ease',
                          }}
                        >
                          Explorar
                          <ArrowForward sx={{ ml: 0.5, fontSize: '1rem' }} />
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 8 },
                borderRadius: 4,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${alpha(
                  theme.palette.primary.dark,
                  0.9
                )} 100%)`,
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -100,
                  right: -100,
                  width: 300,
                  height: 300,
                  borderRadius: '50%',
                  bgcolor: alpha('#ffffff', 0.1),
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -150,
                  left: -100,
                  width: 400,
                  height: 400,
                  borderRadius: '50%',
                  bgcolor: alpha('#ffffff', 0.05),
                }}
              />

              <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
                <Typography variant="h2" fontWeight="800" gutterBottom>
                  ¿Listo para comenzar?
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, opacity: 0.95 }}>
                  Únete a cientos de empresas que ya confían en TD SYNNEX para su
                  transformación cloud
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    href="/onboarding"
                    endIcon={<ArrowForward />}
                    sx={{
                      bgcolor: 'white',
                      color: 'primary.main',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      '&:hover': {
                        bgcolor: alpha('#ffffff', 0.9),
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Empezar Ahora
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    component={Link}
                    href="/soporte"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: alpha('#ffffff', 0.1),
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Hablar con un Experto
                  </Button>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
