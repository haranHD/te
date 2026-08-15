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

const dbUrl =
  process.env.DATABASE_URL ||
  process.env.DATABASE_URI ||
  process.env.POSTGRES_URL ||
  ''

const isLocalDb = !dbUrl || dbUrl.includes('127.0.0.1') || dbUrl.includes('localhost')

if (dbUrl) {
  try {
    const sanitized = dbUrl.replace(/^postgres(ql)?:/, 'http:')
    const parsed = new URL(sanitized)
    console.log(`[Payload DB] Connecting to database host: ${parsed.hostname}`)
  } catch {
    console.log('[Payload DB] Connecting with provided connection string.')
  }
} else {
  console.warn('[Payload DB] ⚠️ WARNING: No DATABASE_URL found in environment variables! Falling back to localhost:5432.')
}

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
      connectionString: dbUrl,
      ssl: isLocalDb ? false : { rejectUnauthorized: false },
    },
  }),
  sharp,
  upload: {
    limits: {
      fileSize: 10_000_000, // 10 MB
    },
  },
})
