import React from 'react'

export interface CtaBannerProps {
  eyebrow?: string
  title: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  style?: React.CSSProperties
  className?: string
}

export default function CtaBanner({
  eyebrow = 'Partner with Team Eyrie',
  title = 'Ready to Build Value and Ensure Regulatory Precision?',
  description = 'Connect directly with our senior partners across assurance, taxation, corporate governance, and transaction advisory.',
  primaryLabel = 'Schedule Partner Consultation',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
  style,
  className = '',
}: CtaBannerProps) {
  return (
    <div
      className={`cta-banner ${className}`}
      style={{
        marginTop: 64,
        background: 'linear-gradient(135deg, #16294a 0%, #0f1c33 100%)',
        border: '1.5px solid rgba(216, 193, 154, 0.35)',
        borderLeft: '5px solid #b08d57',
        borderRadius: 18,
        padding: '52px 44px',
        textAlign: 'center',
        boxShadow: '0 20px 48px rgba(0, 0, 0, 0.22)',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Subtle backdrop glow */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '100%',
          background: 'radial-gradient(ellipse at center, rgba(176, 141, 87, 0.15) 0%, rgba(22, 41, 74, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 840, margin: '0 auto' }}>
        {eyebrow && (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: '#d8c19a',
              fontSize: 12.5,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 2,
              marginBottom: 12,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: '#b08d57',
                boxShadow: '0 0 8px #b08d57',
              }}
            />
            {eyebrow}
          </span>
        )}
        <h3
          style={{
            color: '#ffffff',
            fontSize: 'clamp(24px, 2.2vw, 32px)',
            fontWeight: 800,
            margin: '0 0 14px',
            lineHeight: 1.25,
          }}
        >
          {title}
        </h3>
        {description && (
          <p
            style={{
              color: '#cbd5e1',
              fontSize: 'clamp(15px, 1.1vw, 17px)',
              lineHeight: 1.68,
              margin: '0 auto 28px',
              maxWidth: 720,
            }}
          >
            {description}
          </p>
        )}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 14,
            flexWrap: 'wrap',
          }}
        >
          {primaryLabel && primaryHref && (
            <a
              href={primaryHref}
              className="hero-btn hero-btn--gold"
              style={{ padding: '13px 32px', fontSize: 15 }}
            >
              <span>{primaryLabel}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginLeft: 6 }}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          )}
          {secondaryLabel && secondaryHref && (
            <a
              href={secondaryHref}
              className="hero-btn hero-btn--outline"
              style={{ padding: '13px 28px', fontSize: 15 }}
            >
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
