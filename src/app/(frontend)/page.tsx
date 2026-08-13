import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import HeroSection from '../../components/HeroSection'
import CorporateIcon from '../../components/CorporateIcon'
import IndiaNetworkMap from '../../components/IndiaNetworkMap'

export const dynamic = 'force-dynamic'

const allianceFirms = [
  { name: 'V. Verma & Co.', role: 'Chartered Accountants', est: 'Established Partner Firm', code: 'P-01' },
  { name: 'S S A L Associates', role: 'Chartered Accountants', est: 'Established Partner Firm', code: 'P-02' },
  { name: 'R. Sridharan & Company', role: 'Chartered Accountants', est: 'Established Partner Firm', code: 'P-03' },
]

const mainServices = [
  {
    title: 'Assurance & Audit',
    desc: 'Statutory, Internal, Bank, Concurrent, Tax Audits, IFC, Forensic Reviews & Risk Advisory.',
    iconName: 'assurance',
    code: '01',
    href: '/services#assurance-audit',
  },
  {
    title: 'Tax Advisory',
    desc: 'Direct Tax, Income Tax Litigation, International Tax, Transfer Pricing & FEMA Advisory.',
    iconName: 'tax',
    code: '02',
    href: '/services#tax-advisory',
  },
  {
    title: 'GST & Indirect Taxes',
    desc: 'GST Advisory, Compliance, Litigation, Customs & Foreign Trade Policy guidance.',
    iconName: 'gst',
    code: '03',
    href: '/services#gst-indirect-taxes',
  },
  {
    title: 'Corporate & Regulatory',
    desc: 'Company Law, Secretarial Compliance, Governance, RBI, SEBI & ROC Compliance.',
    iconName: 'corporate',
    code: '04',
    href: '/services#corporate-regulatory',
  },
  {
    title: 'Business Consulting',
    desc: 'Business Structuring, Financial Modelling, Virtual CFO Services & Strategic Planning.',
    iconName: 'consulting',
    code: '05',
    href: '/services#business-consulting',
  },
  {
    title: 'Transaction Advisory',
    desc: 'M&A, Start-up Advisory, VC/PE Advisory, Investor Due Diligence & Fund Raising.',
    iconName: 'transaction',
    code: '06',
    href: '/services#transaction-advisory',
  },
  {
    title: 'Family Business Advisory',
    desc: 'Family Constitution, Succession & Estate Planning, Governance & Wealth Preservation.',
    iconName: 'family',
    code: '07',
    href: '/services#family-business',
  },
  {
    title: 'Global Business Services',
    desc: 'Cross-Border Transactions, NRI Taxation, International Structuring & Global Expansion.',
    iconName: 'global',
    code: '08',
    href: '/services#global-business',
  },
]

const valuePillars = [
  {
    title: 'Collective Intelligence',
    desc: 'A powerful network of experienced professionals delivering multidisciplinary solutions under one umbrella.',
    tag: 'Synergy',
    num: '01',
  },
  {
    title: 'National Reach',
    desc: 'A strong PAN India presence with professionals across major business centres.',
    tag: 'Coverage',
    num: '02',
  },
  {
    title: 'Sector Expertise',
    desc: 'Specialised knowledge across diverse industries and complex regulatory environments.',
    tag: 'Domain Depth',
    num: '03',
  },
  {
    title: 'Technology-Driven Delivery',
    desc: 'Digital workflows, automation, data analytics, and AI-assisted advisory enhance efficiency.',
    tag: 'Innovation',
    num: '04',
  },
  {
    title: 'Client-Centric Philosophy',
    desc: 'Driven by responsiveness, transparency, uncompromising quality, and measurable outcomes.',
    tag: 'Trust',
    num: '05',
  },
  {
    title: 'Global Perspective',
    desc: 'Assisting clients in navigating international taxation, transfer pricing, and cross-border investments.',
    tag: 'Global Reach',
    num: '06',
  },
]

const industryHighlights = [
  'Manufacturing', 'Banking & Financial Services', 'NBFCs', 'Information Technology',
  'Healthcare', 'Real Estate', 'E-Commerce', 'Start-ups', 'MSMEs', 'Family Businesses'
]

