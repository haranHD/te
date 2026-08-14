import type { CollectionConfig } from 'payload'
import { anyone, isStaff, isAdmin, isStaffField } from '../access'

export const ContactLeads: CollectionConfig = {
  slug: 'contact-leads',
  labels: { singular: 'Enquiry', plural: 'Enquiries' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'subject', 'status', 'createdAt'],
    group: 'Enquiries',
  },
  access: {
    create: anyone, // public contact form
    read: isStaff,
    update: isStaff,
    delete: isAdmin,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'company', type: 'text' },
    { name: 'subject', type: 'text' },
    { name: 'message', type: 'textarea', required: true },
    {
      name: 'serviceInterest',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
    },
    { name: 'office', type: 'relationship', relationTo: 'offices' },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      admin: { position: 'sidebar' },
      access: { create: isStaffField, update: isStaffField },
      options: [
        { label: 'New', value: 'new' },
        { label: 'In progress', value: 'in-progress' },
        { label: 'Responded', value: 'responded' },
        { label: 'Closed', value: 'closed' },
      ],
    },
  ],
}
