import type { CollectionConfig } from 'payload'
import { anyone, isStaff, isAdmin } from '../access'

/**
 * Audit trail of cookie-consent events (GDPR proof of consent).
 * Each accept / change / withdraw is stored as a new row, keyed by a
 * stable consentId so the full history for a browser can be reconstructed.
 */
export const ConsentLogs: CollectionConfig = {
  slug: 'consent-logs',
  labels: { singular: 'Consent Log', plural: 'Consent Logs' },
  admin: {
    useAsTitle: 'consentId',
    defaultColumns: ['consentId', 'action', 'statistics', 'marketing', 'createdAt'],
    group: 'Compliance',
  },
  access: {
    create: anyone, // recorded from the public cookie banner
    read: isStaff,
    update: () => false, // append-only audit trail
    delete: isAdmin,
  },
  fields: [
    { name: 'consentId', type: 'text', required: true, index: true },
    {
      name: 'action',
      type: 'select',
      required: true,
      options: [
        { label: 'Accepted', value: 'accepted' },
        { label: 'Updated', value: 'updated' },
        { label: 'Withdrawn', value: 'withdrawn' },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'necessary', type: 'checkbox', defaultValue: true, admin: { width: '25%' } },
        { name: 'preferences', type: 'checkbox', defaultValue: false, admin: { width: '25%' } },
        { name: 'statistics', type: 'checkbox', defaultValue: false, admin: { width: '25%' } },
        { name: 'marketing', type: 'checkbox', defaultValue: false, admin: { width: '25%' } },
      ],
    },
    { name: 'consentDate', type: 'date', admin: { date: { pickerAppearance: 'dayAndTime' } } },
    { name: 'url', type: 'text' },
    { name: 'userAgent', type: 'text' },
  ],
  hooks: {
    beforeChange: [
      ({ data, req, operation }) => {
        if (operation === 'create') {
          // Necessary cookies are always on; capture UA/date server-side.
          return {
            ...data,
            necessary: true,
            userAgent: data.userAgent || req.headers?.get?.('user-agent') || undefined,
            consentDate: data.consentDate || new Date().toISOString(),
          }
        }
        return data
      },
    ],
  },
}
