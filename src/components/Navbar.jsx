// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Tentang', href: 'tentang' },
  { label: 'Layanan', href: 'layanan' },
  { label: 'Proyek', href: 'proyek' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#111111]/90 backdrop-blur-md border-b border-[#2A2A2A]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center"
          >
            <img
              src="/kaizen-logo.svg"
              alt="KAIZEN"
              className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-[#888888] hover:text-white text-sm font-medium font-sans transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('hubungi')}
              className="ml-2 px-4 py-2 rounded-lg border border-[#2A2A2A] hover:border-white/30 bg-white text-black text-sm font-medium font-sans transition-all duration-200 hover:bg-white/90"
            >
              Hubungi Kami →
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(true)}
            aria-label="Buka menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 md:hidden"
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[#1A1A1A] border-l border-[#2A2A2A] z-50 md:hidden flex flex-col"
            >
              {/* Header panel */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-[#2A2A2A]">
                <span className="font-heading font-bold text-white text-base">KAIZEN</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-[#888888] hover:text-white transition-colors"
                  aria-label="Tutup menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex flex-col gap-1 p-6">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => {
                      scrollTo(link.href)
                      setMenuOpen(false)
                    }}
                    className="text-left px-4 py-3 text-[#888888] hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium font-sans transition-all duration-200"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    scrollTo('hubungi')
                    setMenuOpen(false)
                  }}
                  className="mt-4 px-4 py-3 rounded-lg bg-white text-black text-sm font-medium font-sans transition-all duration-200 hover:bg-white/90 text-center"
                >
                  Hubungi Kami →
                </button>
              </div>

              {/* Footer panel */}
              <div className="mt-auto px-6 pb-8">
                <p className="text-[#444444] text-xs font-sans">
                  © 2026 KAIZEN. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
