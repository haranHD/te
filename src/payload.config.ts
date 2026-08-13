import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Services } from './collections/Services'
import { Industries } from './collections/Industries'
import { Offices } from './collections/Offices'
import { TeamMembers } from './collections/TeamMembers'
import { Jobs } from './collections/Jobs'
import { JobApplications } from './collections/JobApplications'
import { ContactLeads } from './collections/ContactLeads'
import { Announcements } from './collections/Announcements'
import { Testimonials } from './collections/Testimonials'
import { CaseStudies } from './collections/CaseStudies'
import { ConsentLogs } from './collections/ConsentLogs'
import { SiteSettings } from './globals/SiteSettings'
import { HomePage } from './globals/HomePage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: {
      titleSuffix: '— Team Eyrie CMS',
    },
  },
  collections: [
    Users,
    Media,
    Services,
    Industries,
    Offices,
    TeamMembers,
    Jobs,
    JobApplications,
    ContactLeads,
    Announcements,
    Testimonials,
    CaseStudies,
    ConsentLogs,
  ],
  globals: [SiteSettings, HomePage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  upload: {
    limits: {
      fileSize: 10_000_000, // 10 MB
    },
  },
})
