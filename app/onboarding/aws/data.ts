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
      summary: "En este primer paso completarás el alta como partner de TD SYNNEX y, a continuación, solicitarás la línea de crédito que se asignará como método de pago para todas tus transacciones en nuestra plataforma StreamOne® ION.",
      instructions: [],
      notes: [],
      links: []
    },
    {
      id: "1.1",
      title: "Paso 1.1 | Hola TD SYNNEX",
      summary: "Para registrar tu cuenta como partner de TD SYNNEX accede al formulario de registro de Hola TD SYNNEX y cumplimenta toda la información solicitada.",
      meta: {
        badge_or_tag: "Tú eres el owner de este paso"
      },
      prerequisites: [
        "Prepara 1 documento acreditativo del epígrafe/actividad antes de comenzar.",
        "IAE (Impuesto de Actividades Económicas): Copia del último impuesto/recibo de pago donde se vea claramente el epígrafe.",
        "Declaración censal (036): Copia del modelo 036 donde se vea claramente el epígrafe en el que estás inscrito.",
        "Certificado AEAT: Copia del certificado de revendedor AEAT."
      ],
      instructions: [
        {
          title: "Pasos para el registro",
          bullets: [
            "Accede al formulario de registro de Hola TD SYNNEX: https://www.holatdsynnex.com/alta_cliente_td_synnex.html",
            "Haz clic en Alta Cliente TD SYNNEX",
            "Cumplimenta toda la información solicitada y lee y acepta los términos y condiciones de TD SYNNEX",
            "Haz lo mismo con las páginas siguientes",
            "Pulsa en Enviar para completar la solicitud"
          ]
        }
      ],
      notes: [
        {
          type: "note",
          text: "Si utilizas Growth Lab, recuerda Marcar este paso como completado una vez completes y envíes el formulario."
        }
      ],
      links: [
        {
          label: "Formulario de registro de Hola TD SYNNEX",
          href: "https://www.holatdsynnex.com/alta_cliente_td_synnex.html"
        },
        {
          label: "Términos y condiciones de TD SYNNEX",
          href: "https://eu.tdsynnex.com/terms-conditions"
        }
      ]
    },
    {
      id: "1.2",
      title: "Paso 1.2 | Tu cuenta de cliente",
      summary: "Tras enviar el formulario en Hola TD SYNNEX, nuestro equipo de Alta Clientes procederá con la revisión de la información aportada y procederá con la creación de tu cuenta de partner.",
      meta: {
        badge_or_tag: "TD SYNNEX es el owner de este paso"
      },
      instructions: [
        {
          title: "",
          bullets: [
            "En este punto es posible que nuestro equipo de altas te contacte para solicitarte información adicional en caso de ser preciso",
            "Si es el caso, recibirás un correo de altaclientes.es@tdsynnex.com",
            "Si no recibes confirmación en un plazo de 48 horas laborales, puedes contactar con: Alta Clientes ≫ altaclientes.es@tdsynnex.com",
            "Customer Success ≫ customersuccess.es@tdsynnex.com",
            "Tu CSM ≫ encontrarás su correo en Growth Lab",
            "Una vez creada tu cuenta recibirás una confirmación por correo electrónico de Alta Clientes"
          ]
        }
      ],
      notes: [
        {
          type: "note",
          text: "Si utilizas Growth Lab, recuerda Marcar este paso como completado una vez recibas confirmación de tu cuenta."
        }
      ],
      links: []
    },
    {
      id: "1.3",
      title: "Paso 1.3 | Solicitud de la línea de crédito",
      summary: "Ahora que ya dispones de tu cuenta de cliente en TD SYNNEX es momento de completar la solicitud de la línea de crédito con la que operará tu organización desde StreamOne® ION.",
      meta: {
        badge_or_tag: "Tú eres el owner de este paso"
      },
      instructions: [
        {
          title: "Solicitud SEPA B2B",
          bullets: [
            "Accede al formulario SEPA B2B: https://www.holatdsynnex.com/sepaB2B.html",
            "Inicia sesión con tu cuenta de TD SYNNEX",
            "Completa el formulario con toda la información solicitada y pulsa en Enviar SEPA",
            "Recibe un correo electrónico con un SEPA B2B adjunto, ya cumplimentado",
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
        {
          type: "note",
          text: "Si utilizas Growth Lab, recuerda Marcar este paso como completado una vez enviado el SEPA B2B y el certificado de titularidad."
        }
      ],
      links: [
        {
          label: "Formulario SEPA B2B",
          href: "https://www.holatdsynnex.com/sepaB2B.html"
        }
      ]
    },
    {
      id: "1.4",
      title: "Paso 1.4 | Asignación de condiciones de crédito",
      summary: "Tras completar y enviar el SEPA B2B y el certificado de titularidad, nuestro equipo financiero revisará la solicitud.",
      meta: {
        badge_or_tag: "TD SYNNEX es el owner de este paso"
      },
      instructions: [
        {
          title: "",
          bullets: [
            "Es posible que en este punto el equipo financiero o tu Customer Success Manager te solicite información adicional",
            "Esta información suele ser: Impuesto de sociedades de los dos últimos ejercicios, Balance de cuentas provisional, Último impuesto de sociedades",
            "Desde TD SYNNEX te confirmaremos una vez las condiciones de crédito hayan sido asignadas"
          ]
        }
      ],
      notes: [
        {
          type: "info",
          text: "Si utilizas Growth Lab, este paso se marcará como completado una vez tus condiciones de crédito queden autorizadas y operativas."
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
      summary: "Para completar el registro en AWS Partner Central necesitarás disponer previamente de una cuenta de AWS.",
      meta: {
        badge_or_tag: "Tú eres el owner de este paso"
      },
      instructions: [
        {
          title: "Proceso de registro",
          bullets: [
            "Ir a APN Marketing: Entra en la página de APN Marketing y haz clic en Become a partner",
            "Dispón de una cuenta de AWS designada: Debes usar una cuenta de AWS específica para registrar el servicio",
            "Contactar con el admin de IAM (si aplica): Puede que necesites soporte del administrador de IAM",
            "Elegir la cuenta de AWS correcta: Identifica la cuenta de AWS que se vinculará a Partner Central",
            "Aprovisionar permisos al alliance lead: El admin de IAM debe dar acceso en esa cuenta al usuario que hará el registro",
            "Iniciar sesión en AWS Console: El alliance lead entra en la Consola de AWS",
            "Abrir AWS Partner Central y empezar: En la consola, busca AWS Partner Central y pulsa Get started"
          ]
        }
      ],
      notes: [
        {
          type: "success",
          text: "Si tu organización ya dispone de AWS Partner Central, no crees uno nuevo, pasa directamente al paso 2.2."
        }
      ],
      links: [
        {
          label: "APN Marketing",
          href: "https://aws.amazon.com/partners/"
        },
        {
          label: "AWS Partner Central",
          href: "https://partnercentral.awspartner.com/partnercentral2/s/login"
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
