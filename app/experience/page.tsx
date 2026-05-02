"use client"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "../ThemeProvider"
import { memo, useMemo, useCallback } from "react"

// Memoized experience card component
const ExperienceCard = memo(({ 
  experience, 
  theme 
}: { 
  experience: {
    company: string
    position: string
    duration: string
    location?: string
    logo: string
    description?: string[]
    technologies: string[]
  }
  theme: "light" | "dark"
}) => (
  <div
    className={`p-6 rounded-xl border ${
      theme === "dark" 
        ? "bg-gray-900/50 border-gray-800" 
        : "bg-gray-50 border-gray-200"
    }`}
  >
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start mb-4">
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-white border flex items-center justify-center overflow-hidden ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}>
          <Image src={experience.logo} alt={`${experience.company} logo`} width={40} height={40} className="object-contain" />
        </div>
        <div>
          <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            {experience.position}
          </h3>
          <p className={`text-lg font-medium ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
            {experience.company}
          </p>
        </div>
      </div>
      <div className={`text-sm ${theme === "dark" ? "text-white" : "text-black"} sm:text-right`}>
        <p className="font-medium">{experience.duration}</p>
        {experience.location && <p>{experience.location}</p>}
      </div>
    </div>

    {experience.description && experience.description.length > 0 && (
      <div className="mb-4">
        {experience.description.map((item, i) => (
          <p key={i} className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} mb-2`}>
            {item}
          </p>
        ))}
      </div>
    )}

    {experience.technologies.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, i) => (
          <span
            key={i}
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              theme === "dark" 
                ? "bg-gray-800 text-gray-300 border border-gray-700" 
                : "bg-white text-gray-700 border border-gray-300"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    )}
  </div>
))

ExperienceCard.displayName = 'ExperienceCard'

export default function ExperiencePage() {
  const { theme, toggleTheme } = useTheme()

  const experiences = useMemo(() => [
    {
      company: "University of California",
      position: "Research Assistant",
      duration: "January 2026 - April 2026",
      logo: "/uc-logo.svg",
      description: [],
      technologies: []
    },
    {
      company: "Jain Consultants",
      position: "Software Engineering Intern",
      duration: "May 2025 - August 2025",
      location: "Toronto, Ontario",
      logo: "/image1.png",
      description: [
        "• ...",
      ],
      technologies: ["React", "Node.js", "JavaScript", "Python"]
    },
    {
      company: "OneDrug",
      position: "Software Engineering Intern", 
      duration: "May 2024 - August 2024",
      location: "Toronto, Ontario",
      logo: "/OneDrug-Photoroom.png",
      description: [
        "• ...",
      ],
      technologies: ["SQL", "React"]
    },
    {
      company: "Accumine Technologies",
      position: "Software Engineering Intern",
      duration: "September 2022 - December 2022",
      location: "Toronto, Ontario",
      logo: "/accuminetech-Photoroom.png",
      description: [
        "• ..."
      ],
      technologies: ["React"]
    }
  ], [])

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        theme === "dark" ? "bg-[#0f0f0f] text-[#d4d4d4]" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-[720px] mx-auto px-6 py-8">
        <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-16">
          <h1 className={`text-xl font-bold mb-4 sm:mb-0 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            <Link href="/" className="hover:underline">Devansh Jain</Link>
          </h1>
          <nav className="text-sm space-x-4">
            <Link href="/experience" className="hover:underline font-semibold">
              experience
            </Link>
          </nav>
        </header>

        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Work Experience
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              My professional journey and internships
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={`${exp.company}-${index}`} experience={exp} theme={theme} />
            ))}
          </div>

          <div className={`p-6 rounded-xl border text-center ${
            theme === "dark" 
              ? "bg-gray-900/50 border-gray-800" 
              : "bg-gray-50 border-gray-200"
          }`}>
            <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              🚀 Looking for Opportunities
            </h3>
            <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} mb-4`}>
              I'm actively seeking internships and full-time opportunities in software development.
            </p>
            <div className="space-x-4">
              <Link 
                href="/2025Resume.pdf" 
                className={`inline-block px-6 py-2 rounded-lg border transition-colors ${
                  theme === "dark" 
                    ? "border-gray-700 hover:border-gray-600 hover:bg-gray-800/50" 
                    : "border-gray-300 hover:border-gray-400 hover:bg-white"
                }`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                📄 View Resume
              </Link>
              <Link 
                href="mailto:devansh_jain@outlook.com" 
                className={`inline-block px-6 py-2 rounded-lg border transition-colors ${
                  theme === "dark" 
                    ? "border-blue-700 hover:border-blue-600 hover:bg-blue-900/20 text-blue-400" 
                    : "border-blue-300 hover:border-blue-400 hover:bg-blue-50 text-blue-600"
                }`}
              >
                📧 Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <footer
          className={`flex flex-col sm:flex-row sm:justify-between sm:items-center pt-8 border-t text-sm mt-16 ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="mb-4 sm:mb-0">© 2025 | Devansh Jain</div>
          <div className="flex items-center space-x-4">
            <button onClick={handleScrollToTop} className="hover:underline">
              Back to the top
            </button>
            <button
              onClick={toggleTheme}
              className="hover:underline transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}
