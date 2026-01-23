'use client';

import {
  Container,
  Typography,
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
} from '@mui/material';
import {
  ArrowBack,
  ExpandMore,
  Email,
  Support,
  Person,
  CheckCircle,
  Description,
} from '@mui/icons-material';
import Link from 'next/link';
import { Callout } from '@/components/ui';
import OwnerBadge from '@/components/onboarding/owner-badge';
import DocumentCard from '@/components/onboarding/document-card';

export default function AWSOnboardingPage() {
  const primaryColor = (theme: any) =>
    theme.palette.mode === 'light' ? '#003031' : '#005657';

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
          Volver a Onboarding
        </Button>

        <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
          Onboarding Amazon Web Services
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph sx={{ mt: 3 }}>
          Para completar el alta en StreamOne® ION para trabajar con Amazon Web Services es
          necesario completar tres pasos principales: el alta en TD SYNNEX, la configuración de tu
          AWS Partner Central y el alta en nuestra plataforma StreamOne® ION.
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          Durante este proceso, estarás siempre acompañado por el equipo de Cloud Customer Success
          de TD SYNNEX, quien asignará a un Customer Success Manager para guiarte durante todo este
          proceso de Onboarding.
        </Typography>

        <Callout type="tip" title="" sx={{ mt: 3 }}>
          Con Growth Lab podrás seguir tu proceso de alta en tiempo real y sin depender de nadie.
          Esta herramienta será tu mejor aliado durante tus primeros pasos en StreamOne® ION.
        </Callout>

        <Button
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: primaryColor,
            '&:hover': { bgcolor: primaryColor },
          }}
        >
          Solicitar alta en StreamOne® ION
        </Button>
      </Box>

      {/* About Process */}
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Sobre tu proceso de alta...
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Si ya eres partner de TD SYNNEX Iberia y dispones de tu línea de crédito, podrás avanzar
          hasta el Paso 2. Si aún no tenemos el placer, comienza desde el Paso 1.
        </Typography>
      </Box>

      {/* Paso 1: Alta en TD SYNNEX */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Typography variant="h4" fontWeight="bold">
            Paso 1. Alta en TD SYNNEX
          </Typography>
        </Box>

        <Typography variant="body1" color="text.secondary" paragraph>
          En este primer paso completarás el alta como partner de TD SYNNEX y, a continuación,
          solicitarás la línea de crédito que se asignará como método de pago para todas tus
          transacciones en nuestra plataforma StreamOne® ION.
        </Typography>

        {/* Paso 1.1 */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Paso 1.1. Hola TD SYNNEX
            </Typography>
            <OwnerBadge owner="client" label="Tú eres el owner de este paso" />
          </Box>

          <Typography variant="body2" paragraph>
            Para registrar tu cuenta como partner de TD SYNNEX accede al formulario de registro de
            Hola TD SYNNEX y cumplimenta <strong>toda</strong> la información solicitada.
          </Typography>

          <Callout type="info" title="Antes de iniciar" sx={{ my: 3 }}>
            <Typography variant="body2" paragraph>
              Prepara 1 documento acreditativo del epígrafe/actividad antes de comenzar.
            </Typography>
            <Typography variant="body2" fontWeight="bold" gutterBottom>
              Documentos aceptados (uno de los siguientes):
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText
                  primary="IAE (Impuesto de Actividades Económicas)"
                  secondary="Copia del último impuesto/recibo de pago donde se vea claramente el epígrafe."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Declaración censal (036)"
                  secondary="Copia del modelo 036 donde se vea claramente el epígrafe en el que estás inscrito."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Certificado AEAT"
                  secondary="Copia del certificado de revendedor AEAT."
                />
              </ListItem>
            </List>
          </Callout>

          <Stepper orientation="vertical" sx={{ mt: 3 }}>
            <Step active expanded>
              <StepLabel>
                Accede al formulario de registro de Hola TD SYNNEX
              </StepLabel>
              <StepContent>
                <Typography variant="body2">
                  <MuiLink
                    href="https://www.holatdsynnex.com/alta_cliente_td_synnex.html"
                    target="_blank"
                  >
                    https://www.holatdsynnex.com/alta_cliente_td_synnex.html
                  </MuiLink>
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Haz clic en Alta Cliente TD SYNNEX</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Encontrarás el botón en la página principal.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Cumplimenta toda la información solicitada</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Lee y acepta los{' '}
                  <MuiLink href="https://eu.tdsynnex.com/terms-conditions" target="_blank">
                    términos y condiciones de TD SYNNEX
                  </MuiLink>
                  .
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Haz lo mismo con las páginas siguientes</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Completa toda la información requerida en cada página del formulario.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Pulsa en Enviar para completar la solicitud</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Revisa toda la información antes de enviar.
                </Typography>
              </StepContent>
            </Step>
          </Stepper>

          <Callout type="tip" title="" sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircle sx={{ color: primaryColor }} />
              <Typography variant="body2">
                Si utilizas Growth Lab, recuerda <strong>Marcar este paso como completado</strong>{' '}
                una vez completes y envíes el formulario.
              </Typography>
            </Box>
          </Callout>
        </Box>

        {/* Paso 1.2 */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Paso 1.2. Tu cuenta de cliente
            </Typography>
            <OwnerBadge owner="tdsynnex" label="TD SYNNEX es el owner de este paso" />
          </Box>

          <Typography variant="body2" paragraph>
            Tras enviar el formulario en Hola TD SYNNEX, nuestro equipo de Alta Clientes procederá
            con la revisión de la información aportada y procederá con la creación de tu cuenta de
            partner.
          </Typography>

          <Typography variant="body2" paragraph>
            En este punto es posible que nuestro equipo de altas te contacte para solicitarte
            información adicional en caso de ser preciso. Si es el caso, recibirás un correo de{' '}
            <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
              <Email fontSize="small" />
              altaclientes.es@tdsynnex.com
            </Box>
            .
          </Typography>

          <Typography variant="body2" paragraph>
            Si no recibes confirmación en un plazo de 48 horas laborales, puedes contactar con:
          </Typography>

          <List dense>
            <ListItem>
              <ListItemText>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Support fontSize="small" />
                  <Typography variant="body2">
                    Alta Clientes ≫ altaclientes.es@tdsynnex.com
                  </Typography>
                </Box>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Support fontSize="small" />
                  <Typography variant="body2">
                    Customer Success ≫ customersuccess.es@tdsynnex.com
                  </Typography>
                </Box>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Person fontSize="small" />
                  <Typography variant="body2">
                    Tu CSM ≫ encontrarás su correo en Growth Lab
                  </Typography>
                </Box>
              </ListItemText>
            </ListItem>
          </List>

          <Typography variant="body2" paragraph>
            Una vez creada tu cuenta recibirás una confirmación por correo electrónico de Alta
            Clientes.
          </Typography>

          <Callout type="tip" title="" sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircle sx={{ color: primaryColor }} />
              <Typography variant="body2">
                Si utilizas Growth Lab, recuerda <strong>Marcar este paso como completado</strong>{' '}
                una vez recibas confirmación de tu cuenta.
              </Typography>
            </Box>
          </Callout>
        </Box>

        {/* Paso 1.3 */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Paso 1.3. Solicitud de la línea de crédito
            </Typography>
            <OwnerBadge owner="client" label="Tú eres el owner de este paso" />
          </Box>

          <Typography variant="body2" paragraph>
            Ahora que ya dispones de tu cuenta de cliente en TD SYNNEX es momento de completar la
            solicitud de la línea de crédito con la que operará tu organización desde StreamOne®
            ION.
          </Typography>

          <Typography variant="body2" paragraph>
            Antes de comenzar, te dejamos algunas FAQ:
          </Typography>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography fontWeight={600}>¿Por qué una línea de crédito en TD SYNNEX?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Dadas las capacidades de escalabilidad de los productos y servicios Cloud que
                ofrecemos desde TD SYNNEX, preferimos asignarte una línea de crédito para que estés
                siempre cubierto y tus capacidades de negocio no se vean limitadas con condiciones
                de prepago.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography fontWeight={600}>
                ¿Es obligatoria la línea de crédito para completar el alta?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" paragraph>
                Sí. Para completar tu proceso de alta en StreamOne® ION es obligatorio disponer de
                una línea de crédito.
              </Typography>
              <Typography variant="body2">
                Es posible que seas cliente de TD SYNNEX y nunca la hayas necesitado. Esto se debe
                a que en otras áreas de negocio de TD SYNNEX se admiten métodos alternativos de
                pago.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography fontWeight={600}>¿Cómo funciona la línea de crédito?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" paragraph>
                Una vez asignada, cada compra o transacción que realices desde StreamOne® ION que
                tenga un coste asociado será cargado directamente a tu línea de crédito. Al
                finalizar nuestro ciclo de facturación (∼ a mediados del mes siguiente) emitiremos
                tus facturas con el detalle de la operación y su importe.
              </Typography>
              <Typography variant="body2">
                Dependiendo de las condiciones de pago asignadas a tu línea de crédito, recibirás
                el giro bancario por este importe en el número de cuenta indicado en el SEPA B2B.
              </Typography>

              <Box sx={{ mt: 3, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                  Ejemplo práctico
                </Typography>
                <Stepper orientation="vertical">
                  <Step active expanded>
                    <StepLabel>16 de agosto</StepLabel>
                    <StepContent>
                      <Typography variant="body2">
                        Realizas un nuevo pedido para un cliente por un importe de 1.045,34€.
                      </Typography>
                    </StepContent>
                  </Step>
                  <Step active expanded>
                    <StepLabel>Absorción del pago</StepLabel>
                    <StepContent>
                      <Typography variant="body2">
                        Tu línea de crédito absorbe el pago de tu pedido al momento.
                      </Typography>
                    </StepContent>
                  </Step>
                  <Step active expanded>
                    <StepLabel>18 de noviembre</StepLabel>
                    <StepContent>
                      <Typography variant="body2">
                        TD SYNNEX cierra su ciclo de facturación del mes de agosto y emite las
                        facturas.
                      </Typography>
                    </StepContent>
                  </Step>
                  <Step active expanded>
                    <StepLabel>3 de diciembre</StepLabel>
                    <StepContent>
                      <Typography variant="body2">
                        Si tus condiciones de pago son a 15 días, recibirás un giro bancario de
                        1.045,34€.
                      </Typography>
                    </StepContent>
                  </Step>
                </Stepper>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography fontWeight={600}>
                ¿Puedo modificar el importe de mi línea de crédito?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" paragraph>
                Sí. Inicialmente el importe de tu línea de crédito se estima en función de la
                previsión de negocio indicada durante tu proceso de alta. El importe mínimo es de
                2.000€ y el máximo dependerá de tu previsión de negocio.
              </Typography>
              <Typography variant="body2">
                Puedes solicitar una ampliación de tu línea de crédito en cualquier momento.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Typography variant="body2" paragraph sx={{ mt: 3 }}>
            Para generar tu línea de crédito deberás acceder al{' '}
            <MuiLink href="https://www.holatdsynnex.com/sepaB2B.html" target="_blank">
              formulario SEPA B2B
            </MuiLink>{' '}
            con tus credenciales de partner de TD SYNNEX y cumplimentar la información solicitada.
            Tras ello, recibirás un correo electrónico con un SEPA B2B adjunto, el que deberás
            firmar en su interior y adjuntar en el formulario de solicitud junto al certificado de
            titularidad de la cuenta bancaria indicada en el SEPA B2B.
          </Typography>

          <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
            Documentos necesarios en este proceso
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, my: 2 }}>
            <DocumentCard title="SEPA B2B" size="PDF" index={0} />
            <DocumentCard title="Certificado de titularidad" size="PDF" index={1} />
          </Box>

          <Stepper orientation="vertical" sx={{ mt: 3 }}>
            <Step active expanded>
              <StepLabel>Accede al formulario SEPA B2B</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  <MuiLink href="https://www.holatdsynnex.com/sepaB2B.html" target="_blank">
                    https://www.holatdsynnex.com/sepaB2B.html
                  </MuiLink>
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Inicia sesión con tu cuenta de TD SYNNEX</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Utiliza las credenciales que recibiste al crear tu cuenta.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Completa el formulario</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Completa el formulario con toda la información solicitada y pulsa en{' '}
                  <strong>Enviar SEPA</strong>.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Recibe el correo electrónico</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Recibirás un correo electrónico con un SEPA B2B adjunto, ya cumplimentado con la
                  información indicada en el formulario anterior.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Firma el documento</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Puedes firmarlo manualmente y añadir el sello de tu organización, o firmarlo
                  digitalmente.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Adjunta los documentos</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Regresa al formulario y adjunta el SEPA B2B firmado y el certificado de
                  titularidad de la cuenta bancaria indicada en el SEPA.
                </Typography>
              </StepContent>
            </Step>
          </Stepper>

          <Callout type="tip" title="" sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircle sx={{ color: primaryColor }} />
              <Typography variant="body2">
                Si utilizas Growth Lab, recuerda <strong>Marcar este paso como completado</strong>{' '}
                una vez enviado el SEPA B2B y el certificado de titularidad.
              </Typography>
            </Box>
          </Callout>
        </Box>

        {/* Paso 1.4 */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Paso 1.4. Asignación de condiciones de crédito
            </Typography>
            <OwnerBadge owner="tdsynnex" label="TD SYNNEX es el owner de este paso" />
          </Box>

          <Typography variant="body2" paragraph>
            Tras completar y enviar el SEPA B2B y el certificado de titularidad, nuestro equipo
            financiero revisará la solicitud. Es posible que en este punto desde el equipo
            financiero o directamente tu Customer Success Manager te solicite información adicional
            para validar y asignar tus condiciones de crédito.
          </Typography>

          <Typography variant="body2" paragraph>
            Esta información suele ser:
          </Typography>

          <List dense>
            <ListItem>
              <ListItemText primary="Impuesto de sociedades de los dos últimos ejercicios." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Balance de cuentas provisional." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Último impuesto de sociedades." />
            </ListItem>
          </List>

          <Typography variant="body2" paragraph>
            En cualquier caso, desde TD SYNNEX te confirmaremos una vez las condiciones de crédito
            hayan sido asignadas.
          </Typography>

          <Callout type="info" title="" sx={{ mt: 3 }}>
            <Typography variant="body2">
              Si utilizas Growth Lab, este paso se marcará como completado una vez tus condiciones
              de crédito queden autorizadas y operativas.
            </Typography>
          </Callout>
        </Box>
      </Box>

      {/* Paso 2: AWS Partner Central */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Typography variant="h4" fontWeight="bold">
            Paso 2. AWS Partner Central
          </Typography>
        </Box>

        <Typography variant="body1" color="text.secondary" paragraph>
          En este segundo paso de tu proceso de alta se procederá a la validación y configuración
          de tu AWS Partner Central, tu cuenta de reseller de AWS que utilizarás para transaccionar
          en StreamOne® ION.
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          Este paso consiste en 5 acciones que deberán realizarse directamente desde tu{' '}
          <MuiLink href="https://partnercentral.awspartner.com/partnercentral2/s/login" target="_blank">
            AWS Partner Central
          </MuiLink>
          .
        </Typography>

        {/* Paso 2.1 */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Paso 2.1 | Alta en AWS Partner Central
            </Typography>
            <OwnerBadge owner="client" label="Tú eres el owner de este paso" />
          </Box>

          <Callout type="success" title="" sx={{ mb: 3 }}>
            <Typography variant="body2">
              Si tu organización ya dispone de AWS Partner Central, no crees uno nuevo, pasa
              directamente al paso 2.2.
            </Typography>
          </Callout>

          <Typography variant="body2" paragraph>
            Para completar el registro en AWS Partner Central necesitarás disponer previamente de
            una cuenta de AWS.
          </Typography>

          <Stepper orientation="vertical" sx={{ mt: 3 }}>
            <Step active expanded>
              <StepLabel>Ir a APN Marketing</StepLabel>
              <StepContent>
                <Typography variant="body2" paragraph>
                  Entra en la página de{' '}
                  <MuiLink href="https://aws.amazon.com/partners/" target="_blank">
                    APN Marketing
                  </MuiLink>{' '}
                  y haz clic en <strong>Become a partner</strong>.
                </Typography>
                <Typography variant="body2">
                  Serás redirigido al login de la Consola de AWS.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Dispón de una cuenta de AWS "designada"</StepLabel>
              <StepContent>
                <Typography variant="body2" paragraph>
                  Debes usar una cuenta de AWS específica para registrar el servicio AWS Partner
                  Central.
                </Typography>
                <Typography variant="body2">
                  Todos los usuarios de Partner Central se aprovisionarán con acceso a esa misma
                  cuenta.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Contactar con el admin de IAM (si aplica)</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Puede que necesites soporte del administrador de IAM de tu organización.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Elegir la cuenta de AWS correcta</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Identifica la cuenta de AWS que se vinculará a Partner Central (según vuestra
                  política interna y la guía de "Linking AWS Partner Central and AWS accounts").
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Aprovisionar permisos al "alliance lead"</StepLabel>
              <StepContent>
                <Typography variant="body2" paragraph>
                  El admin de IAM debe dar acceso en esa cuenta al usuario que hará el registro
                  (alliance lead).
                </Typography>
                <Typography variant="body2" paragraph>
                  Ese usuario debe poder aceptar los términos de APN y AWS Customer Engagement
                  program en nombre de la empresa.
                </Typography>
                <Typography variant="body2" paragraph>
                  Debe recibir los permisos adecuados (
                  <MuiLink
                    href="https://docs.aws.amazon.com/partner-central/latest/getting-started/managed-policies.html"
                    target="_blank"
                  >
                    ver AWS managed policies para usuarios de Partner Central
                  </MuiLink>
                  ).
                </Typography>
                <Typography variant="body2">
                  Tras el alta, será el contacto principal y quien gestione Partner Central.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Iniciar sesión en AWS Console</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  El <strong>alliance lead</strong> entra en la Consola de AWS de la cuenta
                  seleccionada con sus credenciales y pulsa <strong>Sign In</strong>.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Abrir AWS Partner Central y empezar</StepLabel>
              <StepContent>
                <Typography variant="body2" paragraph>
                  En la consola, busca{' '}
                  <MuiLink
                    href="https://partnercentral.awspartner.com/partnercentral2/s/login"
                    target="_blank"
                  >
                    AWS Partner Central
                  </MuiLink>{' '}
                  (navegación o buscador).
                </Typography>
                <Typography variant="body2">
                  Entra en el servicio y pulsa <strong>Get started</strong>.
                </Typography>
              </StepContent>
            </Step>
          </Stepper>
        </Box>

        {/* Paso 2.2 */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Paso 2.2 | Partner Path Enrollment
            </Typography>
            <OwnerBadge owner="client" label="Tú eres el owner de este paso" />
          </Box>

          <Typography variant="body2" paragraph>
            Una vez dispongas de tu cuenta en AWS Partner Central, deberás enrolarte en el Partner
            Path que más se adecúe a tu modelo de negocio.
          </Typography>

          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography fontWeight={600}>Services Path</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Orientado a consultoría, servicios gestionados y/o reventa de servicios sobre AWS.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography fontWeight={600}>Software Path</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Orientado a organizaciones que desarrollan software propio basado o integrado con
                AWS.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Typography variant="body2" paragraph sx={{ mt: 2 }}>
            Accede a este enlace para obtener más información acerca de los{' '}
            <MuiLink href="https://aws.amazon.com/partners/paths/" target="_blank">
              Partners Path
            </MuiLink>{' '}
            de Amazon Web Services.
          </Typography>

          <Typography variant="body2" paragraph>
            El proceso de enrolamiento en cualquiera de los dos Partner Path se realizará desde tu
            AWS Partner Central.
          </Typography>

          <Stepper orientation="vertical" sx={{ mt: 3 }}>
            <Step active expanded>
              <StepLabel>Accede a tu AWS Partner Central</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  <MuiLink
                    href="https://partnercentral.awspartner.com/partnercentral2/s/login"
                    target="_blank"
                  >
                    https://partnercentral.awspartner.com/partnercentral2/s/login
                  </MuiLink>
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Encuentra la sección Partner Paths</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Mantente en la página de <strong>Inicio</strong> y desliza la página hasta
                  encontrar la sección <strong>Partner Paths</strong>.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Selecciona el Path</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Selecciona el Path de <strong>Services</strong> o <strong>Software</strong> según
                  conveniencia.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Enroll</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Pulsa en <strong>Enroll</strong> y acepta los términos y condiciones del
                  programa.
                </Typography>
              </StepContent>
            </Step>
          </Stepper>

          <Callout type="tip" title="" sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircle sx={{ color: primaryColor }} />
              <Typography variant="body2">
                Si utilizas Growth Lab, recuerda <strong>Marcar este paso como completado</strong>{' '}
                una vez te hayas enrolado en un Partner Path.
              </Typography>
            </Box>
          </Callout>
        </Box>

        {/* Paso 2.3 */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Paso 2.3 | Formulario AWS
            </Typography>
            <OwnerBadge owner="client" label="Tú eres el owner de este paso" />
          </Box>

          <Typography variant="body2" paragraph>
            En este paso debes cumplimentar el formulario de AWS para TD SYNNEX. Este formulario
            servirá a TD SYNNEX para tener una primera impresión de tu modelo de negocio en AWS y
            configurar en consecuencia tu perfil de StreamOne® ION (en el Paso 3.4).
          </Typography>

          <Box sx={{ my: 3 }}>
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
              Obtener Formulario AWS:
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button variant="outlined">Descargar formulario</Button>
              <Typography variant="body2" color="text.secondary" sx={{ alignSelf: 'center' }}>
                Si usas Growth Lab, encontrarás este formulario en el paso 2.3.
              </Typography>
            </Box>
          </Box>

          <Callout type="info" title="" sx={{ mt: 3 }}>
            <Typography variant="body2">
              Si completas este formulario fuera de Growth Lab, recuerda hacérselo llegar a tu
              Customer Success Manager o a customersuccess.es@tdsynnex.com.
            </Typography>
          </Callout>

          <Callout type="tip" title="" sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircle sx={{ color: primaryColor }} />
              <Typography variant="body2">
                Si utilizas Growth Lab, recuerda <strong>Marcar este paso como completado</strong>{' '}
                una vez hayas completado el formulario.
              </Typography>
            </Box>
          </Callout>
        </Box>

        {/* Paso 2.4 */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Paso 2.4 | Distribution Seller Agreement
            </Typography>
            <OwnerBadge owner="client" label="Tú eres el owner de este paso" />
          </Box>

          <Typography variant="body2" paragraph>
            Una vez completados los pasos anteriores, con la finalidad de establecer la relación
            con TD SYNNEX como proveedor, y tu organización como revendedor, se deberá proceder con
            la ejecución del Distributor Seller Agreement.
          </Typography>

          <Typography variant="body2" paragraph>
            Este acuerdo marca los términos y condiciones de tu organización como revendedora de
            servicios de Amazon Web Services y establece las obligaciones de todas las partes.
          </Typography>

          <Typography variant="body2" paragraph>
            La solicitud de formalización de este acuerdo la debes iniciar desde tu AWS Partner
            Central. TD SYNNEX la recibirá y aceptará durante las siguientes horas (generalmente en
            un máximo de 2 días laborables). Tras ello, AWS enviará el acuerdo directamente al
            correo electrónico del legal representative del AWS Partner Central de tu organización
            para su firma.
          </Typography>

          <Callout type="error" title="" sx={{ my: 3 }}>
            <Typography variant="body2">
              La última firma debe ejecutarla el legal representative del AWS Partner Central de tu
              organización. Sin esta firma, el acuerdo no será válido y no se podrá transaccionar
              con AWS a través de StreamOne® ION.
            </Typography>
          </Callout>

          <Stepper orientation="vertical" sx={{ mt: 3 }}>
            <Step active expanded>
              <StepLabel>Accede a AWS Partner Central</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  <MuiLink
                    href="https://partnercentral.awspartner.com/partnercentral2/s/login"
                    target="_blank"
                  >
                    https://partnercentral.awspartner.com/partnercentral2/s/login
                  </MuiLink>
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Ve a Programs y Engagement Requests</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Dirígete a la sección <strong>Programs</strong> del menú superior y selecciona la
                  opción <strong>Engagement Requests</strong>.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Pulsa en Create application</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Haz clic en el botón <strong>Create application</strong>.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Selecciona el país</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  En el selector del país, indica España o Portugal (según el país donde estés
                  completando el alta).
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Indica TD SYNNEX Corporation</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Indica <strong>TD SYNNEX Corporation</strong> como proveedor.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Valida y envía</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Valida los datos de tu AWS Partner Central y pulsa en <strong>Submit</strong>.
                </Typography>
              </StepContent>
            </Step>
          </Stepper>

          <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
            Después de ejecutar el Distributor Seller Agreement...
          </Typography>

          <List dense>
            <ListItem>
              <ListItemText primary="1. TD SYNNEX firmará el acuerdo." />
            </ListItem>
            <ListItem>
              <ListItemText primary="2. AWS firmará el acuerdo." />
            </ListItem>
            <ListItem>
              <ListItemText primary="3. AWS enviará al legal representative de tu AWS Partner Central el DSA para ser firmado." />
            </ListItem>
          </List>

          <Callout type="tip" title="" sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircle sx={{ color: primaryColor }} />
              <Typography variant="body2">
                Si utilizas Growth Lab, recuerda <strong>Marcar este paso como completado</strong>{' '}
                una vez hayas ejecutado el Distributor Seller Agreement.
              </Typography>
            </Box>
          </Callout>
        </Box>

        {/* Paso 2.5 */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Paso 2.5 | AWS Marketplace Account
            </Typography>
            <OwnerBadge owner="client" label="Tú eres el owner de este paso" />
          </Box>

          <Typography variant="body2" paragraph>
            Vincula la cuenta de AWS Partner Central con la cuenta de vendedor de AWS Marketplace.
          </Typography>

          <Callout type="info" title="" sx={{ mb: 3 }}>
            <Typography variant="body2">
              Requisito: rol Alliance Lead o Cloud Admin. Durante el flujo se crean/asignan roles
              IAM estándar (PartnerCentralRoleForCloudAdmin / PartnerCentralRoleForAlliance /
              PartnerCentralRoleForAce).
            </Typography>
          </Callout>

          <Stepper orientation="vertical" sx={{ mt: 3 }}>
            <Step active expanded>
              <StepLabel>Inicia sesión en AWS Partner Central</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Como Alliance Lead o Cloud Administrator en{' '}
                  <MuiLink
                    href="https://partnercentral.awspartner.com/partnercentral2/s/login"
                    target="_blank"
                  >
                    AWS Partner Central
                  </MuiLink>
                  .
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Selecciona Link Account</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  En la página <strong>Home</strong> seleccionar <strong>Link Account</strong>{' '}
                  (arriba derecha).
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Continúa con la vinculación</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Pulsa <strong>Continuar con la vinculación de la cuenta</strong> y después{' '}
                  <strong>Iniciar la vinculación de la cuenta</strong>.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Verifica el AWS Account ID</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Se abrirá la AWS Console. Verifica el AWS Account ID. En{' '}
                  <strong>Denominación social legal</strong>, escribe la razón social.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Pulsa en Siguiente</StepLabel>
              <StepContent>
                <Typography variant="body2">Continúa al siguiente paso.</Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Marca las casillas según aplique</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Cloud Admin IAM role (PartnerCentralRoleForCloudAdmin-###), Alliance team IAM
                  role (PartnerCentralRoleForAlliance-###), ACE IAM role
                  (PartnerCentralRoleForAce-###).
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Vincular cuentas</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Por último, pulsa en <strong>Siguiente</strong> → <strong>Vincular cuentas</strong> y
                  verificar confirmación.
                </Typography>
              </StepContent>
            </Step>
          </Stepper>

          <Callout type="tip" title="" sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircle sx={{ color: primaryColor }} />
              <Typography variant="body2">
                Si utilizas Growth Lab, recuerda <strong>Marcar este paso como completado</strong>{' '}
                una vez hayas vinculado tu AWS Marketplace Account.
              </Typography>
            </Box>
          </Callout>
        </Box>
      </Box>

      {/* Paso 3: Alta en StreamOne ION */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Typography variant="h4" fontWeight="bold">
            Paso 3. Alta en StreamOne® ION
          </Typography>
        </Box>

        <Typography variant="body1" color="text.secondary" paragraph>
          En este último paso completarás el alta en StreamOne® ION. Si ya tienes una cuenta porque
          estás trabajando con otro fabricante, puedes iniciar este en el punto 3.3.
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          El alta en StreamOne® ION consiste en la creación de tu perfil y la solicitud del
          programa de AWS Solutions Providers o AWS Technology Program (según sea tu caso).
        </Typography>

        {/* Paso 3.1 */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Paso 3.1 | Términos y condiciones de StreamOne® ION
            </Typography>
            <OwnerBadge owner="client" label="Tú eres el owner de este paso" />
          </Box>

          <Typography variant="body2" paragraph>
            Una vez finalices el paso anterior (Paso 2. Alta en AWS Partner Central), desde TD
            SYNNEX te haremos llegar un correo electrónico con los términos y condiciones de
            nuestra plataforma StreamOne ION.
          </Typography>

          <Typography variant="body2" paragraph>
            Este correo contendrá un enlace a este contrato el que deberás leer y aceptar tras
            revisar que la información de tu organización es correcta.
          </Typography>

          <Box
            sx={{
              my: 3,
              p: 3,
              bgcolor: 'info.light',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Email sx={{ fontSize: 48, color: 'info.main' }} />
            <Box>
              <Typography variant="body2" fontWeight="bold">
                Subject: TD SYNNEX - Streamone Ion Platform Agreement Terms - Please Acknowledge
              </Typography>
              <Typography variant="body2" color="text.secondary">
                From: no-reply@bryter.io
              </Typography>
            </Box>
          </Box>

          <Callout type="info" title="" sx={{ mb: 3 }}>
            <Typography variant="body2">
              Puedes reenviar este correo al representante legal de tu organización para su firma.
            </Typography>
          </Callout>

          <Stepper orientation="vertical" sx={{ mt: 3 }}>
            <Step active expanded>
              <StepLabel>Busca el correo electrónico</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Busca el correo con el asunto{' '}
                  <strong>
                    TD SYNNEX - Streamone Ion Platform Agreement Terms - Please Acknowledge
                  </strong>
                  .
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Accede al enlace</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Accede al enlace https://techdata-legal.bryter....
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Revisa la información</StepLabel>
              <StepContent>
                <Typography variant="body2">Revisa la información de tu organización.</Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Lee los términos y condiciones</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Lee los términos y condiciones de StreamOne ION.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Acepta y firma</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Acepta los términos y pulsa en <strong>Next</strong> para firmar el contrato.
                </Typography>
              </StepContent>
            </Step>
          </Stepper>

          <Callout type="tip" title="" sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircle sx={{ color: primaryColor }} />
              <Typography variant="body2">
                Si utilizas Growth Lab, recuerda <strong>Marcar este paso como completado</strong>{' '}
                una vez hayas aceptado los términos y condiciones de StreamOne® ION.
              </Typography>
            </Box>
          </Callout>
        </Box>

        {/* Paso 3.2 */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Paso 3.2 | Generación de tu perfil en StreamOne® ION
            </Typography>
            <OwnerBadge owner="tdsynnex" label="TD SYNNEX es el owner de este paso" />
          </Box>

          <Typography variant="body2" paragraph>
            Tras aceptar los términos y condiciones de la plataforma, en cuestión de horas (dentro
            del horario laboral) recibirás un correo electrónico de businessexperiencesu@techdata.com
            con la confirmación de tu cuenta.
          </Typography>

          <Box
            sx={{
              my: 3,
              p: 3,
              bgcolor: 'success.light',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Email sx={{ fontSize: 48, color: 'success.main' }} />
            <Box>
              <Typography variant="body2" fontWeight="bold">
                Subject: StreamOne® ION Platform Credentials
              </Typography>
              <Typography variant="body2" color="text.secondary">
                From: businessexperiencesu@techdata.com
              </Typography>
            </Box>
          </Box>

          <Typography variant="body2" paragraph>
            Para generar tu contraseña por primera vez, accede a{' '}
            <MuiLink href="https://ion.tdsynnex.com/v2/login" target="_blank">
              StreamOne® ION
            </MuiLink>{' '}
            y haz un <strong>Forgot Password</strong>.
          </Typography>
        </Box>

        {/* Paso 3.3 */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Paso 3.3 | Solicitud del programa de Amazon Web Services
            </Typography>
            <OwnerBadge owner="client" label="Tú eres el owner de este paso" />
          </Box>

          <Typography variant="body2" paragraph>
            Una vez dispongas de tus credenciales de StreamOne ION, solicita el programa de AWS
            Solutions Provider o AWS Technology Program (según tu Partner Path).
          </Typography>

          <Typography variant="body2" paragraph>
            Durante la solicitud del programa aparecerán los términos y condiciones del programa,
            que serán los Pass Through Terms de AWS para proveedores y revendedores.
          </Typography>

          <Callout type="warning" title="" sx={{ mb: 3 }}>
            <Typography variant="body2">
              Asegúrate de solicitar el programa correcto, ya que encontrarás programas con nombre
              similares. Solicitar el programa equivocado declinará la solicitud de manera
              automática.
            </Typography>
          </Callout>

          <Stepper orientation="vertical" sx={{ mt: 3 }}>
            <Step active expanded>
              <StepLabel>Accede a StreamOne® ION</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  <MuiLink href="https://ion.tdsynnex.com/v2/login" target="_blank">
                    https://ion.tdsynnex.com/v2/login
                  </MuiLink>
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Dirígete a la sección Partners</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Dirígete a la sección <strong>Partners</strong> del menú superior.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Pulsa dos veces sobre TD SYNNEX</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Haz doble clic sobre <strong>TD SYNNEX</strong>.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Selecciona Programs</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Selecciona la opción <strong>Programs</strong> del menú izquierdo.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Busca y selecciona el programa de AWS</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Busca y selecciona el programa de AWS Solutions Provider o AWS Technology Program
                  según tu Partner Path.
                </Typography>
              </StepContent>
            </Step>
            <Step active expanded>
              <StepLabel>Request</StepLabel>
              <StepContent>
                <Typography variant="body2">
                  Con el programa seleccionado, pulsa la opción <strong>Request</strong>.
                </Typography>
              </StepContent>
            </Step>
          </Stepper>

          <Callout type="tip" title="" sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircle sx={{ color: primaryColor }} />
              <Typography variant="body2">
                Si utilizas Growth Lab, recuerda <strong>Marcar este paso como completado</strong>{' '}
                una vez hayas solicitado el programa de AWS.
              </Typography>
            </Box>
          </Callout>
        </Box>

        {/* Paso 3.4 */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Paso 3.4 | Autorización del programa de Amazon Web Services
            </Typography>
            <OwnerBadge owner="tdsynnex" label="TD SYNNEX es el owner de este paso" />
          </Box>

          <Typography variant="body2" paragraph>
            Tras solicitar el programa de Amazon Web Services en la plataforma, desde TD SYNNEX
            revisaremos la solicitud y autorizaremos la instalación del programa en tu perfil de
            StreamOne ION, lo que te autorizará desde ese momento a transaccionar con tus clientes
            servicios de Amazon Web Services.
          </Typography>

          <Typography variant="body2" paragraph>
            La autorización del programa, si los pasos anteriores se han completado correctamente,
            suele durar alrededor de 3 horas.
          </Typography>

          <Typography variant="body2" paragraph>
            Tras autorizarse el programa de AWS en tu cuenta, tu Customer Success Manager te
            confirmará la finalización de tu onboarding, lo que dará fin a este proceso y marcará
            el inicio de tu viaje con TD SYNNEX.
          </Typography>

          <Box sx={{ mt: 4, p: 4, bgcolor: 'success.light', borderRadius: 2, textAlign: 'center' }}>
            <CheckCircle sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              ¡Felicidades!
            </Typography>
            <Typography variant="body1">
              Has completado exitosamente el proceso de onboarding de Amazon Web Services con TD
              SYNNEX.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
