'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  LinearProgress,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert,
  IconButton,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Drawer,
  useMediaQuery,
  Tooltip,
  Fade,
  Skeleton,
  Link as MuiLink,
  ThemeProvider,
} from '@mui/material';
import {
  CheckCircle,
  RadioButtonUnchecked,
  ExpandMore,
  ArrowBack,
  ArrowForward,
  RestartAlt,
  Menu as MenuIcon,
  Close,
  Info,
  Warning,
  CheckCircleOutline,
  Error,
  ContentCopy,
  OpenInNew,
  Schedule,
  Person,
  Business,
  Description,
  Email,
  Support,
  PersonOutline,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import theme from './theme';
import { guideData } from './data';

// Types
interface StepState {
  id: string;
  completed: boolean;
}

// Helper function to get icon for note type
const getNoteIcon = (type: string) => {
  switch (type) {
    case 'info': return <Info />;
    case 'warning': return <Warning />;
    case 'success': return <CheckCircleOutline />;
    case 'danger':
    case 'error': return <Error />;
    default: return <Info />;
  }
};

// Helper function to get color for note type
const getNoteColor = (type: string) => {
  switch (type) {
    case 'info': return 'info';
    case 'warning': return 'warning';
    case 'success': return 'success';
    case 'danger':
    case 'error': return 'error';
    default: return 'info';
  }
};

export default function AWSOnboardingPage() {
  const [stepStates, setStepStates] = useState<StepState[]>([]);
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const stepRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Initialize state from localStorage
  useEffect(() => {
    const savedStates = localStorage.getItem('aws-onboarding-progress');
    if (savedStates) {
      setStepStates(JSON.parse(savedStates));
    } else {
      const initialStates = guideData.steps
        .filter(s => s.id.includes('.'))
        .map(s => ({ id: s.id, completed: false }));
      setStepStates(initialStates);
    }
    setLoading(false);
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (stepStates.length > 0) {
      localStorage.setItem('aws-onboarding-progress', JSON.stringify(stepStates));
    }
  }, [stepStates]);

  // Intersection Observer for scroll spy
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.keys(stepRefs.current).forEach(key => {
      const element = stepRefs.current[key];
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveStep(key);
            }
          },
          { threshold: 0.5, rootMargin: '-100px 0px -50% 0px' }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach(o => o.disconnect());
  }, [loading]);

  const toggleStepCompletion = (stepId: string) => {
    setStepStates(prev =>
      prev.map(s => s.id === stepId ? { ...s, completed: !s.completed } : s)
    );
  };

  const resetProgress = () => {
    if (confirm('¿Estás seguro de que quieres reiniciar todo el progreso?')) {
      const initialStates = guideData.steps
        .filter(s => s.id.includes('.'))
        .map(s => ({ id: s.id, completed: false }));
      setStepStates(initialStates);
      localStorage.removeItem('aws-onboarding-progress');
    }
  };

  const scrollToStep = (stepId: string) => {
    stepRefs.current[stepId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (isMobile) setDrawerOpen(false);
  };

  const completedCount = stepStates.filter(s => s.completed).length;
  const totalCount = stepStates.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  const mainSteps = guideData.steps.filter(s => !s.id.includes('.'));
  const subSteps = guideData.steps.filter(s => s.id.includes('.'));

  // Table of Contents Component
  const TableOfContents = () => (
    <Box
      sx={{
        position: 'sticky',
        top: 120,
        maxHeight: 'calc(100vh - 140px)',
        overflowY: 'auto',
        pr: 2,
        '&::-webkit-scrollbar': { width: '6px' },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderRadius: '3px',
        },
      }}
    >
      <Typography variant="h6" fontWeight={700} mb={2}>
        Contenido
      </Typography>
      <List dense>
        {subSteps.map(step => {
          const state = stepStates.find(s => s.id === step.id);
          const isActive = activeStep === step.id;
          return (
            <ListItem
              key={step.id}
              button
              onClick={() => scrollToStep(step.id)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                bgcolor: isActive ? 'primary.main' : 'transparent',
                color: isActive ? 'white' : 'text.primary',
                '&:hover': {
                  bgcolor: isActive ? 'primary.dark' : 'action.hover',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                {state?.completed ? (
                  <CheckCircle sx={{ color: isActive ? 'white' : 'success.main', fontSize: 20 }} />
                ) : (
                  <RadioButtonUnchecked sx={{ color: isActive ? 'white' : 'text.secondary', fontSize: 20 }} />
                )}
              </ListItemIcon>
              <ListItemText
                primary={step.title.replace('Paso ', '')}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 400,
                }}
              />
            </ListItem>
          );
        })}
      </List>
      <Button
        variant="outlined"
        size="small"
        startIcon={<RestartAlt />}
        onClick={resetProgress}
        fullWidth
        sx={{ mt: 2 }}
      >
        Reiniciar progreso
      </Button>
    </Box>
  );

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 4, mb: 4 }} />
          <Skeleton variant="rectangular" height={400} sx={{ borderRadius: 4 }} />
        </Container>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        {/* Sticky Progress Bar */}
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1100,
            bgcolor: 'background.paper',
            borderBottom: '1px solid',
            borderColor: 'divider',
            boxShadow: 2,
          }}
        >
          <Container maxWidth="xl">
            <Box sx={{ display: 'flex', alignItems: 'center', py: 2, gap: 2 }}>
              {isMobile && (
                <IconButton onClick={() => setDrawerOpen(true)} size="small">
                  <MenuIcon />
                </IconButton>
              )}
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography variant="body2" fontWeight={600}>
                    Progreso del Onboarding
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {completedCount} / {totalCount} completados
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    bgcolor: 'action.hover',
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 4,
                      background: 'linear-gradient(90deg, #10b981 0%, #059669 100%)',
                    },
                  }}
                />
              </Box>
              <Typography variant="h6" fontWeight={700} color="primary">
                {Math.round(progress)}%
              </Typography>
            </Box>
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ py: 6 }}>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                background: 'linear-gradient(135deg, #003031 0%, #005657 100%)',
                borderRadius: 4,
                p: { xs: 4, md: 6 },
                mb: 6,
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '50%',
                  height: '100%',
                  background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 70%)',
                },
              }}
            >
              <Button
                startIcon={<ArrowBack />}
                sx={{ color: 'white', mb: 3 }}
                href="/onboarding"
              >
                Volver a Onboarding
              </Button>

              <Typography variant="h1" gutterBottom sx={{ position: 'relative' }}>
                {guideData.title}
              </Typography>

              <Box sx={{ display: 'flex', gap: 1.5, mb: 3, flexWrap: 'wrap' }}>
                <Chip
                  icon={<Schedule />}
                  label="5-7 días laborables"
                  sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 600 }}
                />
                <Chip
                  icon={<Person />}
                  label="Dificultad: Media"
                  sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 600 }}
                />
                <Chip
                  icon={<CheckCircle />}
                  label={`${completedCount}/${totalCount} pasos completados`}
                  sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 600 }}
                />
              </Box>

              {guideData.intro.map((text, i) => (
                <Typography key={i} variant="body1" sx={{ mb: 2, fontSize: '1.1rem', opacity: 0.95 }}>
                  {text}
                </Typography>
              ))}

              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      bgcolor: 'grey.100',
                      transform: 'translateY(-2px)',
                    },
                  }}
                  onClick={() => scrollToStep(subSteps[0]?.id)}
                >
                  {guideData.primaryCta.label}
                </Button>
              </Box>
            </Box>
          </motion.div>

          {/* Callout */}
          {guideData.callouts.map((callout, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Alert
                icon={<Info />}
                severity="info"
                sx={{
                  mb: 4,
                  borderRadius: 3,
                  fontSize: '1rem',
                  boxShadow: 2,
                }}
              >
                {callout.text}
              </Alert>
            </motion.div>
          ))}

          {/* Pre-Step Section */}
          <Card sx={{ mb: 6, borderLeft: '4px solid', borderColor: 'primary.main' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" fontWeight={700} gutterBottom>
                {guideData.preStepSection.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {guideData.preStepSection.text}
              </Typography>
            </CardContent>
          </Card>

          {/* Main Layout: Sidebar + Content */}
          <Box sx={{ display: 'flex', gap: 4 }}>
            {/* Desktop TOC Sidebar */}
            {!isMobile && (
              <Box sx={{ width: 280, flexShrink: 0 }}>
                <TableOfContents />
              </Box>
            )}

            {/* Main Content */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              {guideData.steps.map((step, index) => {
                const isMainStep = !step.id.includes('.');
                const state = stepStates.find(s => s.id === step.id);

                // Skip main steps in detailed rendering (they're just headers)
                if (isMainStep) {
                  return (
                    <Box key={step.id} sx={{ mb: 6 }}>
                      <Typography
                        variant="h3"
                        fontWeight={800}
                        gutterBottom
                        sx={{
                          background: 'linear-gradient(135deg, #003031 0%, #005657 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        {step.summary}
                      </Typography>
                    </Box>
                  );
                }

                return (
                  <motion.div
                    key={step.id}
                    ref={el => (stepRefs.current[step.id] = el)}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card
                      sx={{
                        mb: 4,
                        border: '2px solid',
                        borderColor: state?.completed ? 'success.main' : 'divider',
                        bgcolor: state?.completed ? 'success.light' : 'background.paper',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: 6,
                          transform: 'translateY(-4px)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                        {/* Step Header */}
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 3 }}>
                          <Box sx={{ flex: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, flexWrap: 'wrap' }}>
                              <Typography variant="h4" fontWeight={700}>
                                {step.title}
                              </Typography>
                              {step.meta?.badge_or_tag && (
                                <Chip
                                  icon={step.meta.badge_or_tag.includes('Tú') ? <PersonOutline /> : <Business />}
                                  label={step.meta.badge_or_tag}
                                  size="small"
                                  color={step.meta.badge_or_tag.includes('TD SYNNEX') ? 'secondary' : 'primary'}
                                  variant="outlined"
                                />
                              )}
                            </Box>
                            <Typography variant="body1" color="text.secondary" paragraph>
                              {step.summary}
                            </Typography>
                          </Box>
                          <IconButton
                            onClick={() => toggleStepCompletion(step.id)}
                            color={state?.completed ? 'success' : 'default'}
                            sx={{ mt: 0.5 }}
                          >
                            {state?.completed ? (
                              <CheckCircle fontSize="large" />
                            ) : (
                              <RadioButtonUnchecked fontSize="large" />
                            )}
                          </IconButton>
                        </Box>

                        {/* Prerequisites */}
                        {step.prerequisites && step.prerequisites.length > 0 && (
                          <Box sx={{ mb: 3, p: 3, bgcolor: 'info.lighter', borderRadius: 2 }}>
                            <Typography variant="h6" fontWeight={600} gutterBottom>
                              Requisitos previos
                            </Typography>
                            <List dense>
                              {step.prerequisites.map((req, i) => (
                                <ListItem key={i} sx={{ py: 0.5 }}>
                                  <ListItemIcon sx={{ minWidth: 32 }}>
                                    <CheckCircleOutline fontSize="small" color="info" />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={req}
                                    primaryTypographyProps={{ variant: 'body2' }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        )}

                        {/* Instructions with Steppers */}
                        {step.instructions && step.instructions.map((inst, idx) => (
                          <Box key={idx} sx={{ mb: 3 }}>
                            {inst.title && (
                              <Typography variant="h6" fontWeight={600} gutterBottom>
                                {inst.title}
                              </Typography>
                            )}
                            <Stepper orientation="vertical" sx={{ mt: 2 }}>
                              {inst.bullets.map((bullet, bidx) => (
                                <Step key={bidx} active expanded>
                                  <StepLabel>
                                    <Typography variant="body2" fontWeight={500}>
                                      {bullet.split(':')[0]}
                                    </Typography>
                                  </StepLabel>
                                  <StepContent>
                                    <Typography variant="body2" color="text.secondary">
                                      {bullet.includes(':') ? bullet.split(':').slice(1).join(':') : ''}
                                    </Typography>
                                  </StepContent>
                                </Step>
                              ))}
                            </Stepper>
                          </Box>
                        ))}

                        {/* Accordion FAQs */}
                        {step.accordion && step.accordion.length > 0 && (
                          <Box sx={{ mb: 3 }}>
                            {step.accordion.map((faq: any, i) => (
                              <Accordion key={i} sx={{ mb: 1, '&:before': { display: 'none' } }}>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                  <Typography fontWeight={600}>
                                    {faq.question || faq.title}
                                  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Typography variant="body2" color="text.secondary">
                                    {faq.answer || faq.content}
                                  </Typography>
                                </AccordionDetails>
                              </Accordion>
                            ))}
                          </Box>
                        )}

                        {/* Assets/Documents */}
                        {step.assets && step.assets.length > 0 && (
                          <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" fontWeight={600} gutterBottom>
                              Documentos necesarios
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                              {step.assets.map((asset: any, i) => (
                                <Card key={i} variant="outlined" sx={{ p: 2, minWidth: 200 }}>
                                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                    <Description color="primary" />
                                    <Typography fontWeight={600}>{asset.title}</Typography>
                                  </Box>
                                  <Chip label={asset.type} size="small" color="primary" variant="outlined" />
                                </Card>
                              ))}
                            </Box>
                          </Box>
                        )}

                        {/* Email Animations */}
                        {step.animations && step.animations.map((anim: any, i) => (
                          <Box
                            key={i}
                            sx={{
                              mb: 3,
                              p: 3,
                              bgcolor: 'info.lighter',
                              borderRadius: 2,
                              border: '2px dashed',
                              borderColor: 'info.main',
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                              <Email color="info" fontSize="large" />
                              <Typography variant="h6" fontWeight={600}>
                                Correo electrónico esperado
                              </Typography>
                            </Box>
                            {anim.payload.map((line: string, idx: number) => (
                              <Typography key={idx} variant="body2" sx={{ mb: 0.5 }}>
                                {line}
                              </Typography>
                            ))}
                          </Box>
                        ))}

                        {/* Notes/Callouts */}
                        {step.notes && step.notes.map((note: any, i) => {
                          if (note.type === 'note') {
                            return (
                              <Box
                                key={i}
                                sx={{
                                  mt: 3,
                                  p: 2,
                                  bgcolor: 'action.hover',
                                  borderRadius: 2,
                                  borderLeft: '4px solid',
                                  borderColor: '#003031',
                                }}
                              >
                                <Typography variant="body2">{note.text}</Typography>
                              </Box>
                            );
                          }
                          return (
                            <Alert
                              key={i}
                              icon={getNoteIcon(note.type)}
                              severity={getNoteColor(note.type) as any}
                              sx={{ mt: 2, borderRadius: 2 }}
                            >
                              {note.title && <Typography fontWeight={600} gutterBottom>{note.title}</Typography>}
                              <Typography variant="body2">{note.text}</Typography>
                            </Alert>
                          );
                        })}

                        {/* Links */}
                        {step.links && step.links.length > 0 && (
                          <Box sx={{ mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                            {step.links.map((link, i) => (
                              <Button
                                key={i}
                                variant="outlined"
                                size="small"
                                endIcon={<OpenInNew />}
                                href={link.href}
                                target="_blank"
                              >
                                {link.label}
                              </Button>
                            ))}
                          </Box>
                        )}

                        {/* Mark as Complete Button */}
                        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
                          <Button
                            variant={state?.completed ? 'outlined' : 'contained'}
                            color={state?.completed ? 'success' : 'primary'}
                            startIcon={state?.completed ? <CheckCircle /> : <RadioButtonUnchecked />}
                            onClick={() => toggleStepCompletion(step.id)}
                            fullWidth
                            sx={{
                              py: 1.5,
                              fontSize: '1rem',
                              fontWeight: 600,
                              bgcolor: state?.completed ? 'transparent' : undefined,
                            }}
                          >
                            {state?.completed ? 'Paso completado' : 'Marcar como completado'}
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}

              {/* Completion Card */}
              <AnimatePresence>
                {progress === 100 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <Card
                      sx={{
                        p: 4,
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        color: 'white',
                      }}
                    >
                      <CheckCircle sx={{ fontSize: 80, mb: 2 }} />
                      <Typography variant="h3" fontWeight={800} gutterBottom>
                        ¡Felicidades!
                      </Typography>
                      <Typography variant="h6" paragraph>
                        Has completado exitosamente el proceso de onboarding de Amazon Web Services con TD SYNNEX.
                      </Typography>
                      <Button
                        variant="contained"
                        size="large"
                        sx={{ bgcolor: 'white', color: 'success.main', mt: 2 }}
                        href="/onboarding"
                      >
                        Volver a Onboarding
                      </Button>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </Box>
        </Container>

        {/* Mobile TOC Drawer */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: 280, p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" fontWeight={700}>
                Contenido
              </Typography>
              <IconButton onClick={() => setDrawerOpen(false)}>
                <Close />
              </IconButton>
            </Box>
            <TableOfContents />
          </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
