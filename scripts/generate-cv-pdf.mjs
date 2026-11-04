import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import PDFDocument from "pdfkit"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outPath = path.join(__dirname, "..", "public", "CV-Tauheed-Ahmad.pdf")

const doc = new PDFDocument({ margin: 50, size: "A4" })
const stream = fs.createWriteStream(outPath)
doc.pipe(stream)

doc
  .fillColor("#111827")
  .fontSize(24)
  .text("Tauheed Ahmad", { align: "left" })
doc
  .moveDown(0.3)
  .fontSize(12)
  .fillColor("#4f46e5")
  .text("Full Stack Developer & AI Enthusiast")
doc
  .moveDown(0.4)
  .fontSize(10)
  .fillColor("#374151")
  .text("Email: i@tauheed.works  |  Phone: +92 307 9317054")
doc.text("Portfolio: https://tauheed.works  |  GitHub: https://github.com/tauhee56")
doc.text("LinkedIn: https://www.linkedin.com/in/tauheed-ahmad-sukhera-b00719399")

doc.moveDown(1)
doc.fillColor("#111827").fontSize(14).text("Summary")
doc
  .moveDown(0.3)
  .fontSize(10)
  .fillColor("#374151")
  .text(
    "BS Information Technology graduate with 5+ years of experience in web development, mobile app development, and AI integration. Builds production-ready React, Node.js, and React Native solutions with a focus on clean UX and reliable delivery."
  )

doc.moveDown(1)
doc.fillColor("#111827").fontSize(14).text("Skills")
doc
  .moveDown(0.3)
  .fontSize(10)
  .fillColor("#374151")
  .text("Frontend: React.js, Next.js, React Native, Tailwind CSS, TypeScript")
doc.text("Backend: Node.js, Express.js, PHP, PostgreSQL, MongoDB, Firebase")
doc.text("AI & Tools: Hugging Face, Cloudinary, Git/GitHub, Vercel, Netlify")

doc.moveDown(1)
doc.fillColor("#111827").fontSize(14).text("Selected Projects")
doc.moveDown(0.3).fontSize(10).fillColor("#374151")
doc.text("• Jigara AI — React Native AI image editing app (Hugging Face, Strapi, Firebase)")
doc.text("• University Social Hub — Campus social app with realtime messaging")
doc.text("• E-Commerce Platform — React/Node storefront with payments and admin dashboard")
doc.text("• Portfolio Website — Next.js personal site at tauheed.works")

doc.moveDown(1)
doc.fillColor("#111827").fontSize(14).text("Education")
doc
  .moveDown(0.3)
  .fontSize(10)
  .fillColor("#374151")
  .text("BS Information Technology — BZU Sub Campus Lodhran, Multan (2025)")

doc.moveDown(1)
doc.fillColor("#111827").fontSize(14).text("Services")
doc
  .moveDown(0.3)
  .fontSize(10)
  .fillColor("#374151")
  .text("Web Development · Mobile App Development · AI Integration · E-commerce Solutions")

doc.end()

await new Promise((resolve, reject) => {
  stream.on("finish", resolve)
  stream.on("error", reject)
})

console.log("wrote", outPath)
