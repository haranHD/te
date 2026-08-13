import React from 'react'

export interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  theme?: 'light' | 'dark'
  maxWidth?: number | string
  className?: string
  showDot?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  maxWidth = 920,
  className = '',
  showDot = true,
}: SectionHeaderProps) {
  const isDark = theme === 'dark'

  return (
    <div
      className={`section-header section-header--${align} section-header--${theme} ${className}`}
      style={{
        maxWidth,
        margin: align === 'center' ? '0 auto 52px' : '0 0 40px',
        textAlign: align,
      }}
    >
      {eyebrow && (
        <span
          className="section-header__eyebrow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            color: isDark ? '#d8c19a' : '#b08d57',
            fontSize: 13,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 2,
            marginBottom: 10,
          }}
        >
          {showDot && (
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: isDark ? '#d8c19a' : '#b08d57',
                boxShadow: isDark ? '0 0 8px #d8c19a' : '0 0 6px rgba(176, 141, 87, 0.6)',
              }}
            />
          )}
          {eyebrow}
        </span>
      )}
      <h2
        className="section-header__title"
        style={{
          fontSize: 'clamp(28px, 2.5vw, 38px)',
          fontWeight: 800,
          color: isDark ? '#ffffff' : '#1f3864',
          margin: '0 0 14px',
          lineHeight: 1.22,
          letterSpacing: '-0.2px',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="section-header__subtitle"
          style={{
            fontSize: 'clamp(15.5px, 1.15vw, 17.5px)',
            color: isDark ? '#cbd5e1' : '#475569',
            lineHeight: 1.72,
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
