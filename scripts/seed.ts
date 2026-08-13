import { getPayload } from 'payload'
import config from '../src/payload.config'

const ADMIN_EMAIL = process.env.SEED_ADMIN_EMAIL || 'admin@teameyrie.local'
const ADMIN_PASSWORD = process.env.SEED_ADMIN_PASSWORD || 'Admin@12345'

const services: { title: string; summary: string; subServices: string[] }[] = [
  {
    title: 'Assurance & Audit',
    summary: 'Independent assurance and audit services that strengthen confidence in financial reporting and internal controls.',
    subServices: ['Statutory Audit', 'Internal Audit', 'Bank Audit', 'Concurrent Audit', 'Tax Audit', 'Due Diligence', 'Risk Advisory', 'Internal Financial Controls (IFC)', 'Forensic Reviews'],
  },
  {
    title: 'Tax Advisory',
    summary: 'End-to-end direct tax advisory, litigation and international tax structuring for individuals and enterprises.',
    subServices: ['Direct Tax', 'Income Tax Litigation', 'International Taxation', 'Transfer Pricing', 'Expatriate Taxation', 'Tax Structuring', 'FEMA Advisory'],
  },
  {
    title: 'GST & Indirect Taxes',
    summary: 'Comprehensive GST, customs and foreign trade advisory, compliance and litigation support.',
    subServices: ['GST Advisory', 'GST Compliance', 'GST Litigation', 'Customs', 'Foreign Trade Policy Advisory'],
  },
  {
    title: 'Corporate & Regulatory Advisory',
    summary: 'Company law, secretarial and regulatory compliance across the RBI, FEMA, SEBI and ROC frameworks.',
    subServices: ['Company Law', 'LLP Advisory', 'Secretarial Compliance', 'Corporate Governance', 'RBI & FEMA Compliance', 'SEBI Advisory', 'ROC Compliance'],
  },
  {
    title: 'Business Consulting',
    summary: 'Strategy, structuring and virtual CFO services that drive performance and sustainable growth.',
    subServices: ['Business Structuring', 'Financial Modelling', 'Business Process Improvement', 'Virtual CFO Services', 'Performance Management', 'Strategic Planning'],
  },
  {
    title: 'Transaction Advisory',
    summary: 'Fund raising, M&A, private equity and restructuring advisory across the transaction lifecycle.',
    subServices: ['Start-up Advisory', 'Venture Capital Advisory', 'Private Equity Advisory', 'Investor Due Diligence', 'Fund Raising', 'Mergers & Acquisitions', 'Corporate Restructuring'],
  },
  {
    title: 'Family Business Advisory',
    summary: 'Succession, governance and wealth preservation for family-owned enterprises across generations.',
    subServices: ['Family Constitution', 'Family Settlement', 'Succession Planning', 'Estate Planning', 'Governance Framework', 'Wealth Preservation'],
  },
  {
    title: 'Global Business Services',
    summary: 'Cross-border structuring, overseas investment and NRI taxation for global expansion.',
    subServices: ['Cross-Border Transactions', 'International Business Structuring', 'Overseas Investment Advisory', 'NRI Taxation', 'Global Expansion Support'],
  },
]

const industries = [
  'Manufacturing', 'Banking & Financial Services', 'NBFCs', 'Information Technology', 'Healthcare',
  'Infrastructure', 'Real Estate', 'Hospitality', 'Retail', 'E-Commerce', 'Logistics',
  'Renewable Energy', 'Education', 'Start-ups', 'MSMEs', 'Family-Owned Businesses',
  'Trusts & Non-Profit Organisations',
]

const offices = [
  { city: 'Chennai', isHeadOffice: true },
  { city: 'Bengaluru' }, { city: 'Mumbai' }, { city: 'New Delhi' }, { city: 'Goa' },
  { city: 'Salem' }, { city: 'Madurai' }, { city: 'Namakkal' }, { city: 'Mysuru' },
]

const run = async () => {
  const payload = await getPayload({ config })

  // 1. Admin user
  const existingUsers = await payload.count({ collection: 'users' })
  if (existingUsers.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: { name: 'Team Eyrie Admin', email: ADMIN_EMAIL, password: ADMIN_PASSWORD, role: 'admin' },
    })
    payload.logger.info(`Created admin user: ${ADMIN_EMAIL} / ${ADMIN_PASSWORD}`)
  } else {
    payload.logger.info('Users already exist — skipping admin creation.')
  }

  // 2. Services
  const svcCount = await payload.count({ collection: 'services' })
  if (svcCount.totalDocs === 0) {
    for (let i = 0; i < services.length; i++) {
      const s = services[i]
      await payload.create({
        collection: 'services',
        data: {
          title: s.title,
          summary: s.summary,
          order: i,
          subServices: s.subServices.map((name) => ({ name })),
        },
      })
    }
    payload.logger.info(`Seeded ${services.length} services.`)
  } else {
    payload.logger.info('Services already exist — skipping.')
  }

  // 3. Industries
  const indCount = await payload.count({ collection: 'industries' })
  if (indCount.totalDocs === 0) {
    for (let i = 0; i < industries.length; i++) {
      await payload.create({ collection: 'industries', data: { name: industries[i], order: i } })
    }
    payload.logger.info(`Seeded ${industries.length} industries.`)
  } else {
    payload.logger.info('Industries already exist — skipping.')
  }

  // 4. Offices
  const offCount = await payload.count({ collection: 'offices' })
  if (offCount.totalDocs === 0) {
    for (let i = 0; i < offices.length; i++) {
      await payload.create({ collection: 'offices', data: { ...offices[i], order: i } })
    }
    payload.logger.info(`Seeded ${offices.length} offices.`)
  } else {
    payload.logger.info('Offices already exist — skipping.')
  }

  // 5. Site settings
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      organizationName: 'Team Eyrie',
      tagline: 'Together, We Create Value. Together, We Build Trust.',
    },
  })

  payload.logger.info('Seed complete.')
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
