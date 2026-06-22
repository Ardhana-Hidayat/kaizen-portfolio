// src/components/Hero.jsx
import { motion } from 'framer-motion'
import Badge from './ui/Badge'
import TechMarquee from './ui/TechMarquee'

const words = ['Kami', 'Membangun', 'Produk', 'Digital', 'yang', 'Bekerja.']

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-16 lg:px-24 pt-20">
        {/* Logo watermark background */}
        <motion.img
          src="/kaizen_logo.png"
          alt=""
          aria-hidden="true"
          animate={{ y: ['-10px', '10px', '-10px'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-[0.04] w-[480px] lg:w-[600px] pointer-events-none select-none"
          onError={(e) => { e.target.style.display = 'none' }}
        />

        {/* Subtle radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge>
              <span className="text-white">✦</span>
              Studio Digital · Madiun, Jawa Timur
            </Badge>
          </motion.div>

          {/* Heading stagger */}
          <h1 className="mt-8 font-heading font-bold text-[56px] sm:text-[64px] lg:text-[80px] leading-[1.05] tracking-tight text-white">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-6 text-[#888888] text-lg font-sans leading-relaxed max-w-xl"
          >
            KAIZEN adalah studio developer yang berfokus pada web app, mobile app,
            dan produk AI yang fungsional, cepat, dan berorientasi hasil.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo('proyek')}
              className="px-6 py-3 rounded-lg border border-white/30 text-white text-sm font-medium font-sans hover:border-white hover:bg-white/5 transition-all duration-200"
            >
              → Lihat Proyek Kami
            </button>
            <button
              onClick={() => scrollTo('hubungi')}
              className="px-6 py-3 rounded-lg bg-white text-black text-sm font-medium font-sans hover:bg-white/90 transition-all duration-200"
            >
              Hubungi Kami →
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-16 flex items-center gap-3"
          >
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#2A2A2A]" />
            <span className="text-[#444444] text-xs font-sans uppercase tracking-widest">
              Scroll untuk menjelajah
            </span>
          </motion.div>
        </div>
      </section>

      {/* Tech Marquee — di bawah hero */}
      <TechMarquee />
    </>
  )
}
