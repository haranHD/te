import { getPayload } from 'payload'
import config from '@payload-config'
import { runSeed } from '../../../../seed/seedData'

export const dynamic = 'force-dynamic'

// Dev-only convenience route to seed the database. Disabled in production.
export async function GET() {
  if (process.env.NODE_ENV === 'production') {
    return new Response('Disabled in production', { status: 403 })
  }
  try {
    const payload = await getPayload({ config })
    const log = await runSeed(payload)
    return Response.json({ ok: true, log })
  } catch (err) {
    return Response.json({ ok: false, error: (err as Error).message }, { status: 500 })
  }
}
