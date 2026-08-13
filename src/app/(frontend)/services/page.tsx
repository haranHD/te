import React from 'react'
import type { Metadata } from 'next'
import PageHero from '../../../components/PageHero'
import SectionHeader from '../../../components/SectionHeader'
import CorporateCard from '../../../components/CorporateCard'
import CtaBanner from '../../../components/CtaBanner'
import CorporateIcon from '../../../components/CorporateIcon'

export const metadata: Metadata = {
  title: 'Services — Team Eyrie',
  description:
    'Integrated professional services across Assurance & Audit, Tax Advisory, GST & Indirect Taxes, Corporate & Regulatory Advisory, Business Consulting, Transaction Advisory, Family Business Advisory, and Global Business Services.',
}

const serviceCategories = [
  {
    id: 'assurance-audit',
    num: '01',
    title: 'Assurance & Audit',
    subtitle: 'Independent evaluation, financial transparency, and governance frameworks.',
    iconName: 'assurance',
    items: [
      'Statutory Audit',
      'Internal Audit',
      'Bank Audit',
      'Concurrent Audit',
      'Tax Audit',
      'Due Diligence',
      'Risk Advisory',
      'Internal Financial Controls (IFC)',
      'Forensic Reviews',
    ],
  },
  {
    id: 'tax-advisory',
    num: '02',
    title: 'Tax Advisory',
    subtitle: 'Strategic direct tax planning, dispute resolution, and cross-border structuring.',
    iconName: 'tax',
    items: [
      'Direct Tax Advisory',
      'Income Tax Litigation',
      'International Taxation',
      'Transfer Pricing',
      'Expatriate Taxation',
      'Tax Structuring',
      'FEMA Advisory',
    ],
  },
  {
    id: 'gst-indirect-taxes',
    num: '03',
    title: 'GST & Indirect Taxes',
    subtitle: 'Complete indirect tax compliance, litigation support, and trade advisory.',
    iconName: 'gst',
    items: [
      'GST Advisory Services',
      'GST Compliance & Filing',
      'GST Litigation & Representation',
      'Customs & Tariff Advisory',
      'Foreign Trade Policy Advisory',
    ],
  },
  {
    id: 'corporate-regulatory',
    num: '04',
    title: 'Corporate & Regulatory Advisory',
    subtitle: 'End-to-end secretarial, SEBI, RBI, and corporate governance compliance.',
    iconName: 'corporate',
    items: [
      'Company Law Advisory',
      'LLP Advisory & Formation',
      'Secretarial Compliance',
      'Corporate Governance Frameworks',
      'RBI & FEMA Compliance',
      'SEBI Advisory',
      'ROC Compliance & Filings',
    ],
  },
  {
    id: 'business-consulting',
    num: '05',
    title: 'Business Consulting',
    subtitle: 'Financial strategy, virtual CFO services, and business performance improvement.',
    iconName: 'consulting',
    items: [
      'Business Structuring',
      'Financial Modelling & Projection',
      'Business Process Improvement',
      'Virtual CFO Services',
      'Performance Management',
      'Strategic Planning & Advisory',
    ],
  },
  {
    id: 'transaction-advisory',
    num: '06',
    title: 'Transaction Advisory',
    subtitle: 'Strategic support for capital raising, M&A, startup growth, and valuation.',
    iconName: 'transaction',
    items: [
      'Start-up Advisory',
      'Venture Capital Advisory',
      'Private Equity Advisory',
      'Investor Due Diligence',
      'Fund Raising Assistance',
      'Mergers & Acquisitions (M&A)',
      'Corporate Restructuring',
    ],
  },
  {
    id: 'family-business',
    num: '07',
    title: 'Family Business Advisory',
    subtitle: 'Preserving wealth, establishing family governance, and succession planning.',
    iconName: 'family',
    items: [
      'Family Constitution Formulation',
      'Family Settlement Advisory',
      'Succession Planning',
      'Estate Planning & Trusts',
      'Governance Framework',
      'Wealth Preservation Strategy',
    ],
  },
  {
    id: 'global-business',
    num: '08',
    title: 'Global Business Services',
    subtitle: 'Navigating international tax, cross-border investments, and global expansion.',
    iconName: 'global',
    items: [
      'Cross-Border Transactions',
      'International Business Structuring',
      'Overseas Investment Advisory',
      'NRI Taxation & Compliance',
      'Global Expansion Support',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Our Practice Areas & Services"
        subtitle="Multidisciplinary Professional Solutions Delivered with Technical Excellence"
        eyebrow="8 Core Specialized Practice Domains"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        bgImage="/images/services.png"
      />

      <section className="section" style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <SectionHeader
            eyebrow="What We Do"
            title="Integrated Advisory & Assurance Solutions"
            subtitle="Team Eyrie combines deep technical expertise with industry specialization across eight core practice areas, providing seamless support for corporate, institutional, and high-net-worth clients."
          />

          {/* 8 Service Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {serviceCategories.map((cat) => (
              <div
                key={cat.id}
                id={cat.id}
                className="corporate-card corporate-card--partner"
                style={{
                  padding: '38px 36px',
                  scrollMarginTop: 100,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 14,
                        background: 'rgba(176, 141, 87, 0.12)',
                        border: '1px solid rgba(176, 141, 87, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <CorporateIcon name={cat.iconName} size={26} color="#b08d57" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: 'clamp(20px, 1.6vw, 25px)', color: '#1f3864', margin: 0, fontWeight: 800 }}>
                        {cat.title}
                      </h3>
                      <p style={{ color: '#64748b', fontSize: 15, margin: '2px 0 0' }}>{cat.subtitle}</p>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: '#b08d57',
                      background: 'rgba(176, 141, 87, 0.12)',
                      padding: '4px 12px',
                      borderRadius: 20,
                    }}
                  >
                    {cat.num}
                  </span>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '18px 0 22px' }} />

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                    gap: 14,
                  }}
                >
                  {cat.items.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        padding: '12px 16px',
                        borderRadius: 10,
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)',
                        transition: 'transform 0.2s ease, border-color 0.2s ease',
                      }}
                    >
                      <CorporateIcon name="check" size={16} color="#b08d57" strokeWidth={2.4} />
                      <span style={{ color: '#1e293b', fontSize: 14, fontWeight: 600 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Reusable CtaBanner */}
          <CtaBanner
            eyebrow="Specialized Practice Solutions"
            title="Need Specialized Advisory or Audit Services?"
            description="Speak directly with our partner team to discuss your business requirements and customized multidisciplinary solutions."
            primaryLabel="Schedule Partner Consultation"
            primaryHref="/contact"
            secondaryLabel="Explore Why Choose Us"
            secondaryHref="/why-team-eyrie"
          />
        </div>
      </section>
    </main>
  )
}
