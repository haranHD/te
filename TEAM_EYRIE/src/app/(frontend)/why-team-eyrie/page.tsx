import React from 'react'
import type { Metadata } from 'next'
import PageHero from '../../../components/PageHero'
import SectionHeader from '../../../components/SectionHeader'
import CorporateCard from '../../../components/CorporateCard'
import CtaBanner from '../../../components/CtaBanner'

export const metadata: Metadata = {
  title: 'Why Team Eyrie — Team Eyrie',
  description:
    'Discover why leading enterprises choose Team Eyrie: Collective Intelligence, National Reach, Sector Expertise, Technology-Driven Delivery, Client-Centric Philosophy, and Global Perspective.',
}

const valuePillars = [
  {
    id: 'collective-intelligence',
    num: '01',
    title: 'Collective Intelligence',
    iconName: 'consulting',
    subtitle: 'A powerful network of experienced professionals delivering multidisciplinary solutions.',
    details:
      'By bringing together nearly 20 Chartered Accountants along with Company Secretaries, Advocates, Cost Accountants, MBAs, Insolvency Professionals, and Valuation Specialists, Team Eyrie provides holistic solutions without the need for multiple independent advisors.',
  },
  {
    id: 'national-reach',
    num: '02',
    title: 'National Reach',
    iconName: 'pin',
    subtitle: 'A strong PAN India presence with professionals across major business centres.',
    details:
      'Our network offices in Chennai, Bengaluru, Mumbai, New Delhi, Goa, Salem, Madurai, Namakkal, and Mysuru ensure seamless service delivery and local regulatory compliance backed by national capabilities.',
  },
  {
    id: 'sector-expertise',
    num: '03',
    title: 'Sector Expertise',
    iconName: 'corporate',
    subtitle: 'Specialised knowledge across diverse industries and regulatory environments.',
    details:
      'From Manufacturing and BFSI to Startups, Real Estate, E-Commerce, and Non-Profits, our partners bring tailored insights that address industry-specific challenges and compliance demands.',
  },
  {
    id: 'tech-driven',
    num: '04',
    title: 'Technology-Driven Delivery',
    iconName: 'gst',
    subtitle: 'Digital workflows, automation, data analytics, AI-assisted advisory, and secure platforms.',
    details:
      'We leverage modern audit tools, secure client portals, and automated tax workflows to enhance speed, accuracy, data security, and client experience.',
  },
  {
    id: 'client-centric',
    num: '05',
    title: 'Client-Centric Philosophy',
    iconName: 'handshake',
    subtitle: 'Every engagement is driven by responsiveness, transparency, quality, and measurable outcomes.',
    details:
      'We prioritize long-term partner-led relationships, ensuring direct engagement with senior Chartered Accountants and tailored execution for every client.',
  },
  {
    id: 'global-perspective',
    num: '06',
    title: 'Global Perspective',
    iconName: 'global',
    subtitle: 'Navigating international taxation, transfer pricing, cross-border investments, and expansion.',
    details:
      'Whether assisting Indian businesses expanding overseas or multinationals establishing operations in India, our global tax and regulatory expertise ensures smooth cross-border execution.',
  },
]

export default function WhyTeamEyriePage() {
  return (
    <main>
      <PageHero
        title="Why Team Eyrie?"
        subtitle="The Multidisciplinary Professional Services Advantage"
        eyebrow="6 Core Strategic Pillars of Excellence"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Why Team Eyrie' }]}
        bgImage="/images/Why.png"
      />

      <section className="section" style={{ padding: '48px 0', background: '#ffffff' }}>
        <div className="container">
          <SectionHeader
            eyebrow="The Eyrie Advantage"
            title="6 Reasons Organizations Choose Team Eyrie"
            subtitle="Combining legacy Chartered Accountancy principles with modern technology, senior partner involvement, and a multidisciplinary workforce."
          />

          <div className="grid--cards-3">
            {valuePillars.map((p) => (
              <CorporateCard
                key={p.id}
                variant="light"
                iconName={p.iconName}
                title={p.title}
                subtitle={p.subtitle}
                description={p.details}
              />
            ))}
          </div>

          <CtaBanner
            eyebrow="The Team Eyrie Standard"
            title="Ready to Experience the Team Eyrie Advantage?"
            description="Connect with our senior partners to explore how our multidisciplinary network can support your corporate governance and growth."
            primaryLabel="Contact Our Network Partners"
            primaryHref="/contact"
            secondaryLabel="Explore Our Services"
            secondaryHref="/services"
          />
        </div>
      </section>
    </main>
  )
}
