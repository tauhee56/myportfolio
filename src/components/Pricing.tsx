'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown, Rocket } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/utils'

const pricingPlans = [
  {
    name: "Basic Website",
    icon: Zap,
    price: "$149",
    period: "per project",
    description: "Perfect for small businesses and personal portfolios",
    features: [
      "Responsive Website Design",
      "Up to 5 Pages",
      "Basic SEO Setup",
      "Contact Form",
      "Mobile Friendly",
      "2 Weeks Support",
      "Free Hosting Setup"
    ],
    color: "from-blue-500 to-cyan-500",
    popular: false,
    delay: 0.1
  },
  {
    name: "Business Website",
    icon: Star,
    price: "$299",
    period: "per project",
    description: "Ideal for growing businesses with advanced features",
    features: [
      "Everything in Basic",
      "Up to 10 Pages",
      "Advanced SEO",
      "E-commerce Ready",
      "Custom Animations",
      "Database Integration",
      "1 Month Support",
      "Performance Optimization",
      "Social Media Integration"
    ],
    color: "from-indigo-500 to-purple-500",
    popular: true,
    delay: 0.2
  },
  {
    name: "Premium Solution",
    icon: Crown,
    price: "$499",
    period: "per project",
    description: "Complete solution for established businesses",
    features: [
      "Everything in Business",
      "Unlimited Pages",
      "Custom Web App Features",
      "Advanced Database",
      "API Development",
      "Third-party Integrations",
      "3 Months Support",
      "Security Features",
      "Analytics Dashboard",
      "Custom Admin Panel"
    ],
    color: "from-purple-500 to-pink-500",
    popular: false,
    delay: 0.3
  },
  {
    name: "Mobile App",
    icon: Rocket,
    price: "$699",
    period: "per app",
    description: "Cross-platform mobile app development",
    features: [
      "React Native Development",
      "iOS & Android",
      "Custom UI/UX Design",
      "Firebase Backend",
      "Push Notifications",
      "App Store Publishing",
      "3 Months Support",
      "Performance Optimized",
      "Analytics Integration",
      "Offline Support"
    ],
    color: "from-green-500 to-emerald-500",
    popular: false,
    delay: 0.4
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-black">
      <div className="container">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          className="section-header"
        >
          <h2 className="section-title">
            Pricing <span className="gradient-text">Plans</span>
          </h2>
          <p className="section-subtitle">
            Transparent pricing for quality development services. Choose the plan that fits your needs.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          {...staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {pricingPlans.map((plan) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: plan.delay, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative card card-interactive p-8 ${
                  plan.popular
                    ? "bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border-indigo-500/50 shadow-2xl shadow-indigo-500/20"
                    : "card-glass"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: plan.delay + 0.3 }}
                    className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl">
                      ⭐ Most Popular
                    </div>
                  </motion.div>
                )}

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                {/* Plan Header */}
                <div className="relative z-10 text-center mb-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                    <Icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2 text-base">{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="relative z-10 space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: plan.delay + index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full ${
                    plan.popular
                      ? "btn btn-secondary"
                      : "btn btn-primary"
                  }`}
                >
                  Get Started
                </motion.button>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Need Something Custom Section */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]" />

            <div className="relative card card-glass p-12 text-center border-indigo-500/20">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-6">
                Need Something Custom?
              </h3>
              <p className="text-gray-400 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
                Every project is unique. If none of these plans fit your specific requirements,
                let&apos;s discuss a custom solution tailored to your needs and budget. I specialize in
                creating bespoke solutions that perfectly match your vision.
              </p>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: "💡", title: "Custom Features", desc: "Unique functionality designed for your needs" },
                  { icon: "⚡", title: "Flexible Timeline", desc: "Work at a pace that suits your schedule" },
                  { icon: "💰", title: "Budget-Friendly", desc: "Solutions that fit your budget constraints" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn btn-primary btn-lg"
                >
                  📧 Get Custom Quote
                </motion.button>
                <motion.a
                  href="https://wa.me/923079317054"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-secondary btn-lg"
                >
                  💬 WhatsApp Consultation
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="mt-24"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">❓</span>
              </div>
              <h3 className="text-4xl font-bold text-white">
                Frequently Asked Questions
              </h3>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Got questions? Here are the most common ones I get asked about my services and process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🛠️",
                question: "What's included in the support period?",
                answer: "Support includes bug fixes, minor updates, technical assistance, performance monitoring, and guidance on using your website or application. I'm here to ensure everything runs smoothly."
              },
              {
                icon: "🌐",
                question: "Do you provide hosting services?",
                answer: "I can help you choose and set up hosting, but hosting costs are separate. I work with reliable providers like Vercel, Netlify, AWS, and DigitalOcean to ensure optimal performance."
              },
              {
                icon: "📈",
                question: "Can I upgrade my plan later?",
                answer: "Absolutely! You can upgrade your plan at any time. I'll work with you to add new features and functionality as your business grows. Existing work is always preserved."
              },
              {
                icon: "⏰",
                question: "What's your typical project timeline?",
                answer: "Timelines vary by project complexity. Starter projects typically take 1-2 weeks, Professional projects 2-4 weeks, while Enterprise projects may take 4-8 weeks depending on requirements."
              },
              {
                icon: "💳",
                question: "What payment methods do you accept?",
                answer: "I accept various payment methods including bank transfers, PayPal, Wise, and cryptocurrency. Payment plans can be arranged for larger projects with 50% upfront."
              },
              {
                icon: "🔄",
                question: "Do you offer revisions?",
                answer: "Yes! Each plan includes a specific number of revisions. I work closely with you to ensure the final product meets your expectations and requirements perfectly."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card card-glass card-hover p-8 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{faq.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-300">
                      {faq.question}
                    </h4>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="card card-glass p-8 max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold text-white mb-4">Still have questions?</h4>
              <p className="text-gray-400 mb-6">
                Don&apos;t hesitate to reach out! I&apos;m always happy to discuss your project and answer any specific questions you might have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn btn-primary"
                >
                  📧 Contact Me
                </motion.button>
                <motion.a
                  href="https://wa.me/923079317054"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-secondary"
                >
                  💬 Quick Chat
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
