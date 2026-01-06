import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'  // ← ADD THIS
import ContactForm from './components/ContactForm'
import Navigation from './components/Navigation'

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen bg-milk">
      <Navigation />
      
      <main className="relative">
        <Hero />
        <Services />
        <Projects />
        <Process />  {/* ← ADD THIS */}
        <ContactForm />
      </main>
      
      <footer className="bg-charcoal text-oat py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-light">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App