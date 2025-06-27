'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, GraduationCap, Award, Code, Smartphone, Globe, Brain } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/utils'

const journeySteps = [
  {
    year: "2020-2022",
    title: "Web Development Journey",
    description: "Started with HTML, CSS, JavaScript and React.js. Built multiple responsive websites and learned modern web development practices.",
    icon: Globe,
    color: "bg-blue-500"
  },
  {
    year: "2021-2024",
    title: "Shopify & PHP Development",
    description: "Specialized in Shopify development with Liquid templating and PHP backend development. Created custom e-commerce solutions.",
    icon: Code,
    color: "bg-green-500"
  },
  {
    year: "2023-2025",
    title: "Mobile App Development",
    description: "Transitioned to mobile app development with React Native and Android Java. Built cross-platform applications with modern UI/UX.",
    icon: Smartphone,
    color: "bg-purple-500"
  },
  {
    year: "2024-Present",
    title: "AI Integration Specialist",
    description: "Currently focusing on AI integration in mobile and web applications. Working with Hugging Face APIs and machine learning models.",
    icon: Brain,
    color: "bg-indigo-500"
  }
]

const skills = [
  { category: "Frontend", items: ["React.js", "React Native", "HTML/CSS", "JavaScript", "Tailwind CSS", "Shadcn UI"], color: "text-blue-400" },
  { category: "Backend", items: ["Node.js", "Express.js", "PHP", "Django", "PostgreSQL", "MongoDB"], color: "text-green-400" },
  { category: "Mobile", items: ["React Native", "Expo CLI", "Android Java", "Firebase", "Cross-platform"], color: "text-purple-400" },
  { category: "AI & Tools", items: ["Hugging Face", "Python", "Cloudinary", "Replicate API", "Machine Learning"], color: "text-indigo-400" },
  { category: "DevOps", items: ["Git/GitHub", "Netlify", "Vercel", "AWS", "Postman"], color: "text-yellow-400" }
]

export default function About() {
  return (
    <section id="about" className="section bg-gray-900">
      <div className="container">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          className="section-header"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate developer with a journey spanning web development, mobile apps, and AI integration
          </p>
        </motion.div>

        <div className="grid-2 items-start">
          {/* Personal Info */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="card card-glass card-hover p-8">
              <h3 className="text-2xl font-bold text-white mb-10">Personal Details</h3>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <GraduationCap size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm font-medium mb-2">Education</p>
                    <p className="text-white font-bold text-lg mb-1">BS Information Technology</p>
                    <p className="text-gray-500 text-sm">BZU Sub Campus Lodhran, Multan</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Award size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm font-medium mb-2">CGPA</p>
                    <p className="text-white font-bold text-lg">3.52</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Calendar size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm font-medium mb-2">Graduation</p>
                    <p className="text-white font-bold text-lg">2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm font-medium mb-2">Location</p>
                    <p className="text-white font-bold text-lg">Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <motion.div
              {...staggerContainer}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="card card-glass card-hover p-8"
                >
                  <h4 className={`text-xl font-bold mb-6 ${skillGroup.color}`}>
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-5 py-3 bg-gray-700/50 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-600/50 hover:text-white transition-all duration-200 border border-gray-600/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="space-y-10"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-400 text-lg">A timeline of my professional growth and achievements</p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 rounded-full" />

              <div className="space-y-12">
                {journeySteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={step.year}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="relative flex items-start gap-8"
                    >
                      {/* Timeline Icon */}
                      <div className={`relative z-10 w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-xl border-4 border-gray-900`}>
                        <Icon size={28} className="text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 card card-glass card-hover p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-indigo-400 font-bold text-lg bg-indigo-400/10 px-4 py-2 rounded-full">{step.year}</span>
                          <div className="h-px bg-gradient-to-r from-indigo-400 to-transparent flex-1" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">{step.title}</h4>
                        <p className="text-gray-400 leading-relaxed text-base">{step.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "5+", label: "Years Experience", icon: "🚀" },
            { number: "50+", label: "Projects Completed", icon: "💼" },
            { number: "3", label: "Major Platforms", icon: "🌐" },
            { number: "100%", label: "Client Satisfaction", icon: "⭐" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center card card-glass card-hover p-8"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
