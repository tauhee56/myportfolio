'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/utils'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-black">
      <div className="container">
        <motion.div {...fadeInUp} className="section-header">
          <h2 className="section-title">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            What clients say about working together on web, mobile, and AI projects.
          </p>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid md:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative p-5 sm:p-8 border-t border-indigo-500/40 bg-gradient-to-b from-gray-900/80 to-transparent"
            >
              <Quote
                size={28}
                className="text-indigo-400/70 mb-6"
                aria-hidden
              />
              <p className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-5 sm:mb-8">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="block text-white font-semibold text-lg">
                    {item.name}
                  </span>
                  <span className="block text-gray-500 text-sm mt-1">
                    {item.role}, {item.company}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
