import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Send, ArrowRight, Check, Sparkles, Zap, MessageCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [shineCount, setShineCount] = useState(0)
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Shine animation trigger
  useEffect(() => {
    if (!isInView) return
    
    // First shine immediately when in view
    const firstShine = setTimeout(() => {
      setShineCount(1)
    }, 500)

    // Then every 6 seconds
    const interval = setInterval(() => {
      setShineCount(prev => prev + 1)
    }, 6000)

    return () => {
      clearTimeout(firstShine)
      clearInterval(interval)
    }
  }, [isInView])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format message for WhatsApp
    const message = `🌟 NEW PROJECT INQUIRY

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
💼 Project Type: ${formData.projectType}
💰 Budget: ${formData.budget}

📝 MESSAGE:
${formData.message}

---
Reply to start the conversation! ✨`.trim()

    // Create WhatsApp URL
    const whatsappNumber = '27677020221'
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    // Open WhatsApp
    setTimeout(() => {
      window.open(whatsappURL, '_blank')
      setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const inputClasses = "w-full bg-white border-2 border-oat rounded-xl px-4 py-3 text-charcoal placeholder-taupe/60 focus:border-mocha focus:outline-none transition-colors duration-200 font-light text-sm"

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 md:px-6 bg-charcoal overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-milk rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-oat rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          {/* Playful Badge with Shine Animation */}
          <motion.div
            key={shineCount}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6 relative overflow-hidden"
          >
            <Sparkles className="w-4 h-4 text-mocha animate-pulse" />
            <span className="text-sm text-oat font-light relative z-10">Just browsing our talent, right?</span>
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{
                duration: 1.2,
                ease: 'easeInOut',
              }}
              style={{
                width: '50%',
                transform: 'skewX(-20deg)',
              }}
            />
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-display font-bold text-milk mb-4 md:mb-6 tracking-tight">
            Let's Talk
          </h2>
          <p className="text-base md:text-xl text-oat max-w-2xl mx-auto mb-8 font-light">
            Fill this out and we'll chat on WhatsApp.
          </p>

          {/* Enhanced Tomorrow Special Banner with Yellow Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="relative bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 backdrop-blur-sm border-2 border-yellow-400/40 p-4 md:p-6 rounded-2xl max-w-2xl mx-auto overflow-hidden"
          >
            {/* Pulsing glow */}
            <motion.div
              className="absolute inset-0 bg-yellow-400/10 rounded-2xl"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-3">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                </motion.div>
                <h3 className="font-display font-bold text-yellow-400 text-base md:text-lg drop-shadow-lg">
                  Tomorrow Morning Special
                </h3>
                <motion.div
                  animate={{
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                >
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                </motion.div>
              </div>
              <p className="text-milk leading-relaxed text-sm md:text-base font-light">
                Chat with us today, wake up to a <span className="text-yellow-400 font-semibold">free working Draft</span>. 
                We'll whip up your first demo, first consultation, and first design idea. 
                <span className="text-yellow-400 font-semibold"> All free.</span> No catch.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Split Layout: Notification Left, Narrower Form Right */}
        <div className="grid lg:grid-cols-12 gap-6 items-start max-w-5xl mx-auto">
          
          {/* LEFT: Single Minimal Notification (4 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4"
          >
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl"
              whileHover={{ scale: 1.03, borderColor: 'rgba(229, 222, 210, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-3 mb-3">
                <motion.div
                  className="flex-shrink-0 w-10 h-10 bg-oat/20 rounded-full flex items-center justify-center"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <MessageCircle className="w-5 h-5 text-oat" />
                </motion.div>
                <div className="flex-1">
                  <p className="text-milk leading-relaxed font-light text-sm">
                    Confused about the price for your idea? We'll discuss it and I'll explain everything. 
                    <span className="block mt-2 text-oat text-xs">No pressure, just clarity.</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Narrower Form (8 columns) */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span-8 space-y-4"
          >
            {/* Name & Email Row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-display font-semibold text-oat mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-xs font-display font-semibold text-oat mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-display font-semibold text-oat mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone"
                required
                className={inputClasses}
              />
            </div>

            {/* Project Type & Budget Row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-display font-semibold text-oat mb-1.5">
                  What do you need?
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  <option value="">Pick one...</option>
                  <option value="Website">Website</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="Custom System">Custom System/Tool</option>
                  <option value="Not Sure">Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-display font-semibold text-oat mb-1.5">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Let's discuss</option>
                  <option value="R600 - R2,000">R600 - R2,000</option>
                  <option value="R2,000 - R5,000">R2,000 - R5,000</option>
                  <option value="R5,000 - R10,000">R5,000 - R10,000</option>
                  <option value="R10,000+">R10,000+</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-display font-semibold text-oat mb-1.5">
                Tell us about your project
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What's the dream? What problem are you solving?"
                required
                rows="4"
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full bg-milk text-charcoal px-6 py-4 rounded-full font-semibold text-base hover:bg-oat transition-colors duration-200 flex items-center justify-center space-x-3 disabled:opacity-50 shadow-xl"
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, rotate: 0 }}
                    animate={{ opacity: 1, rotate: 360 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Send size={18} />
                    <span>Send to WhatsApp</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>
        </div>

        {/* Trust Indicators - Horizontal at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-12 text-sm text-oat/70"
        >
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-mocha flex-shrink-0" />
            <span>No spam, ever</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-oat/20" />
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-mocha flex-shrink-0" />
            <span>Response within 1 hour</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-oat/20" />
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-mocha flex-shrink-0" />
            <span>Free demo by tomorrow</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}