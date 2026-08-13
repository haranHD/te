import type { CollectionConfig } from 'payload'
import { anyone, isEditor } from '../access'
import { slugField } from '../fields/slug'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  labels: { singular: 'Case Study', plural: 'Case Studies' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'clientName', 'status', 'order'],
    group: 'Content',
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true
      return { status: { equals: 'published' } }
    },
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    slugField('title'),
    { name: 'clientName', type: 'text', label: 'Client (optional)' },
    { name: 'summary', type: 'textarea' },
    { name: 'coverImage', type: 'upload', relationTo: 'media' },
    { name: 'challenge', type: 'textarea', label: 'The challenge' },
    { name: 'solution', type: 'richText', label: 'Our approach / solution' },
    { name: 'outcome', type: 'textarea', label: 'The outcome' },
    {
      name: 'results',
      type: 'array',
      label: 'Key results (metrics)',
      fields: [
        { name: 'value', type: 'text', required: true, admin: { description: 'e.g. 30% or ₹2 Cr' } },
        { name: 'label', type: 'text', required: true },
      ],
    },
    { name: 'industries', type: 'relationship', relationTo: 'industries', hasMany: true },
    { name: 'services', type: 'relationship', relationTo: 'services', hasMany: true },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      admin: { position: 'sidebar' },
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
    { name: 'order', type: 'number', defaultValue: 0, admin: { position: 'sidebar' } },
  ],
}
