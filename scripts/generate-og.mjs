// Regenerates public/og.jpg (1200x630). Run with: node scripts/generate-og.mjs
import sharp from "sharp"

const W = 1200
const H = 630
const PHOTO_W = 420

const text = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="100%" height="100%" fill="#0b0b0d"/>
  <g font-family="Helvetica Neue, Helvetica, Arial, sans-serif">
    <text x="72" y="150" fill="#34d399" font-size="22" letter-spacing="3">FULL STACK WEB DEVELOPER / BACKEND ENGINEER</text>
    <text x="72" y="262" fill="#f4f4f5" font-size="92" font-weight="700" letter-spacing="-3">Reno Anthus</text>
    <text x="72" y="340" fill="#a1a1aa" font-size="32">Laravel, Node.js, Go, and SQL systems</text>
    <text x="72" y="384" fill="#a1a1aa" font-size="32">for healthcare, government, and business.</text>
    <text x="72" y="540" fill="#f4f4f5" font-size="26">renoanthus.github.io</text>
  </g>
  <rect x="72" y="566" width="64" height="4" fill="#34d399"/>
</svg>`

const photo = await sharp("src/assets/renoanthus.jpeg")
  .resize(PHOTO_W, H, { fit: "cover", position: "centre" })
  .toBuffer()

await sharp(Buffer.from(text))
  .composite([{ input: photo, left: W - PHOTO_W, top: 0 }])
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile("public/og.jpg")

console.log("public/og.jpg written")
