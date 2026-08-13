'use client'

import React, { useState, useEffect, useRef } from 'react'

export interface HeroSlide {
  id: string
  num: string
  badge: string
  tagline: string
  title: string
  description: string
  image: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

export const defaultHeroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    num: '01',
    badge: 'Strategic Growth',
    tagline: 'Strategic Guidance & Cross-Border Expansion',
    title: 'Professional Corporate Advisory',
    description:
      'End-to-end counsel for corporate restructuring, international joint ventures, market entry strategies, and regulatory approvals across India.',
    image: '/hero/hero-1.png',
    primaryCta: { label: 'Explore Advisory', href: '/services#business-consulting' },
    secondaryCta: { label: 'Contact Us', href: '/contact' },
  },
  {
    id: 'slide-2',
    num: '02',
    badge: 'Assurance & Audit',
    tagline: 'Precision Auditing & Risk Governance',
    title: 'Assurance & Financial Analytics',
    description:
      'Comprehensive statutory audits, internal financial controls (IFC), forensic reviews, bank audits, and real-time management reporting systems.',
    image: '/hero/hero-2.png',
    primaryCta: { label: 'Audit Capabilities', href: '/services#assurance-audit' },
    secondaryCta: { label: 'Why Team Eyrie', href: '/why-team-eyrie' },
  },
  {
    id: 'slide-3',
    num: '03',
    badge: 'Tax & Regulatory',
    tagline: 'Strategic Tax Structuring & Litigation Defence',
    title: 'Tax Advisory & Compliance',
    description:
      'Corporate tax planning, cross-border transfer pricing, GST litigation, FEMA regulations, and high-stakes representation before statutory authorities.',
    image: '/hero/hero-3.png',
    primaryCta: { label: 'Tax Solutions', href: '/services#tax-advisory' },
    secondaryCta: { label: 'Our Alliance', href: '/about' },
  },
  {
    id: 'slide-4',
    num: '04',
    badge: 'Transactions & M&A',
    tagline: 'M&A Due Diligence & Registered Valuation',
    title: 'Transaction Advisory & Valuation',
    description:
      'Guiding enterprises through mergers, acquisitions, venture capital rounds, comprehensive due diligence, and certified valuation services.',
    image: '/hero/hero-4.png',
    primaryCta: { label: 'Transaction Services', href: '/services#transaction-advisory' },
    secondaryCta: { label: 'PAN-India Presence', href: '/presence' },
  },
]

interface HeroProps {
  eyebrow?: string
  headline?: string
  subheadline?: string
  primaryCtaLabel?: string
  primaryCtaLink?: string
  slides?: HeroSlide[]
}

export default function HeroSection({
  eyebrow = "India's Integrated Professional Services Network",
  headline = 'TEAM EYRIE',
  subheadline = 'Together, We Create Value. Together, We Build Trust.',
  primaryCtaLabel,
  primaryCtaLink,
  slides = defaultHeroSlides,
}: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const slideCount = slides.length

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slideCount)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slideCount) % slideCount)
  }

  const goToSlide = (idx: number) => {
    setActiveIndex(idx)
  }

  // Auto-play interval with pause on hover
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      nextSlide()
    }, 5500)
    return () => clearInterval(timer)
  }, [isPaused, activeIndex, slideCount])

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX
    if (diff > 50) {
      nextSlide()
    } else if (diff < -50) {
      prevSlide()
    }
    setTouchStartX(null)
  }

  const activeSlide = slides[activeIndex]

  return (
    <section
      className="hero-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Featured Capabilities Carousel"
    >
      {/* Background Image Carousel Track with Smooth Fade & Subtle Zoom */}
      <div className="hero-section__bg-wrapper">
        {slides.map((slide, idx) => {
          const isActive = idx === activeIndex
          return (
            <div
              key={slide.id}
              className={`hero-section__bg-slide ${isActive ? 'hero-section__bg-slide--active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-hidden={!isActive}
            />
          )
        })}
        {/* Transparent Gradient Overlays for High Legibility and Rich Contrast */}
        <div className="hero-section__overlay" />
        <div className="hero-section__overlay-radial" />
      </div>

      {/* Main Content Layout Container */}
      <div className="container hero-section__container">
        {/* LEFT CORNER: Translucent / Transparent Frosted-Glass Hero Information Card */}
        <div className="hero-section__left-col">
          <div className="hero-glass-card" key={activeSlide.id}>
            {/* Top Badge & Network Identifier */}
            <div className="hero-glass-card__top">
              <span className="hero-glass-card__eyebrow">
                <span className="hero-glass-card__dot" />
                {eyebrow}
              </span>
              <div className="hero-glass-card__counter">
                <span className="hero-glass-card__counter-active">{activeSlide.num}</span>
                <span className="hero-glass-card__counter-divider">/</span>
                <span className="hero-glass-card__counter-total">0{slideCount}</span>
              </div>
            </div>

            {/* Slide Category Tag */}
            <div className="hero-glass-card__badge-row">
              <span className="hero-glass-card__badge">{activeSlide.badge}</span>
              <span className="hero-glass-card__brand-pill">{headline}</span>
            </div>

            {/* Animated Headline & Subtitle */}
            <h1 className="hero-glass-card__title">{activeSlide.title}</h1>
            <p className="hero-glass-card__tagline">{activeSlide.tagline}</p>
            <p className="hero-glass-card__desc">{activeSlide.description}</p>

            {/* Action Buttons */}
            <div className="hero-glass-card__actions">
              <a
                href={primaryCtaLink || activeSlide.primaryCta.href}
                className="hero-btn hero-btn--gold"
              >
                <span>{primaryCtaLabel || activeSlide.primaryCta.label}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hero-btn__icon"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href={activeSlide.secondaryCta.href}
                className="hero-btn hero-btn--outline"
              >
                {activeSlide.secondaryCta.label}
              </a>
            </div>

            {/* Slide Controls & Progress Navigation in Left Corner Card */}
            <div className="hero-glass-card__controls">
              <div className="hero-glass-card__arrows">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                  className="hero-nav-arrow"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next Slide"
                  className="hero-nav-arrow"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              {/* Progress Indicators */}
              <div className="hero-glass-card__indicators">
                {slides.map((slide, idx) => {
                  const isActive = idx === activeIndex
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      className={`hero-dot ${isActive ? 'hero-dot--active' : ''}`}
                      aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                    >
                      <span className="hero-dot__bar" />
                    </button>
                  )
                })}
              </div>

              <div className="hero-glass-card__status">
                <span className="hero-glass-card__status-text">
                  {isPaused ? 'Paused' : 'Auto'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
