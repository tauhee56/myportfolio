'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Clock, CheckCircle } from 'lucide-react'
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/utils'
import { mailtoLink, siteConfig, telLink } from '@/lib/siteConfig'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: siteConfig.email,
      link: mailtoLink,
      color: "from-blue-500 to-cyan-500",
      clickable: true,
    },
    {
      icon: Phone,
      title: "Phone",
      value: siteConfig.phoneDisplay,
      link: telLink,
      color: "from-green-500 to-emerald-500",
      clickable: true,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: siteConfig.phoneDisplay,
      link: siteConfig.whatsapp,
      color: "from-green-500 to-green-600",
      clickable: true,
    },
    {
      icon: MapPin,
      title: "Location",
      value: siteConfig.location,
      link: null as string | null,
      color: "from-purple-500 to-pink-500",
      clickable: false,
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: siteConfig.github,
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: siteConfig.linkedin,
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      name: "Email",
      url: mailtoLink,
      color: "hover:text-red-400"
    }
  ]

  return (
    <section id="contact" className="section bg-gray-900">
      <div className="container">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          className="section-header"
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Ready to start your next project? Let&apos;s discuss your ideas and create something amazing together.
          </p>
        </motion.div>

        <div className="grid-2">
          {/* Contact Information */}
          <motion.div
            {...fadeInLeft}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let&apos;s Connect</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I&apos;m always excited to work on new projects and collaborate with amazing people.
                Whether you have a specific project in mind or just want to explore possibilities, 
                I&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                const cardClass =
                  "group card card-glass card-hover p-8 block"
                const content = (
                  <>
                    <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3">{info.title}</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200 font-medium">
                      {info.value}
                    </p>
                  </>
                )

                if (!info.clickable || !info.link) {
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={cardClass}
                    >
                      {content}
                    </motion.div>
                  )
                }

                return (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={cardClass}
                  >
                    {content}
                  </motion.a>
                )
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target={social.url.startsWith('http') ? '_blank' : undefined}
                      rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 border border-gray-700 hover:border-gray-600`}
                      aria-label={social.name}
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-green-900/20 border border-green-700/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold">Available for Projects</span>
              </div>
              <p className="text-gray-400 text-sm">
                Currently accepting new projects and collaborations. 
                Typical response time: within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            {...fadeInRight}
            transition={{ delay: 0.4 }}
            className="card card-glass card-hover p-10"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Project Discussion"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-input form-textarea"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.05, y: isSubmitting || isSubmitted ? 0 : -2 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.95 }}
                className={`w-full btn ${
                  isSubmitted
                    ? "btn-primary bg-green-600"
                    : isSubmitting
                    ? "btn-ghost cursor-not-allowed opacity-50"
                    : "btn-primary"
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  <>
                    <Clock size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {/* Quick Contact Options */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-6 font-medium">Prefer direct contact?</p>
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary bg-green-600 hover:bg-green-700"
                >
                  WhatsApp
                </motion.a>
                <motion.a
                  href={mailtoLink}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-secondary"
                >
                  Email
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