export default async function HomePage() {
  return (
    <main>
      {/* 1. Dynamic Hero Section */}
      <HeroSection
        eyebrow="India's Integrated Professional Services Network"
        headline="TEAM EYRIE"
        subheadline="Together, We Create Value. Together, We Build Trust."
      />

      {/* 2. Strategic Alliance Ribbon Banner */}
      <section style={{ background: '#16294a', color: '#ffffff', padding: '44px 0', borderBottom: '3px solid #b08d57' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 2.2, textTransform: 'uppercase', color: '#d8c19a' }}>
              Strategic Alliance Network
            </span>
            <h3 style={{ color: '#ffffff', fontSize: 24, margin: '6px 0 0', fontWeight: 700 }}>
              Formed by Three Esteemed Chartered Accountancy Partnerships
            </h3>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 24,
            }}
          >
            {allianceFirms.map((firm) => (
              <div
                key={firm.name}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(216, 193, 154, 0.28)',
                  borderRadius: 12,
                  padding: '24px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 18,
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
              >
                <div
                  style={{
                    background: 'rgba(176, 141, 87, 0.2)',
                    border: '1px solid rgba(176, 141, 87, 0.45)',
                    color: '#d8c19a',
                    fontWeight: 800,
                    fontSize: 13,
                    padding: '8px 12px',
                    borderRadius: 8,
                    letterSpacing: 1,
                  }}
                >
                  {firm.code}
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: 17, margin: '0 0 3px', fontWeight: 700 }}>{firm.name}</h4>
                  <p style={{ color: '#d8c19a', margin: 0, fontSize: 13.5, fontWeight: 500 }}>{firm.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 Quick Feature Cards with Background Images */}
      <section style={{ padding: '60px 0 20px', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 40px' }}>
            <span style={{ color: '#b08d57', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2 }}>
              Explore Our Network
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 2.4vw, 36px)', color: '#1f3864', margin: '8px 0 0', fontWeight: 800 }}>
              Key Pillar Overview
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: 24,
            }}
          >
            {/* Card 1: About */}
            <a
              href="/about"
              className="pillar-hover-card"
              style={{ backgroundImage: "url('/images/about.png')" }}
            >
              <div>
                <span
                  style={{
                    background: '#b08d57',
                    color: '#ffffff',
                    fontSize: 11,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: 1.5,
                    padding: '5px 12px',
                    borderRadius: 20,
                    display: 'inline-block',
                    marginBottom: 16,
                  }}
                >
                  About Us
                </span>
                <h3 style={{ fontSize: 22, color: '#ffffff', margin: '0 0 8px', fontWeight: 800 }}>
                  Network Profile
                </h3>
                <p style={{ color: '#e2e8f0', fontSize: 14, margin: 0, lineHeight: 1.55 }}>
                  Alliance of 3 reputed CA firms with 20+ senior professionals across India.
                </p>
              </div>
              <div style={{ color: '#d8c19a', fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6, marginTop: 20 }}>
                <span>Learn About Us</span>
                <span>→</span>
              </div>
            </a>

            {/* Card 2: Services */}
            <a
              href="/services"
              className="pillar-hover-card"
              style={{ backgroundImage: "url('/images/services.png')" }}
            >
              <div>
                <span
                  style={{
                    background: '#b08d57',
                    color: '#ffffff',
                    fontSize: 11,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: 1.5,
                    padding: '5px 12px',
                    borderRadius: 20,
                    display: 'inline-block',
                    marginBottom: 16,
                  }}
                >
                  Services
                </span>
                <h3 style={{ fontSize: 22, color: '#ffffff', margin: '0 0 8px', fontWeight: 800 }}>
                  Practice Areas
                </h3>
                <p style={{ color: '#e2e8f0', fontSize: 14, margin: 0, lineHeight: 1.55 }}>
                  Assurance, Tax, GST, Corporate Compliance, M&A & Global Advisory.
                </p>
              </div>
              <div style={{ color: '#d8c19a', fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6, marginTop: 20 }}>
                <span>View All Practice Areas</span>
                <span>→</span>
              </div>
            </a>

            {/* Card 3: Why Team Eyrie */}
            <a
              href="/why-team-eyrie"
              className="pillar-hover-card"
              style={{ backgroundImage: "url('/images/why.png')" }}
            >
              <div>
                <span
                  style={{
                    background: '#b08d57',
                    color: '#ffffff',
                    fontSize: 11,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: 1.5,
                    padding: '5px 12px',
                    borderRadius: 20,
                    display: 'inline-block',
                    marginBottom: 16,
                  }}
                >
                  Why Us
                </span>
                <h3 style={{ fontSize: 22, color: '#ffffff', margin: '0 0 8px', fontWeight: 800 }}>
                  The Eyrie Advantage
                </h3>
                <p style={{ color: '#e2e8f0', fontSize: 14, margin: 0, lineHeight: 1.55 }}>
                  6 core pillars of multidisciplinary expertise, national reach & technology.
                </p>
              </div>
              <div style={{ color: '#d8c19a', fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6, marginTop: 20 }}>
                <span>Explore Advantages</span>
                <span>→</span>
              </div>
            </a>

            {/* Card 4: Industry Sectors */}
            <a
              href="/industries"
              className="pillar-hover-card"
              style={{ backgroundImage: "url('/images/industry.png')" }}
            >
              <div>
                <span
                  style={{
                    background: '#b08d57',
                    color: '#ffffff',
                    fontSize: 11,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: 1.5,
                    padding: '5px 12px',
                    borderRadius: 20,
                    display: 'inline-block',
                    marginBottom: 16,
                  }}
                >
                  Industries
                </span>
                <h3 style={{ fontSize: 22, color: '#ffffff', margin: '0 0 8px', fontWeight: 800 }}>
                  17 Sectors We Serve
                </h3>
                <p style={{ color: '#e2e8f0', fontSize: 14, margin: 0, lineHeight: 1.55 }}>
                  Manufacturing, BFSI, Healthcare, IT, Real Estate, Startups & MSMEs.
                </p>
              </div>
              <div style={{ color: '#d8c19a', fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6, marginTop: 20 }}>
                <span>View All Sectors</span>
                <span>→</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Executive About & Multidisciplinary Capability */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56, alignItems: 'center' }}>
            <div>
              <span style={{ color: '#b08d57', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2 }}>
                About Team Eyrie
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 2.6vw, 38px)', color: '#1f3864', margin: '8px 0 20px', fontWeight: 800 }}>
                Integrated Expertise Across Advisory, Audit & Governance
              </h2>
              <p style={{ color: '#475569', fontSize: 16.5, lineHeight: 1.75, marginBottom: 18 }}>
                Team Eyrie is a premier multidisciplinary professional services network established through the strategic alliance of three reputed Chartered Accountancy firms.
              </p>
              <p style={{ color: '#475569', fontSize: 16.5, lineHeight: 1.75, marginBottom: 28 }}>
                Our network brings together the collective intelligence of nearly <strong>20 Chartered Accountants</strong>, supported by an accomplished team of Company Secretaries, Advocates, Cost Accountants, MBAs, Insolvency Professionals, Valuation Specialists, and domain experts.
              </p>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <a href="/about" className="hero-btn hero-btn--gold" style={{ padding: '12px 28px', fontSize: 15 }}>
                  Read Network Profile
                </a>
                <a href="/why-team-eyrie" className="hero-btn hero-btn--outline" style={{ background: '#f8fafc', color: '#1f3864', borderColor: '#cbd5e1', padding: '12px 28px', fontSize: 15 }}>
                  Why Choose Us
                </a>
              </div>
            </div>

            <div
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderLeft: '5px solid #b08d57',
                borderRadius: 14,
                padding: 36,
              }}
            >
              <h3 style={{ fontSize: 22, color: '#1f3864', margin: '0 0 24px', fontWeight: 700 }}>
                Our Core Pillars
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(176, 141, 87, 0.12)', padding: 12, borderRadius: 10 }}>
                    <CorporateIcon name="consulting" size={22} color="#b08d57" />
                  </div>
                  <div>
                    <strong style={{ color: '#1f3864', fontSize: 16.5, display: 'block', marginBottom: 3 }}>Knowledge</strong>
                    <p style={{ margin: 0, fontSize: 14.5, color: '#64748b', lineHeight: 1.55 }}>Technical precision and continuous learning across complex domains.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(176, 141, 87, 0.12)', padding: 12, borderRadius: 10 }}>
                    <CorporateIcon name="assurance" size={22} color="#b08d57" />
                  </div>
                  <div>
                    <strong style={{ color: '#1f3864', fontSize: 16.5, display: 'block', marginBottom: 3 }}>Integrity</strong>
                    <p style={{ margin: 0, fontSize: 14.5, color: '#64748b', lineHeight: 1.55 }}>Uncompromising professional ethics, transparency, and trust.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(176, 141, 87, 0.12)', padding: 12, borderRadius: 10 }}>
                    <CorporateIcon name="gst" size={22} color="#b08d57" />
                  </div>
                  <div>
                    <strong style={{ color: '#1f3864', fontSize: 16.5, display: 'block', marginBottom: 3 }}>Innovation</strong>
                    <p style={{ margin: 0, fontSize: 14.5, color: '#64748b', lineHeight: 1.55 }}>Technology-driven workflows, data analytics, and modern solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Do — Integrated Services Grid */}
      <section style={{ padding: '80px 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 840, margin: '0 auto 52px' }}>
            <span style={{ color: '#b08d57', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2 }}>
              Comprehensive Offerings
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 2.6vw, 38px)', color: '#1f3864', margin: '8px 0 14px', fontWeight: 800 }}>
              What We Do
            </h2>
            <p style={{ color: '#64748b', fontSize: 16.5, lineHeight: 1.6 }}>
              Delivering end-to-end solutions from assurance and taxation to transaction advisory and international expansion.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
              gap: 26,
            }}
          >
            {mainServices.map((srv) => (
              <a
                key={srv.title}
                href={srv.href}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 14,
                  padding: 32,
                  textDecoration: 'none',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  minHeight: 260,
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                    <div style={{ background: '#f1f5f9', padding: 12, borderRadius: 10 }}>
                      <CorporateIcon name={srv.iconName} size={24} color="#1f3864" />
                    </div>
                    <span style={{ fontSize: 13.5, fontWeight: 700, color: '#94a3b8', letterSpacing: 1 }}>
                      {srv.code}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 19, color: '#1f3864', margin: '0 0 10px', fontWeight: 700 }}>{srv.title}</h3>
                  <p style={{ color: '#64748b', fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>{srv.desc}</p>
                </div>
                <div style={{ marginTop: 24, color: '#b08d57', fontSize: 13.5, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span>Explore Practice Area</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <a href="/services" className="hero-btn hero-btn--gold" style={{ padding: '13px 34px' }}>
              View Complete Service Catalog
            </a>
          </div>
        </div>
      </section>

      {/* 5. Why Team Eyrie? (6 Value Pillars) */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 840, margin: '0 auto 52px' }}>
            <span style={{ color: '#b08d57', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2 }}>
              The Team Eyrie Advantage
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 2.6vw, 38px)', color: '#1f3864', margin: '8px 0 14px', fontWeight: 800 }}>
              Why Team Eyrie?
            </h2>
            <p style={{ color: '#64748b', fontSize: 16.5, lineHeight: 1.6 }}>
              A single umbrella combining senior leadership, multidisciplinary intelligence, and technology-assisted execution.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: 26,
            }}
          >
            {valuePillars.map((pil) => (
              <div
                key={pil.title}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: 14,
                  padding: 32,
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <span
                    style={{
                      background: 'rgba(176, 141, 87, 0.12)',
                      color: '#b08d57',
                      fontSize: 11.5,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '5px 11px',
                      borderRadius: 5,
                    }}
                  >
                    {pil.tag}
                  </span>
                  <span style={{ color: '#cbd5e1', fontWeight: 800, fontSize: 17 }}>{pil.num}</span>
                </div>
                <h3 style={{ fontSize: 19, color: '#1f3864', margin: '0 0 8px', fontWeight: 700 }}>{pil.title}</h3>
                <p style={{ color: '#64748b', fontSize: 14.5, lineHeight: 1.65, margin: 0 }}>{pil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries We Serve Ribbon */}
      <section style={{ padding: '64px 0', background: '#1f3864', color: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <span style={{ color: '#d8c19a', fontSize: 12.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2.2 }}>
              Industry Expertise
            </span>
            <h2 style={{ color: '#ffffff', fontSize: 30, margin: '8px 0 0', fontWeight: 700 }}>
              Sectors We Serve
            </h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', maxWidth: 1360, margin: '0 auto' }}>
            {industryHighlights.map((ind) => (
              <span
                key={ind}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(216, 193, 154, 0.28)',
                  color: '#ffffff',
                  padding: '9px 20px',
                  borderRadius: 999,
                  fontSize: 14.5,
                  fontWeight: 500,
                }}
              >
                {ind}
              </span>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <a href="/industries" style={{ color: '#d8c19a', textDecoration: 'underline', fontSize: 15, fontWeight: 600 }}>
              Explore All 17 Specialised Sectors →
            </a>
          </div>
        </div>
      </section>

      {/* 7. Interactive PAN India Network Map Section */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 840, margin: '0 auto 48px' }}>
            <span style={{ color: '#b08d57', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2 }}>
              National Network Hub
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 2.6vw, 38px)', color: '#1f3864', margin: '8px 0 14px', fontWeight: 800 }}>
              Our PAN-India Presence
            </h2>
            <p style={{ color: '#64748b', fontSize: 16.5, lineHeight: 1.6 }}>
              With offices and professional associates across India, Team Eyrie connects clients to a central hub of multidisciplinary expertise.
            </p>
          </div>

          {/* Render the Interactive India Map Component */}
          <IndiaNetworkMap />
        </div>
      </section>

      {/* 8. Call to Action */}
      <section style={{ padding: '76px 0', background: '#16294a', color: '#ffffff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 940 }}>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(28px, 3vw, 38px)', margin: '0 0 18px', fontWeight: 800 }}>
            Trusted Advice. Practical Solutions. Sustainable Growth.
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: 18.5, lineHeight: 1.65, margin: '0 0 32px' }}>
            Whether you are launching your first venture, restructuring a business, or expanding globally, Team Eyrie is your trusted partner.
          </p>
          <a href="/contact" className="hero-btn hero-btn--gold" style={{ padding: '15px 40px', fontSize: 16.5 }}>
            Connect with Our Partners
          </a>
        </div>
      </section>
    </main>
  )
}
