'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Smartphone, Globe, Brain, Calendar, MapPin, X } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/utils'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "Jigara AI",
    category: "Mobile App",
    description: "AI-powered image editing and enhancement mobile app with advanced features for photo manipulation and generation.",
    longDescription: "Jigara AI is my final year project - a comprehensive mobile application that leverages artificial intelligence for image editing and enhancement. The app integrates multiple AI APIs to provide users with powerful image manipulation tools, from basic editing to advanced AI-generated content.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    technologies: ["React Native", "Strapi", "Hugging Face", "Cloudinary", "Firebase"],
    features: ["AI Image Generation", "Photo Enhancement", "Cloud Storage", "User Authentication", "Real-time Processing"],
    timeline: "May 2025 - June 2025",
    status: "Completed",
    links: {
      github: "https://github.com/tauhee56",
      demo: "#"
    },
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "University Social Hub",
    category: "Mobile App",
    description: "Social networking platform designed specifically for university students with study groups and messaging features.",
    longDescription: "A comprehensive social networking application built for university students. The platform facilitates academic collaboration through study groups, event management, and real-time messaging. Features include profile management, group creation, event scheduling, and push notifications.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    technologies: ["React Native", "Expo", "Firebase", "Node.js", "Socket.io"],
    features: ["Student Profiles", "Study Groups", "Real-time Messaging", "Event Management", "Push Notifications"],
    timeline: "2024",
    status: "Completed",
    links: {
      github: "https://github.com/tauhee56",
      demo: "#"
    },
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.",
    longDescription: "A complete e-commerce platform built with React and Node.js. Features include product catalog, shopping cart, secure payment processing, order management, and comprehensive admin dashboard. The platform supports multiple payment methods and provides real-time inventory tracking.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express.js"],
    features: ["Product Catalog", "Shopping Cart", "Payment Integration", "Order Management", "Admin Dashboard"],
    timeline: "2024",
    status: "Completed",
    links: {
      github: "https://github.com/tauhee56",
      demo: "#"
    },
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Task Management App",
    category: "Web Development",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    longDescription: "A comprehensive task management solution designed for teams and individuals. The application features real-time collaboration, project organization, deadline tracking, and progress monitoring. Built with modern web technologies for optimal performance and user experience.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Socket.io", "Tailwind CSS"],
    features: ["Real-time Collaboration", "Project Organization", "Deadline Tracking", "Progress Monitoring", "Team Management"],
    timeline: "2023",
    status: "Completed",
    links: {
      github: "https://github.com/tauhee56",
      demo: "#"
    },
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 5,
    title: "Weather Forecast App",
    category: "Mobile App",
    description: "Beautiful weather application with detailed forecasts, location-based services, and interactive maps.",
    longDescription: "A feature-rich weather application that provides accurate weather forecasts, severe weather alerts, and interactive weather maps. The app uses location services to provide personalized weather information and includes beautiful animations and intuitive user interface.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    technologies: ["React Native", "Weather API", "Maps SDK", "AsyncStorage", "Expo"],
    features: ["Weather Forecasts", "Location Services", "Interactive Maps", "Weather Alerts", "Offline Support"],
    timeline: "2023",
    status: "Completed",
    links: {
      github: "https://github.com/tauhee56",
      demo: "#"
    },
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 6,
    title: "AR Historical Education",
    category: "Concept",
    description: "Augmented Reality application concept for interactive historical education with immersive learning experiences.",
    longDescription: "An innovative concept for an AR-based educational application that brings history to life. The app would use augmented reality to create immersive historical experiences, allowing students to interact with historical figures, explore ancient civilizations, and visualize historical events in 3D.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    technologies: ["AR Core", "Unity", "C#", "3D Modeling", "Educational Content"],
    features: ["AR Visualization", "Interactive Learning", "3D Historical Models", "Educational Quizzes", "Progress Tracking"],
    timeline: "Concept Phase",
    status: "In Planning",
    links: {
      github: "#",
      demo: "#"
    },
    color: "from-orange-500 to-red-500"
  },
  {
    id: 7,
    title: "Portfolio Website",
    category: "Web Development",
    description: "Professional portfolio website with modern design, animations, and comprehensive service showcase.",
    longDescription: "A modern, responsive portfolio website built with Next.js and advanced animations. Features include a comprehensive service showcase, project gallery, pricing plans, and contact forms. The site demonstrates expertise in modern web development practices and user experience design.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    features: ["Responsive Design", "Advanced Animations", "SEO Optimized", "Contact Forms", "Service Showcase"],
    timeline: "2025",
    status: "In Progress",
    links: {
      github: "https://github.com/tauhee56",
      demo: "#"
    },
    color: "from-indigo-500 to-purple-500"
  }
]

