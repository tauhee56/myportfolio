'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, Code, DollarSign, Mail, MessageSquareQuote } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Services', href: '#services', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Code },
  { name: 'Testimonials', href: '#testimonials', icon: MessageSquareQuote },
  { name: 'Pricing', href: '#pricing', icon: DollarSign },
  { name: 'Contact', href: '#contact', icon: Mail },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside + lock body scroll
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = (href: string) => {
    // Close mobile menu immediately
    setIsOpen(false)

    // Navigate to section
    const element = document.getElementById(href.substring(1))
    if (element) {
      // Small delay to ensure smooth transition
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
    }
  }

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-2xl"
            : "bg-transparent"
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 cursor-pointer min-w-0"
              onClick={() => handleNavClick('#home')}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shrink-0">
                  <span className="text-white font-bold text-sm sm:text-base">TA</span>
                </div>
                <h1 className="text-base sm:text-xl lg:text-2xl font-bold gradient-text truncate">
                  <span className="sm:hidden">Tauheed</span>
                  <span className="hidden sm:inline">Tauheed Ahmad</span>
                </h1>
              </div>
            </motion.div>

            {/* Desktop Navigation — lg+ so tablet stays clean with hamburger */}
            <div className="hidden lg:block">
              <div className="flex items-center gap-1 xl:gap-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "relative px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 group",
                        activeSection === item.href.substring(1)
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      )}
                    >
                      <Icon size={14} className="transition-transform group-hover:scale-110 shrink-0" />
                      <span className="font-medium">{item.name}</span>
                      {activeSection === item.href.substring(1) && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* Mobile / tablet menu button */}
            <div className="lg:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2.5 sm:p-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 focus:outline-none"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                <motion.div
                  animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="lg:hidden glass border-t border-white/10 max-h-[80vh] overflow-y-auto"
            >
              <div className="container py-3 sm:py-4">
                <div className="space-y-1.5">
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          handleNavClick(item.href)
                        }}
                        className={cn(
                          "w-full text-left px-4 sm:px-6 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 flex items-center gap-3 group min-h-[3rem] cursor-pointer",
                          activeSection === item.href.substring(1)
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                            : "text-gray-300 hover:bg-white/10 hover:text-white active:bg-white/20"
                        )}
                      >
                        <Icon size={18} className="transition-transform group-hover:scale-110 shrink-0" />
                        {item.name}
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navigation */}
      <div className="h-18" />
    </>
  )
}
