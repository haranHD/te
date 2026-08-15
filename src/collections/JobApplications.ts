import type { CollectionConfig } from 'payload'
import { anyone, isRecruiter, isAdmin, isRecruiterField } from '../access'

export const JobApplications: CollectionConfig = {
  slug: 'job-applications',
  labels: { singular: 'Application', plural: 'Applications' },
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'job', 'stage', 'createdAt'],
    group: 'Recruitment',
  },
  access: {
    // Public can APPLY (create) but never read; recruiters manage.
    create: anyone,
    read: isRecruiter,
    update: isRecruiter,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'job',
      type: 'relationship',
      relationTo: 'jobs',
      required: true,
    },
    { name: 'fullName', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text', required: true },
    {
      name: 'resume',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: { description: 'Uploaded résumé / CV (PDF or document).' },
    },
    { name: 'currentEmployer', type: 'text' },
    { name: 'totalExperience', type: 'number', label: 'Total experience (yrs)' },
    { name: 'noticePeriod', type: 'text' },
    { name: 'coverLetter', type: 'textarea' },
    { name: 'linkedin', type: 'text', label: 'LinkedIn URL' },
    {
      name: 'stage',
      type: 'select',
      defaultValue: 'new',
      admin: { position: 'sidebar', description: 'Recruitment pipeline stage.' },
      access: { create: isRecruiterField, update: isRecruiterField },
      options: [
        { label: 'New', value: 'new' },
        { label: 'Shortlisted', value: 'shortlisted' },
        { label: 'Interview', value: 'interview' },
        { label: 'Offer', value: 'offer' },
        { label: 'Hired', value: 'hired' },
        { label: 'Rejected', value: 'rejected' },
      ],
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
      admin: { position: 'sidebar' },
      access: { create: isRecruiterField, update: isRecruiterField },
    },
    {
      name: 'notes',
      type: 'array',
      admin: { description: 'Internal recruiter notes / interview feedback.' },
      access: { create: isRecruiterField, update: isRecruiterField, read: isRecruiterField },
      fields: [
        { name: 'note', type: 'textarea', required: true },
        {
          name: 'author',
          type: 'relationship',
          relationTo: 'users',
          admin: { readOnly: true },
        },
      ],
    },
    // ---- DPDP consent (captured server-side by /apply) ----
    {
      name: 'consentStatus',
      type: 'select',
      defaultValue: 'active',
      admin: { position: 'sidebar', description: 'DPDP consent state.', readOnly: true },
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Withdrawn', value: 'withdrawn' },
      ],
    },
    { name: 'withdrawnAt', type: 'date', admin: { position: 'sidebar', readOnly: true } },
    {
      type: 'collapsible',
      label: 'Consent record (DPDP)',
      admin: { initCollapsed: true },
      fields: [
        { name: 'consentGiven', type: 'checkbox', defaultValue: false, admin: { readOnly: true } },
        { name: 'consentAt', type: 'date', admin: { readOnly: true, date: { pickerAppearance: 'dayAndTime' } } },
        { name: 'consentVersion', type: 'text', admin: { readOnly: true } },
        {
          name: 'consentTextSnapshot',
          type: 'textarea',
          admin: { readOnly: true, description: 'Immutable copy of the exact notice the candidate agreed to (Safeguard 1).' },
        },
        { name: 'consentIp', type: 'text', admin: { readOnly: true } },
        { name: 'consentUserAgent', type: 'text', admin: { readOnly: true } },
      ],
    },
    {
      name: 'withdrawalToken',
      type: 'text',
      index: true,
      admin: { hidden: true },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, req, operation }) => {
        // Public applications always start at "new"; force it on create.
        if (operation === 'create' && !req.user) {
          return { ...data, stage: 'new' }
        }
        return data
      },
    ],
  },
}
