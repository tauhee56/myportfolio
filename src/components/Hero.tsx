'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { fadeInRight } from '@/lib/utils'
import Image from 'next/image'

const roles = [
  "Full Stack Developer",
  "AI Enthusiast", 
  "Mobile App Developer",
  "Web Development Expert",
  "React Specialist"
]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative full-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-18">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating Particles */}
        {mounted && [...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: (i * 24) % 1200,
              y: (i * 16) % 800,
              opacity: 0
            }}
            animate={{
              y: [null, ((i * 16) % 800) + 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 15 + (i % 5),
              repeat: Infinity,
              delay: i * 0.1
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
          />
        ))}
      </div>

      <div className="relative z-10 container text-center">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-indigo-400 text-xl font-medium tracking-wide"
              >
                Hello, I&apos;m
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight"
              >
                Tauheed
                <span className="block gradient-text text-glow">Ahmad</span>
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="h-24 flex items-center justify-center lg:justify-start"
            >
              <span className="text-2xl md:text-4xl text-gray-300 font-light">
                I&apos;m a{' '}
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.8 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="gradient-text font-bold text-glow"
                >
                  {roles[currentRole]}
                </motion.span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              BS Information Technology graduate with{' '}
              <span className="text-indigo-400 font-semibold">5+ years</span> of experience in web development,
              mobile app development, and AI integration. Passionate about creating{' '}
              <span className="gradient-text font-semibold">innovative solutions</span> that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary btn-lg group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ChevronDown size={20} className="transition-transform group-hover:translate-y-1" />
              </motion.button>

              <motion.a
                href="/CV-Tauheed-Ahmad.docx"
                download="CV-Tauheed-Ahmad.docx"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary btn-lg group"
              >
                <Download size={20} className="transition-transform group-hover:scale-110" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/tauhee56", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "mailto:meettauheed@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+923079317054", label: "Phone" }
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="p-3 bg-gray-800 hover:bg-indigo-600 text-gray-400 hover:text-white rounded-lg transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                )
              })}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            {...fadeInRight}
            transition={{ delay: 0.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Animated Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-indigo-600/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-2 border-purple-600/30 rounded-full"
              />

              {/* Profile Image Container */}
              <div className="absolute inset-6 rounded-full overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-1.5 shadow-2xl shadow-indigo-500/25">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 relative">
                  <Image
                    src="/tauheed-ahmad.jpg"
                    alt="Tauheed Ahmad"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover scale-110 hover:scale-115 transition-transform duration-700"
                    priority
                    style={{
                      objectPosition: 'center 15%',
                      objectFit: 'cover'
                    }}
                  />
                  {/* Overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Tech Icons */}
              {[
                { name: '⚛️', label: 'React', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' },
                { name: '🟢', label: 'Node.js', pos: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2' },
                { name: '🤖', label: 'AI', pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' },
                { name: '📱', label: 'Mobile', pos: 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`absolute ${tech.pos} w-18 h-18 bg-gray-800/90 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center text-indigo-400 animate-float border border-gray-700/50 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <span className="text-2xl mb-1">{tech.name}</span>
                  <span className="text-xs font-medium">{tech.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Scroll to next section"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
