// src/App.jsx
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SplashScreen from './components/SplashScreen'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [splashDone, setSplashDone] = useState(false)

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {!splashDone && (
          <SplashScreen key="splash" onDone={() => setSplashDone(true)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: splashDone ? 1 : 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-[#111111] text-[#F5F5F5] min-h-screen font-sans"
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  )
}
