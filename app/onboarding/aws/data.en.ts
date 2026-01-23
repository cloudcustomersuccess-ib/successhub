export const guideData = {
  title: "Amazon Web Services Onboarding",
  intro: [
    "To complete the StreamOne© ION registration to work with Amazon Web Services, you must complete three main steps: registration with TD SYNNEX, configuration of your AWS Partner Central, and registration in our StreamOne© ION platform.",
    "Throughout this process, you will always be supported by the TD SYNNEX Cloud Customer Success team, who will assign a Customer Success Manager to guide you during the entire onboarding process."
  ],
  callouts: [
    {
      type: "info",
      text: "With Growth Lab you can track your registration process in real time without depending on anyone. This tool will be your best ally during your first steps in StreamOne© ION."
    }
  ],
  primaryCta: {
    type: "button",
    label: "Request StreamOne© ION registration"
  },
  preStepSection: {
    title: "About your registration process...",
    text: "If you are already a TD SYNNEX Iberia partner and have your credit line, you can move on to Step 2. If we do not yet have the pleasure, start from Step 1."
  },
  steps: [
    {
      id: "1",
      title: "Step 1. TD SYNNEX Registration",
      summary: "In this first step you will complete registration as a TD SYNNEX partner and, next, you will request the credit line that will be assigned as the payment method for all your transactions on our StreamOne© ION platform.",
      instructions: [],
      notes: [],
      links: []
    },
    {
      id: "1.1",
      title: "Step 1.1 | Hola TD SYNNEX",
      summary: "To register your account as a TD SYNNEX partner, access the Hola TD SYNNEX registration form and complete all the requested information.",
      meta: {
        badge_or_tag: "You are the owner of this step"
      },
      prerequisites: [
        "Prepare 1 supporting document for the business activity/epigraph before starting.",
        "IAE (Tax on Economic Activities): Copy of the latest tax/payment receipt showing the epigraph clearly.",
        "Census declaration (036): Copy of form 036 showing clearly the epigraph under which you are registered.",
        "AEAT Certificate: Copy of the AEAT reseller certificate."
      ],
      instructions: [
        {
          title: "Registration steps",
          bullets: [
            "Go to the Hola TD SYNNEX registration form: https://www.holatdsynnex.com/alta_cliente_td_synnex.html",
            "Click on TD SYNNEX Customer Registration",
            "Fill in all the requested information and read and accept the TD SYNNEX terms and conditions",
            "Do the same on the following pages",
            "Click Submit to complete the request"
          ]
        }
      ],
      notes: [
        {
          type: "note",
          text: "If you use Growth Lab, remember to mark this step as completed once you complete and submit the form."
        }
      ],
      links: [
        {
          label: "Hola TD SYNNEX registration form",
          href: "https://www.holatdsynnex.com/alta_cliente_td_synnex.html"
        },
        {
          label: "TD SYNNEX terms and conditions",
          href: "https://eu.tdsynnex.com/terms-conditions"
        }
      ]
    },
    {
      id: "1.2",
      title: "Step 1.2 | Your customer account",
      summary: "After submitting the form on Hola TD SYNNEX, our Customer Onboarding team will review the information provided and create your partner account.",
      meta: {
        badge_or_tag: "TD SYNNEX is the owner of this step"
      },
      instructions: [
        {
          title: "",
          bullets: [
            "At this point our onboarding team may contact you to request additional information if needed",
            "If so, you will receive an email from altaclientes.es@tdsynnex.com",
            "If you do not receive confirmation within 48 business hours, you can contact: Customer Onboarding - altaclientes.es@tdsynnex.com",
            "Customer Success - customersuccess.es@tdsynnex.com",
            "Your CSM - you will find their email in Growth Lab",
            "Once your account is created, you will receive a confirmation email from Customer Onboarding"
          ]
        }
      ],
      notes: [
        {
          type: "note",
          text: "If you use Growth Lab, remember to mark this step as completed once you receive confirmation of your account."
        }
      ],
      links: []
    },
    {
      id: "1.3",
      title: "Step 1.3 | Credit line request",
      summary: "Now that you have your TD SYNNEX customer account, it is time to complete the credit line request with which your organization will operate from StreamOne© ION.",
      meta: {
        badge_or_tag: "You are the owner of this step"
      },
      instructions: [
        {
          title: "SEPA B2B request",
          bullets: [
            "Access the SEPA B2B form: https://www.holatdsynnex.com/sepaB2B.html",
            "Log in with your TD SYNNEX account",
            "Complete the form with all the requested information and click Submit SEPA",
            "Receive an email with a SEPA B2B attached, already filled in",
            "Sign the document manually or digitally",
            "Return to the form and attach the signed SEPA B2B and the account ownership certificate"
          ]
        }
      ],
      accordion: [
        {
          question: "Why a credit line at TD SYNNEX?",
          answer: "Given the scalability capabilities of the Cloud products and services we offer at TD SYNNEX, we prefer to assign you a credit line so you are always covered and your business capabilities are not limited by prepaid conditions."
        },
        {
          question: "Is the credit line mandatory to complete registration?",
          answer: "Yes. To complete your StreamOne© ION registration process it is mandatory to have a credit line. You may be a TD SYNNEX customer and never needed one. This is because in other business areas of TD SYNNEX alternative payment methods are accepted."
        },
        {
          question: "How does the credit line work?",
          answer: "Once assigned, each purchase or transaction you make from StreamOne© ION that has an associated cost will be charged directly to your credit line. At the end of our billing cycle (~ mid next month) we will issue your invoices with the operation details and amount."
        },
        {
          question: "Can I change the amount of my credit line?",
          answer: "Yes. Initially the amount of your credit line is estimated based on the business forecast indicated during your registration process. The minimum amount is 2,000€ and the maximum will depend on your business forecast. You can request an increase to your credit line at any time."
        }
      ],
      assets: [
        {
          title: "SEPA B2B",
          type: "PDF"
        },
        {
          title: "Account ownership certificate",
          type: "PDF"
        }
      ],
      notes: [
        {
          type: "note",
          text: "If you use Growth Lab, remember to mark this step as completed once the SEPA B2B and the account ownership certificate have been sent."
        }
      ],
      links: [
        {
          label: "SEPA B2B form",
          href: "https://www.holatdsynnex.com/sepaB2B.html"
        }
      ]
    },
    {
      id: "1.4",
      title: "Step 1.4 | Assignment of credit conditions",
      summary: "After completing and submitting the SEPA B2B and the account ownership certificate, our finance team will review the request.",
      meta: {
        badge_or_tag: "TD SYNNEX is the owner of this step"
      },
      instructions: [
        {
          title: "",
          bullets: [
            "At this point the finance team or your Customer Success Manager may request additional information",
            "This information is usually: corporate tax returns for the last two years, provisional balance sheet, latest corporate tax return",
            "From TD SYNNEX we will confirm once the credit conditions have been assigned"
          ]
        }
      ],
      notes: [
        {
          type: "info",
          text: "If you use Growth Lab, this step will be marked as completed once your credit conditions are authorized and operational."
        }
      ],
      links: []
    },
    {
      id: "2",
      title: "Step 2. AWS Partner Central",
      summary: "In this second step of your registration process, the validation and configuration of your AWS Partner Central will be carried out, your AWS reseller account that you will use to transact in StreamOne© ION. This step consists of 5 actions that must be performed directly in your AWS Partner Central.",
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
      title: "Step 2.1 | AWS Partner Central registration",
      summary: "To complete registration in AWS Partner Central, you will need to have an AWS account beforehand.",
      meta: {
        badge_or_tag: "You are the owner of this step"
      },
      instructions: [
        {
          title: "Registration process",
          bullets: [
            "Go to APN Marketing: Go to the APN Marketing page and click Become a partner",
            "Have a designated AWS account: You must use a specific AWS account to register the service",
            "Contact the IAM admin (if applicable): You may need support from the IAM administrator",
            "Choose the correct AWS account: Identify the AWS account that will be linked to Partner Central",
            "Provision permissions to the alliance lead: The IAM admin must grant access in that account to the user who will perform the registration",
            "Sign in to the AWS Console: the alliance lead accesses the AWS Console",
            "Open AWS Partner Central and start: In the console, search for AWS Partner Central and click Get started"
          ]
        }
      ],
      notes: [
        {
          type: "success",
          text: "If your organization already has AWS Partner Central, do not create a new one, go directly to step 2.2."
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
      title: "Step 2.2 | Partner Path Enrollment",
      summary: "Once you have your AWS Partner Central account, you must enroll in the Partner Path that best fits your business model.",
      meta: {
        badge_or_tag: "You are the owner of this step"
      },
      instructions: [
        {
          title: "Enrollment process",
          bullets: [
            "Access your AWS Partner Central",
            "Stay on the Home page and scroll until you find the Partner Paths section",
            "Select the Services or Software Path as appropriate",
            "Click Enroll and accept the program terms and conditions"
          ]
        }
      ],
      accordion: [
        {
          title: "Services Path",
          content: "Focused on consulting, managed services and/or reselling services on AWS."
        },
        {
          title: "Software Path",
          content: "Focused on organizations that develop their own software based on or integrated with AWS."
        }
      ],
      notes: [
        {
          type: "note",
          text: "If you use Growth Lab, remember to mark this step as completed once you have enrolled in a Partner Path."
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
      title: "Step 2.3 | AWS Form",
      summary: "In this step you must complete the AWS form for TD SYNNEX. This form will allow TD SYNNEX to get a first impression of your AWS business model and configure your StreamOne© ION profile accordingly.",
      meta: {
        badge_or_tag: "You are the owner of this step"
      },
      instructions: [
        {
          title: "",
          bullets: [
            "Download form",
            "If you use Growth Lab, you will find this form in step 2.3"
          ]
        }
      ],
      notes: [
        {
          type: "info",
          text: "If you complete this form outside of Growth Lab, remember to send it to your Customer Success Manager or to customersuccess.es@tdsynnex.com."
        },
        {
          type: "note",
          text: "If you use Growth Lab, remember to mark this step as completed once you have filled out the form."
        }
      ],
      links: []
    },
    {
      id: "2.4",
      title: "Step 2.4 | Distribution Seller Agreement",
      summary: "Once the previous steps are completed, in order to establish the relationship with TD SYNNEX as the provider and your organization as the reseller, you must proceed with executing the Distributor Seller Agreement.",
      meta: {
        badge_or_tag: "You are the owner of this step"
      },
      instructions: [
        {
          title: "Agreement execution",
          bullets: [
            "Access AWS Partner Central",
            "Go to the Programs section in the top menu and select Engagement Requests",
            "Click Create application",
            "In the country selector, choose Spain or Portugal",
            "Select TD SYNNEX Corporation as the provider",
            "Validate the data and click Submit"
          ]
        }
      ],
      notes: [
        {
          type: "danger",
          text: "The final signature must be executed by the legal representative of your organization's AWS Partner Central. Without this signature, the agreement will not be valid and you will not be able to transact with AWS through StreamOne© ION."
        },
        {
          type: "note",
          text: "If you use Growth Lab, remember to mark this step as completed once you have executed the Distributor Seller Agreement."
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
      title: "Step 2.5 | AWS Marketplace Account",
      summary: "Link the AWS Partner Central account with the AWS Marketplace seller account.",
      meta: {
        badge_or_tag: "You are the owner of this step"
      },
      prerequisites: [
        "Requirement: Alliance Lead or Cloud Admin role",
        "During the flow, standard IAM roles are created/assigned"
      ],
      instructions: [
        {
          title: "Account linking",
          bullets: [
            "Log in to AWS Partner Central as Alliance Lead or Cloud Administrator",
            "On the Home page select Link Account (top right)",
            "Click Continue with account linking and then Start account linking",
            "The AWS Console will open. Verify the AWS Account ID",
            "Click Next",
            "Select the boxes as applicable: Cloud Admin IAM role, Alliance team IAM role, ACE IAM role",
            "Finally, click Next → Link accounts and verify confirmation"
          ]
        }
      ],
      notes: [
        {
          type: "note",
          text: "If you use Growth Lab, remember to mark this step as completed once you have linked your AWS Marketplace Account."
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
      title: "Step 3. StreamOne© ION Registration",
      summary: "In this last step you will complete registration in StreamOne© ION. If you already have an account because you are working with another vendor, you can start at step 3.3.",
      instructions: [],
      notes: [],
      links: []
    },
    {
      id: "3.1",
      title: "Step 3.1 | StreamOne© ION terms and conditions",
      summary: "Once you finish the previous step, TD SYNNEX will send you an email with the terms and conditions of our StreamOne ION platform.",
      meta: {
        badge_or_tag: "You are the owner of this step"
      },
      instructions: [
        {
          title: "Acceptance of terms",
          bullets: [
            "Find the email with the subject: TD SYNNEX - Streamone Ion Platform Agreement Terms - Please Acknowledge",
            "Open the provided link",
            "Review your organization's information",
            "Read the StreamOne ION terms and conditions",
            "Accept the terms and click Next to sign the contract"
          ]
        }
      ],
      animations: [
        {
          description: "Expected email",
          payload: [
            "Subject: TD SYNNEX - Streamone Ion Platform Agreement Terms - Please Acknowledge",
            "From: no-reply@bryter.io"
          ]
        }
      ],
      notes: [
        {
          type: "info",
          text: "You can forward this email to your organization's legal representative for signature."
        },
        {
          type: "note",
          text: "If you use Growth Lab, remember to mark this step as completed once you have accepted the StreamOne© ION terms and conditions."
        }
      ],
      links: []
    },
    {
      id: "3.2",
      title: "Step 3.2 | Generation of your StreamOne© ION profile",
      summary: "After accepting the platform's terms and conditions, within a few hours (during business hours) you will receive an email from businessexperiencesu@techdata.com confirming your account.",
      meta: {
        badge_or_tag: "TD SYNNEX is the owner of this step"
      },
      instructions: [
        {
          title: "",
          bullets: [
            "To generate your password for the first time, access StreamOne© ION and use Forgot Password"
          ]
        }
      ],
      animations: [
        {
          description: "Expected email",
          payload: [
            "Subject: StreamOne© ION Platform Credentials",
            "From: businessexperiencesu@techdata.com"
          ]
        }
      ],
      notes: [],
      links: [
        {
          label: "StreamOne© ION",
          href: "https://ion.tdsynnex.com/v2/login"
        }
      ]
    },
    {
      id: "3.3",
      title: "Step 3.3 | Amazon Web Services program request",
      summary: "Once you have your StreamOne ION credentials, request the AWS Solutions Provider or AWS Technology Program (depending on your Partner Path).",
      meta: {
        badge_or_tag: "You are the owner of this step"
      },
      instructions: [
        {
          title: "Program request",
          bullets: [
            "Access StreamOne© ION",
            "Go to the Partners section in the top menu",
            "Double-click on TD SYNNEX",
            "Select the Programs option from the left menu",
            "Find and select the AWS Solutions Provider or AWS Technology Program",
            "With the program selected, click the Request option"
          ]
        }
      ],
      notes: [
        {
          type: "warning",
          text: "Make sure you request the correct program, as you will find programs with similar names. Requesting the wrong program will automatically decline the request."
        },
        {
          type: "note",
          text: "If you use Growth Lab, remember to mark this step as completed once you have requested the AWS program."
        }
      ],
      links: [
        {
          label: "StreamOne© ION",
          href: "https://ion.tdsynnex.com/v2/login"
        }
      ]
    },
    {
      id: "3.4",
      title: "Step 3.4 | Amazon Web Services program authorization",
      summary: "After requesting the Amazon Web Services program on the platform, TD SYNNEX will review the request and authorize installation of the program in your StreamOne ION profile.",
      meta: {
        badge_or_tag: "TD SYNNEX is the owner of this step"
      },
      instructions: [
        {
          title: "",
          bullets: [
            "Program authorization, if the previous steps have been completed correctly, usually takes around 3 hours",
            "Once the AWS program is authorized in your account, your Customer Success Manager will confirm the completion of your onboarding"
          ]
        }
      ],
      notes: [],
      links: []
    }
  ]
};
