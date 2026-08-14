import React from 'react'
import type { Metadata } from 'next'
import PageHero from '../../../components/PageHero'
import SectionHeader from '../../../components/SectionHeader'
import CorporateCard from '../../../components/CorporateCard'
import CtaBanner from '../../../components/CtaBanner'

export const metadata: Metadata = {
  title: 'Industries We Serve — Team Eyrie',
  description:
    'Team Eyrie provides specialized advisory, audit, and tax solutions across 17 major industries including Manufacturing, Banking, IT, Real Estate, Startups, MSMEs, and Non-Profits.',
}

const industries = [
  { code: 'SEC-01', name: 'Manufacturing', desc: 'Costing, GST compliance, internal financial controls, inventory audit, and tax structuring.' },
  { code: 'SEC-02', name: 'Banking & Financial Services', desc: 'Statutory bank audit, concurrent audit, regulatory compliance, and risk management.' },
  { code: 'SEC-03', name: 'NBFCs', desc: 'RBI regulatory compliance, statutory audit, asset classification, and corporate governance.' },
  { code: 'SEC-04', name: 'Information Technology', desc: 'SEZ compliance, international taxation, transfer pricing, and IP structuring.' },
  { code: 'SEC-05', name: 'Healthcare & Pharma', desc: 'Hospital accounting, regulatory compliance, GST advisory, and M&A due diligence.' },
  { code: 'SEC-06', name: 'Infrastructure & Engineering', desc: 'Project financing, joint venture structuring, EPC taxation, and forensic reviews.' },
  { code: 'SEC-07', name: 'Real Estate & Construction', desc: 'RERA compliance, capital gains tax advisory, joint development agreement (JDA) tax.' },
  { code: 'SEC-08', name: 'Hospitality & Tourism', desc: 'Operational audits, revenue assurance, lease transaction structuring, and tax filing.' },
  { code: 'SEC-09', name: 'Retail & Consumer Goods', desc: 'Supply chain GST, inventory audit, franchise structuring, and POS financial control.' },
  { code: 'SEC-10', name: 'E-Commerce & Digital Business', desc: 'TDS/TCS marketplace compliance, cross-border payments, and startup valuation.' },
  { code: 'SEC-11', name: 'Logistics & Transportation', desc: 'Fleet GST compliance, vehicle lease taxation, and multi-state tax structuring.' },
  { code: 'SEC-12', name: 'Renewable Energy', desc: 'ESG reporting, subsidy compliance, project finance due diligence, and direct tax.' },
  { code: 'SEC-13', name: 'Education & Academics', desc: 'University trust audits, FCRA compliance, exemption advisory, and internal control.' },
  { code: 'SEC-14', name: 'Start-ups & Scale-ups', desc: 'VC/PE fundraising advisory, investor due diligence, cap table, and ESOP structuring.' },
  { code: 'SEC-15', name: 'MSMEs & Enterprise', desc: 'Subsidies, bank loan syndication, virtual CFO, tax planning, and statutory audit.' },
  { code: 'SEC-16', name: 'Family-Owned Businesses', desc: 'Family constitution, succession planning, trust settlement, and wealth preservation.' },
  { code: 'SEC-17', name: 'Trusts & Non-Profit Organisations', desc: '12A/80G tax exemptions, FCRA filings, statutory trust audits, and governance.' },
]

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        title="Industries We Serve"
        subtitle="Deep Domain Specialization Across 17 Core Economic Sectors"
        eyebrow="Specialized Sector Practices"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Industries We Serve' }]}
        bgImage="/images/industries.png"
      />

      <section className="section" style={{ padding: '48px 0', background: '#ffffff' }}>
        <div className="container">
          <SectionHeader
            eyebrow="Sector Experience"
            title="Tailored Solutions for Diverse Industry Landscapes"
            subtitle="Our multidisciplinary team brings deep regulatory insights and operational understanding tailored to the unique financial and tax requirements of each sector."
          />

          <div className="grid--cards-3">
            {industries.map((ind) => (
              <CorporateCard
                key={ind.name}
                variant="light"
                badge={ind.code}
                title={ind.name}
                description={ind.desc}
                linkHref="/contact"
                linkLabel="Consult Industry Partner →"
              />
            ))}
          </div>

          <CtaBanner
            eyebrow="Sector Advisory"
            title="Seeking Sector-Specific Advisory or Audit?"
            description="Connect with our industry specialists to discuss tailored professional solutions for your organization."
            primaryLabel="Contact Industry Specialist"
            primaryHref="/contact"
            secondaryLabel="View Full Service Catalog"
            secondaryHref="/services"
          />
        </div>
      </section>
    </main>
  )
}
