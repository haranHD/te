import type { CollectionConfig } from 'payload'
import { anyone, isEditor } from '../access'

export const Offices: CollectionConfig = {
  slug: 'offices',
  admin: { useAsTitle: 'city', defaultColumns: ['city', 'phone', 'order'], group: 'Content' },
  access: { read: anyone, create: isEditor, update: isEditor, delete: isEditor },
  fields: [
    { name: 'city', type: 'text', required: true },
    { name: 'isHeadOffice', type: 'checkbox', label: 'Head office', defaultValue: false },
    { name: 'addressLine1', type: 'text' },
    { name: 'addressLine2', type: 'text' },
    { name: 'state', type: 'text' },
    { name: 'pincode', type: 'text' },
    { name: 'phone', type: 'text' },
    { name: 'email', type: 'email' },
    {
      type: 'row',
      fields: [
        { name: 'latitude', type: 'number', admin: { width: '50%' } },
        { name: 'longitude', type: 'number', admin: { width: '50%' } },
      ],
    },
    {
      name: 'mapEmbedUrl',
      type: 'text',
      label: 'Google Maps embed URL',
      admin: { description: 'Optional: paste a Google Maps embed URL for this office.' },
    },
    { name: 'order', type: 'number', defaultValue: 0, admin: { position: 'sidebar' } },
  ],
}
