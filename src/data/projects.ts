export type ProjectLinks = {
  github: string | null
  demo: string | null
}

export type Project = {
  id: number
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  features: string[]
  timeline: string
  status: string
  links: ProjectLinks
  color: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Jigara AI",
    category: "Mobile App",
    description:
      "AI-powered image editing and enhancement mobile app with advanced features for photo manipulation and generation.",
    longDescription:
      "Jigara AI is my final year project - a comprehensive mobile application that leverages artificial intelligence for image editing and enhancement. The app integrates multiple AI APIs to provide users with powerful image manipulation tools, from basic editing to advanced AI-generated content.",
    image: "/projects/jigara-ai.png",
    technologies: ["React Native", "Strapi", "Hugging Face", "Cloudinary", "Firebase"],
    features: [
      "AI Image Generation",
      "Photo Enhancement",
      "Cloud Storage",
      "User Authentication",
      "Real-time Processing",
    ],
    timeline: "May 2025 - June 2025",
    status: "Completed",
    links: {
      github: null,
      demo: null,
    },
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "University Social Hub",
    category: "Mobile App",
    description:
      "Social networking platform designed specifically for university students with study groups and messaging features.",
    longDescription:
      "A comprehensive social networking application built for university students. The platform facilitates academic collaboration through study groups, event management, and real-time messaging. Features include profile management, group creation, event scheduling, and push notifications.",
    image: "/projects/university-social-hub.png",
    technologies: ["React Native", "Expo", "Firebase", "Node.js", "Socket.io"],
    features: [
      "Student Profiles",
      "Study Groups",
      "Real-time Messaging",
      "Event Management",
      "Push Notifications",
    ],
    timeline: "2024",
    status: "Completed",
    links: {
      github: null,
      demo: null,
    },
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "Full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.",
    longDescription:
      "A complete e-commerce platform built with React and Node.js. Features include product catalog, shopping cart, secure payment processing, order management, and comprehensive admin dashboard. The platform supports multiple payment methods and provides real-time inventory tracking.",
    image: "/projects/ecommerce-platform.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express.js"],
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Payment Integration",
      "Order Management",
      "Admin Dashboard",
    ],
    timeline: "2024",
    status: "Completed",
    links: {
      github: null,
      demo: null,
    },
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Task Management App",
    category: "Web Development",
    description:
      "Collaborative task management application with real-time updates and team collaboration features.",
    longDescription:
      "A comprehensive task management solution designed for teams and individuals. The application features real-time collaboration, project organization, deadline tracking, and progress monitoring. Built with modern web technologies for optimal performance and user experience.",
    image: "/projects/task-management.png",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Socket.io", "Tailwind CSS"],
    features: [
      "Real-time Collaboration",
      "Project Organization",
      "Deadline Tracking",
      "Progress Monitoring",
      "Team Management",
    ],
    timeline: "2023",
    status: "Completed",
    links: {
      github: null,
      demo: null,
    },
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 5,
    title: "Weather Forecast App",
    category: "Mobile App",
    description:
      "Beautiful weather application with detailed forecasts, location-based services, and interactive maps.",
    longDescription:
      "A feature-rich weather application that provides accurate weather forecasts, severe weather alerts, and interactive weather maps. The app uses location services to provide personalized weather information and includes beautiful animations and intuitive user interface.",
    image: "/projects/weather-forecast.png",
    technologies: ["React Native", "Weather API", "Maps SDK", "AsyncStorage", "Expo"],
    features: [
      "Weather Forecasts",
      "Location Services",
      "Interactive Maps",
      "Weather Alerts",
      "Offline Support",
    ],
    timeline: "2023",
    status: "Completed",
    links: {
      github: null,
      demo: null,
    },
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 6,
    title: "AR Historical Education",
    category: "Concept",
    description:
      "Augmented Reality application concept for interactive historical education with immersive learning experiences.",
    longDescription:
      "An innovative concept for an AR-based educational application that brings history to life. The app would use augmented reality to create immersive historical experiences, allowing students to interact with historical figures, explore ancient civilizations, and visualize historical events in 3D.",
    image: "/projects/ar-historical.png",
    technologies: ["AR Core", "Unity", "C#", "3D Modeling", "Educational Content"],
    features: [
      "AR Visualization",
      "Interactive Learning",
      "3D Historical Models",
      "Educational Quizzes",
      "Progress Tracking",
    ],
    timeline: "Concept Phase",
    status: "In Planning",
    links: {
      github: null,
      demo: null,
    },
    color: "from-orange-500 to-red-500",
  },
  {
    id: 7,
    title: "Portfolio Website",
    category: "Web Development",
    description:
      "Professional portfolio website with modern design, animations, and comprehensive service showcase.",
    longDescription:
      "A modern, responsive portfolio website built with Next.js and advanced animations. Features include a comprehensive service showcase, project gallery, pricing plans, and contact forms. The site demonstrates expertise in modern web development practices and user experience design.",
    image: "/projects/portfolio-website.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    features: [
      "Responsive Design",
      "Advanced Animations",
      "SEO Optimized",
      "Contact Forms",
      "Service Showcase",
    ],
    timeline: "2025",
    status: "Completed",
    links: {
      github: "https://github.com/tauhee56/myportfolio",
      demo: "https://tauheed.works",
    },
    color: "from-indigo-500 to-purple-500",
  },
]

export const projectCategories = ["All", "Web Development", "Mobile App", "Concept"] as const
