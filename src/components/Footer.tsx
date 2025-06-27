'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Web Development',
    'Mobile App Development',
    'AI Integration',
    'E-commerce Solutions',
    'Backend Development',
    'Database Management'
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/tauhee56', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:meettauheed@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+923079317054', label: 'Phone' }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black border-t border-gray-800/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(99,102,241,0.05)_50%,transparent_75%)]" />
      </div>

      <div className="container relative z-10">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">TA</span>
                </div>
                <h3 className="text-3xl font-bold gradient-text">
                  Tauheed Ahmad
                </h3>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed text-base">
                Full Stack Developer & AI Enthusiast passionate about creating
                innovative solutions that make a difference. Let&apos;s build something amazing together.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gray-800/50 hover:bg-indigo-600 text-gray-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-700/50 hover:border-indigo-500/50 shadow-lg hover:shadow-indigo-500/25"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById(link.href.substring(1))
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="text-gray-400 hover:text-white transition-all duration-200 cursor-pointer flex items-center gap-2 group"
                    >
                      <div className="w-2 h-2 bg-gray-600 group-hover:bg-indigo-400 rounded-full transition-colors duration-200" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
                Services
              </h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="text-gray-400 flex items-center gap-2 group hover:text-white transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-gray-600 group-hover:bg-indigo-400 rounded-full transition-colors duration-200" />
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
                Get In Touch
              </h4>
              <div className="space-y-6">
                <motion.a
                  href="mailto:meettauheed@gmail.com"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-all duration-200 group p-3 rounded-lg hover:bg-gray-800/50"
                >
                  <div className="w-10 h-10 bg-gray-800 group-hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <div className="font-medium">meettauheed@gmail.com</div>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+923079317054"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-all duration-200 group p-3 rounded-lg hover:bg-gray-800/50"
                >
                  <div className="w-10 h-10 bg-gray-800 group-hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Phone</div>
                    <div className="font-medium">+92 307 9317054</div>
                  </div>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="pt-2"
                >
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                      <span className="text-green-400 font-bold">Available for Projects</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Currently accepting new projects and collaborations. Let&apos;s create something amazing together!
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-10 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-gray-400">
              <span>© {currentYear} Tauheed Ahmad. Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and lots of coffee ☕</span>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Built with</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-blue-400 font-medium">Next.js</span>
                </div>
                <span>&</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                  <span className="text-cyan-400 font-medium">Tailwind CSS</span>
                </div>
              </div>

              {/* Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
    </footer>
  )
}
