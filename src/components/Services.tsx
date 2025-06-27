'use client'

import { motion } from 'framer-motion'
import { Globe, Smartphone, Brain, Code, ShoppingCart, Database } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/utils'

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack web development using modern technologies like React.js, Node.js, and Next.js. Creating responsive, fast, and SEO-optimized websites.",
    features: ["React.js & Next.js", "Node.js & Express", "Responsive Design", "SEO Optimization"],
    color: "from-blue-500 to-cyan-500",
    delay: 0.1
  },
  {
    icon: Smartphone,
    title: "Mobile App Development", 
    description: "Cross-platform mobile applications using React Native and native Android development with Java. Focus on user experience and performance.",
    features: ["React Native", "Android Java", "Cross-platform", "Firebase Integration"],
    color: "from-purple-500 to-pink-500",
    delay: 0.2
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Integrating AI capabilities into web and mobile applications using Hugging Face APIs, machine learning models, and intelligent automation.",
    features: ["Hugging Face APIs", "Image Processing", "ML Models", "Intelligent Automation"],
    color: "from-indigo-500 to-purple-500",
    delay: 0.3
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Custom e-commerce platforms and Shopify development with Liquid templating. Payment integration and inventory management systems.",
    features: ["Shopify Development", "Custom E-commerce", "Payment Integration", "Inventory Management"],
    color: "from-green-500 to-emerald-500",
    delay: 0.4
  },
  {
    icon: Code,
    title: "Backend Development",
    description: "Robust backend systems using Node.js, Express.js, PHP, and Django. Database design, API development, and server management.",
    features: ["Node.js & Express", "PHP Development", "Django Framework", "API Development"],
    color: "from-orange-500 to-red-500",
    delay: 0.5
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Database design and management using PostgreSQL, MongoDB, and Firebase. Data modeling, optimization, and migration services.",
    features: ["PostgreSQL", "MongoDB", "Firebase", "Data Optimization"],
    color: "from-teal-500 to-blue-500",
    delay: 0.6
  }
]

export default function Services() {
  return (
    <section id="services" className="section bg-black">
      <div className="container">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          className="section-header"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive development services to bring your ideas to life with cutting-edge technology
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          {...staggerContainer}
          className="grid-3"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: service.delay, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group card card-glass card-interactive overflow-hidden p-10"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative z-10 w-24 h-24 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <Icon size={40} className="text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-8">
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-8 leading-relaxed text-base">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: service.delay + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-5"
                      >
                        <div className={`w-4 h-4 bg-gradient-to-r ${service.color} rounded-full shadow-sm`} />
                        <span className="text-gray-300 text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.05),transparent_50%)]" />

            <div className="relative p-12 md:p-16 text-center">
              {/* Icon */}
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                <span className="text-4xl">🚀</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let&apos;s discuss your ideas and create something amazing together.
                I&apos;m here to help bring your vision to life with cutting-edge technology and innovative solutions.
              </p>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: "💬", title: "Free Consultation", desc: "30-minute strategy call to discuss your project" },
                  { icon: "⚡", title: "Quick Turnaround", desc: "Fast delivery without compromising quality" },
                  { icon: "🎯", title: "Custom Solutions", desc: "Tailored to your specific business needs" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                    <p className="text-gray-200 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <span>📧</span>
                  Get In Touch
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <span>👀</span>
                  View My Work
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
