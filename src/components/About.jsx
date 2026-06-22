// src/components/About.jsx
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper from './ui/SectionWrapper'
import Badge from './ui/Badge'

function StatCounter({ target, suffix = '', label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = target
    const duration = 1500
    const step = Math.ceil(duration / end)
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <div
      ref={ref}
      className="p-6 rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] text-center"
    >
      <div className="font-heading font-bold text-4xl text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-[#888888] text-sm font-sans">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <SectionWrapper id="tentang" grid>
      {/* Section label */}
      <div className="mb-12">
        <Badge>✦ Tentang Kami</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* Kolom kiri — teks (60%) */}
        <div className="lg:col-span-3">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-8">
            Perbaikan Berkelanjutan,<br />
            <span className="text-[#888888]">di Setiap Baris Kode.</span>
          </h2>

          <div className="space-y-5 text-[#888888] text-base md:text-lg font-sans leading-relaxed">
            <p>
              <span className="text-white font-medium">KAIZEN</span> berasal dari filosofi Jepang yang berarti
              "perbaikan berkelanjutan." Kami membawa prinsip ini ke setiap baris kode
              dan setiap piksel desain.
            </p>
            <p>
              Studio ini lahir dari dua developer yang percaya bahwa produk digital
              yang baik bukan hanya yang terlihat bagus — tapi yang{' '}
              <span className="text-white">benar-benar bekerja</span>, cepat, dan
              memberikan nilai nyata bagi penggunanya.
            </p>
            <p>
              Kami menerima proyek freelance dari bisnis, startup, UMKM, hingga
              organisasi yang ingin hadir secara digital dengan serius.
            </p>
          </div>

          {/* Divider */}
          <div className="mt-10 h-px bg-[#2A2A2A]" />

          {/* Values */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '⬡', label: 'Fungsional', desc: 'Kode bersih, performa optimal' },
              { icon: '◈', label: 'Cepat', desc: 'Iterasi sigap, rilis tepat waktu' },
              { icon: '✦', label: 'Hasil', desc: 'Berorientasi nilai bagi pengguna' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="text-white text-lg">{item.icon}</span>
                <span className="text-white text-sm font-medium font-sans">{item.label}</span>
                <span className="text-[#888888] text-xs font-sans">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom kanan — stats (40%) */}
        <div className="lg:col-span-2 grid grid-cols-1 gap-4">
          <StatCounter target={5} suffix="+" label="Proyek Selesai" />
          <StatCounter target={2} label="Developer" />
          <div className="p-6 rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] text-center">
            <div className="font-heading font-bold text-4xl text-white mb-1">100%</div>
            <div className="text-[#888888] text-sm font-sans">Remote-Ready</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
