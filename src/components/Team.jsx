// src/components/Team.jsx
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'
import Badge from './ui/Badge'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function Avatar({ initial }) {
  return (
    <div
      className="w-20 h-20 rounded-full border-2 border-[#2A2A2A] flex items-center justify-center shrink-0"
      style={{ background: 'linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)' }}
    >
      <span className="font-heading font-bold text-2xl text-white">{initial}</span>
    </div>
  )
}

function SkillRow({ category, items }) {
  return (
    <div className="flex gap-2 text-sm font-sans">
      <span className="text-[#444444] shrink-0 w-24">{category}</span>
      <span className="text-[#888888]">{items}</span>
    </div>
  )
}

function ExperienceItem({ role, company, period }) {
  return (
    <div className="flex flex-col">
      <span className="text-white text-sm font-medium font-sans">{role}</span>
      <span className="text-[#888888] text-xs font-sans mt-0.5">
        {company} · {period}
      </span>
    </div>
  )
}

function AchievementItem({ text }) {
  return (
    <div className="flex items-start gap-2 text-sm font-sans text-[#888888]">
      <span className="text-white mt-0.5 shrink-0">★</span>
      <span>{text}</span>
    </div>
  )
}

function SocialLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#2A2A2A] hover:border-white/30 text-[#888888] hover:text-white text-xs font-medium font-sans transition-all duration-200"
    >
      {label}
      <ExternalLink size={10} />
    </a>
  )
}

const teamData = [
  {
    initial: 'A',
    name: 'Ardhana Syah Hidayat',
    role: 'UI/UX & Fullstack Web Developer',
    quote: '"Dari desain ke deployment — saya handle keduanya."',
    skills: [
      { category: 'Frontend', items: 'ReactJS, NextJS, TailwindCSS' },
      { category: 'Backend', items: 'Laravel (PHP), Golang' },
      { category: 'Design', items: 'Figma, Adobe Photoshop, UI/UX' },
      { category: 'Tools', items: 'Git, Postman, VS Code' },
    ],
    experiences: [
      { role: 'Fullstack Developer · KlixTicket', company: 'klixticket.com', period: '2026' },
      { role: 'Frontend Developer · Sistem POS Cafe', company: 'JavaTekno', period: '2025' },
      { role: 'Project Manager', company: 'Kazuya Media', period: '2022–2023' },
      { role: 'Ketua', company: 'Gandini Creative', period: '2023–2024' },
      { role: 'Koordinator Divisi PDD', company: 'HMTRPL PNM', period: '2026–sekarang' },
    ],
    achievements: [
      'Juara 1 Web Design — Univ. Muhammadiyah Ponorogo',
      '6 Besar Web Design — FITCOM Univ. Dinamika Surabaya',
      '"Sangat Kompeten" — Uji Kompetensi JavaTekno',
    ],
    links: [
      { href: 'https://linkedin.com', label: 'LinkedIn' },
      { href: 'https://github.com', label: 'GitHub' },
      { href: '#', label: 'Portofolio' },
    ],
  },
  {
    initial: 'N',
    name: 'Irham Najib Azimul Qowi',
    role: 'AI Engineer & Fullstack Developer',
    quote: '"Saya membangun sistem cerdas yang bisa dipakai sungguhan."',
    skills: [
      { category: 'AI/ML', items: 'Python, TensorFlow, PyTorch, scikit-learn, CNN, RNN/LSTM, NLP' },
      { category: 'Backend', items: 'Golang, Laravel, Flask, FastAPI, Node.js' },
      { category: 'Mobile', items: 'Kotlin, Jetpack Compose, Firebase, Android' },
      { category: 'Data', items: 'Pandas, NumPy, ETL Pipeline' },
    ],
    experiences: [
      { role: 'Fullstack Developer · KlixTicket', company: 'klixticket.com', period: '2026' },
      { role: 'Web Developer', company: 'UKM Cakra Manggala PNM', period: '2026' },
      { role: 'ML Developer · Job-Matching AI System', company: 'Flask API', period: '2026' },
    ],
    achievements: [
      'IPK: 3.75 / 4.00',
      'Immediately available · Remote-friendly',
    ],
    links: [
      { href: 'https://linkedin.com', label: 'LinkedIn' },
      { href: 'https://github.com', label: 'GitHub' },
    ],
  },
]

export default function Team() {
  return (
    <SectionWrapper id="tim">
      <div className="mb-12">
        <Badge>✦ Tim Kami</Badge>
      </div>

      <h2 className="font-heading font-bold text-3xl md:text-4xl text-white tracking-tight mb-12">
        Orang-orang di Balik KAIZEN
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {teamData.map((member, i) => (
          <motion.div
            key={member.name}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.01 }}
            className="rounded-2xl border border-[#2A2A2A] hover:border-white/15 bg-[#1A1A1A] p-8 flex flex-col gap-6 transition-colors duration-300"
          >
            {/* Header */}
            <div className="flex items-start gap-5">
              <Avatar initial={member.initial} />
              <div className="flex flex-col">
                <h3 className="font-heading font-bold text-xl text-white leading-tight">
                  {member.name}
                </h3>
                <p className="text-[#888888] text-sm font-sans mt-1">{member.role}</p>
                <p className="text-[#555555] text-xs font-sans mt-3 italic leading-snug">
                  {member.quote}
                </p>
              </div>
            </div>

            <div className="h-px bg-[#2A2A2A]" />

            {/* Keahlian */}
            <div>
              <p className="text-[#444444] text-xs font-sans uppercase tracking-widest mb-3">
                Keahlian
              </p>
              <div className="space-y-2">
                {member.skills.map((s) => (
                  <SkillRow key={s.category} category={s.category} items={s.items} />
                ))}
              </div>
            </div>

            <div className="h-px bg-[#2A2A2A]" />

            {/* Pengalaman */}
            <div>
              <p className="text-[#444444] text-xs font-sans uppercase tracking-widest mb-3">
                Pengalaman
              </p>
              <div className="space-y-3">
                {member.experiences.map((exp, j) => (
                  <ExperienceItem
                    key={j}
                    role={exp.role}
                    company={exp.company}
                    period={exp.period}
                  />
                ))}
              </div>
            </div>

            <div className="h-px bg-[#2A2A2A]" />

            {/* Prestasi */}
            <div>
              <p className="text-[#444444] text-xs font-sans uppercase tracking-widest mb-3">
                Prestasi & Info
              </p>
              <div className="space-y-2">
                {member.achievements.map((ach, j) => (
                  <AchievementItem key={j} text={ach} />
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {member.links.map((link) => (
                <SocialLink key={link.label} href={link.href} label={link.label} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
