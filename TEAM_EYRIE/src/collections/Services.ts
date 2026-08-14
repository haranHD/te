import type { CollectionConfig } from 'payload'
import { anyone, isEditor } from '../access'
import { slugField } from '../fields/slug'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'order'],
    group: 'Content',
  },
  access: { read: anyone, create: isEditor, update: isEditor, delete: isEditor },
  fields: [
    { name: 'title', type: 'text', required: true },
    slugField('title'),
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      admin: { description: 'Short description shown on cards and listings.' },
    },
    { name: 'icon', type: 'upload', relationTo: 'media' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    {
      name: 'body',
      type: 'richText',
      admin: { description: 'Full page content for the service detail page.' },
    },
    {
      name: 'subServices',
      type: 'array',
      label: 'Sub-services',
      labels: { singular: 'Sub-service', plural: 'Sub-services' },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
      ],
    },
    {
      name: 'relatedIndustries',
      type: 'relationship',
      relationTo: 'industries',
      hasMany: true,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar', description: 'Controls display order (ascending).' },
    },
    {
      type: 'group',
      name: 'seo',
      label: 'SEO',
      admin: { position: 'sidebar' },
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
      ],
    },
  ],
}
