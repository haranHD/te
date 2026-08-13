'use client'

import React, { useState } from 'react'

export interface CityLocation {
  city: string
  region: string
  role: string
  desc: string
  x: number // percentage 0-100
  y: number // percentage 0-100
  isHub?: boolean
}

// Coordinates calibrated specifically to locate.png high-definition outline
const defaultCities: CityLocation[] = [
  { city: 'New Delhi', region: 'NCR', role: 'Regulatory Hub', desc: 'Direct Tax Litigation, NCLT & Corporate Law Practice', x: 38.5, y: 24 },
  { city: 'Mumbai', region: 'Maharashtra', role: 'Financial Capital Hub', desc: 'SEBI, Banking Audit, Capital Markets & Transaction Advisory', x: 28, y: 52 },
  { city: 'Goa', region: 'Goa', role: 'Commercial Hub', desc: 'Hospitality Tax Advisory, GST Compliance & Audit', x: 29, y: 64 },
  { city: 'Bengaluru', region: 'Karnataka', role: 'Tech & Startup Hub', desc: 'VC/PE Advisory, ESOP Structuring & Virtual CFO Services', x: 39, y: 72 },
  { city: 'Chennai', region: 'Tamil Nadu', role: 'Regional Headquarters', desc: 'Corporate Tax, Statutory Audit & Cross-Border Advisory', x: 47, y: 73, isHub: true },
  { city: 'Salem', region: 'Tamil Nadu', role: 'Industrial Hub', desc: 'Manufacturing Audit, Cost Accounting & MSME Advisory', x: 43, y: 77 },
  { city: 'Namakkal', region: 'Tamil Nadu', role: 'Enterprise Hub', desc: 'Institutional Audit, Transport & Poultry Industry Advisory', x: 43, y: 80 },
  { city: 'Madurai', region: 'Tamil Nadu', role: 'Commercial Hub', desc: 'Family Business Succession & Direct Tax Practice', x: 44, y: 84 },
  { city: 'Mysuru', region: 'Karnataka', role: 'Emerging Tech Hub', desc: 'Startup Tax Advisory, Secretarial & GST Compliance', x: 36, y: 76 },
]

export default function IndiaNetworkMap() {
  const [activeCity, setActiveCity] = useState<CityLocation>(defaultCities[4]) // Default Chennai Hub

  // Central Convergence Hub (Head Office Center)
  const centerNode = { x: 42, y: 48 }

  return (
    <div className="india-map-container" style={{ background: '#ffffff', color: '#1f3864', borderRadius: 18, padding: '44px 36px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 48, alignItems: 'center' }}>
        {/* Left: High-Definition locate.png Map Canvas */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '1.8 / 1', maxWidth: 680, margin: '0 auto' }}>
          {/* High Definition locate.png India Map Image - Bold Black Outline */}
          <img
            src="/locate.png"
            alt="India Map Outline - Team Eyrie Network"
            loading="lazy"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              mixBlendMode: 'multiply',
              filter: 'grayscale(100%) contrast(200%)',
              pointerEvents: 'none',
            }}
          />

          {/* Overlay SVG for Rays, Glowing Nodes, and Labels */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          >
            <defs>
              <filter id="glowGoldLocate" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Central Network Head Office Hub */}
            <g>
              <circle
                cx={centerNode.x}
                cy={centerNode.y}
                r="1.8"
                fill="#1f3864"
                filter="url(#glowGoldLocate)"
              />
              <circle
                cx={centerNode.x}
                cy={centerNode.y}
                r="3.6"
                fill="none"
                stroke="#1f3864"
                strokeWidth="0.35"
                strokeDasharray="1,1"
              />
              <text
                x={centerNode.x}
                y={centerNode.y - 4.5}
                fill="#1f3864"
                fontSize="2.2"
                fontWeight="800"
                textAnchor="middle"
                letterSpacing="0.3"
              >
                EYRIE HEADQUARTERS HUB
              </text>
            </g>

            {/* Network Rays & City Marker Nodes */}
            {defaultCities.map((c) => {
              const isActive = activeCity.city === c.city

              return (
                <g key={c.city} style={{ pointerEvents: 'all' }}>
                  {/* Glowing Connection Line towards Head Center */}
                  <line
                    x1={centerNode.x}
                    y1={centerNode.y}
                    x2={c.x}
                    y2={c.y}
                    stroke={isActive ? '#b08d57' : 'rgba(31, 56, 100, 0.15)'}
                    strokeWidth={isActive ? 0.75 : 0.3}
                    strokeDasharray={isActive ? 'none' : '1,1'}
                  />

                  {/* Pulsing Marker */}
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={isActive ? 2.0 : 1.2}
                    fill={isActive ? '#b08d57' : '#ffffff'}
                    stroke={isActive ? '#ffffff' : '#1f3864'}
                    strokeWidth="0.4"
                    filter={isActive ? 'url(#glowGoldLocate)' : 'none'}
                    style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                    onClick={() => setActiveCity(c)}
                    onMouseEnter={() => setActiveCity(c)}
                  />

                  {/* City Name Label */}
                  <text
                    x={c.x + 2.5}
                    y={c.y + 0.8}
                    fill={isActive ? '#1f3864' : '#475569'}
                    fontSize={isActive ? '2.8' : '2.2'}
                    fontWeight={isActive ? '800' : '600'}
                    style={{ cursor: 'pointer', pointerEvents: 'none', textShadow: '0px 0px 3px rgba(255,255,255,0.9)' }}
                  >
                    {c.city}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        {/* Right: Selected Office Detail Panel */}
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: '36px 32px' }}>
          <span style={{ color: '#b08d57', fontSize: 12.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2 }}>
            Selected Network Hub
          </span>
          <h3 style={{ fontSize: 32, color: '#1f3864', margin: '8px 0 4px', fontWeight: 800 }}>
            {activeCity.city}
          </h3>
          <span style={{ color: '#b08d57', fontSize: 14.5, fontWeight: 600, display: 'inline-block', marginBottom: 16 }}>
            {activeCity.role} • {activeCity.region}
          </span>
          <p style={{ color: '#64748b', fontSize: 15.5, lineHeight: 1.7, marginBottom: 26 }}>
            {activeCity.desc}
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '22px 0' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span style={{ fontSize: 12.5, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>
              All 9 PAN-India Commercial Hubs:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {defaultCities.map((c) => {
                const isSel = c.city === activeCity.city
                return (
                  <button
                    key={c.city}
                    onClick={() => setActiveCity(c)}
                    style={{
                      background: isSel ? '#1f3864' : '#ffffff',
                      color: isSel ? '#ffffff' : '#64748b',
                      border: isSel ? '1px solid #1f3864' : '1px solid #cbd5e1',
                      borderRadius: 8,
                      padding: '8px 16px',
                      fontSize: 13.5,
                      fontWeight: isSel ? 700 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    📍 {c.city}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
