import { getPayload } from 'payload'
import config from '../src/payload.config'

const run = async () => {
  try {
    const payload = await getPayload({ config })
    const users = await payload.find({ collection: 'users' })
    console.log(`[Payload Status] Connected. Found ${users.totalDocs} users in database.`)
  } catch (e) {
    console.error('[Payload Status] Connection error:', e)
  }
  process.exit(0)
}

run()
