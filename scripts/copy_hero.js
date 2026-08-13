import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const publicHeroDir = path.join(__dirname, '../public/hero')
if (!fs.existsSync(publicHeroDir)) {
  fs.mkdirSync(publicHeroDir, { recursive: true })
}

const sourceImages = [
  { src: '/home/haran/.gemini/antigravity/brain/1150fb65-c4e6-4c22-a072-31a47f775460/media__1786597084425.png', dest: 'hero-1.png' },
  { src: '/home/haran/.gemini/antigravity/brain/1150fb65-c4e6-4c22-a072-31a47f775460/media__1786597091060.png', dest: 'hero-2.png' },
  { src: '/home/haran/.gemini/antigravity/brain/1150fb65-c4e6-4c22-a072-31a47f775460/media__1786597097935.png', dest: 'hero-3.png' },
  { src: '/home/haran/.gemini/antigravity/brain/1150fb65-c4e6-4c22-a072-31a47f775460/media__1786597101339.png', dest: 'hero-4.png' }
]

sourceImages.forEach(item => {
  const destPath = path.join(publicHeroDir, item.dest)
  if (fs.existsSync(item.src)) {
    fs.copyFileSync(item.src, destPath)
    console.log(`Copied ${item.dest} (${fs.statSync(destPath).size} bytes)`)
  }
})
