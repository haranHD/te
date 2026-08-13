import type { CollectionConfig } from 'payload'

const isStaff = ({ req: { user } }: { req: { user?: { role?: string } | null } }) =>
  Boolean(user)

export const Media: CollectionConfig = {
  slug: 'media',
  admin: { group: 'Content' },
  access: {
    read: () => true, // public assets
    create: isStaff,
    update: isStaff,
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*', 'video/*', 'application/pdf'],
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
      { name: 'card', width: 768, height: 512, position: 'centre' },
      { name: 'hero', width: 1920, height: undefined },
    ],
  },
  fields: [
    { name: 'alt', type: 'text', label: 'Alt text', required: true },
    { name: 'caption', type: 'text' },
  ],
}
