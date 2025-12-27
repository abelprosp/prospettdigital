'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { HiArrowRight, HiMenu, HiX } from 'react-icons/hi'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = ['#hero', '#credibility', '#desire', '#decision']
      const current = sections.find(section => {
        const element = document.querySelector(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Visão', href: '#hero' },
    { label: 'Método', href: '#credibility' },
    { label: 'Transformação', href: '#desire' },
    { label: 'Contato', href: '#decision' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container-urban mx-auto px-4 md:px-8 lg:px-16">
        <div className="glass-effect rounded-2xl px-6 py-4 mt-4">
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <motion.a
              href="#hero"
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/logo.png"
                alt="Prospett"
                width={180}
                height={60}
                className="h-12 md:h-14 w-auto"
                priority
              />
            </motion.a>

            {/* Navigation Links - Center */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === item.href 
                      ? 'text-white' 
                      : 'text-gray-lighter hover:text-white'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  onClick={() => setActiveSection(item.href)}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                      layoutId="activeSection"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Action Buttons - Right */}
            <div className="flex items-center gap-4">
              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/5551995501677"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-effect border border-gray-dark/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
              </motion.a>

              {/* Get Started Button */}
              <motion.a
                href="#decision"
                className="hidden sm:flex items-center gap-2 px-6 py-3 glass-effect border border-gray-dark/30 rounded-lg hover:bg-primary/20 transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-medium text-white">Começar</span>
                <div className="flex items-center gap-1 text-xs text-gray-light">
                  <span>• PRA ONTEM!</span>
                  <HiArrowRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.a>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-gray-lighter"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden px-4 md:px-8 lg:px-16 mt-2"
          >
            <div className="glass-effect rounded-2xl px-6 py-4 overflow-hidden">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-lighter hover:text-white transition-colors py-2"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setActiveSection(item.href)
                    }}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-4 pt-2 border-t border-gray-dark/30">
                  <a
                    href="https://wa.me/5551995501677"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass-effect border border-gray-dark/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <FaWhatsapp className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#decision"
                    className="flex-1 px-6 py-3 glass-effect border border-gray-dark/30 rounded-lg hover:bg-primary/20 transition-all text-center"
                  >
                    <span className="text-sm font-medium text-white">Começar</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

