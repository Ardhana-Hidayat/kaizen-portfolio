// src/components/ui/SectionWrapper.jsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionWrapper({ children, id, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`px-6 md:px-16 lg:px-24 py-24 ${className}`}
    >
      {children}
    </motion.section>
  )
}
