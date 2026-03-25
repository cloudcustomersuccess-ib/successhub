// Types for Microsoft CSP Guide Data

export type Seg =
  | { t: 'text'; s: string }
  | { t: 'link'; s: string; href: string }
  | { t: 'btn'; s: string; href: string }
  | { t: 'option'; s: string }
  | { t: 'tag'; s: string; icon?: 'incognito' }
  | { t: 'breadcrumb'; items: { label: string; href?: string }[] }
  | { t: 'status'; s: string; tone?: 'success' | 'warning' | 'info' }
  | { t: 'ui-action'; s: string };

export type RichBullet = {
  segs: Seg[];
  action?: { label: string; href?: string; copy?: string };
};

export type AnyBullet = string | RichBullet;

export type Instruction = {
  title?: string;
  bullets: AnyBullet[];
};

export type StepNote = {
  type: 'info' | 'warning' | 'success' | 'danger' | 'note' | 'error';
  icon?: string;
  title?: string;
  text?: string;
  paragraphs?: (string | Seg[])[];
  image?: { src: string; alt: string; browser?: 'edge' };
  nested?: {
    type: StepNote['type'];
    icon?: string;
    title?: string;
    text: string;
  };
};

export type Step = {
  id: string;
  title: string;
  summary?: string;
  prerequisites?: string[];
  preNotes?: StepNote[];
  instructions?: Instruction[];
  notes?: StepNote[];
  links?: { label: string; href: string }[];
  assets?: { title: string; type: string }[];
  animations?: {
    description: string;
    payload: string[];
    kind?: 'streamone-terms' | 'streamone-credentials' | 'streamone-csp-request';
  }[];
  accordion?: { question?: string; title?: string; answer?: string; content?: string }[];
  officialGuide?: {
    id: string;
    buttonLabel: string;
    sheetTitle: string;
    variant?: 'outline' | 'link';
  };
};

export type GuideData = {
  title: string;
  intro: string[];
  callouts: StepNote[];
  primaryCta: { label: string };
  preStepSection?: { title: string; text: string };
  steps: Step[];
};

