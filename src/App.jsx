// src/App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Team from './components/Team'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#111111] text-[#F5F5F5] min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
