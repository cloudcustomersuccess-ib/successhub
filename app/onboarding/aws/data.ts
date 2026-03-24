export const guideData = {
  title: "Onboarding Amazon Web Services",
  intro: [
    "Para completar el alta en StreamOne® ION para trabajar con Amazon Web Services es necesario completar tres pasos principales: el alta en TD SYNNEX, la configuración de tu AWS Partner Central y el alta en nuestra plataforma StreamOne® ION.",
    "Durante este proceso, estarás siempre acompañado por el equipo de Cloud Customer Success de TD SYNNEX, quien asignará a un Customer Success Manager para guiarte durante todo este proceso de onboarding."
  ],
  callouts: [
    {
      type: "info",
      text: "Con Growth Lab podrás seguir tu proceso de alta en tiempo real y sin depender de nadie. Esta herramienta será tu mejor aliado durante tus primeros pasos en StreamOne® ION."
    }
  ],
  primaryCta: {
    type: "button",
    label: "Solicitar alta en StreamOne® ION"
  },
  preStepSection: {
    title: "Sobre tu proceso de alta...",
    text: "Si ya eres partner de TD SYNNEX Iberia y dispones de tu línea de crédito, podrás avanzar hasta el Paso 2. Si aún no tenemos el placer, comienza desde el Paso 1."
  },
  steps: [
    {
      id: "1",
      title: "Paso 1. Alta en TD SYNNEX",
      summary: "En este primer paso crearás tu cuenta de partner en TD SYNNEX y completarás la solicitud de la línea de crédito con la que operará tu organización en StreamOne® ION.",
      instructions: [],
      notes: [],
      links: []
    },
    {
      id: "1.1",
      title: "Paso 1.1 | Formulario de alta en TD SYNNEX",
      summary: "Para crear tu cuenta y obtener tus credenciales de partner de TD SYNNEX deberás acceder al formulario de registro y cumplimentar la información solicitada en todas las páginas.",
      meta: {
        badge_or_tag: "Tú eres el owner de este paso"
      },
      instructions: [
        {
          title: "Formulario de alta",
          bullets: [
            {
              segments: [
                { text: "Accede al formulario de registro de " },
                { type: "link", label: "Hola TD SYNNEX", href: "https://www.holatdsynnex.com/alta_cliente_td_synnex.html" }
              ]
            },
            {
              segments: [
                { text: "Haz clic en " },
                { type: "button", label: "Alta Cliente en TD SYNNEX", href: "https://eu.tdsynnex.com/" }
              ]
            },
            {
              segments: [
                { text: "Cumplimenta toda la información solicitada y lee y acepta los términos y condiciones de " },
                { type: "link", label: "TD SYNNEX", href: "https://eu.tdsynnex.com/terms-conditions" }
              ]
            },
            "Haz lo mismo con las páginas siguientes",
            "Pulsa en Enviar para completar la solicitud"
          ]
        }
      ],
      notes: [
        {
          type: "info",
          title: "Ten a mano...",
          text: "Antes de iniciar este paso ten a mano cualquiera de los siguientes documentos:",
          items: [
            "IAE (Impuesto de Actividades Económicas): Copia del último impuesto/recibo de pago donde se vea claramente el epígrafe.",
            "Declaración censal (036): Copia del modelo 036 donde se vea claramente el epígrafe en el que estás inscrito.",
            "Certificado AEAT: Copia del certificado de revendedor AEAT."
          ]
        },
        {
          type: "info",
          title: "Términos y condiciones",
          body: [
            {
              segments: [
                { text: "Durante este paso aceptarás los términos y condiciones de TD SYNNEX. Puedes consultar estos términos a través de " },
                { type: "link", label: "este enlace", href: "https://eu.tdsynnex.com/terms-conditions" },
                { text: "." }
              ]
            }
          ]
        }
      ],
      links: [
        {
          label: "Alta de cliente | Trabaja con TD SYNNEX",
          href: "https://www.holatdsynnex.com/alta_cliente_td_synnex.html"
        }
      ]
    },
    {
      id: "1.2",
      title: "Paso 1.2 | Creación de cuenta",
      summary: "Una vez cumplimentado el formulario desde TD SYNNEX revisaremos la información proporcionada y se creará tu perfil de partner. Al mismo tiempo, se generarán las credenciales de acceso a TD SYNNEX, tu TD SYNNEX Login. Este login te servirá para acceder a todas las aplicaciones de TD SYNNEX, entre otras, StreamOne® ION.",
      meta: {
        badge_or_tag: "TD SYNNEX es el owner de este paso"
      },
      notes: [
        {
          type: "warning",
          title: "¿Aún no te hemos confirmado tu cuenta?",
          body: [
            {
              segments: [
                { text: "Si ya has completado el formulario de registro del paso anterior y no te hemos respondido durante las siguientes 48 horas, revisa tu buzón de correo en busca de un mensaje de " },
                { text: "altaclientes.es@tdsynnex.com", className: "font-medium" },
                { text: ". Es posible que necesitemos algo más de información antes de crear tu cuenta." }
              ]
            },
            {
              segments: [
                { text: "Si no es el caso, puedes contactar con " },
                { text: "altaclientes.es@tdsynnex.com", className: "font-medium" },
                { text: " y preguntar por el estado de tu cuenta." }
              ]
            }
          ]
        }
      ],
      links: []
    },
    {
      id: "1.3",
      title: "Paso 1.3 | Solicitud de la línea de crédito",
      summary: "Una vez dispongas de tu cuenta de cliente en TD SYNNEX es momento de completar la solicitud de la línea de crédito con la que operará tu organización desde StreamOne® ION.",
      meta: {
        badge_or_tag: "Tú eres el owner de este paso"
      },
      instructions: [
        {
          title: "Solicitud SEPA B2B",
          bullets: [
            {
              segments: [
                { text: "Accede al " },
                { type: "link", label: "formulario SEPA B2B", href: "https://www.holatdsynnex.com/sepaB2B.html" }
              ]
            },
            "Inicia sesión con tu cuenta de TD SYNNEX (TD SYNNEX Login)",
            {
              segments: [
                { text: "Completa el formulario con toda la información solicitada y pulsa en " },
                { type: "button", label: "Enviar Orden SEPA", href: "https://www.holatdsynnex.com/sepaB2B.html", className: "rounded-none border-0 bg-blue-600 hover:bg-blue-700" }
              ]
            },
            "Recibirás un correo electrónico con un SEPA B2B adjunto, ya cumplimentado",
            "Firma el documento manualmente o digitalmente",
            "Regresa al formulario y adjunta el SEPA B2B firmado y el certificado de titularidad"
          ]
        }
      ],
      accordion: [
        {
          question: "¿Por qué una línea de crédito en TD SYNNEX?",
          answer: "Dadas las capacidades de escalabilidad de los productos y servicios Cloud que ofrecemos desde TD SYNNEX, preferimos asignarte una línea de crédito para que estés siempre cubierto y tus capacidades de negocio no se vean limitadas con condiciones de prepago."
        },
        {
          question: "¿Es obligatoria la línea de crédito para completar el alta?",
          answer: "Sí. Para completar tu proceso de alta en StreamOne® ION es obligatorio disponer de una línea de crédito. Es posible que seas cliente de TD SYNNEX y nunca la hayas necesitado. Esto se debe a que en otras áreas de negocio de TD SYNNEX se admiten métodos alternativos de pago."
        },
        {
          question: "¿Cómo funciona la línea de crédito?",
          answer: "Una vez asignada, cada compra o transacción que realices desde StreamOne® ION que tenga un coste asociado será cargado directamente a tu línea de crédito. Al finalizar nuestro ciclo de facturación (∼ a mediados del mes siguiente) emitiremos tus facturas con el detalle de la operación y su importe."
        },
        {
          question: "¿Puedo modificar el importe de mi línea de crédito?",
          answer: "Sí. Inicialmente el importe de tu línea de crédito se estima en función de la previsión de negocio indicada durante tu proceso de alta. El importe mínimo es de 2.000€ y el máximo dependerá de tu previsión de negocio. Puedes solicitar una ampliación de tu línea de crédito en cualquier momento."
        }
      ],
      assets: [
        {
          title: "SEPA B2B",
          type: "PDF"
        },
        {
          title: "Certificado de titularidad",
          type: "PDF"
        }
      ],
      notes: [
      ],
      links: [
        {
          label: "Ir al formulario de solicitud de crédito",
          href: "https://www.holatdsynnex.com/sepaB2B.html"
        }
      ]
    },
    {
      id: "1.4",
      title: "Paso 1.4 | Asignación de condiciones de crédito",
      summary: "Tras enviar el SEPA B2B y el certificado de titularidad, nuestro equipo financiero revisará la solicitud. Desde TD SYNNEX te confirmaremos una vez las condiciones de crédito hayan sido asignadas. Si no recibes información al respecto contacta con tu Customer Success Manager.",
      meta: {
        badge_or_tag: "TD SYNNEX es el owner de este paso"
      },
      notes: [
        {
          type: "info",
          title: "Información adicional",
          text: "Es posible que en este punto el equipo financiero o tu Customer Success Manager te solicite información adicional.",
          items: [
            "Impuesto de sociedades de los dos últimos ejercicios",
            "Balance de cuentas provisional",
            "Último impuesto de sociedades"
          ]
        }
      ],
      links: []
    },
    {
      id: "2",
      title: "Paso 2. AWS Partner Central",
      summary: "En este segundo paso de tu proceso de alta se procederá a la validación y configuración de tu AWS Partner Central, tu cuenta de reseller de AWS que utilizarás para transaccionar en StreamOne® ION. Este paso consiste en 5 acciones que deberán realizarse directamente desde tu AWS Partner Central.",
      instructions: [],
      notes: [],
      links: [
        {
          label: "AWS Partner Central",
          href: "https://partnercentral.awspartner.com/partnercentral2/s/login"
        }
      ]
    },
    {
      id: "2.1",
      title: "Paso 2.1 | Alta en AWS Partner Central",
      summary: "Para registrarte en AWS Partner Central necesitarás una cuenta de AWS designada para este servicio y, en muchos casos, la ayuda de tu administrador de IAM para preparar el acceso correcto.",
      meta: {
        badge_or_tag: "Tú eres el owner de este paso"
      },
      prerequisites: [
        "Dispón de una cuenta de AWS que será la cuenta base del registro en AWS Partner Central.",
        "Define quién actuará como alliance lead: será la persona que complete el registro y gestione el acceso inicial.",
        "Si no administras IAM en tu organización, coordínate con tu equipo de IT o con el administrador de IAM antes de empezar."
      ],
      instructions: [
        {
          title: "Preparar el registro",
          bullets: [
            {
              segments: [
                { text: "Accede a la " },
                { type: "link", label: "página APN Marketing", href: "https://aws.amazon.com/partners/" },
                { text: " y haz clic en " },
                { text: "Become a partner", className: "font-semibold text-slate-800" }
              ]
            },
            "Asegúrate de que usarás una cuenta de AWS específica para registrar el servicio. Todos los usuarios de AWS Partner Central se aprovisionarán sobre esa cuenta.",
            {
              segments: [
                { text: "Identifica la cuenta de AWS correcta para AWS Partner Central. Si necesitas contexto adicional, revisa " },
                { type: "link", label: "Linking AWS Partner Central and AWS accounts", href: "https://docs.aws.amazon.com/partner-central/latest/getting-started/linking-apc-aws-marketplace.html" }
              ]
            }
          ]
        },
        {
          title: "Acceso del alliance lead",
          bullets: [
            "Pide a tu administrador de IAM que aprovisione acceso a la cuenta elegida para la persona que hará el registro.",
            "Esa persona, el alliance lead, debe estar autorizada para aceptar los términos del AWS Partner Network y del AWS Customer Engagement program en nombre de tu organización.",
            {
              segments: [
                { text: "Si necesitas revisar los permisos recomendados, consulta " },
                { type: "link", label: "AWS managed policies for AWS Partner Central users", href: "https://docs.aws.amazon.com/partner-central/latest/getting-started/managed-policies.html" }
              ]
            },
            "Una vez concedido el acceso, el alliance lead deberá iniciar sesión en la AWS Console con sus credenciales IAM o mediante SSO si tu organización ya lo tiene habilitado.",
            "Pulsa en Sign In para acceder a la página principal de la AWS Console."
          ]
        },
        {
          title: "Abrir el servicio",
          bullets: [
            "Desde la AWS Console, busca AWS Partner Central usando la navegación de la consola o el buscador.",
            "Abre el servicio AWS Partner Central y pulsa en Get started para comenzar el flujo de registro."
          ]
        }
      ],
      notes: [
        {
          type: "success",
          text: "Si tu organización ya dispone de AWS Partner Central, no crees uno nuevo, pasa directamente al paso 2.2."
        },
        {
          type: "warning",
          title: "Importante",
          text: "AWS indica que es habitual necesitar ayuda del administrador de IAM para completar este registro. Si no sabes quién es, revisa con IT o con el equipo que gestiona las cuentas AWS de tu organización."
        },
        {
          type: "info",
          title: "Inicio de sesión",
          text: "Si tu organización ya usa single sign-on con la AWS Console, podrás acceder con tus credenciales habituales. Si no, necesitarás el AWS account ID de 12 dígitos y las credenciales facilitadas por tu administrador de IAM."
        }
      ],
      officialGuide: {
        buttonLabel: "Abrir guía oficial de AWS",
        sheetTitle: "Guía oficial · AWS Partner Central registration",
        src: "/onboarding/aws/official-guide/partner-central-registration"
      },
      links: [
        {
          label: "APN Marketing",
          href: "https://aws.amazon.com/partners/"
        },
        {
          label: "AWS Partner Central",
          href: "https://partnercentral.awspartner.com/partnercentral2/s/login"
        },
        {
          label: "Contactar con APN Support",
          href: "https://www.apn-portal.com/knowledgebase/?cu=1&fs=ContactUs&l=en_US"
        }
      ]
    },
    {
      id: "2.2",
      title: "Paso 2.2 | Partner Path Enrollment",
      summary: "Una vez dispongas de tu cuenta en AWS Partner Central, deberás enrolarte en el Partner Path que más se adecúe a tu modelo de negocio.",
      meta: {
        badge_or_tag: "Tú eres el owner de este paso"
      },
      instructions: [
        {
          title: "Proceso de enrolamiento",
          bullets: [
            "Accede a tu AWS Partner Central",
            "Mantente en la página de Inicio y desliza hasta encontrar la sección Partner Paths",
            "Selecciona el Path de Services o Software según conveniencia",
            "Pulsa en Enroll y acepta los términos y condiciones del programa"
          ]
        }
      ],
      accordion: [
        {
          title: "Services Path",
          content: "Orientado a consultoría, servicios gestionados y/o reventa de servicios sobre AWS."
        },
        {
          title: "Software Path",
          content: "Orientado a organizaciones que desarrollan software propio basado o integrado con AWS."
        }
      ],
      notes: [
        {
          type: "note",
          text: "Si utilizas Growth Lab, recuerda Marcar este paso como completado una vez te hayas enrolado en un Partner Path."
        }
      ],
      links: [
        {
          label: "AWS Partner Central",
          href: "https://partnercentral.awspartner.com/partnercentral2/s/login"
        },
        {
          label: "Partners Path",
          href: "https://aws.amazon.com/partners/paths/"
        }
      ]
    },
    {
      id: "2.3",
      title: "Paso 2.3 | Formulario AWS",
      summary: "En este paso debes cumplimentar el formulario de AWS para TD SYNNEX. Este formulario servirá a TD SYNNEX para tener una primera impresión de tu modelo de negocio en AWS y configurar en consecuencia tu perfil de StreamOne® ION.",
      meta: {
        badge_or_tag: "Tú eres el owner de este paso"
      },
      instructions: [
        {
          title: "",
          bullets: [
            "Descargar formulario",
            "Si usas Growth Lab, encontrarás este formulario en el paso 2.3"
          ]
        }
      ],
      notes: [
        {
          type: "info",
          text: "Si completas este formulario fuera de Growth Lab, recuerda hacérselo llegar a tu Customer Success Manager o a customersuccess.es@tdsynnex.com."
        },
        {
          type: "note",
          text: "Si utilizas Growth Lab, recuerda Marcar este paso como completado una vez hayas completado el formulario."
        }
      ],
      links: []
    },
    {
      id: "2.4",
      title: "Paso 2.4 | Distribution Seller Agreement",
      summary: "Una vez completados los pasos anteriores, con la finalidad de establecer la relación con TD SYNNEX como proveedor, y tu organización como revendedor, se deberá proceder con la ejecución del Distributor Seller Agreement.",
      meta: {
        badge_or_tag: "Tú eres el owner de este paso"
      },
      instructions: [
        {
          title: "Ejecución del acuerdo",
          bullets: [
            "Accede a AWS Partner Central",
            "Dirígete a la sección Programs del menú superior y selecciona Engagement Requests",
            "Pulsa en Create application",
            "En el selector del país, indica España o Portugal",
            "Indica TD SYNNEX Corporation como proveedor",
            "Valida los datos y pulsa en Submit"
          ]
        }
      ],
      notes: [
        {
          type: "danger",
          text: "La última firma debe ejecutarla el legal representative del AWS Partner Central de tu organización. Sin esta firma, el acuerdo no será válido y no se podrá transaccionar con AWS a través de StreamOne® ION."
        },
        {
          type: "note",
          text: "Si utilizas Growth Lab, recuerda Marcar este paso como completado una vez hayas ejecutado el Distributor Seller Agreement."
        }
      ],
      links: [
        {
          label: "AWS Partner Central",
          href: "https://partnercentral.awspartner.com/partnercentral2/s/login"
        }
      ]
    },
    {
      id: "2.5",
      title: "Paso 2.5 | AWS Marketplace Account",
      summary: "Vincula la cuenta de AWS Partner Central con la cuenta de vendedor de AWS Marketplace.",
      meta: {
        badge_or_tag: "Tú eres el owner de este paso"
      },
      prerequisites: [
        "Requisito: rol Alliance Lead o Cloud Admin",
        "Durante el flujo se crean/asignan roles IAM estándar"
      ],
      instructions: [
        {
          title: "Vinculación de cuenta",
          bullets: [
            "Inicia sesión en AWS Partner Central como Alliance Lead o Cloud Administrator",
            "En la página Home seleccionar Link Account (arriba derecha)",
            "Pulsa Continuar con la vinculación de la cuenta y después Iniciar la vinculación de la cuenta",
            "Se abrirá la AWS Console. Verifica el AWS Account ID",
            "Pulsa en Siguiente",
            "Marca las casillas según aplique: Cloud Admin IAM role, Alliance team IAM role, ACE IAM role",
            "Por último, pulsa en Siguiente → Vincular cuentas y verificar confirmación"
          ]
        }
      ],
      notes: [
        {
          type: "note",
          text: "Si utilizas Growth Lab, recuerda Marcar este paso como completado una vez hayas vinculado tu AWS Marketplace Account."
        }
      ],
      links: [
        {
          label: "AWS Partner Central",
          href: "https://partnercentral.awspartner.com/partnercentral2/s/login"
        }
      ]
    },
    {
      id: "3",
      title: "Paso 3. Alta en StreamOne® ION",
      summary: "En este último paso completarás el alta en StreamOne® ION. Si ya tienes una cuenta porque estás trabajando con otro fabricante, puedes iniciar este en el punto 3.3.",
      instructions: [],
      notes: [],
      links: []
    },
    {
      id: "3.1",
      title: "Paso 3.1 | Términos y condiciones de StreamOne® ION",
      summary: "Una vez finalices el paso anterior, desde TD SYNNEX te haremos llegar un correo electrónico con los términos y condiciones de nuestra plataforma StreamOne ION.",
      meta: {
        badge_or_tag: "Tú eres el owner de este paso"
      },
      instructions: [
        {
          title: "Aceptación de términos",
          bullets: [
            "Busca el correo con el asunto: TD SYNNEX - Streamone Ion Platform Agreement Terms - Please Acknowledge",
            "Accede al enlace proporcionado",
            "Revisa la información de tu organización",
            "Lee los términos y condiciones de StreamOne ION",
            "Acepta los términos y pulsa en Next para firmar el contrato"
          ]
        }
      ],
      animations: [
        {
          description: "Correo electrónico esperado",
          payload: [
            "Subject: TD SYNNEX - Streamone Ion Platform Agreement Terms - Please Acknowledge",
            "From: no-reply@bryter.io"
          ]
        }
      ],
      notes: [
        {
          type: "info",
          text: "Puedes reenviar este correo al representante legal de tu organización para su firma."
        },
        {
          type: "note",
          text: "Si utilizas Growth Lab, recuerda Marcar este paso como completado una vez hayas aceptado los términos y condiciones de StreamOne® ION."
        }
      ],
      links: []
    },
    {
      id: "3.2",
      title: "Paso 3.2 | Generación de tu perfil en StreamOne® ION",
      summary: "Tras aceptar los términos y condiciones de la plataforma, en cuestión de horas (dentro del horario laboral) recibirás un correo electrónico de businessexperiencesu@techdata.com con la confirmación de tu cuenta.",
      meta: {
        badge_or_tag: "TD SYNNEX es el owner de este paso"
      },
      instructions: [
        {
          title: "",
          bullets: [
            "Para generar tu contraseña por primera vez, accede a StreamOne® ION y haz un Forgot Password"
          ]
        }
      ],
      animations: [
        {
          description: "Correo electrónico esperado",
          payload: [
            "Subject: StreamOne® ION Platform Credentials",
            "From: businessexperiencesu@techdata.com"
          ]
        }
      ],
      notes: [],
      links: [
        {
          label: "StreamOne® ION",
          href: "https://ion.tdsynnex.com/v2/login"
        }
      ]
    },
    {
      id: "3.3",
      title: "Paso 3.3 | Solicitud del programa de Amazon Web Services",
      summary: "Una vez dispongas de tus credenciales de StreamOne ION, solicita el programa de AWS Solutions Provider o AWS Technology Program (según tu Partner Path).",
      meta: {
        badge_or_tag: "Tú eres el owner de este paso"
      },
      instructions: [
        {
          title: "Solicitud del programa",
          bullets: [
            "Accede a StreamOne® ION",
            "Dirígete a la sección Partners del menú superior",
            "Pulsa dos veces sobre TD SYNNEX",
            "Selecciona la opción Programs del menú izquierdo",
            "Busca y selecciona el programa de AWS Solutions Provider o AWS Technology Program",
            "Con el programa seleccionado, pulsa la opción Request"
          ]
        }
      ],
      notes: [
        {
          type: "warning",
          text: "Asegúrate de solicitar el programa correcto, ya que encontrarás programas con nombre similares. Solicitar el programa equivocado declinará la solicitud de manera automática."
        },
        {
          type: "note",
          text: "Si utilizas Growth Lab, recuerda Marcar este paso como completado una vez hayas solicitado el programa de AWS."
        }
      ],
      links: [
        {
          label: "StreamOne® ION",
          href: "https://ion.tdsynnex.com/v2/login"
        }
      ]
    },
    {
      id: "3.4",
      title: "Paso 3.4 | Autorización del programa de Amazon Web Services",
      summary: "Tras solicitar el programa de Amazon Web Services en la plataforma, desde TD SYNNEX revisaremos la solicitud y autorizaremos la instalación del programa en tu perfil de StreamOne ION.",
      meta: {
        badge_or_tag: "TD SYNNEX es el owner de este paso"
      },
      instructions: [
        {
          title: "",
          bullets: [
            "La autorización del programa, si los pasos anteriores se han completado correctamente, suele durar alrededor de 3 horas",
            "Tras autorizarse el programa de AWS en tu cuenta, tu Customer Success Manager te confirmará la finalización de tu onboarding"
          ]
        }
      ],
      notes: [],
      links: []
    }
  ]
};
