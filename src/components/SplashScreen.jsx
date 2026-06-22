// src/components/SplashScreen.jsx
import { motion, AnimatePresence } from 'framer-motion'

export default function SplashScreen({ onDone }) {
  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#111111]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        onAnimationComplete={() => {}}
      >
        {/* Logo mark — draw paths one by one */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src="/kaizen-logo.svg"
            alt="KAIZEN"
            className="w-16 h-auto"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          />
        </motion.div>

        {/* KAIZEN wordmark */}
        <motion.div
          className="mt-6 flex items-center gap-[0.2em] overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.4 } } }}
        >
          {'KAIZEN'.split('').map((char, i) => (
            <motion.span
              key={i}
              className="font-heading font-bold text-2xl tracking-[0.25em] text-white"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mt-2 text-[#888888] text-xs font-sans tracking-[0.2em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          App Developer &amp; Digital Product
        </motion.p>

        {/* Bottom line loading bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1A1A1A]">
          <motion.div
            className="h-full bg-white/30"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={onDone}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
