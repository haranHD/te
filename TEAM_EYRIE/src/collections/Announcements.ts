import type { CollectionConfig } from 'payload'
import { anyone, isEditor } from '../access'
import { slugField } from '../fields/slug'

export const Announcements: CollectionConfig = {
  slug: 'announcements',
  labels: { singular: 'Announcement / Insight', plural: 'Announcements & Insights' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedDate', 'status'],
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
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'News', value: 'news' },
        { label: 'Insight / Article', value: 'insight' },
        { label: 'Regulatory Update', value: 'regulatory' },
        { label: 'Event', value: 'event' },
      ],
    },
    { name: 'excerpt', type: 'textarea' },
    { name: 'coverImage', type: 'upload', relationTo: 'media' },
    { name: 'body', type: 'richText' },
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
    { name: 'publishedDate', type: 'date', admin: { position: 'sidebar' } },
  ],
}
