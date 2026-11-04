'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Smartphone, Globe, Brain, Calendar, MapPin, X } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/utils'
import { projects, projectCategories, type Project } from '@/data/projects'
import Image from 'next/image'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
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

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 sm:mb-16"
        >
          {projectCategories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 w-auto ${
                activeCategory === category
                  ? "btn btn-primary !w-auto"
                  : "btn btn-ghost !w-auto"
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
                <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />

                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                      project.status === "Completed" ? "bg-green-600/90 text-white" :
                      project.status === "In Progress" ? "bg-yellow-600/90 text-white" :
                      "bg-blue-600/90 text-white"
                    }`}>
                      {project.status}
                    </span>
                  </div>

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

                <div className="p-5 sm:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <span className="text-indigo-400 text-xs sm:text-sm font-semibold bg-indigo-400/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">{project.category}</span>
                    <span className="text-gray-600 hidden sm:inline">•</span>
                    <span className="text-gray-400 text-xs sm:text-sm font-medium">{project.timeline}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-6 group-hover:text-indigo-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-5 sm:mb-8 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-10">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 sm:px-5 py-2 sm:py-3 bg-gray-700/50 text-gray-300 rounded-lg text-xs sm:text-sm font-medium border border-gray-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 sm:px-5 py-2 sm:py-3 bg-gray-700/50 text-gray-300 rounded-lg text-xs sm:text-sm font-medium border border-gray-600/30">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-secondary flex-1 !w-auto"
                      >
                        <Github size={18} />
                        Code
                      </motion.a>
                    )}

                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary flex-1 !w-auto"
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
                className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50 shadow-2xl focus:outline-none"
                tabIndex={-1}
                ref={modalRef}
              >
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.3),transparent_50%)]" />
                </div>

                <div className="relative flex justify-between items-start gap-3 mb-6 sm:mb-8">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${selectedProject.color} rounded-xl flex items-center justify-center shadow-lg shrink-0`}>
                        <span className="text-xl sm:text-2xl">🚀</span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-2xl sm:text-4xl font-bold text-white mb-2 leading-tight">{selectedProject.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                          <span className="flex items-center gap-2 text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full">
                            <Calendar size={14} />
                            {selectedProject.timeline}
                          </span>
                          <span className="flex items-center gap-2 text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                            <MapPin size={14} />
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

                {(selectedProject.links.github || selectedProject.links.demo) && (
                  <div className="mt-12 flex flex-col sm:flex-row gap-6">
                    {selectedProject.links.github && (
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
                    )}

                    {selectedProject.links.demo && (
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
                    )}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
