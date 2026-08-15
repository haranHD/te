import type { GlobalConfig } from 'payload'
import { anyone, isAdmin } from '../access'

/**
 * DPDP consent configuration (admin-managed).
 * Holds the candidate-facing consent notice, grievance-officer contact and
 * retention policy. Edit access is admin-only (compliance-critical content).
 *
 * Safeguard 2: `versions` keeps a full history of every wording change.
 * (Safeguard 1 — snapshotting the agreed text onto each application — lives in
 * the /apply route + JobApplications.consentTextSnapshot field.)
 */
export const ConsentSettings: GlobalConfig = {
  slug: 'consent-settings',
  label: 'Consent Settings',
  admin: { group: 'Compliance' },
  access: { read: anyone, update: isAdmin },
  versions: { max: 50, drafts: false },
  fields: [
    {
      type: 'group',
      name: 'notice',
      label: 'Consent Notice',
      admin: { description: 'Legally significant — review before editing. Changes are version-tracked.' },
      fields: [
        {
          name: 'version',
          type: 'text',
          required: true,
          defaultValue: 'v1',
          admin: { description: 'Bump this whenever the wording below changes (e.g. v1 → v2).' },
        },
        {
          name: 'checkboxLabel',
          type: 'textarea',
          required: true,
          admin: { description: 'The itemised consent text shown beside the checkbox.' },
        },
        {
          name: 'reassuranceLine',
          type: 'textarea',
          admin: { description: 'Short security/privacy note shown below the checkbox.' },
        },
      ],
    },
    {
      type: 'group',
      name: 'grievanceOfficer',
      label: 'Grievance Officer',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'email', type: 'email' },
        { name: 'phone', type: 'text' },
      ],
    },
    {
      name: 'retentionPeriodMonths',
      type: 'number',
      label: 'Data retention period (months)',
      admin: { description: 'How long candidate application data is retained.' },
    },
    {
      type: 'group',
      name: 'withdrawalEmail',
      label: 'Acknowledgement / Withdrawal Email',
      fields: [
        { name: 'subject', type: 'text', defaultValue: 'Your application to Team Eyrie' },
        {
          name: 'body',
          type: 'textarea',
          admin: {
            description:
              'Placeholders: {{name}}, {{jobTitle}}, {{withdrawUrl}}. The withdrawal link is appended automatically if {{withdrawUrl}} is omitted.',
          },
        },
      ],
    },
    {
      name: 'privacyNotice',
      type: 'textarea',
      label: 'Candidate privacy notice (or link)',
    },
  ],
}
