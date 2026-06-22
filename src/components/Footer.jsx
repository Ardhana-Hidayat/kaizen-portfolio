// src/components/Footer.jsx
import { Github, Linkedin, Instagram } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] px-6 md:px-16 lg:px-24 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img
                src="/kaizen_logo.png"
                alt="KAIZEN"
                className="h-7 opacity-60"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <span className="font-heading font-bold text-white text-base">KAIZEN</span>
            </div>
            <p className="text-[#888888] text-sm font-sans">App Developer & Digital Product</p>
            <p className="text-[#444444] text-xs font-sans">
              Madiun, Jawa Timur · kaizen.dev
            </p>
          </div>

          {/* Nav quick links */}
          <div className="flex flex-col gap-2">
            <p className="text-[#444444] text-xs font-sans uppercase tracking-widest mb-2">
              Navigasi
            </p>
            {[
              { label: 'Tentang', href: 'tentang' },
              { label: 'Tim', href: 'tim' },
              { label: 'Layanan', href: 'layanan' },
              { label: 'Proyek', href: 'proyek' },
              { label: 'Kontak', href: 'hubungi' },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  const el = document.getElementById(link.href)
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-[#888888] hover:text-white text-sm font-sans text-left transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Contact quick */}
          <div className="flex flex-col gap-2">
            <p className="text-[#444444] text-xs font-sans uppercase tracking-widest mb-2">
              Kontak
            </p>
            <a
              href="mailto:ardhanahidayat61@gmail.com"
              className="text-[#888888] hover:text-white text-sm font-sans transition-colors duration-200"
            >
              ardhanahidayat61@gmail.com
            </a>
            <a
              href="mailto:irhamnajibazimulqowi@gmail.com"
              className="text-[#888888] hover:text-white text-sm font-sans transition-colors duration-200"
            >
              irhamnajibazimulqowi@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#2A2A2A] mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#444444] text-xs font-sans text-center sm:text-left">
            — Dibuat dengan ♡ oleh Ardhana & Najib —
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#444444] hover:text-white transition-colors duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <p className="text-[#444444] text-xs font-sans">
            © 2026 KAIZEN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
