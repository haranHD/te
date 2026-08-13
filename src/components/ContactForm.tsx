'use client'

import React, { useState } from 'react'

type Option = { id: string | number; label: string }

export default function ContactForm({
  services,
  offices,
}: {
  services: Option[]
  offices: Option[]
}) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const fd = new FormData(e.currentTarget)
    const payload: Record<string, any> = {
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      company: fd.get('company'),
      subject: fd.get('subject'),
      message: fd.get('message'),
      status: 'new',
    }
    const service = fd.get('service')
    if (service) payload.serviceInterest = [service]
    const office = fd.get('office')
    if (office) payload.office = office

    try {
      const res = await fetch('/api/contact-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('ok')
      ;(e.target as HTMLFormElement).reset()
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again or email us directly.')
    }
  }

  if (status === 'ok') {
    return (
      <div className="alert alert--success">
        <strong>Thank you.</strong> Your enquiry has been received — our team will get back to you shortly.
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit}>
      {status === 'error' && <div className="alert alert--error">{error}</div>}
      <div className="grid grid--2" style={{ gap: 0, columnGap: 20 }}>
        <div className="field">
          <label htmlFor="name">Name *</label>
          <input id="name" name="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" />
        </div>
        <div className="field">
          <label htmlFor="service">Service of interest</label>
          <select id="service" name="service" defaultValue="">
            <option value="">— Select —</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="office">Nearest office</label>
          <select id="office" name="office" defaultValue="">
            <option value="">— Select —</option>
            {offices.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" />
      </div>
      <div className="field">
        <label htmlFor="message">Message *</label>
        <textarea id="message" name="message" required />
      </div>
      <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send enquiry'}
      </button>
    </form>
  )
}
