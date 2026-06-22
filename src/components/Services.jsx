// src/components/Services.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from './ui/SectionWrapper'
import Badge from './ui/Badge'

const services = [
  {
    icon: '⬡',
    title: 'Web App Development',
    stack: ['React', 'Laravel', 'Golang', 'Next.js'],
    description:
      'Aplikasi web full-featured yang scalable — dari MVP startup hingga sistem enterprise. Performa tinggi, UX intuitif, dan arsitektur yang bersih.',
  },
  {
    icon: '◈',
    title: 'Mobile App Android',
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase'],
    description:
      'Aplikasi Android native dengan UI modern menggunakan Jetpack Compose. Terintegrasi Firebase untuk autentikasi, database realtime, dan notifikasi.',
  },
  {
    icon: '⬡',
    title: 'AI & ML Product',
    stack: ['Python', 'TensorFlow', 'Flask API', 'NLP'],
    description:
      'Produk kecerdasan buatan yang siap pakai: sistem rekomendasi, computer vision, NLP pipeline, hingga deployment API berbasis Flask/FastAPI.',
  },
  {
    icon: '◈',
    title: 'UI/UX Design',
    stack: ['Figma', 'Prototyping', 'Design System'],
    description:
      'Desain antarmuka yang fungsional dan estetik. Dari wireframe hingga high-fidelity prototype — siap diimplementasikan langsung ke kode.',
  },
  {
    icon: '⬡',
    title: 'Company Profile',
    stack: ['Website Bisnis', 'UMKM', 'Organisasi'],
    description:
      'Website profil profesional untuk bisnis, UMKM, dan organisasi. CMS sederhana sehingga klien bisa update konten sendiri tanpa coding.',
  },
  {
    icon: '◈',
    title: 'Sistem Manajemen',
    stack: ['Dashboard', 'POS', 'Admin Panel', 'CMS'],
    description:
      'Sistem backend yang robust: point-of-sale, manajemen inventori, dashboard analytics, dan panel admin yang mudah digunakan.',
  },
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <SectionWrapper id="layanan" grid>
      <div className="mb-12">
        <Badge>✦ Layanan</Badge>
      </div>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white tracking-tight max-w-xl">
          Apa yang Bisa<br />
          <span className="text-[#888888]">Kami Bangun untuk Anda</span>
        </h2>
        <p className="text-[#888888] text-sm font-sans max-w-xs leading-relaxed">
          Dari konsep hingga deployment — kami tangani semuanya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-xl border border-[#2A2A2A] hover:border-white/15 bg-[#1A1A1A] p-6 flex flex-col gap-4 transition-colors duration-300 overflow-hidden group"
          >
            {/* Icon */}
            <div className="flex items-center gap-3">
              <span className="text-white text-2xl">{service.icon}</span>
              <h3 className="font-heading font-semibold text-white text-base leading-tight">
                {service.title}
              </h3>
            </div>

            {/* Stack badges */}
            <div className="flex flex-wrap gap-1.5">
              {service.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[10px] font-medium font-sans text-[#888888] border border-[#2A2A2A] bg-[#111111]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description — animate in on hover */}
            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-[#888888] text-sm font-sans leading-relaxed overflow-hidden"
                >
                  {service.description}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Default hint */}
            {hoveredIndex !== i && (
              <p className="text-[#444444] text-xs font-sans italic">
                Hover untuk detail →
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
