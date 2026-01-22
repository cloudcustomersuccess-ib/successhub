'use client';

import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
  Divider,
} from '@mui/material';
import {
  ArrowBack,
  ExpandMore,
  CheckCircle,
  Info,
  Schedule,
  Description,
} from '@mui/icons-material';
import Link from 'next/link';
import { Callout } from '@/components/ui';
import ProcessStep from '@/components/onboarding/process-step';
import DocumentCard from '@/components/onboarding/document-card';
import { useLanguage } from '@/lib/i18n/language-provider';

export default function AWSOnboardingPage() {
  const { t } = useLanguage();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Button
          component={Link}
          href="/onboarding"
          startIcon={<ArrowBack />}
          variant="outlined"
          size="small"
          sx={{ mb: 2 }}
        >
          {t('action.backToOnboarding')}
        </Button>
        <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
          {t('aws.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {t('aws.subtitle')}
        </Typography>
      </Box>

      {/* About Process Section */}
      <Card sx={{ mb: 4, bgcolor: 'primary.light', color: 'primary.contrastText' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <Info />
            <Typography variant="h6" fontWeight="bold">
              {t('aws.aboutProcess')}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ mb: 3 }}>
            {t('aws.aboutProcessDesc')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                <Schedule fontSize="small" />
                <Typography variant="body2" fontWeight="bold">
                  {t('aws.estimatedTime')}
                </Typography>
              </Box>
              <Typography variant="body2">{t('aws.estimatedTimeDays')}</Typography>
            </Box>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                <CheckCircle fontSize="small" />
                <Typography variant="body2" fontWeight="bold">
                  {t('aws.requirements')}
                </Typography>
              </Box>
              <Typography variant="body2">{t('aws.requirementsDesc')}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Step 1: Alta en TD SYNNEX */}
      <ProcessStep
        title={t('aws.step1')}
        owner="client"
        ownerLabel={t('owner.client')}
        substeps={[
          {
            label: '1.1. Registro inicial en la plataforma de TD SYNNEX',
            content: (
              <Box>
                <Typography variant="body2" paragraph>
                  Para comenzar tu proceso de alta en AWS, primero debes registrarte en la
                  plataforma de TD SYNNEX. Este es el primer paso fundamental para acceder a todos
                  nuestros servicios cloud.
                </Typography>

                <Callout type="info" title="Información importante">
                  Asegúrate de tener a mano toda la documentación legal de tu empresa antes de
                  comenzar el registro. Esto agilizará el proceso.
                </Callout>

                <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 3, mb: 2 }}>
                  Pasos para el registro:
                </Typography>

                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="1. Accede al portal de registro de TD SYNNEX"
                      secondary="Visita la página oficial y selecciona la opción de nuevo registro"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="2. Completa el formulario de registro"
                      secondary="Incluye datos de la empresa, contacto principal y datos fiscales"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="3. Verifica tu dirección de correo electrónico"
                      secondary="Recibirás un email de confirmación que debes validar"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="4. Completa la verificación de identidad"
                      secondary="Proporciona los documentos requeridos para validar tu empresa"
                    />
                  </ListItem>
                </List>

                <Box sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: (theme) =>
                        theme.palette.mode === 'light' ? '#003031' : '#005657',
                    }}
                    href="#"
                  >
                    Iniciar registro
                  </Button>
                </Box>
              </Box>
            ),
          },
          {
            label: '1.2. Documentación requerida para el alta',
            content: (
              <Box>
                <Typography variant="body2" paragraph>
                  Para completar tu registro en TD SYNNEX, necesitarás proporcionar la siguiente
                  documentación. Asegúrate de tener copias digitales de todos estos documentos.
                </Typography>

                <Callout type="warning" title="Documentos obligatorios">
                  Todos los documentos deben estar vigentes y en formato PDF. El tamaño máximo por
                  archivo es de 10MB.
                </Callout>

                <Accordion sx={{ mt: 3 }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight={600}>Documentos de identificación fiscal</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      <ListItem>
                        <ListItemText
                          primary="CIF/NIF de la empresa"
                          secondary="Certificado de identificación fiscal actualizado"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Escrituras de constitución"
                          secondary="Documento notarial de constitución de la empresa"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Alta en el IAE"
                          secondary="Documento de alta en el Impuesto de Actividades Económicas"
                        />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight={600}>Datos bancarios y financieros</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      <ListItem>
                        <ListItemText
                          primary="Certificado bancario"
                          secondary="Documento oficial del banco con los datos de la cuenta"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Últimas cuentas anuales"
                          secondary="Estados financieros del último ejercicio cerrado"
                        />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight={600}>Datos del representante legal</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      <ListItem>
                        <ListItemText
                          primary="DNI/NIE del representante"
                          secondary="Copia del documento de identidad por ambas caras"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Poder notarial"
                          secondary="Si el firmante no es el administrador único"
                        />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <DocumentCard
                    title="Checklist de documentos"
                    description="Lista completa de documentos requeridos"
                    size="PDF - 245 KB"
                    index={0}
                  />
                  <DocumentCard
                    title="Plantilla de certificado bancario"
                    description="Modelo para solicitar a tu banco"
                    size="DOCX - 89 KB"
                    index={1}
                  />
                </Box>
              </Box>
            ),
          },
          {
            label: '1.3. Configuración de perfil y permisos',
            content: (
              <Box>
                <Typography variant="body2" paragraph>
                  Una vez validado tu registro, el siguiente paso es configurar tu perfil de
                  empresa y asignar los permisos correspondientes a los usuarios que gestionarán
                  las operaciones cloud.
                </Typography>

                <Callout type="tip" title="Buena práctica">
                  Te recomendamos crear al menos dos usuarios administradores para garantizar la
                  continuidad operativa. Asigna roles específicos según las responsabilidades de
                  cada persona.
                </Callout>

                <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 3, mb: 2 }}>
                  Tipos de roles disponibles:
                </Typography>

                <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    Administrador Principal
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Acceso total a todas las funcionalidades. Puede gestionar usuarios, aprobar
                    compras y configurar integraciones.
                  </Typography>
                </Card>

                <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    Gestor de Compras
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Puede realizar pedidos y consultar precios, pero no puede modificar
                    configuraciones de cuenta.
                  </Typography>
                </Card>

                <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    Consultor
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Acceso de solo lectura. Ideal para departamentos financieros o de auditoría.
                  </Typography>
                </Card>

                <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 3, mb: 2 }}>
                  Configuraciones recomendadas:
                </Typography>

                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="Activar autenticación de dos factores (2FA)"
                      secondary="Mejora significativamente la seguridad de tu cuenta"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Configurar notificaciones por email"
                      secondary="Mantente informado de todas las operaciones importantes"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Establecer límites de gasto mensuales"
                      secondary="Control presupuestario automático"
                    />
                  </ListItem>
                </List>
              </Box>
            ),
          },
          {
            label: '1.4. Validación y aprobación por TD SYNNEX',
            content: (
              <Box>
                <Typography variant="body2" paragraph>
                  Una vez hayas completado todo el proceso de registro y enviado la documentación,
                  nuestro equipo de TD SYNNEX revisará tu solicitud. Este proceso suele tardar
                  entre 24-48 horas laborables.
                </Typography>

                <Callout type="info" title="Proceso de validación">
                  Nuestro equipo de compliance verificará toda la documentación proporcionada. Si
                  falta algún documento o necesita corrección, nos pondremos en contacto contigo a
                  través del email registrado.
                </Callout>

                <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 3, mb: 2 }}>
                  Qué ocurre durante la validación:
                </Typography>

                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="Verificación de identidad fiscal"
                      secondary="Comprobamos que todos los datos fiscales sean correctos y estén vigentes"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Validación de datos bancarios"
                      secondary="Verificamos la titularidad de la cuenta bancaria proporcionada"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Análisis de riesgo crediticio"
                      secondary="Evaluación financiera para establecer límites de crédito"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Aprobación final"
                      secondary="Una vez validado todo, recibirás un email de confirmación"
                    />
                  </ListItem>
                </List>

                <Callout type="success" title="¡Cuenta aprobada!">
                  Cuando tu cuenta sea aprobada, recibirás un email de bienvenida con los próximos
                  pasos para completar el alta en AWS Partner Central.
                </Callout>
              </Box>
            ),
          },
        ]}
      />

      <Divider sx={{ my: 6 }} />

      {/* Step 2: AWS Partner Central */}
      <ProcessStep
        title={t('aws.step2')}
        owner="aws"
        ownerLabel={t('owner.aws')}
        substeps={[
          {
            label: '2.1. Creación de cuenta en AWS Partner Central',
            content: (
              <Box>
                <Typography variant="body2" paragraph>
                  AWS Partner Central es la plataforma oficial de Amazon Web Services para socios.
                  A través de TD SYNNEX, tendrás acceso a beneficios exclusivos y recursos para
                  partners.
                </Typography>

                <Callout type="info" title="Requisito previo">
                  Para crear tu cuenta en AWS Partner Central, necesitas haber completado
                  exitosamente el paso 1 (Alta en TD SYNNEX). Recibirás un código de invitación
                  único que deberás usar durante el registro.
                </Callout>

                <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 3, mb: 2 }}>
                  Proceso de creación de cuenta:
                </Typography>

                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="1. Accede a AWS Partner Central"
                      secondary="Utiliza el enlace que recibirás por email desde TD SYNNEX"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="2. Introduce tu código de invitación"
                      secondary="El código es único y tiene validez de 30 días"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="3. Completa el formulario de registro"
                      secondary="Incluye datos de contacto técnico y comercial"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="4. Acepta los términos del programa de partners"
                      secondary="Lee detenidamente el acuerdo de partner de AWS"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="5. Verifica tu cuenta"
                      secondary="AWS enviará un código de verificación a tu email"
                    />
                  </ListItem>
                </List>

                <Box sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: (theme) =>
                        theme.palette.mode === 'light' ? '#003031' : '#005657',
                    }}
                    href="https://partnercentral.awspartner.com"
                    target="_blank"
                  >
                    Ir a AWS Partner Central
                  </Button>
                </Box>
              </Box>
            ),
          },
          {
            label: '2.2. Configuración del perfil de partner',
            content: (
              <Box>
                <Typography variant="body2" paragraph>
                  Una vez creada tu cuenta, es fundamental configurar correctamente tu perfil de
                  partner. Esta información será visible para clientes potenciales y AWS utilizará
                  estos datos para ofrecerte oportunidades de negocio relevantes.
                </Typography>

                <Accordion sx={{ mt: 3 }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight={600}>Información de la empresa</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" paragraph>
                      Completa toda la información sobre tu empresa:
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemText
                          primary="Descripción de la empresa"
                          secondary="Máximo 500 caracteres. Destaca tus fortalezas y especialización"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Logo corporativo"
                          secondary="PNG o JPG, mínimo 400x400px, fondo transparente recomendado"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Sitio web corporativo"
                          secondary="URL de tu página web principal"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Áreas geográficas de servicio"
                          secondary="Selecciona los países/regiones donde operas"
                        />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight={600}>Competencias y casos de uso</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" paragraph>
                      Selecciona tus áreas de especialización:
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemText
                          primary="Servicios principales"
                          secondary="Consultoría, Migración, Gestión, Desarrollo, etc."
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Industrias objetivo"
                          secondary="Salud, Finanzas, Retail, Manufactura, etc."
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Productos AWS especializados"
                          secondary="EC2, S3, RDS, Lambda, etc."
                        />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight={600}>Certificaciones del equipo</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" paragraph>
                      Registra las certificaciones AWS de tu equipo técnico. Esto mejorará tu
                      visibilidad como partner.
                    </Typography>
                    <Callout type="tip" title="Programa de certificaciones">
                      AWS ofrece vouchers de examen gratuitos para partners. Consulta el programa
                      de formación en Partner Central.
                    </Callout>
                  </AccordionDetails>
                </Accordion>

                <Callout type="warning" title="Perfil público" sx={{ mt: 3 }}>
                  La información que agregues aquí será visible en el directorio público de
                  partners de AWS. Asegúrate de mantenerla actualizada y profesional.
                </Callout>
              </Box>
            ),
          },
          {
            label: '2.3. Formación obligatoria para partners',
            content: (
              <Box>
                <Typography variant="body2" paragraph>
                  AWS requiere que todos los partners completen una formación básica sobre el
                  programa de partners, mejores prácticas y aspectos fundamentales de AWS. Esta
                  formación es obligatoria y debe completarse en los primeros 30 días.
                </Typography>

                <Callout type="info" title="Duración estimada">
                  La formación completa requiere aproximadamente 8-10 horas. Puedes realizarla a tu
                  ritmo y guardar tu progreso.
                </Callout>

                <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 3, mb: 2 }}>
                  Módulos de formación obligatorios:
                </Typography>

                <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="subtitle2" fontWeight="bold">
                      AWS Partner: Accreditation (Technical)
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      3 horas
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Fundamentos técnicos de AWS, arquitectura global, servicios principales y
                    mejores prácticas de diseño.
                  </Typography>
                  <Button variant="outlined" size="small">
                    Iniciar curso
                  </Button>
                </Card>

                <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="subtitle2" fontWeight="bold">
                      AWS Partner: Accreditation (Business)
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      2 horas
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Modelos de negocio cloud, programas de incentivos, y cómo trabajar con AWS como
                    partner.
                  </Typography>
                  <Button variant="outlined" size="small">
                    Iniciar curso
                  </Button>
                </Card>

                <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="subtitle2" fontWeight="bold">
                      AWS Partner: Sales Accreditation
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      2.5 horas
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Estrategias de venta, casos de uso, ROI cloud y herramientas de venta de AWS.
                  </Typography>
                  <Button variant="outlined" size="small">
                    Iniciar curso
                  </Button>
                </Card>

                <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="subtitle2" fontWeight="bold">
                      AWS Security Fundamentals
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      1.5 horas
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Seguridad en AWS, modelo de responsabilidad compartida, IAM y mejores prácticas
                    de seguridad.
                  </Typography>
                  <Button variant="outlined" size="small">
                    Iniciar curso
                  </Button>
                </Card>

                <Callout type="success" title="Certificado de finalización">
                  Al completar todos los módulos, recibirás un certificado digital que podrás
                  compartir en LinkedIn y tu perfil de partner.
                </Callout>
              </Box>
            ),
          },
          {
            label: '2.4. Activación de beneficios de partner',
            content: (
              <Box>
                <Typography variant="body2" paragraph>
                  Una vez completada la formación obligatoria, podrás activar los beneficios de
                  partner. Estos beneficios incluyen créditos AWS, acceso a sandboxes, herramientas
                  de soporte y más.
                </Typography>

                <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 3, mb: 2 }}>
                  Beneficios disponibles para nuevos partners:
                </Typography>

                <Card sx={{ mb: 2, p: 2, bgcolor: 'success.light' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <CheckCircle color="success" />
                    <Typography variant="subtitle2" fontWeight="bold">
                      Créditos AWS de bienvenida
                    </Typography>
                  </Box>
                  <Typography variant="body2" paragraph>
                    $1,000 USD en créditos AWS para usar en demos y pruebas de concepto. Válidos
                    por 12 meses.
                  </Typography>
                  <Button variant="contained" size="small" color="success">
                    Activar créditos
                  </Button>
                </Card>

                <Card sx={{ mb: 2, p: 2, bgcolor: 'info.light' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <CheckCircle color="info" />
                    <Typography variant="subtitle2" fontWeight="bold">
                      AWS Sandbox Accounts
                    </Typography>
                  </Box>
                  <Typography variant="body2" paragraph>
                    Hasta 3 cuentas sandbox para desarrollo y testing. Incluye todos los servicios
                    AWS con límites razonables.
                  </Typography>
                  <Button variant="contained" size="small" color="info">
                    Solicitar sandbox
                  </Button>
                </Card>

                <Card sx={{ mb: 2, p: 2, bgcolor: 'warning.light' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <CheckCircle color="warning" />
                    <Typography variant="subtitle2" fontWeight="bold">
                      Soporte técnico de partners
                    </Typography>
                  </Box>
                  <Typography variant="body2" paragraph>
                    Acceso a soporte técnico especializado para partners, con SLA de respuesta de
                    24h.
                  </Typography>
                  <Button variant="contained" size="small" color="warning">
                    Configurar soporte
                  </Button>
                </Card>

                <Callout type="tip" title="Maximiza tus beneficios">
                  Programa una sesión con tu Partner Development Manager de TD SYNNEX para conocer
                  todos los beneficios disponibles y cómo aprovecharlos al máximo.
                </Callout>
              </Box>
            ),
          },
          {
            label: '2.5. Registro en AWS Marketplace (opcional)',
            content: (
              <Box>
                <Typography variant="body2" paragraph>
                  AWS Marketplace es una tienda digital con miles de soluciones de software que se
                  ejecutan en AWS. Como partner, puedes registrar tus propias soluciones o
                  servicios profesionales para alcanzar millones de clientes AWS.
                </Typography>

                <Callout type="info" title="Este paso es opcional">
                  El registro en AWS Marketplace solo es necesario si planeas vender tus propios
                  productos o servicios a través de la plataforma. Si solo vas a revender servicios
                  AWS estándar, puedes omitir este paso.
                </Callout>

                <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 3, mb: 2 }}>
                  Tipos de ofertas que puedes publicar:
                </Typography>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight={600}>Software como Servicio (SaaS)</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" paragraph>
                      Aplicaciones SaaS que se integran con AWS. Puedes ofrecer diferentes planes
                      de suscripción y facturar a través de AWS.
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemText primary="Facturación mensual o anual" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Integración con AWS IAM" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Free trial disponible" />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight={600}>AMIs y Contenedores</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" paragraph>
                      Imágenes de máquinas virtuales o contenedores Docker con tu software
                      preinstalado y configurado.
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemText primary="Deploy con un click" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Licenciamiento flexible" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Actualizaciones automáticas" />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight={600}>Servicios Profesionales</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" paragraph>
                      Ofrece servicios de consultoría, implementación, migración o soporte técnico.
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemText primary="Evaluaciones y auditorías" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Proyectos de migración" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Soporte y mantenimiento" />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 3, mb: 2 }}>
                  Requisitos para publicar en AWS Marketplace:
                </Typography>

                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="Completar el formulario de registro de vendedor"
                      secondary="Incluye datos fiscales y bancarios de EE.UU."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Pasar el proceso de validación técnica"
                      secondary="AWS revisará tu producto antes de publicarlo"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Aceptar el acuerdo de vendedor de AWS Marketplace"
                      secondary="Términos comerciales y de distribución"
                    />
                  </ListItem>
                </List>

                <Box sx={{ mt: 3 }}>
                  <Button
                    variant="outlined"
                    href="https://aws.amazon.com/marketplace/management"
                    target="_blank"
                  >
                    Explorar AWS Marketplace
                  </Button>
                </Box>
              </Box>
            ),
          },
        ]}
      />

      <Divider sx={{ my: 6 }} />

      {/* Step 3: Alta en StreamOne ION */}
      <ProcessStep
        title={t('aws.step3')}
        owner="tdsynnex"
        ownerLabel={t('owner.tdsynnex')}
        substeps={[
          {
            label: '3.1. Invitación a StreamOne ION',
            content: (
              <Box>
                <Typography variant="body2" paragraph>
                  Una vez completados los pasos anteriores, el equipo de TD SYNNEX te enviará una
                  invitación para acceder a StreamOne ION, nuestra plataforma de gestión cloud. Esta
                  plataforma te permitirá gestionar todos tus servicios AWS de forma centralizada.
                </Typography>

                <Callout type="info" title="¿Qué es StreamOne ION?">
                  StreamOne ION es la plataforma de TD SYNNEX para la gestión de servicios cloud.
                  Te permite gestionar suscripciones, ver facturación, acceder a soporte técnico y
                  mucho más, todo desde un único portal.
                </Callout>

                <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 3, mb: 2 }}>
                  Proceso de invitación:
                </Typography>

                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="1. Recepción del email de invitación"
                      secondary="Recibirás un email desde noreply@streamoneion.com con tu invitación"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="2. Validez de la invitación"
                      secondary="El enlace de invitación es válido por 7 días"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="3. Primer acceso"
                      secondary="Haz clic en el enlace de invitación para crear tu contraseña"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="4. Configuración de seguridad"
                      secondary="Se recomienda activar la autenticación de dos factores"
                    />
                  </ListItem>
                </List>

                <Callout type="warning" title="Invitación expirada">
                  Si tu invitación ha expirado, contacta con tu Partner Development Manager de TD
                  SYNNEX para solicitar una nueva invitación.
                </Callout>
              </Box>
            ),
          },
          {
            label: '3.2. Configuración inicial de la cuenta',
            content: (
              <Box>
                <Typography variant="body2" paragraph>
                  En tu primer acceso a StreamOne ION, deberás completar la configuración inicial de
                  tu cuenta. Este proceso te guiará a través de los pasos necesarios para empezar a
                  operar.
                </Typography>

                <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 3, mb: 2 }}>
                  Pasos de configuración inicial:
                </Typography>

                <Accordion sx={{ mb: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight={600}>
                      1. Completar información de la compañía
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" paragraph>
                      Verifica y completa los datos de tu empresa:
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemText primary="Razón social y nombre comercial" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Dirección fiscal completa" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Datos de contacto (teléfono, email)" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Sitio web corporativo" />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Accordion sx={{ mb: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight={600}>
                      2. Configurar preferencias de facturación
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" paragraph>
                      Establece cómo deseas recibir y gestionar tus facturas:
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemText
                          primary="Frecuencia de facturación"
                          secondary="Mensual o consolidada"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Formato de factura"
                          secondary="PDF, XML, o ambos"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Emails de notificación"
                          secondary="Dirección(es) para recibir facturas"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Centro de costes"
                          secondary="Opcional: códigos de referencia interna"
                        />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Accordion sx={{ mb: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight={600}>3. Gestión de usuarios y permisos</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" paragraph>
                      Invita a miembros de tu equipo y asigna roles:
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemText
                          primary="Administrador"
                          secondary="Acceso completo a todas las funciones"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Gestor de compras"
                          secondary="Puede realizar pedidos y gestionar suscripciones"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Finanzas"
                          secondary="Acceso a facturación y reportes financieros"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Solo lectura"
                          secondary="Visualización sin permisos de modificación"
                        />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight={600}>4. Vincular cuenta AWS</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" paragraph>
                      Conecta tu cuenta de AWS Partner Central con StreamOne ION:
                    </Typography>
                    <Callout type="tip" title="Vinculación automática">
                      En la mayoría de casos, la vinculación se realiza automáticamente. Si no es
                      así, recibirás instrucciones específicas por email.
                    </Callout>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      La vinculación permite la sincronización automática de:
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemText primary="Clientes y cuentas AWS" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Consumo y uso de servicios" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Facturación consolidada" />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
              </Box>
            ),
          },
          {
            label: '3.3. Tour guiado de la plataforma',
            content: (
              <Box>
                <Typography variant="body2" paragraph>
                  StreamOne ION incluye un tour interactivo que te mostrará las principales
                  funcionalidades de la plataforma. Te recomendamos completar este tour para
                  familiarizarte con la interfaz.
                </Typography>

                <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 3, mb: 2 }}>
                  Áreas principales de StreamOne ION:
                </Typography>

                <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    Dashboard Principal
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Vista general de tu actividad: consumo mensual, suscripciones activas, alertas
                    importantes y acceso rápido a funciones principales.
                  </Typography>
                </Card>

                <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    Gestión de Clientes
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Administra tus clientes finales, crea nuevas cuentas AWS, asigna suscripciones y
                    gestiona permisos.
                  </Typography>
                </Card>

                <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    Catálogo de Servicios
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Explora el catálogo completo de servicios AWS disponibles, consulta precios y
                    condiciones especiales para partners.
                  </Typography>
                </Card>

                <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    Facturación y Reportes
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Accede a tus facturas, descarga reportes detallados de consumo, y configura
                    alertas de presupuesto.
                  </Typography>
                </Card>

                <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    Soporte Técnico
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Abre tickets de soporte, consulta el estado de tus casos y accede a la base de
                    conocimiento.
                  </Typography>
                </Card>

                <Callout type="tip" title="Recursos de aprendizaje">
                  En la sección "Recursos" encontrarás tutoriales en video, guías PDF y webinars
                  grabados sobre cómo usar StreamOne ION efectivamente.
                </Callout>
              </Box>
            ),
          },
          {
            label: '3.4. Primera operación y soporte disponible',
            content: (
              <Box>
                <Typography variant="body2" paragraph>
                  ¡Felicidades! Ya tienes todo listo para comenzar a operar. En este último paso,
                  te guiaremos en tu primera operación y te mostraremos todos los recursos de soporte
                  disponibles.
                </Typography>

                <Callout type="success" title="¡Ya estás listo para empezar!">
                  Has completado exitosamente el proceso de alta en AWS a través de TD SYNNEX. Ahora
                  puedes comenzar a crear cuentas AWS para tus clientes y gestionar servicios.
                </Callout>

                <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 3, mb: 2 }}>
                  Tu primera operación - Crear una cuenta AWS para un cliente:
                </Typography>

                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="1. Ve a 'Gestión de Clientes' > 'Nuevo Cliente'"
                      secondary="Completa los datos del cliente final"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="2. Selecciona 'Crear cuenta AWS'"
                      secondary="Elige el tipo de cuenta y configuración inicial"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="3. Configura las opciones de facturación"
                      secondary="Define si facturarás directamente al cliente o consolidarás"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="4. Revisa y confirma"
                      secondary="La cuenta se creará en 5-10 minutos"
                    />
                  </ListItem>
                </List>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Canales de soporte disponibles
                </Typography>

                <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    <Box
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        borderRadius: '50%',
                        width: 40,
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                      }}
                    >
                      24/7
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" fontWeight="bold">
                        Soporte Técnico 24/7
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Email: support@tdsynnex.com | Tel: +34 900 XXX XXX
                      </Typography>
                    </Box>
                  </Box>
                </Card>

                <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    Partner Development Manager
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tu PDM asignado te contactará en los próximos días para una sesión de
                    onboarding personalizada.
                  </Typography>
                </Card>

                <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    Comunidad de Partners
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Únete a nuestro Slack de partners para compartir experiencias y mejores
                    prácticas con otros partners de TD SYNNEX.
                  </Typography>
                  <Button variant="outlined" size="small" sx={{ mt: 1 }}>
                    Unirse a Slack
                  </Button>
                </Card>

                <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    Webinars y Formación
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Webinars semanales sobre nuevos servicios AWS, casos de uso y mejores prácticas.
                  </Typography>
                  <Button variant="outlined" size="small" sx={{ mt: 1 }}>
                    Ver calendario
                  </Button>
                </Card>

                <Box sx={{ mt: 4, p: 3, bgcolor: 'success.light', borderRadius: 2 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    ¿Necesitas ayuda?
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Si en cualquier momento tienes dudas o necesitas asistencia, no dudes en
                    contactar con tu Partner Development Manager o con nuestro equipo de soporte.
                    ¡Estamos aquí para ayudarte a tener éxito!
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button variant="contained" color="primary">
                      Contactar con mi PDM
                    </Button>
                    <Button variant="outlined" color="primary">
                      Abrir ticket de soporte
                    </Button>
                  </Box>
                </Box>
              </Box>
            ),
          },
        ]}
      />
    </Container>
  );
}
