import { getPayload } from 'payload'
import config from '@payload-config'

export const dynamic = 'force-dynamic'

const MAX_SIZE = 5 * 1024 * 1024 // 5 MB
const ALLOWED = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']

export async function POST(req: Request) {
  try {
    const form = await req.formData()
    const jobIdRaw = form.get('job')?.toString()
    // Postgres uses numeric IDs; coerce numeric strings so the relationship validates.
    const jobId: string | number | undefined =
      jobIdRaw && /^\d+$/.test(jobIdRaw) ? Number(jobIdRaw) : jobIdRaw
    const fullName = form.get('fullName')?.toString()?.trim()
    const email = form.get('email')?.toString()?.trim()
    const phone = form.get('phone')?.toString()?.trim()
    const file = form.get('resume')

    if (!jobId || !fullName || !email || !phone) {
      return Response.json({ ok: false, error: 'Please fill in all required fields.' }, { status: 400 })
    }
    if (!(file instanceof File) || file.size === 0) {
      return Response.json({ ok: false, error: 'Please attach your résumé.' }, { status: 400 })
    }
    if (file.size > MAX_SIZE) {
      return Response.json({ ok: false, error: 'Résumé must be 5 MB or smaller.' }, { status: 400 })
    }
    if (file.type && !ALLOWED.includes(file.type)) {
      return Response.json({ ok: false, error: 'Résumé must be a PDF or Word document.' }, { status: 400 })
    }

    const payload = await getPayload({ config })

    // Confirm the job exists and is open.
    const job = await payload.findByID({ collection: 'jobs', id: jobId, depth: 0 }).catch(() => null)
    if (!job || (job as any).status !== 'open') {
      return Response.json({ ok: false, error: 'This position is no longer accepting applications.' }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const media = await payload.create({
      collection: 'media',
      data: { alt: `Résumé — ${fullName}` },
      file: { data: buffer, mimetype: file.type || 'application/pdf', name: file.name, size: file.size },
      overrideAccess: true,
    })

    try {
      await payload.create({
        collection: 'job-applications',
        overrideAccess: true,
        data: {
          job: jobId as any,
          fullName,
          email,
          phone,
          resume: media.id as any,
          currentEmployer: form.get('currentEmployer')?.toString() || undefined,
          totalExperience: form.get('totalExperience') ? Number(form.get('totalExperience')) : undefined,
          noticePeriod: form.get('noticePeriod')?.toString() || undefined,
          coverLetter: form.get('coverLetter')?.toString() || undefined,
          linkedin: form.get('linkedin')?.toString() || undefined,
          stage: 'new',
        },
      })
    } catch (appErr) {
      // Don't leave the uploaded résumé orphaned if the application fails to save.
      await payload.delete({ collection: 'media', id: media.id, overrideAccess: true }).catch(() => {})
      throw appErr
    }

    return Response.json({ ok: true })
  } catch (err) {
    return Response.json({ ok: false, error: (err as Error).message }, { status: 500 })
  }
}
