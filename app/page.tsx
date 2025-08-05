"use client"
import Image from 'next/image'
import mistie from '../public/Mistura.jpeg'
import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Code,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Terminal,
  Cpu,
  Database,
  Globe,
  Sun,
  Moon,
  Brush,
  Wrench,
  Calendar,
} from "lucide-react"
import { useTheme } from "./theme-context"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isGlitching, setIsGlitching] = useState(false)
  const [easterEggFound, setEasterEggFound] = useState(false)
  const [photoGlitch, setPhotoGlitch] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const { theme, toggleTheme } = useTheme()

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 200)
      }
    }, 3000)

    const photoGlitchInterval = setInterval(() => {
      if (Math.random() < 0.05) {
        setPhotoGlitch(true)
        setTimeout(() => setPhotoGlitch(false), 150)
      }
    }, 5000)

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(glitchInterval)
      clearInterval(photoGlitchInterval)
    }
  }, [])

  const projects = [
    {
      title: "Wordsphere",
      description: "A dynamic dictionary app with real-time word lookup and clean UI.",
      tech: ["React.js", "TailwindCSS", "TypeScript"],
      color: "from-orange-400 to-red-600",
      rotation: "rotate-1",
      link: "https://dictionarysite.vercel.app/"
    },
    {
      title: "PiggyPal",
      description: "Telegram bot for tracking expenses with custom categories and summary reports.",
      tech: ["Node.js", "Grammy.js", "PostgreSQL, ", "Prisma"],
      color: "from-cyan-400 to-purple-600",
      rotation: "rotate-3",
      link: "https://github.com/Mistie-rious/expense-bot"
    },
    {
      title: "Sortly",
      description: "Email app that auto-classifies messages by topic and supports OAuth login.",
      tech: ["Next.js", "Express.js", "PostgreSQL", "FastAPI", "BERTopic"],
      color: "from-green-400 to-blue-600",
      rotation: "-rotate-2",
      link: "https://github.com/Mistie-rious/sortly-backend"
    },
  
  ]

  const careerData = [
    
      {
        year: "2025",
        role: "Software Engineer Trainee",
        company: "Zone Payment Network",
        description: "Built a containerized wallet system with smart contract simulation",
        achievements: [
          "Reduced deployment time by 60% using Dockerized architecture",
          "Simulated Ethereum transactions securely on Sepolia testnet",
          "Implemented role-based access and robust transaction handling"
        ],
      },
      {
        year: "2024",
        role: "Full Stack Developer",
        company: "Chronicles Software Dev Co.",
        description: "Developed intern learning system with course management features",
        achievements: [
         "Delivered 3 production-ready apps in under 3 months",
          "Enabled progress tracking and content authoring tools",
          "Resolved critical backend bugs and improved load speed by 30%"
        ],
      },
      {
        year: "2024",
        role: "Frontend Engineer",
        company: "Technology IQ",
        description: "Built dynamic web apps with modern JavaScript frameworks",
        achievements: [
          "Developed 3 web applications using React and Vue within a 3-month period",
          "Improved user interaction through seamless API integrations",
          "Reduced frontend bugs by 45% through structured debugging"
        ],
      }
    
  ]

  return (
    <div
      ref={containerRef}
      className={`min-h-screen transition-all duration-1000 ${theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-gray-900"} overflow-x-hidden relative`}
    >
      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        className={`fixed top-8 right-8 z-50 p-4 rounded-full border-2 transition-all duration-500 ${
          theme === "dark"
            ? "bg-black border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
            : "bg-white border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
        }`}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {theme === "dark" ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sun className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Moon className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Cursor Trail */}
      <div
        className={`fixed w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-100 ${
          theme === "dark" ? "bg-cyan-400" : "bg-purple-600"
        }`}
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isGlitching ? 2 : 1})`,
        }}
      />

      {/* Background Grid */}
      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(${theme === "dark" ? "rgba(0,255,255,0.1)" : "rgba(147,51,234,0.1)"} 1px, transparent 1px),
            linear-gradient(90deg, ${theme === "dark" ? "rgba(0,255,255,0.1)" : "rgba(147,51,234,0.1)"} 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Hero Section with Photo */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          className={`absolute inset-0 transition-all duration-1000 ${
            theme === "dark"
              ? "bg-gradient-to-br from-purple-900/20 to-cyan-900/20"
              : "bg-gradient-to-br from-purple-200/30 to-cyan-200/30"
          }`}
          style={{ y: backgroundY }}
        />

        <div className="relative z-10 text-center">
          {/* Retro TV Photo Frame */}
          <motion.div
            className="mb-8 mx-auto relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className={`relative w-48 h-48 mx-auto ${photoGlitch ? "animate-pulse" : ""}`}>
              {/* TV Frame */}
              <div
                className={`absolute inset-0 rounded-lg border-8 ${
                  theme === "dark" ? "border-gray-800 bg-gray-900" : "border-gray-600 bg-gray-700"
                } shadow-2xl`}
              >
                {/* Screen */}
                <div className="absolute inset-2 bg-black rounded overflow-hidden">
                  {/* Scan Lines */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="absolute w-full h-px bg-green-400" style={{ top: `${i * 5}%` }} />
                    ))}
                  </div>

                  {/* Photo Placeholder */}
                  
                  <Image src={mistie} alt='mistura' />

                  {/* CRT Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                </div>

                {/* TV Controls */}
                <div
                  className={`absolute -right-4 top-4 w-3 h-3 rounded-full ${
                    theme === "dark" ? "bg-red-500" : "bg-red-600"
                  }`}
                />
                <div
                  className={`absolute -right-4 top-10 w-3 h-3 rounded-full ${
                    theme === "dark" ? "bg-green-500" : "bg-green-600"
                  }`}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`transition-all duration-200 ${isGlitching ? "filter hue-rotate-180 saturate-200" : ""}`}
          >
            <h1 className="text-8xl md:text-9xl font-black mb-4 relative">
              <span
                className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  theme === "dark"
                    ? "from-cyan-400 via-purple-500 to-pink-500"
                    : "from-purple-600 via-blue-600 to-cyan-600"
                }`}
              >
                MISTURA
              </span>
              <motion.span
                className={`absolute -top-2 -right-2 text-2xl ${
                  theme === "dark" ? "text-green-400" : "text-green-600"
                }`}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              >
                {"</>"}
              </motion.span>
            </h1>

            <div className="text-2xl md:text-3xl mb-8 font-mono">
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className={theme === "dark" ? "text-green-400" : "text-green-600"}
              >
                {"> "}
              </motion.span>
              <span>SOFTWARE ENGINEER</span>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-8 text-sm font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span className={theme === "dark" ? "text-cyan-400" : "text-cyan-600"}>REACT.JS</span>
            <span className={theme === "dark" ? "text-purple-400" : "text-purple-600"}>NODE.JS</span>
            <span className={theme === "dark" ? "text-pink-400" : "text-pink-600"}>PYTHON</span>
            <span className={theme === "dark" ? "text-green-400" : "text-green-600"}>POSTGRESQL</span>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className={`absolute top-20 left-20 w-16 h-16 border-2 ${
            theme === "dark" ? "border-cyan-400" : "border-purple-600"
          }`}
          animate={{ rotate: 360 }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
        />
        <motion.div
          className={`absolute bottom-20 right-20 w-12 h-12 rounded-full ${
            theme === "dark" ? "bg-purple-500" : "bg-cyan-500"
          }`}
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
        />
      </section>

     

      {/* About Section - Asymmetrical */}
      <section className="min-h-screen relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-8 items-center">
            <motion.div
              className="col-span-12 md:col-span-7 md:col-start-2"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl font-black mb-8 transform -rotate-2">
                <span
                  className={`bg-gradient-to-r bg-clip-text text-transparent ${
                    theme === "dark" ? "from-yellow-400 to-orange-500" : "from-yellow-600 to-orange-700"
                  }`}
                >
                  ABOUT
                </span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed font-mono">
                <p className={`border-l-4 pl-6 ${theme === "dark" ? "border-cyan-400" : "border-cyan-600"}`}>
                Hi! I'm a full stack engineer who enjoys building practical, reliable web applications. I'm interested in clean architecture, thoughtful design, and writing maintainable code. 
                </p>

                <p className={`border-l-4 pl-6 ml-8 ${theme === "dark" ? "border-purple-400" : "border-purple-600"}`}>
                When I’m not coding, I’m usually reading novels, writing, or listening to music.

                </p>

                <motion.button
                  className={`mt-8 px-6 py-3 border-2 font-mono transition-all duration-300 ${
                    theme === "dark"
                      ? "border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                      : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  onClick={() => setEasterEggFound(true)}
                >
                  {"> DOWNLOAD_RESUME.exe"}
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="col-span-12 md:col-span-3 md:col-start-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div
                  className={`w-64 h-64 rounded-lg transform rotate-6 opacity-80 ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-cyan-400 to-purple-600"
                      : "bg-gradient-to-br from-purple-600 to-cyan-600"
                  }`}
                />
                <div
                  className={`absolute inset-0 w-64 h-64 border-4 rounded-lg transform -rotate-3 ${
                    theme === "dark" ? "border-white" : "border-gray-900"
                  }`}
                />
                <div
                  className={`absolute inset-4 rounded-lg flex items-center justify-center ${
                    theme === "dark" ? "bg-black" : "bg-white"
                  }`}
                >
                  <Terminal className={`w-16 h-16 ${theme === "dark" ? "text-green-400" : "text-green-600"}`} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section - Non-linear Layout */}
      <section
        className={`min-h-screen relative py-20 transition-all duration-1000 ${
          theme === "dark" ? "bg-gradient-to-br from-gray-900 to-black" : "bg-gradient-to-br from-gray-200 to-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-7xl font-black text-center mb-20 transform rotate-1"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                theme === "dark" ? "from-pink-400 to-cyan-400" : "from-pink-600 to-cyan-600"
              }`}
            >
              PROJECTS
            </span>
          </motion.h2>

          <div className="relative">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`mb-16 ${index % 2 === 0 ? "ml-0 md:ml-16" : "ml-0 md:ml-32"}`}
                initial={{ opacity: 0, y: 100, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 2 : -2 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`bg-gradient-to-r ${project.color} p-1 rounded-lg ${project.rotation} max-w-md`}>
                  <div className={`p-6 rounded-lg ${theme === "dark" ? "bg-black" : "bg-white"}`}>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 text-xs font-mono rounded ${
                            theme === "dark" ? "bg-gray-800" : "bg-gray-200"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <motion.a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className={`flex items-center space-x-2 transition-colors ${
    theme === "dark" ? "text-cyan-400 hover:text-white" : "text-cyan-600 hover:text-gray-900"
  }`}
  whileHover={{ x: 5 }}
>
  <span>VIEW PROJECT</span>
  <ExternalLink className="w-4 h-4" />
</motion.a>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Career Section - Timeline */}
       <section
        className={`min-h-screen relative py-20 transition-all duration-1000 ${
          theme === "dark" ? "bg-gradient-to-br from-gray-900 to-black" : "bg-gradient-to-br from-gray-200 to-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-7xl font-black mb-20 transform -rotate-1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                theme === "dark" ? "from-orange-400 to-red-500" : "from-orange-600 to-red-700"
              }`}
            >
              CAREER
            </span>
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div
              className={`absolute left-8 top-0 bottom-0 w-1 ${
                theme === "dark"
                  ? "bg-gradient-to-b from-cyan-400 to-purple-600"
                  : "bg-gradient-to-b from-purple-600 to-cyan-600"
              }`}
            />

            {careerData.map((item, index) => (
              <motion.div
                key={index}
                className={`relative mb-16 ${index % 2 === 0 ? "ml-20" : "ml-20 md:ml-40"}`}
                initial={{ opacity: 0, y: 100, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 1 : -1 }}
                whileHover={{ scale: 1.02, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-14 top-6 w-6 h-6 rounded-full border-4 ${
                    theme === "dark" ? "bg-black border-cyan-400" : "bg-white border-purple-600"
                  } shadow-lg`}
                />

                {/* Career Card */}
                <div
                  className={`p-1 rounded-lg max-w-md transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-cyan-400 to-purple-600"
                      : "bg-gradient-to-r from-purple-600 to-cyan-600"
                  }`}
                >
                  <div className={`p-6 rounded-lg ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
                    <div className="flex items-center mb-2">
                      <Calendar className={`w-5 h-5 mr-2 ${theme === "dark" ? "text-cyan-400" : "text-purple-600"}`} />
                      <span className={`text-sm font-mono ${theme === "dark" ? "text-cyan-400" : "text-purple-600"}`}>
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                    <h4 className={`text-lg mb-3 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}>
                      {item.company}
                    </h4>
                    <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{item.description}</p>

                    <div className="space-y-1">
                      {item.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center">
                          <div
                            className={`w-2 h-2 rounded-full mr-2 ${
                              theme === "dark" ? "bg-green-400" : "bg-green-600"
                            }`}
                          />
                          <span className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    {/* Skills Section - Interactive Grid */}
<section className="min-h-screen relative py-20">
  <div className="max-w-7xl mx-auto px-4">
    <motion.h2
      className="text-6xl font-black mb-20 transform -rotate-1"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <span
        className={`bg-gradient-to-r bg-clip-text text-transparent ${
          theme === "dark" ? "from-green-400 to-blue-500" : "from-green-600 to-blue-700"
        }`}
      >
        TECH STACK
      </span>
    </motion.h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        {
          icon: Code,
          name: "Frontend",
          color: theme === "dark" ? "text-cyan-400" : "text-cyan-600",
          stack: ["TypeScript", "React.js", "Next.js", "Vue.js", "TailwindCSS"]
        },
        {
          icon: Database,
          name: "Backend",
          color: theme === "dark" ? "text-purple-400" : "text-purple-600",
          stack: ["Node.js", "Express.js", "PostgreSQL", "C#", ".NET", "MongoDB", "SQLite"]
        },
        {
          icon: Cpu,
          name: "Tools",
          color: theme === "dark" ? "text-pink-400" : "text-pink-600",
          stack: ["Git", "Prisma", "Figma"]
        },
        {
          icon: Globe,
          name: "DevOps",
          color: theme === "dark" ? "text-green-400" : "text-green-600",
          stack: ["Docker", "CI/CD", "Linux"]
        }
      ].map((skill, index) => (
        <motion.div
          key={index}
          className="relative group cursor-pointer"
          whileHover={{ scale: 1.05, rotate: 2 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
         <div
  className={`h-full flex flex-col p-8 rounded-lg border-2 transition-all duration-300 ${
    theme === "dark"
      ? "bg-gray-900 border-gray-700 group-hover:border-cyan-400"
      : "bg-white border-gray-300 group-hover:border-purple-600"
  }`}
>
  <skill.icon className={`w-12 h-12 ${skill.color} mb-4 mx-auto`} />
  <h3 className="text-xl font-bold text-center mb-4">{skill.name}</h3>
  
  
  
  <p className={`text-sm font-mono text-center leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
    {skill.stack.join(", ")}
  </p>
</div>


          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-r from-cyan-400/20 to-purple-600/20"
                : "bg-gradient-to-r from-purple-600/20 to-cyan-600/20"
            }`}
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section - Retro Terminal */}
      <section
        className={`min-h-screen relative py-20 transition-all duration-1000 ${
          theme === "dark" ? "bg-gradient-to-t from-black to-gray-900" : "bg-gradient-to-t from-gray-100 to-gray-200"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className={`border-4 rounded-lg p-8 font-mono transition-all duration-1000 ${
              theme === "dark" ? "bg-black border-green-400" : "bg-gray-900 border-green-600"
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className={`ml-4 ${theme === "dark" ? "text-green-400" : "text-green-300"}`}>CONTACT.exe</span>
            </div>

            <div className={`space-y-4 ${theme === "dark" ? "text-green-400" : "text-green-300"}`}>
              <div>
                <span className={theme === "dark" ? "text-cyan-400" : "text-cyan-300"}>{"> "}</span>
                <span>INITIALIZING CONTACT PROTOCOL...</span>
              </div>
              <div>
                <span className={theme === "dark" ? "text-cyan-400" : "text-cyan-300"}>{"> "}</span>
                <span>READY FOR TRANSMISSION</span>
              </div>

              <div className="mt-8 space-y-4">
                <motion.a
                  href="mailto:misturayahaya1@gmail.com"
                  className="flex items-center space-x-3 hover:text-white transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <Mail className="w-5 h-5" />
                  <span>misturayahaya1@gmail.com</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">{"<-- CLICK TO SEND"}</span>
                </motion.a>

                <motion.a
                  href="https://github.com/mistie-rious"
                  className="flex items-center space-x-3 hover:text-white transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <Github className="w-5 h-5" />
                  <span>github.com/mistie-rious</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">{"<-- VIEW CODE"}</span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/misturayahaya/"
                  className="flex items-center space-x-3 hover:text-white transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <Linkedin className="w-5 h-5" />
                  <span>linkedin.com/in/misturayahaya</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">{"<-- CONNECT"}</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Easter Egg Modal */}
      <AnimatePresence>
  {easterEggFound && (
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setEasterEggFound(false)}
    >
      <motion.div
        className={`p-1 rounded-lg ${
          theme === "dark"
            ? "bg-gradient-to-r from-cyan-400 to-purple-600"
            : "bg-gradient-to-r from-purple-600 to-cyan-600"
        }`}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 180 }}
        onClick={(e) => e.stopPropagation()} // prevent modal close on content click
      >
        <div className={`p-8 rounded-lg text-center ${theme === "dark" ? "bg-black" : "bg-white"}`}>
          <h3 className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-green-400" : "text-green-600"}`}>
            EASTER EGG FOUND!
          </h3>
          <p className="mb-4">You discovered a hidden feature!</p>

          <a

            href="https://drive.google.com/file/d/1LtZiJZ_Esjk6MoDD4Dmi6nmm7mbQHt3Y/view?usp=sharing"
            target="_blank" 
            rel="noopener noreferrer"
            download
            className={`inline-block mt-2 px-4 py-2 border font-medium transition-all ${
              theme === "dark"
                ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            }`}
          >
            Download CV
          </a>

          <motion.button
            className={`mt-6 px-4 py-2 border transition-all ${
              theme === "dark"
                ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            onClick={() => setEasterEggFound(false)}
          >
            CLOSE
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


      {/* Glitch Overlay */}
      {isGlitching && (
        <div className="fixed inset-0 pointer-events-none z-40">
          <div className="absolute inset-0 bg-red-500 opacity-10 animate-pulse" />
          <div className="absolute inset-0 bg-cyan-500 opacity-10 animate-ping" />
        </div>
      )}
    </div>
  )
}
