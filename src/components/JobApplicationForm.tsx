'use client'

import React, { useState } from 'react'

type Consent = { label: string; reassurance?: string; grievanceContact?: string }

export default function JobApplicationForm({
  jobId,
  jobTitle,
  consent,
}: {
  jobId: string | number
  jobTitle: string
  consent: Consent
}) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')
  const [error, setError] = useState('')
  const [agreed, setAgreed] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const fd = new FormData(e.currentTarget)
    fd.set('job', String(jobId))
    try {
      const res = await fetch('/apply', { method: 'POST', body: fd })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || 'Request failed')
      setStatus('ok')
    } catch (err) {
      setStatus('error')
      setError((err as Error).message)
    }
  }

  if (status === 'ok') {
    return (
      <div className="alert alert--success">
        <strong>Application received.</strong> Thank you for applying for <em>{jobTitle}</em>. Our recruitment
        team will review your profile and be in touch.
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit}>
      {status === 'error' && <div className="alert alert--error">{error}</div>}
      <div className="grid grid--2" style={{ gap: 0, columnGap: 20 }}>
        <div className="field">
          <label htmlFor="fullName">Full name *</label>
          <input id="fullName" name="fullName" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone *</label>
          <input id="phone" name="phone" required />
        </div>
        <div className="field">
          <label htmlFor="currentEmployer">Current employer</label>
          <input id="currentEmployer" name="currentEmployer" />
        </div>
        <div className="field">
          <label htmlFor="totalExperience">Total experience (yrs)</label>
          <input id="totalExperience" name="totalExperience" type="number" min="0" step="0.5" />
        </div>
        <div className="field">
          <label htmlFor="noticePeriod">Notice period</label>
          <input id="noticePeriod" name="noticePeriod" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="linkedin">LinkedIn URL</label>
        <input id="linkedin" name="linkedin" />
      </div>
      <div className="field">
        <label htmlFor="resume">Résumé (PDF or Word, max 5 MB) *</label>
        <input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" required />
      </div>
      <div className="field">
        <label htmlFor="coverLetter">Cover note</label>
        <textarea id="coverLetter" name="coverLetter" placeholder="Tell us why you’re a great fit (optional)" />
      </div>

      {/* DPDP consent — required, unticked by default, enforced again server-side */}
      <div
        style={{
          border: '1px solid var(--line, #e6e9ef)',
          borderRadius: 10,
          padding: 16,
          background: 'var(--bg-alt, #f5f7fa)',
          margin: '4px 0 18px',
        }}
      >
        <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: 'pointer', fontWeight: 400 }}>
          <input
            type="checkbox"
            name="consent"
            required
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            style={{ marginTop: 4, width: 18, height: 18, flexShrink: 0 }}
          />
          <span style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink, #222)' }}>
            <strong>DPDP Consent:</strong> {consent.label}
          </span>
        </label>
        {consent.grievanceContact && (
          <p style={{ margin: '10px 0 0 30px', fontSize: 12.5, color: 'var(--muted, #5a6472)' }}>
            Grievance Officer: {consent.grievanceContact}
          </p>
        )}
        {consent.reassurance && (
          <p style={{ margin: '8px 0 0 30px', fontSize: 12.5, color: 'var(--muted, #5a6472)' }}>
            🔒 {consent.reassurance}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn--primary" disabled={status === 'sending' || !agreed}>
        {status === 'sending' ? 'Submitting…' : 'Submit application'}
      </button>
    </form>
  )
}
