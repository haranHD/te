import type { GlobalConfig } from 'payload'
import { anyone, isEditor } from '../access'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Home Page',
  admin: { group: 'Content' },
  access: { read: anyone, update: isEditor },
  fields: [
    {
      type: 'group',
      name: 'hero',
      fields: [
        { name: 'eyebrow', type: 'text', defaultValue: 'India’s Integrated Professional Services Network' },
        { name: 'headline', type: 'text', defaultValue: 'Team Eyrie' },
        { name: 'subheadline', type: 'text', defaultValue: 'Together, We Create Value. Together, We Build Trust.' },
        { name: 'primaryCtaLabel', type: 'text', defaultValue: 'Contact Us' },
        { name: 'primaryCtaLink', type: 'text', defaultValue: '/contact' },
        { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      type: 'group',
      name: 'intro',
      label: 'About / Intro',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'About Team Eyrie' },
        { name: 'body', type: 'textarea' },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Stats / counters',
      admin: { description: 'Shown as a strip of highlight numbers on the homepage.' },
      fields: [
        { name: 'value', type: 'text', required: true, admin: { description: 'e.g. 20+ or 9' } },
        { name: 'label', type: 'text', required: true },
      ],
    },
    {
      type: 'group',
      name: 'process',
      label: 'How We Work',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'How We Work' },
        {
          name: 'steps',
          type: 'array',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea' },
          ],
        },
      ],
    },
  ],
}
