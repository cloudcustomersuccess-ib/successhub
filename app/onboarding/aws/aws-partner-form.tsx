'use client';

import { useMemo, useState } from 'react';
import { jsPDF } from 'jspdf';
import { FileDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type BinaryAnswer = 'YES' | 'NO' | '';

type AwsPartnerFormState = {
  partnerLegalName: string;
  legalRepresentativeName: string;
  emailAddress: string;
  awsPartnerPathType: string;
  awsPartnerTier: string;
  apnId: string;
  solutionProvider: BinaryAnswer;
  awsCompetencies: BinaryAnswer;
  reservedInstances: BinaryAnswer;
  dedicatedAwsOrganisationSetup: BinaryAnswer;
  customerDedicatedOrganisationSetup: BinaryAnswer;
  supportPlan: string;
};

const initialState: AwsPartnerFormState = {
  partnerLegalName: '',
  legalRepresentativeName: '',
  emailAddress: '',
  awsPartnerPathType: '',
  awsPartnerTier: '',
  apnId: '',
  solutionProvider: 'YES',
  awsCompetencies: 'NO',
  reservedInstances: 'NO',
  dedicatedAwsOrganisationSetup: 'NO',
  customerDedicatedOrganisationSetup: 'NO',
  supportPlan: '',
};

const pathOptions = ['Services', 'Software'];
const tierOptions = ['Registered', 'Advanced', 'Premier'];

const pdfFields: Array<{ title: string; value: (state: AwsPartnerFormState) => string }> = [
  { title: 'Partner Legal Name:', value: (state) => state.partnerLegalName },
  { title: 'Name of legal representative:', value: (state) => state.legalRepresentativeName },
  { title: 'Email address:', value: (state) => state.emailAddress },
  { title: 'AWS Partner path type:', value: (state) => state.awsPartnerPathType },
  { title: 'AWS Partner tier:', value: (state) => state.awsPartnerTier },
  { title: 'APN ID:', value: (state) => state.apnId },
  { title: 'Solution provider:', value: (state) => state.solutionProvider },
  { title: 'Do you have any AWS Competencies?', value: (state) => state.awsCompetencies },
  { title: 'Do you have any Reserved Instances?', value: (state) => state.reservedInstances },
  { title: 'Do you have/require any Dedicated AWS Organisation set-up:', value: (state) => state.dedicatedAwsOrganisationSetup },
  { title: 'Do your Customers have/require any Dedication Organisation set-up:', value: (state) => state.customerDedicatedOrganisationSetup },
  {
    title: 'Please specify below the existing level of support plan for the account that you are moving to us:',
    value: (state) => state.supportPlan,
  },
];

function BinaryChoice({
  name,
  label,
  value,
  onChange,
}: {
  name: string;
  label: string;
  value: BinaryAnswer;
  onChange: (value: BinaryAnswer) => void;
}) {
  return (
    <Field
      orientation="horizontal"
      className="border-b border-slate-200/80 pb-5 last:border-b-0 last:pb-0"
    >
      <div className="space-y-1">
        <p className="text-sm font-medium text-slate-700">{label}</p>
      </div>

      <div className="flex items-center gap-2" role="radiogroup" aria-label={label}>
        {(['YES', 'NO'] as const).map((option) => {
          const active = value === option;
          const id = `${name}-${option.toLowerCase()}`;

          return (
            <label
              key={option}
              htmlFor={id}
              className={cn(
                'inline-flex h-9 min-w-16 cursor-pointer items-center justify-center rounded-md border px-3 text-sm font-medium transition-colors',
                active
                  ? 'border-[#005657] bg-[#005657]/6 text-[#005657]'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-700'
              )}
            >
              <input
                id={id}
                type="radio"
                name={name}
                value={option}
                checked={active}
                onChange={() => onChange(option)}
                className="sr-only"
              />
              {option}
            </label>
          );
        })}
      </div>
    </Field>
  );
}

function RequiredMark() {
  return <span className="ml-1 text-[#005657]">*</span>;
}

function buildPdf(state: AwsPartnerFormState) {
  const doc = new jsPDF({
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginX = 48;
  const maxWidth = pageWidth - marginX * 2;
  let y = 56;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('AWS Partner Form', marginX, y);
  y += 24;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(100, 116, 139);
  doc.text('Generated from Success Hub', marginX, y);
  y += 28;

  const ensureSpace = (height: number) => {
    if (y + height > pageHeight - 48) {
      doc.addPage();
      y = 56;
    }
  };

  pdfFields.forEach((field) => {
    const rawValue = field.value(state) || '-';
    const valueLines = doc.splitTextToSize(rawValue, maxWidth);
    const titleLines = doc.splitTextToSize(field.title, maxWidth);
    const blockHeight = titleLines.length * 14 + valueLines.length * 16 + 20;

    ensureSpace(blockHeight);

    doc.setDrawColor(226, 232, 240);
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(marginX, y, maxWidth, blockHeight, 10, 10, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(titleLines, marginX + 16, y + 20);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(51, 65, 85);
    doc.text(valueLines, marginX + 16, y + 20 + titleLines.length * 14 + 8);

    y += blockHeight + 12;
  });

  doc.save('aws-partner-form.pdf');
}

export function AwsPartnerForm() {
  const [form, setForm] = useState<AwsPartnerFormState>(initialState);

  const isComplete = useMemo(
    () =>
      Object.values(form).every((value) => typeof value === 'string' && value.trim().length > 0),
    [form]
  );

  const updateField = <K extends keyof AwsPartnerFormState>(key: K, value: AwsPartnerFormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  return (
    <section className="mt-8 border-t border-slate-200 pt-8">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#005657]">
          Formulario interactivo
        </p>
        <h4 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
          Completa el formulario de AWS desde Success Hub
        </h4>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Usa este formulario para completar la información y descargar después un PDF con los
          títulos exactamente en inglés, tal y como aparecen en el documento original.
        </p>
      </div>

      <form className="w-full max-w-2xl" onSubmit={(event) => event.preventDefault()}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Datos legales</FieldLegend>
            <FieldDescription>
              Completa la información básica de tu organización y de la persona representante.
            </FieldDescription>
            <div className="grid gap-5 md:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="partnerLegalName">
                  Razón social
                  <RequiredMark />
                </FieldLabel>
                <Input
                  id="partnerLegalName"
                  placeholder="TD SYNNEX Example S.L."
                  value={form.partnerLegalName}
                  onChange={(event) => updateField('partnerLegalName', event.target.value)}
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="legalRepresentativeName">
                  Nombre del representante legal
                  <RequiredMark />
                </FieldLabel>
                <Input
                  id="legalRepresentativeName"
                  placeholder="Nombre y apellidos"
                  value={form.legalRepresentativeName}
                  onChange={(event) => updateField('legalRepresentativeName', event.target.value)}
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="emailAddress">
                  Correo electrónico
                  <RequiredMark />
                </FieldLabel>
                <Input
                  id="emailAddress"
                  type="email"
                  placeholder="nombre@empresa.com"
                  value={form.emailAddress}
                  onChange={(event) => updateField('emailAddress', event.target.value)}
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="apnId">
                  APN ID
                  <RequiredMark />
                </FieldLabel>
                <Input
                  id="apnId"
                  placeholder="123456"
                  value={form.apnId}
                  onChange={(event) => updateField('apnId', event.target.value)}
                  required
                />
              </Field>
            </div>
          </FieldSet>

          <FieldSeparator />

          <FieldSet>
            <FieldLegend>Perfil de partner en AWS</FieldLegend>
            <FieldDescription>
              Selecciona únicamente las opciones válidas para el alta y la clasificación del
              partner.
            </FieldDescription>
            <div className="grid gap-5 md:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="awsPartnerPathType">
                  AWS Partner Path
                  <RequiredMark />
                </FieldLabel>
                <Select
                  value={form.awsPartnerPathType}
                  onValueChange={(value) => updateField('awsPartnerPathType', value)}
                >
                  <SelectTrigger id="awsPartnerPathType" aria-label="AWS Partner Path">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {pathOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>

              <Field>
                <FieldLabel htmlFor="awsPartnerTier">
                  Tier
                  <RequiredMark />
                </FieldLabel>
                <Select
                  value={form.awsPartnerTier}
                  onValueChange={(value) => updateField('awsPartnerTier', value)}
                >
                  <SelectTrigger id="awsPartnerTier" aria-label="Tier">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {tierOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </FieldSet>

          <FieldSeparator />

          <FieldSet>
            <FieldLegend>Capacidades y configuración</FieldLegend>
            <FieldDescription>
              Marca <span className="font-medium text-slate-700">YES</span> o{' '}
              <span className="font-medium text-slate-700">NO</span> en cada pregunta para incluir
              esa respuesta en el PDF final.
            </FieldDescription>
            <FieldGroup>
              <BinaryChoice
                name="solutionProvider"
                label="¿Eres solution provider?"
                value={form.solutionProvider}
                onChange={(value) => updateField('solutionProvider', value)}
              />
              <BinaryChoice
                name="awsCompetencies"
                label="¿Tienes AWS Competencies?"
                value={form.awsCompetencies}
                onChange={(value) => updateField('awsCompetencies', value)}
              />
              <BinaryChoice
                name="reservedInstances"
                label="¿Tienes Reserved Instances?"
                value={form.reservedInstances}
                onChange={(value) => updateField('reservedInstances', value)}
              />
              <BinaryChoice
                name="dedicatedAwsOrganisationSetup"
                label="¿Tienes o necesitas una Dedicated AWS Organisation?"
                value={form.dedicatedAwsOrganisationSetup}
                onChange={(value) => updateField('dedicatedAwsOrganisationSetup', value)}
              />
              <BinaryChoice
                name="customerDedicatedOrganisationSetup"
                label="¿Tus clientes tienen o necesitan una Dedicated Organisation?"
                value={form.customerDedicatedOrganisationSetup}
                onChange={(value) => updateField('customerDedicatedOrganisationSetup', value)}
              />
            </FieldGroup>
          </FieldSet>

          <FieldSeparator />

          <FieldSet>
            <FieldLegend>Support plan</FieldLegend>
            <FieldDescription>
              Indica el nivel actual del plan de soporte de la cuenta que vais a mover.
            </FieldDescription>
            <Field>
              <FieldLabel htmlFor="supportPlan">
                Nivel actual del support plan
                <RequiredMark />
              </FieldLabel>
              <Input
                id="supportPlan"
                placeholder="Describe aquí el support plan actual"
                value={form.supportPlan}
                onChange={(event) => updateField('supportPlan', event.target.value)}
                required
              />
            </Field>
          </FieldSet>

          <FieldSeparator />

          <Field
            orientation="horizontal"
            className="items-start border-t border-transparent pt-0 sm:items-center"
          >
            <FieldDescription className="max-w-xl">
              El botón de descarga se habilita automáticamente cuando todos los campos obligatorios
              están completos.
            </FieldDescription>
            <Button
              type="button"
              size="lg"
              onClick={() => buildPdf(form)}
              disabled={!isComplete}
              className={cn(
                'min-w-[220px] self-start sm:self-auto',
                isComplete
                  ? 'bg-[#005657] text-white hover:bg-[#003f40]'
                  : 'bg-slate-200 text-slate-500 hover:bg-slate-200'
              )}
            >
              <FileDown className="h-4 w-4" />
              Descargar PDF
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </section>
  );
}
