// src/components/ui/SectionWrapper.jsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionWrapper({ children, id, className = '', grid = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative px-6 md:px-16 lg:px-24 py-24 ${className}`}
    >
      {/* Grid texture overlay */}
      {grid && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-grid-lines grid-fade-y pointer-events-none"
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  )
}