export const guideData: GuideData = {
  title: 'Onboarding Microsoft CSP',
  intro: [
    'Para completar el alta en StreamOne® ION para trabajar con Microsoft CSP es necesario completar tres pasos principales: el alta en TD SYNNEX, la configuración de tu Partner Center de Microsoft y el alta en nuestra plataforma StreamOne® ION.',
    'Durante este proceso, estarás siempre acompañado por el equipo de Cloud Customer Success de TD SYNNEX, quien asignará a un Customer Success Manager para guiarte durante todo este proceso de onboarding.',
  ],
  callouts: [
    {
      type: 'info',
      text: 'Con Growth Lab podrás seguir tu proceso de alta en tiempo real y sin depender de nadie. Esta herramienta será tu mejor aliado durante tus primeros pasos en StreamOne® ION.',
    },
  ],
  primaryCta: {
    label: 'Solicitar alta en StreamOne® ION',
  },
  preStepSection: {
    title: 'Sobre tu proceso de alta...',
    text: 'Si ya eres partner de TD SYNNEX Iberia y dispones de tu línea de crédito, podrás avanzar hasta el Paso 2. Si aún no tenemos el placer, comienza desde el Paso 1.',
  },
  steps: [
    // ─── Fase 1 ───────────────────────────────────────────────────────────────
    {
      id: '1',
      title: 'Paso 1. Alta en TD SYNNEX',
      summary:
        'En este primer paso completarás el alta como partner de TD SYNNEX y, a continuación, solicitarás la línea de crédito que se asignará como método de pago para todas tus transacciones en nuestra plataforma StreamOne® ION.',
      instructions: [],
      notes: [],
      links: [],
    },
    {
      id: '1.1',
      title: 'Paso 1.1 | Hola TD SYNNEX',
      summary:
        'Para registrar tu cuenta como partner de TD SYNNEX accede al formulario de registro de Hola TD SYNNEX y cumplimenta toda la información solicitada.',
      prerequisites: [
        'Prepara 1 documento acreditativo del epígrafe/actividad antes de comenzar.',
        'IAE (Impuesto de Actividades Económicas): Copia del último impuesto/recibo de pago donde se vea claramente el epígrafe.',
        'Declaración censal (036): Copia del modelo 036 donde se vea claramente el epígrafe en el que estás inscrito.',
        'Certificado AEAT: Copia del certificado de revendedor AEAT.',
      ],
      instructions: [
        {
          title: 'Pasos para el registro',
          bullets: [
            'Accede al formulario de registro de Hola TD SYNNEX: https://www.holatdsynnex.com/alta_cliente_td_synnex.html',
            'Haz clic en Alta Cliente TD SYNNEX',
            'Cumplimenta toda la información solicitada y lee y acepta los términos y condiciones de TD SYNNEX',
            'Haz lo mismo con las páginas siguientes',
            'Pulsa en Enviar para completar la solicitud',
          ],
        },
      ],
      notes: [
        {
          type: 'note',
          text: 'Si utilizas Growth Lab, recuerda Marcar este paso como completado una vez completes y envíes el formulario.',
        },
      ],
      links: [
        {
          label: 'Formulario de registro de Hola TD SYNNEX',
          href: 'https://www.holatdsynnex.com/alta_cliente_td_synnex.html',
        },
        {
          label: 'Términos y condiciones de TD SYNNEX',
          href: 'https://eu.tdsynnex.com/terms-conditions',
        },
      ],
    },
    {
      id: '1.2',
      title: 'Paso 1.2 | Tu cuenta de cliente',
      summary:
        'Tras enviar el formulario en Hola TD SYNNEX, nuestro equipo de Alta Clientes procederá con la revisión de la información aportada y procederá con la creación de tu cuenta de partner.',
      instructions: [
        {
          title: '',
          bullets: [
            'En este punto es posible que nuestro equipo de altas te contacte para solicitarte información adicional en caso de ser preciso',
            'Si es el caso, recibirás un correo de altaclientes.es@tdsynnex.com',
            'Si no recibes confirmación en un plazo de 48 horas laborales, puedes contactar con: Alta Clientes: altaclientes.es@tdsynnex.com',
            'Customer Success: customersuccess.es@tdsynnex.com',
            'Tu CSM: encontrarás su correo en Growth Lab',
            'Una vez creada tu cuenta recibirás una confirmación por correo electrónico de Alta Clientes',
          ],
        },
      ],
      notes: [
        {
          type: 'note',
          text: 'Si utilizas Growth Lab, recuerda Marcar este paso como completado una vez recibas confirmación de tu cuenta.',
        },
      ],
      links: [],
    },
    {
      id: '1.3',
      title: 'Paso 1.3 | Solicitud de la línea de crédito',
      summary:
        'Ahora que ya dispones de tu cuenta de cliente en TD SYNNEX es momento de completar la solicitud de la línea de crédito con la que operará tu organización desde StreamOne® ION.',
      instructions: [
        {
          title: 'Solicitud SEPA B2B',
          bullets: [
            'Accede al formulario SEPA B2B: https://www.holatdsynnex.com/sepaB2B.html',
            'Inicia sesión con tu cuenta de TD SYNNEX',
            'Completa el formulario con toda la información solicitada y pulsa en Enviar SEPA',
            'Recibe un correo electrónico con un SEPA B2B adjunto, ya cumplimentado',
            'Firma el documento manualmente o digitalmente',
            'Regresa al formulario y adjunta el SEPA B2B firmado y el certificado de titularidad',
          ],
        },
      ],
      accordion: [
        {
          question: '¿Por qué una línea de crédito en TD SYNNEX?',
          answer:
            'Dadas las capacidades de escalabilidad de los productos y servicios Cloud que ofrecemos desde TD SYNNEX, preferimos asignarte una línea de crédito para que estés siempre cubierto y tus capacidades de negocio no se vean limitadas con condiciones de prepago.',
        },
        {
          question: '¿Es obligatoria la línea de crédito para completar el alta?',
          answer:
            'Sí. Para completar tu proceso de alta en StreamOne® ION es obligatorio disponer de una línea de crédito. Es posible que seas cliente de TD SYNNEX y nunca la hayas necesitado. Esto se debe a que en otras áreas de negocio de TD SYNNEX se admiten métodos alternativos de pago.',
        },
        {
          question: '¿Cómo funciona la línea de crédito?',
          answer:
            'Una vez asignada, cada compra o transacción que realices desde StreamOne® ION que tenga un coste asociado será cargado directamente a tu línea de crédito. Al finalizar nuestro ciclo de facturación (∼ a mediados del mes siguiente) emitiremos tus facturas con el detalle de la operación y su importe.',
        },
        {
          question: '¿Puedo modificar el importe de mi línea de crédito?',
          answer:
            'Sí. Inicialmente el importe de tu línea de crédito se estima en función de la previsión de negocio indicada durante tu proceso de alta. El importe mínimo es de 2.000€ y el máximo dependerá de tu previsión de negocio. Puedes solicitar una ampliación de tu línea de crédito en cualquier momento.',
        },
      ],
      assets: [
        { title: 'SEPA B2B', type: 'PDF' },
        { title: 'Certificado de titularidad', type: 'PDF' },
      ],
      notes: [
        {
          type: 'note',
          text: 'Si utilizas Growth Lab, recuerda Marcar este paso como completado una vez enviado el SEPA B2B y el certificado de titularidad.',
        },
      ],
      links: [
        {
          label: 'Formulario SEPA B2B',
          href: 'https://www.holatdsynnex.com/sepaB2B.html',
        },
      ],
    },
    {
      id: '1.4',
      title: 'Paso 1.4 | Asignación de condiciones de crédito',
      summary:
        'Tras completar y enviar el SEPA B2B y el certificado de titularidad, nuestro equipo financiero revisará la solicitud.',
      instructions: [
        {
          title: '',
          bullets: [
            'Es posible que en este punto el equipo financiero o tu Customer Success Manager te solicite información adicional',
            'Esta información suele ser: Impuesto de sociedades de los dos últimos ejercicios, Balance de cuentas provisional, Último impuesto de sociedades',
            'Desde TD SYNNEX te confirmaremos una vez las condiciones de crédito hayan sido asignadas',
          ],
        },
      ],
      notes: [
        {
          type: 'info',
          text: 'Si utilizas Growth Lab, este paso se marcará como completado una vez tus condiciones de crédito queden autorizadas y operativas.',
        },
      ],
      links: [],
    },

    // ─── Fase 2 ───────────────────────────────────────────────────────────────
    {
      id: '2',
      title: 'Paso 2. Microsoft Partner Center',
      summary:
        'En este segundo paso de tu proceso de alta se procederá al registro en el programa Microsoft AI Cloud Partner Program (MAICPP), al alta en el programa Cloud Solutions Provider (CSP) y a la validación de tu cuenta como revendedor indirecto de Microsoft CSP.',
      instructions: [],
      notes: [],
      links: [
        {
          label: 'Partner Center de Microsoft',
          href: 'https://partner.microsoft.com/en-us/dashboard',
        },
      ],
    },
    {
      id: '2.1',
      title: 'Paso 2.1 | Alta en Microsoft AI Cloud Partner Program',
      summary:
        'Al completar el registro en el programa Microsoft AI Cloud Partner Program obtendrás acceso a tu Partner Center de Microsoft, con el que completaremos los pasos 2.2 y 2.3.',
      instructions: [
        {
          title: 'Proceso de registro',
          bullets: [
            {
              segs: [
                { t: 'text', s: 'Accede al enlace de registro en ' },
                {
                  t: 'link',
                  s: 'MAICPP',
                  href: 'https://partner.microsoft.com/en-us/partnership',
                },
              ],
            },
            {
              segs: [
                { t: 'text', s: 'Pulsa en ' },
                {
                  t: 'btn',
                  s: 'Become a partner',
                  href: 'https://partner.microsoft.com/en-gb/partnership/enroll',
                },
              ],
            },
            {
              segs: [
                { t: 'text', s: 'Selecciona la opción ' },
                { t: 'option', s: 'Partner' },
                { t: 'text', s: ' / ' },
                { t: 'option', s: 'Asóciese' },
                { t: 'text', s: ' de la lista.' },
              ],
            },
            {
              segs: [
                { t: 'text', s: 'Pulsa sobre ' },
                {
                  t: 'btn',
                  s: 'Login with work account',
                  href: 'https://partner.microsoft.com/en-us/dashboard',
                },
                {
                  t: 'text',
                  s: ' si ya dispones de una cuenta profesional de Microsoft. En caso contrario, pulsa sobre ',
                },
                {
                  t: 'link',
                  s: 'Create work account',
                  href: 'https://signup.live.com/signup',
                },
                { t: 'text', s: '.' },
              ],
            },
            {
              segs: [
                {
                  t: 'text',
                  s: 'Introduce los datos de tu organización con los que se creará tu cuenta de Partner de Microsoft.',
                },
              ],
            },
            {
              segs: [
                {
                  t: 'text',
                  s: 'Tras completar todos los pasos serás redirigido a tu nuevo Partner Center de Microsoft.',
                },
              ],
            },
          ],
        },
      ],
      officialGuide: {
        id: 'maicpp',
        buttonLabel: 'Ver más sobre el programa MAICPP',
        sheetTitle: 'Introducción al programa Microsoft AI Cloud Partner Program',
      },
      notes: [
        {
          type: 'info',
          text: 'Para completar el registro en el programa de MAICPP se requiere disponer de una cuenta profesional de Microsoft (no de uso personal).',
        },
      ],
      links: [
        {
          label: 'Microsoft AI Cloud Partner Program',
          href: 'https://partner.microsoft.com/en-us/membership',
        },
      ],
    },
    {
      id: '2.2',
      title: 'Paso 2.2 | Alta en Microsoft Cloud Solutions Provider',
      summary:
        'Una vez registrado en el programa de MAICPP deberás completar el registro en el programa de Cloud Solutions Provider, el que te habilitará como revendedor indirecto de Microsoft CSP y te proporcionará un Partner Location Account ID (PLA).',
      officialGuide: {
        id: 'csp-overview',
        buttonLabel: 'Ver más sobre el programa CSP',
        sheetTitle: 'Introducción al programa Cloud Solutions Provider',
      },
      instructions: [
        {
          title: 'Proceso de inscripción',
          bullets: [
            {
              segs: [
                { t: 'text', s: 'Accede a la página de inscripción en el ' },
                {
                  t: 'link',
                  s: 'programa de Cloud Solutions Provider',
                  href: 'https://partner.microsoft.com/en-us/dashboard/account/v3/enrollment/introduction/partnership',
                },
                { t: 'text', s: '.' },
              ],
            },
            {
              segs: [
                { t: 'text', s: 'Selecciona la opción ' },
                { t: 'option', s: 'Resell' },
                { t: 'text', s: ' / ' },
                { t: 'option', s: 'Revender' },
                { t: 'text', s: ' del listado y pulsa en Next.' },
              ],
            },
            {
              segs: [
                { t: 'text', s: 'Pulsa sobre ' },
                {
                  t: 'btn',
                  s: 'Login with work account',
                  href: 'https://partner.microsoft.com/en-us/dashboard',
                },
                {
                  t: 'text',
                  s: ' y utiliza las mismas credenciales que has utilizado en el paso anterior para registrarte en el programa MAICPP.',
                },
              ],
            },
            {
              segs: [
                {
                  t: 'text',
                  s: 'Verifica la información de tu organización. Si no dispones de un código D.U.N.S. pulsa sobre ',
                },
                {
                  t: 'link',
                  s: "I don't have a D.U.N.S. number",
                  href: 'https://www.dnb.com/duns-number/get-a-duns.html',
                },
                { t: 'text', s: ' y completa la información de tu organización.' },
              ],
            },
            {
              segs: [
                {
                  t: 'text',
                  s: 'Tras completar todos los pasos serás redirigido de nuevo a tu Partner Center de Microsoft.',
                },
              ],
            },
          ],
        },
      ],
      notes: [
        {
          type: 'note',
          text: 'Si utilizas Growth Lab, recuerda Marcar este paso como completado una vez hayas completado la inscripción en el programa de CSP.',
        },
      ],
      links: [
        {
          label: 'Partner Location Account ID',
          href: 'https://www.google.com/search?q=partner+location+account+id',
        },
        {
          label: 'Cloud Solutions Provider',
          href: 'https://partner.microsoft.com/en-us/membership/cloud-solution-provider',
        },
      ],
    },
    {
      id: '2.3',
      title: 'Paso 2.3 | Validación de tu cuenta en CSP',
      summary:
        'Tras inscribirte en el programa de MAICPP y CSP, Microsoft iniciará un proceso de validación de tu cuenta que durará entre 3 y 5 días laborables. Puedes consultar el estado de tu proceso de validación en cualquier momento en la sección Account Settings > Legal Info.',
      officialGuide: {
        id: 'verification-help',
        buttonLabel: '¿Necesitas ayuda para verificar tu cuenta?',
        sheetTitle: 'Ayuda para verificar tu cuenta',
        variant: 'link',
      },
      instructions: [],
      notes: [
        {
          type: 'info',
          icon: 'FileCheck',
          title: 'Microsoft Partner Agreement',
          paragraphs: [
            [
              {
                t: 'text',
                s: 'Accede a ',
              },
              {
                t: 'breadcrumb',
                items: [
                  {
                    label: 'Account Settings',
                    href: 'https://partner.microsoft.com/dashboard/v2/account-settings/settings/agreements',
                  },
                  { label: 'Agreements' },
                ],
              },
              {
                t: 'text',
                s: ' y verifica que el contrato Microsoft Partner Agreement está firmado. Si está firmado lo verás como ',
              },
              {
                t: 'link',
                s: 'View',
                href: 'https://partner.microsoft.com/en-us/dashboard/account/agreements',
              },
              {
                t: 'text',
                s: '. Si no está firmado lo verás como ',
              },
              {
                t: 'link',
                s: 'Accept / View',
                href: 'https://partner.microsoft.com/en-us/dashboard/account/agreements',
              },
              { t: 'text', s: '.' },
            ],
          ],
          image: {
            src: 'https://i.imgur.com/NjcSJUA.png',
            alt: 'Microsoft Partner Agreement en Partner Center',
            browser: 'edge',
          },
        },
        {
          type: 'info',
          icon: 'BadgeCheck',
          title: 'Información legal',
          paragraphs: [
            [
              {
                t: 'text',
                s: 'Accede a ',
              },
              {
                t: 'breadcrumb',
                items: [
                  {
                    label: 'Account Settings',
                    href: 'https://partner.microsoft.com/dashboard/v2/account-settings/organization/legalinfo#csp',
                  },
                  { label: 'Legal Info' },
                ],
              },
              {
                t: 'text',
                s: ' y verifica que las secciones de Partner y Reseller aparecen con estado ',
              },
              {
                t: 'status',
                s: 'Authorized',
                tone: 'success',
              },
              {
                t: 'text',
                s: '.',
              },
            ],
            [
              {
                t: 'text',
                s: 'Además, en la sección de Reseller, verifica que tu inscripción en el programa aparece Active pulsando sobre el desplegable Program Info.',
              },
            ],
          ],
          image: {
            src: 'https://i.imgur.com/dZReKHj.png',
            alt: 'Información legal en la sección Legal Info de Partner Center',
            browser: 'edge',
          },
        },
        {
          type: 'info',
          icon: 'Fingerprint',
          title: 'Partner Location Account ID',
          paragraphs: [
            [
              {
                t: 'text',
                s: 'Accede a ',
              },
              {
                t: 'breadcrumb',
                items: [
                  {
                    label: 'Account Settings',
                    href: 'https://partner.microsoft.com/dashboard/v2/account-settings/organization/identity',
                  },
                  { label: 'Identifiers' },
                ],
              },
              {
                t: 'text',
                s: ' y pulsa sobre la pestaña CSP. Dentro de esta sección encontrarás tu Partner ID autorizado para revender Microsoft CSP.',
              },
            ],
          ],
          image: {
            src: 'https://i.imgur.com/6m5cOGB.png',
            alt: 'Partner Location Account ID en la sección Identifiers',
            browser: 'edge',
          },
          nested: {
            type: 'warning',
            text: 'Si la pestaña CSP no está disponible dentro de la sección de Identifiers significa que el alta en Cloud Solutions Provider no se ha completado correctamente.',
          },
        },
      ],
      links: [],
    },
    {
      id: '2.4',
      title: 'Paso 2.4 | Indirect Reseller Relationship',
      summary:
        'Tras completar la inscripción en ambos programas y confirmar que tu cuenta está correctamente validada por el fabricante, deberás aceptar la relación entre TD SYNNEX Spain (Indirect Provider) y tu cuenta de Partner de Microsoft (Indirect Reseller).',
      preNotes: [
        {
          type: 'warning',
          icon: 'ShieldCheck',
          title: 'Admin Agent',
          text: 'Para aceptar esta invitación deberás disponer de un rol de Admin Agent en el Partner Center de Microsoft de tu organización. Revisa los roles y permisos existentes aquí.',
          paragraphs: [
            [
              {
                t: 'text',
                s: 'Para aceptar esta invitación deberás disponer de un rol de Admin Agent en el Partner Center de Microsoft de tu organización. Revisa los roles y permisos existentes ',
              },
              {
                t: 'link',
                s: 'aquí',
                href: 'https://learn.microsoft.com/en-us/partner-center/permissions-overview',
              },
              { t: 'text', s: '.' },
            ],
          ],
        },
      ],
      instructions: [
        {
          title: 'Aceptación de la relación',
          bullets: [
            {
              segs: [
                { t: 'text', s: 'Abre una nueva ventana del navegador en ' },
                { t: 'tag', s: 'modo incógnito', icon: 'incognito' },
                { t: 'text', s: '.' },
              ],
            },
            {
              segs: [
                { t: 'text', s: 'Copia el enlace de invitación de TD SYNNEX.' },
              ],
              action: {
                label: 'Copiar enlace de invitación',
                copy: 'https://partner.microsoft.com/dashboard/v2/customers/indirectresellers/relationshiprequest/75af751c-f582-45e7-aee2-0fd6c8203c1d',
              },
            },
            {
              segs: [
                {
                  t: 'text',
                  s: 'Pega el enlace en el navegador en incógnito e inicia sesión con tus credenciales del Partner Center.',
                },
              ],
            },
            {
              segs: [{ t: 'text', s: 'Lee y acepta los términos de la invitación.' }],
            },
          ],
        },
      ],
      notes: [
        {
          type: 'info',
          text: 'Tras completar esta acción, en tu Partner Center > Customers > Indirect Providers verás a TD SYNNEX Spain, S.L.U. en el listado de tus proveedores indirectos.',
        },
      ],
      links: [],
    },

    // ─── Fase 3 ───────────────────────────────────────────────────────────────
    {
      id: '3',
      title: 'Paso 3. Alta en StreamOne® ION',
      summary:
        'En este último paso completarás el alta en StreamOne® ION. Si ya tienes una cuenta porque estás trabajando con otro fabricante, puedes iniciar este en el punto 3.3.',
      instructions: [],
      notes: [],
      links: [],
    },
    {
      id: '3.1',
      title: 'Paso 3.1 | Términos y condiciones de StreamOne® ION',
      summary:
        'Una vez finalices el paso anterior, desde TD SYNNEX te haremos llegar un correo electrónico con los términos y condiciones de nuestra plataforma StreamOne ION.',
      instructions: [
        {
          title: 'Aceptación de términos',
          bullets: [
            'Busca el correo con el asunto: TD SYNNEX - Streamone Ion Platform Agreement Terms - Please Acknowledge',
            'Accede al enlace proporcionado',
            'Revisa la información de tu organización',
            'Lee los términos y condiciones de StreamOne ION',
            {
              segs: [
                { t: 'text', s: 'Acepta los términos y pulsa en ' },
                { t: 'ui-action', s: 'Next' },
                { t: 'text', s: ' para firmar el contrato' },
              ],
            },
          ],
        },
      ],
      animations: [
        {
          description: 'Correo electrónico esperado',
          kind: 'streamone-terms',
          payload: [
            'Subject: TD SYNNEX - Streamone Ion Platform Agreement Terms - Please Acknowledge',
            'From: no-reply@bryter.io',
          ],
        },
      ],
      notes: [
        {
          type: 'info',
          text: 'Puedes reenviar este correo al representante legal de tu organización para su firma.',
        },
      ],
      links: [],
    },
    {
      id: '3.2',
      title: 'Paso 3.2 | Generación de tu perfil en StreamOne® ION',
      summary:
        'Tras aceptar los términos y condiciones de la plataforma, en cuestión de horas (dentro del horario laboral) recibirás un correo electrónico de businessexperiencesu@techdata.com con la confirmación de tu cuenta.',
      animations: [
        {
          description: 'Proceso de acceso a StreamOne® ION',
          kind: 'streamone-credentials',
          payload: [],
        },
      ],
      notes: [
        {
          type: 'danger',
          title: '¿Aún no has recibido tus credenciales?',
          paragraphs: [
            'Si aún no has recibido la confirmación de tu cuenta en StreamOne® ION, por favor, asegúrate de haber aceptado correctamente los términos y condiciones del paso 3.1.',
            [
              { t: 'text', s: 'También puedes contactar con ' },
              { t: 'link', s: 'customersuccess.es@tdsynnex.com', href: 'mailto:customersuccess.es@tdsynnex.com' },
              { t: 'text', s: ' para obtener más información.' },
            ],
          ],
        },
      ],
      links: [
        {
          label: 'StreamOne® ION',
          href: 'https://ion.tdsynnex.com/v2/login',
        },
      ],
    },
    {
      id: '3.3',
      title: 'Paso 3.3 | Solicitud del programa de Microsoft CSP',
      summary:
        'Una vez dispongas de tus credenciales de StreamOne ION, solicita el programa de Microsoft CSP.',
      preNotes: [
        {
          type: 'warning',
          text: 'Asegúrate de solicitar el programa correcto, ya que encontrarás programas con nombre similares. Solicitar el programa equivocado declinará la solicitud de manera automática.',
        },
      ],
      instructions: [
        {
          title: 'Solicitud del programa',
          bullets: [
            'Accede a StreamOne® ION',
            'Dirígete a la sección Partners del menú superior',
            'Pulsa dos veces sobre TD SYNNEX',
            'Selecciona la opción Programs del menú izquierdo',
            'Busca y selecciona el programa de Microsoft CSP',
            'Con el programa seleccionado, pulsa la opción Request',
          ],
        },
      ],
      animations: [
        {
          description: 'SOLICITUD DEL PROGRAMA EN STREAMONE ION',
          kind: 'streamone-csp-request',
          payload: [],
        },
      ],
      notes: [],
      links: [
        {
          label: 'StreamOne® ION',
          href: 'https://ion.tdsynnex.com/v2/login',
        },
      ],
    },
    {
      id: '3.4',
      title: 'Paso 3.4 | Autorización del programa de Microsoft CSP',
      summary:
        'Tras solicitar el programa de Microsoft CSP en la plataforma, desde TD SYNNEX revisaremos la solicitud y autorizaremos la instalación del programa en tu perfil de StreamOne ION.',
      instructions: [
        {
          title: '',
          bullets: [
            'La autorización del programa, si los pasos anteriores se han completado correctamente, suele durar alrededor de 3 horas',
            'Tras autorizarse el programa de Microsoft CSP en tu cuenta, tu Customer Success Manager te confirmará la finalización de tu onboarding',
          ],
        },
      ],
      notes: [],
      links: [],
    },
  ],
};
