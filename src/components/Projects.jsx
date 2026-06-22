// src/components/Projects.jsx
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'
import Badge from './ui/Badge'

const projects = [
  {
    number: '01',
    title: 'KlixTicket',
    type: 'Web App · Tiket Online · Live Production',
    stack: ['ReactJS', 'Golang'],
    description:
      'Platform pemesanan tiket online full-featured yang sudah live di klixticket.com. Menangani UX pembelian, manajemen event, dan backend performa tinggi.',
    link: 'https://klixticket.com',
  },
  {
    number: '02',
    title: 'Sistem POS Cafe',
    type: 'Web App · Point of Sales',
    stack: ['Next.js'],
    description:
      'Sistem manajemen cafe berbasis POS untuk kasir, menu digital, dan laporan transaksi. Dibangun bersama JavaTekno Mitra Solusi.',
    link: null,
  },
  {
    number: '03',
    title: 'Job-Matching AI System',
    type: 'AI · NLP · Flask API',
    stack: ['Python', 'scikit-learn', 'Flask'],
    description:
      'Sistem ATS-matching yang membaca CV dan mencocokkan kandidat dengan lowongan kerja menggunakan NLP + cosine-similarity.',
    link: null,
  },
  {
    number: '04',
    title: 'Sistem Pembayaran Administrasi Bank Aldana',
    type: 'Web App · Fintech Internal',
    stack: ['Laravel', 'ReactJS', 'Next.js'],
    description:
      'Manajemen administrasi siswa dengan sistem pembayaran, admin panel, dan laporan keuangan. Implementasi di SMKN 1 Jenangan.',
    link: null,
  },
  {
    number: '05',
    title: 'Website UKM Cakra Manggala PNM',
    type: 'Company Profile · Organisasi',
    stack: ['Laravel'],
    description:
      'Website resmi cakramanggalapnm.com — admin panel, halaman publik, dan manajemen konten organisasi.',
    link: 'https://cakramanggalapnm.com',
  },
]

export default function Projects() {
  return (
    <SectionWrapper id="proyek">
      <div className="mb-12">
        <Badge>✦ Proyek</Badge>
      </div>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white tracking-tight">
          Yang Sudah<br />
          <span className="text-[#888888]">Kami Bangun</span>
        </h2>
        <p className="text-[#888888] text-sm font-sans max-w-xs leading-relaxed">
          Proyek nyata, klien nyata, hasil nyata.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.015 }}
            className="group relative rounded-xl border border-[#2A2A2A] hover:border-white/15 bg-[#1A1A1A] p-6 flex flex-col gap-4 transition-colors duration-300"
          >
            {/* Number + Link */}
            <div className="flex items-start justify-between">
              <span className="text-[#333333] text-sm font-mono font-medium">
                {project.number}
              </span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#888888] hover:text-white text-xs font-medium font-sans transition-colors duration-200"
                >
                  Lihat
                  <ExternalLink size={11} />
                </a>
              )}
            </div>

            {/* Title */}
            <h3 className="font-heading font-semibold text-white text-lg leading-tight">
              {project.title}
            </h3>

            {/* Type badge */}
            <p className="text-[#888888] text-xs font-sans">{project.type}</p>

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[10px] font-medium font-sans text-[#888888] border border-[#2A2A2A] bg-[#111111]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-[#888888] text-sm font-sans leading-relaxed">
              {project.description}
            </p>

            {/* Hover line decoration */}
            <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
