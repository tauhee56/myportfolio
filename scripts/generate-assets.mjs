import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, "..", "public")
const projectsDir = path.join(publicDir, "projects")

fs.mkdirSync(projectsDir, { recursive: true })

const projects = [
  { file: "jigara-ai.png", title: "Jigara AI", subtitle: "AI Image Editing", c1: "#7c3aed", c2: "#db2777" },
  { file: "university-social-hub.png", title: "University Social Hub", subtitle: "Campus Networking", c1: "#2563eb", c2: "#06b6d4" },
  { file: "ecommerce-platform.png", title: "E-Commerce Platform", subtitle: "Full-Stack Store", c1: "#059669", c2: "#10b981" },
  { file: "task-management.png", title: "Task Management", subtitle: "Team Collaboration", c1: "#4f46e5", c2: "#6366f1" },
  { file: "weather-forecast.png", title: "Weather Forecast", subtitle: "Mobile Weather App", c1: "#0891b2", c2: "#3b82f6" },
  { file: "ar-historical.png", title: "AR Historical Edu", subtitle: "Concept Project", c1: "#ea580c", c2: "#ef4444" },
  { file: "portfolio-website.png", title: "Portfolio Website", subtitle: "tauheed.works", c1: "#4f46e5", c2: "#a855f7" },
]

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function projectSvg({ title, subtitle, c1, c2 }) {
  return `
<svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="#0b0f19"/>
  <rect x="60" y="60" width="1080" height="680" rx="32" fill="url(#bg)" opacity="0.9"/>
  <rect x="100" y="100" width="1000" height="600" rx="24" fill="#0b0f19" opacity="0.55"/>
  <text x="140" y="360" fill="#ffffff" font-family="Arial, sans-serif" font-size="64" font-weight="700">${escapeXml(title)}</text>
  <text x="140" y="430" fill="#e5e7eb" font-family="Arial, sans-serif" font-size="36">${escapeXml(subtitle)}</text>
  <text x="140" y="620" fill="#c7d2fe" font-family="Arial, sans-serif" font-size="24">Tauheed Ahmad · Portfolio Project</text>
</svg>`
}

function ogSvg() {
  return `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="og" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="50%" stop-color="#312e81"/>
      <stop offset="100%" stop-color="#4c1d95"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#og)"/>
  <circle cx="980" cy="120" r="180" fill="#6366f1" opacity="0.25"/>
  <circle cx="160" cy="520" r="220" fill="#a855f7" opacity="0.2"/>
  <text x="80" y="240" fill="#a5b4fc" font-family="Arial, sans-serif" font-size="32" letter-spacing="4">FULL STACK DEVELOPER</text>
  <text x="80" y="340" fill="#ffffff" font-family="Arial, sans-serif" font-size="72" font-weight="700">Tauheed Ahmad</text>
  <text x="80" y="420" fill="#e5e7eb" font-family="Arial, sans-serif" font-size="32">React · Node.js · AI · Mobile Apps</text>
  <text x="80" y="540" fill="#c4b5fd" font-family="Arial, sans-serif" font-size="28">tauheed.works</text>
</svg>`
}

async function writePng(filePath, svg, width, height) {
  await sharp(Buffer.from(svg)).resize(width, height).png().toFile(filePath)
  console.log("wrote", filePath)
}

async function main() {
  await writePng(path.join(publicDir, "og-image.png"), ogSvg(), 1200, 630)

  for (const project of projects) {
    await writePng(
      path.join(projectsDir, project.file),
      projectSvg(project),
      1200,
      800
    )
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
