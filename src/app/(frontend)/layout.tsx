import React from 'react'
import './globals.css'
import CookieConsent from '../../components/CookieConsent'
import ScrollReveal from '../../components/ScrollReveal'
import SmoothScroll from '../../components/SmoothScroll'
import { SiteHeaderServer, SiteFooter } from '../../components/SiteChrome'

export const metadata = {
  title: 'Team Eyrie — India’s Integrated Professional Services Network',
  description:
    'Team Eyrie is a premier multidisciplinary professional services network delivering integrated solutions across taxation, assurance, regulatory compliance, corporate advisory, transaction services, and strategic consulting.',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SmoothScroll />
        <ScrollReveal />
        <SiteHeaderServer />
        {children}
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  )
}
