import type { Payload } from 'payload'

export const ADMIN_EMAIL = process.env.SEED_ADMIN_EMAIL || 'admin@teameyrie.local'
export const ADMIN_PASSWORD = process.env.SEED_ADMIN_PASSWORD || 'Admin@12345'

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

const offices: { city: string; isHeadOffice?: boolean }[] = [
  { city: 'Chennai', isHeadOffice: true },
  { city: 'Bengaluru' }, { city: 'Mumbai' }, { city: 'New Delhi' }, { city: 'Goa' },
  { city: 'Salem' }, { city: 'Madurai' }, { city: 'Namakkal' }, { city: 'Mysuru' },
]

export async function runSeed(payload: Payload) {
  const log: string[] = []

  const existingUsers = await payload.count({ collection: 'users' })
  if (existingUsers.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: { name: 'Team Eyrie Admin', email: ADMIN_EMAIL, password: ADMIN_PASSWORD, role: 'admin' },
    })
    log.push(`Created admin user ${ADMIN_EMAIL}`)
  } else {
    log.push('Users already exist — skipped admin creation')
  }

  const svcCount = await payload.count({ collection: 'services' })
  if (svcCount.totalDocs === 0) {
    for (let i = 0; i < services.length; i++) {
      const s = services[i]
      await payload.create({
        collection: 'services',
        data: { title: s.title, summary: s.summary, order: i, subServices: s.subServices.map((name) => ({ name })) },
      })
    }
    log.push(`Seeded ${services.length} services`)
  } else {
    log.push('Services already exist — skipped')
  }

  const indCount = await payload.count({ collection: 'industries' })
  if (indCount.totalDocs === 0) {
    for (let i = 0; i < industries.length; i++) {
      await payload.create({ collection: 'industries', data: { name: industries[i], order: i } })
    }
    log.push(`Seeded ${industries.length} industries`)
  } else {
    log.push('Industries already exist — skipped')
  }

  const offCount = await payload.count({ collection: 'offices' })
  if (offCount.totalDocs === 0) {
    for (let i = 0; i < offices.length; i++) {
      await payload.create({ collection: 'offices', data: { ...offices[i], order: i } })
    }
    log.push(`Seeded ${offices.length} offices`)
  } else {
    log.push('Offices already exist — skipped')
  }

  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      organizationName: 'Team Eyrie',
      tagline: 'Together, We Create Value. Together, We Build Trust.',
    },
  })
  log.push('Updated site settings')

  // Home page content: intro, stats, process model
  await payload.updateGlobal({
    slug: 'home-page',
    data: {
      hero: {
        eyebrow: 'India’s Integrated Professional Services Network',
        headline: 'Team Eyrie',
        subheadline: 'Together, We Create Value. Together, We Build Trust.',
        primaryCtaLabel: 'Contact Us',
        primaryCtaLink: '/contact',
      },
      intro: {
        heading: 'About Team Eyrie',
        body: 'Team Eyrie is a premier multidisciplinary professional services network established through the strategic alliance of three reputed Chartered Accountancy firms. Our network brings together nearly 20 Chartered Accountants, supported by Company Secretaries, Advocates, Cost Accountants, MBAs, Insolvency Professionals and Valuation Specialists.',
      },
      stats: [
        { value: '20+', label: 'Chartered Accountants' },
        { value: '9', label: 'Cities across India' },
        { value: '8', label: 'Practice areas' },
        { value: '17+', label: 'Industries served' },
      ],
      process: {
        heading: 'How We Work',
        steps: [
          { title: 'Understand', description: 'We begin by understanding your business, goals and regulatory context.' },
          { title: 'Advise', description: 'Our multidisciplinary experts design practical, compliant solutions.' },
          { title: 'Deliver', description: 'We execute with technology-driven workflows and clear communication.' },
          { title: 'Sustain', description: 'We stay engaged to support growth and ongoing compliance.' },
        ],
      },
    },
  })
  log.push('Updated home page content')

  // Testimonials
  const testCount = await payload.count({ collection: 'testimonials' })
  if (testCount.totalDocs === 0) {
    const testimonials = [
      { quote: 'Team Eyrie brought clarity to a complex cross-border restructuring. Their multidisciplinary bench meant every question had an expert answer.', authorName: 'Managing Director', authorTitle: 'Manufacturing Group', company: '' },
      { quote: 'Responsive, technically sharp and genuinely invested in our outcomes. A trusted partner for our GST and audit needs.', authorName: 'Chief Financial Officer', authorTitle: 'NBFC', company: '' },
      { quote: 'Their family business advisory helped us put a governance framework in place for the next generation. Invaluable.', authorName: 'Promoter', authorTitle: 'Family-Owned Business', company: '' },
    ]
    for (let i = 0; i < testimonials.length; i++) {
      await payload.create({ collection: 'testimonials', data: { ...testimonials[i], featured: true, order: i } })
    }
    log.push(`Seeded ${testimonials.length} testimonials`)
  } else {
    log.push('Testimonials already exist — skipped')
  }

  // Sample open job (for the careers workflow)
  const jobCount = await payload.count({ collection: 'jobs' })
  if (jobCount.totalDocs === 0) {
    const chennai = await payload.find({ collection: 'offices', where: { city: { equals: 'Chennai' } }, limit: 1, depth: 0 })
    const officeId = chennai.docs[0]?.id
    await payload.create({
      collection: 'jobs',
      overrideAccess: true,
      data: {
        title: 'Audit & Assurance — Manager',
        employmentType: 'full-time',
        status: 'open',
        location: officeId ? [officeId] : undefined,
        department: 'Assurance & Audit',
        experienceMin: 3,
        experienceMax: 6,
        summary: 'Lead statutory and internal audit engagements for a diverse portfolio of clients across industries.',
        responsibilities: [
          { item: 'Plan and execute statutory, internal and tax audit engagements.' },
          { item: 'Review working papers and mentor a team of associates.' },
          { item: 'Liaise with clients on findings, controls and compliance.' },
        ],
        requirements: [
          { item: 'Qualified Chartered Accountant (CA).' },
          { item: '3–6 years of post-qualification audit experience.' },
          { item: 'Strong knowledge of Ind AS, IFC and audit standards.' },
        ],
        openings: 2,
      },
    })
    log.push('Seeded 1 job opening')
  } else {
    log.push('Jobs already exist — skipped')
  }

  // Sample case study
  const csCount = await payload.count({ collection: 'case-studies' })
  if (csCount.totalDocs === 0) {
    await payload.create({
      collection: 'case-studies',
      data: {
        title: 'Cross-border restructuring for a manufacturing group',
        clientName: '',
        summary: 'Advised a manufacturing group on restructuring its overseas holding and India operations to improve tax efficiency and compliance.',
        challenge: 'A growing manufacturer needed to consolidate multiple entities across jurisdictions while remaining compliant with FEMA and transfer pricing regulations.',
        outcome: 'A streamlined structure with improved tax efficiency, full regulatory compliance and a clear roadmap for global expansion.',
        results: [
          { value: '4', label: 'Entities consolidated' },
          { value: '100%', label: 'Regulatory compliance' },
        ],
        status: 'published',
        order: 0,
      },
    })
    log.push('Seeded 1 case study')
  } else {
    log.push('Case studies already exist — skipped')
  }

  // DPDP Consent Settings (initial values; admin can edit thereafter)
  await payload.updateGlobal({
    slug: 'consent-settings',
    data: {
      notice: {
        version: 'v1',
        checkboxLabel:
          'I explicitly consent to Team Eyrie storing and processing my personal data — including my name, email address, phone number and uploaded résumé — in its secure candidate database for the purpose of evaluating my job application, under the Digital Personal Data Protection (DPDP) Act, 2023. I understand that I may withdraw this consent and request deletion of my data at any time using the link in my application acknowledgement email, or by contacting Team Eyrie’s Grievance Officer. I understand that withdrawing consent will mean my application is no longer considered.',
        reassuranceLine:
          'Your application details are transmitted over a secure, encrypted (HTTPS/TLS) connection and are not shared with third parties for marketing.',
      },
      grievanceOfficer: {
        name: 'Grievance Officer',
        email: 'grievance@teameyrie.in',
        phone: '',
      },
      retentionPeriodMonths: 12,
      withdrawalEmail: {
        subject: 'Your application to Team Eyrie',
        body:
          'Dear {{name}},\n\nThank you for applying for {{jobTitle}} at Team Eyrie. We have received your application.\n\nUnder the DPDP Act, 2023 you may withdraw your consent and have your application removed at any time using this link:\n{{withdrawUrl}}\n\nRegards,\nTeam Eyrie',
      },
    },
  })
  log.push('Updated consent settings')

  return log
}
