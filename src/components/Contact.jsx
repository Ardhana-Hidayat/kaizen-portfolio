// src/components/Contact.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Globe, CheckCircle } from 'lucide-react'
import SectionWrapper from './ui/SectionWrapper'
import Badge from './ui/Badge'

const contactInfo = [
  {
    icon: Mail,
    label: 'Ardhana',
    value: 'ardhanahidayat61@gmail.com',
    href: 'mailto:ardhanahidayat61@gmail.com',
  },
  {
    icon: Mail,
    label: 'Najib',
    value: 'irhamnajibazimulqowi@gmail.com',
    href: 'mailto:irhamnajibazimulqowi@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Madiun, Jawa Timur',
    href: null,
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'kaizen.dev',
    href: 'https://kaizen.dev',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    Nama: '',
    Email: '',
    Kebutuhan: 'Web App',
    Pesan: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mailto fallback
    const subject = `[KAIZEN] Proyek ${form.Kebutuhan} dari ${form.Nama}`
    const body = `Nama: ${form.Nama}%0AEmail: ${form.Email}%0AKebutuhan: ${form.Kebutuhan}%0A%0APesan:%0A${form.Pesan}`
    window.location.href = `mailto:ardhanahidayat61@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-[#111111] border border-[#2A2A2A] focus:border-white/30 rounded-lg px-4 py-3 text-white text-sm font-sans placeholder-[#444444] outline-none transition-colors duration-200'

  return (
    <SectionWrapper id="hubungi">
      <div className="mb-12">
        <Badge>✦ Kontak</Badge>
      </div>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
        <div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
            Mari Berkolaborasi
          </h2>
          <p className="mt-4 text-[#888888] text-base font-sans max-w-md leading-relaxed">
            Punya proyek yang ingin diwujudkan? Kami terbuka untuk diskusi —
            tanpa biaya, tanpa komitmen.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Kolom kiri — info kontak */}
        <div className="flex flex-col gap-6">
          {contactInfo.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-[#888888]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#444444] text-xs font-sans uppercase tracking-widest mb-0.5">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white text-sm font-medium font-sans hover:text-[#888888] transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white text-sm font-medium font-sans">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            )
          })}

          {/* Availability indicator */}
          <div className="mt-4 flex items-center gap-3 p-4 rounded-xl border border-[#2A2A2A] bg-[#1A1A1A]">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-[#888888] text-sm font-sans">
              Tersedia untuk proyek baru · Remote-friendly
            </span>
          </div>
        </div>

        {/* Kolom kanan — form */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center"
              >
                <CheckCircle size={48} className="text-white" />
                <h3 className="font-heading font-bold text-2xl text-white">
                  Pesan Terkirim!
                </h3>
                <p className="text-[#888888] text-sm font-sans max-w-xs">
                  Terima kasih telah menghubungi KAIZEN. Email client Anda
                  seharusnya terbuka — jika tidak, kirim langsung ke{' '}
                  <a
                    href="mailto:ardhanahidayat61@gmail.com"
                    className="text-white underline underline-offset-2"
                  >
                    ardhanahidayat61@gmail.com
                  </a>
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-[#888888] hover:text-white text-sm font-medium font-sans transition-colors duration-200 underline underline-offset-2"
                >
                  Kirim pesan lain
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <input
                  name="Nama"
                  value={form.Nama}
                  onChange={handleChange}
                  required
                  placeholder="Nama Lengkap"
                  className={inputClass}
                />
                <input
                  name="Email"
                  type="email"
                  value={form.Email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className={inputClass}
                />
                <select
                  name="Kebutuhan"
                  value={form.Kebutuhan}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none`}
                >
                  <option>Web App</option>
                  <option>Mobile App</option>
                  <option>AI Product</option>
                  <option>UI/UX Design</option>
                  <option>Company Profile</option>
                  <option>Sistem Manajemen</option>
                  <option>Lainnya</option>
                </select>
                <textarea
                  name="Pesan"
                  value={form.Pesan}
                  onChange={handleChange}
                  required
                  placeholder="Ceritakan proyekmu..."
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  className="w-full mt-2 py-3 rounded-lg bg-white text-black text-sm font-medium font-sans hover:bg-white/90 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  Kirim Pesan
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  )
}