const categories = ["All", "Web Development", "Mobile App", "Concept"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selectedProject && modalRef.current) {
      modalRef.current.focus()
    }
  }, [selectedProject])

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="section bg-gray-900">
      <div className="container">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          className="section-header"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my recent work and innovative solutions across different platforms
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "btn btn-primary"
                  : "btn btn-ghost"
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          {...staggerContainer}
          className="grid-2"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group card card-glass card-interactive overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                      project.status === "Completed" ? "bg-green-600/90 text-white" :
                      project.status === "In Progress" ? "bg-yellow-600/90 text-white" :
                      "bg-blue-600/90 text-white"
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl mb-2">
                        {project.category === "Mobile App" ? <Smartphone size={32} className="mx-auto" /> :
                         project.category === "Web Development" ? <Globe size={32} className="mx-auto" /> :
                         project.category === "Concept" ? <Brain size={32} className="mx-auto" /> : <Globe size={32} className="mx-auto" />}
                      </div>
                      <p className="text-sm">View Details</p>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-indigo-400 text-sm font-semibold bg-indigo-400/10 px-4 py-2 rounded-full">{project.category}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400 text-sm font-medium">{project.timeline}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-indigo-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-8 leading-relaxed text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-4 mb-10">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-5 py-3 bg-gray-700/50 text-gray-300 rounded-lg text-sm font-medium border border-gray-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-5 py-3 bg-gray-700/50 text-gray-300 rounded-lg text-sm font-medium border border-gray-600/30">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-5">
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-secondary flex-1"
                    >
                      <Github size={18} />
                      Code
                    </motion.a>

                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary flex-1"
                    >
                      <ExternalLink size={18} />
                      Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50 shadow-2xl focus:outline-none"
                tabIndex={-1}
                ref={modalRef}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.3),transparent_50%)]" />
                </div>

                {/* Header */}
                <div className="relative flex justify-between items-start mb-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${selectedProject.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <span className="text-2xl">🚀</span>
                      </div>
                      <div>
                        <h3 className="text-4xl font-bold text-white mb-2">{selectedProject.title}</h3>
                        <div className="flex items-center gap-6 text-sm">
                          <span className="flex items-center gap-2 text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full">
                            <Calendar size={16} />
                            {selectedProject.timeline}
                          </span>
                          <span className="flex items-center gap-2 text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                            <MapPin size={16} />
                            {selectedProject.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gray-700/50 hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-600/50"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                {/* Description */}
                <div className="relative mb-10">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                    <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <span className="text-2xl">📋</span>
                      Project Overview
                    </h4>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                  {/* Technologies */}
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                    <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="text-2xl">⚡</span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech: string, index: number) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="px-4 py-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-indigo-300 rounded-xl text-sm font-medium border border-indigo-500/30 hover:border-indigo-400/50 transition-colors duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                    <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="text-2xl">✨</span>
                      Key Features
                    </h4>
                    <ul className="space-y-4">
                      {selectedProject.features.map((feature: string, index: number) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-4 text-gray-300 group"
                        >
                          <div className={`w-3 h-3 bg-gradient-to-r ${selectedProject.color} rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300`} />
                          <span className="group-hover:text-white transition-colors duration-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row gap-6">
                  <motion.a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-xl transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50 backdrop-blur-sm"
                  >
                    <Github size={22} />
                    <span className="font-semibold">View Source Code</span>
                  </motion.a>

                  <motion.a
                    href={selectedProject.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
                  >
                    <ExternalLink size={22} />
                    <span className="font-semibold">Live Demo</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
