import type { CollectionConfig } from 'payload'
import { anyone, isEditor } from '../access'
import { slugField } from '../fields/slug'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  labels: { singular: 'Professional', plural: 'Professionals' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'designation', 'order'],
    group: 'People',
  },
  access: { read: anyone, create: isEditor, update: isEditor, delete: isEditor },
  fields: [
    { name: 'name', type: 'text', required: true },
    slugField('name'),
    { name: 'designation', type: 'text', required: true },
    {
      name: 'qualifications',
      type: 'text',
      admin: { description: 'e.g. FCA, CS, LLB' },
    },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    { name: 'bio', type: 'richText' },
    {
      name: 'expertise',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      label: 'Areas of expertise',
    },
    { name: 'offices', type: 'relationship', relationTo: 'offices', hasMany: true },
    {
      type: 'group',
      name: 'contact',
      fields: [
        { name: 'email', type: 'email' },
        { name: 'phone', type: 'text' },
        { name: 'linkedin', type: 'text', label: 'LinkedIn URL' },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar', description: 'Show on the homepage / leadership section.' },
    },
    { name: 'order', type: 'number', defaultValue: 0, admin: { position: 'sidebar' } },
  ],
}
