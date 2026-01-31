"use client"

import Link from "next/link"
import Image from "next/image"
import DegreeProgress from "./DegreeProgress"
import TypewriterName from "./TypewriterName"
import { useTheme } from "./ThemeProvider"

export default function Portfolio() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        theme === "dark" ? "bg-[#0f0f0f] text-[#d4d4d4]" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-[600px] mx-auto px-5 py-6">
        {/* Header */}
        <header className={`flex justify-between items-center mb-8 pb-4 border-b ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}>
          <h1 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Devansh Jain
          </h1>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="https://substack.com/@devanshjaiin" className="hover:underline">blog</Link>
            <Link href="https://letterboxd.com/Devansh015/" className="hover:underline">letterboxd</Link>
            <button onClick={toggleTheme} className="hover:opacity-70 transition-opacity" aria-label="Toggle theme">
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </nav>
        </header>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Hi, I&apos;m <TypewriterName/>
          </h2>
          <p className={`text-sm mb-3 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            CS @ Wilfrid Laurier · Full-stack &amp; AI/ML · Film &amp; Basketball 🏀
          </p>
          <DegreeProgress theme={theme} />
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className={`text-sm font-semibold uppercase tracking-wide mb-3 ${theme === "dark" ? "text-gray-500" : "text-black"}`}>
            Experience
          </h3>
          <div className="space-y-3">
            {[
              { company: "Jain Consultants", role: "Software Engineering Intern", date: "May – Aug 2025", img: "/image1.png" },
              { company: "OneDrug", role: "Software Engineering Intern", date: "May – Aug 2024", img: "/OneDrug-Photoroom.png" },
              { company: "Accumine Technologies", role: "Software Engineering Intern", date: "Sep – Dec 2022", img: "/accuminetech-Photoroom.png" },
            ].map((exp) => (
              <div key={exp.company} className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${theme === "dark" ? "hover:bg-gray-900/50" : "hover:bg-gray-50"}`}>
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-white border flex items-center justify-center overflow-hidden ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}>
                  <Image src={exp.img} alt={exp.company} width={32} height={32} className="object-contain" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className={`font-medium text-sm truncate ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{exp.company}</p>
                    <span className={`text-xs flex-shrink-0 ${theme === "dark" ? "text-white" : "text-black"}`}>{exp.date}</span>
                  </div>
                  <p className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{exp.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Posts & Projects Grid */}
        <section className="mb-8 grid grid-cols-2 gap-4">
          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wide mb-3 ${theme === "dark" ? "text-gray-500" : "text-black"}`}>
              Writing
            </h3>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="https://devanshjaiin.substack.com/p/interning-at-an-engineering-firm" className="hover:underline">Interning at an Engineering Firm</Link></li>
              <li><Link href="https://open.substack.com/pub/devanshjaiin/p/what-university-doesnt-teach-you" className="hover:underline">What Uni Doesn&apos;t Teach You</Link></li>
              <li><Link href="https://devanshjaiin.substack.com/p/my-first-hackathon" className="hover:underline">My first hackathon</Link></li>
              <li><Link href="https://substack.com/@devanshjaiin" className={`hover:underline ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>more →</Link></li>
            </ul>
          </div>
          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wide mb-3 ${theme === "dark" ? "text-gray-500" : "text-black"}`}>
              Projects
            </h3>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="https://github.com/Devansh015/Tensorflow-CNN" className="hover:underline">CNN with Tensorflow</Link></li>
              <li><Link href="https://github.com/Devansh015/wluNest-App" className="hover:underline">wluNest Housing App</Link></li>
              <li><Link href="https://github.com/Devansh015/go-url-shortner" className="hover:underline">Go URL Shortener</Link></li>
              <li><Link href="https://github.com/Devansh015?tab=repositories" className={`hover:underline ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>more →</Link></li>
            </ul>
          </div>
        </section>

        {/* Connect */}
        <section className="mb-6">
          <h3 className={`text-sm font-semibold uppercase tracking-wide mb-3 ${theme === "dark" ? "text-gray-500" : "text-black"}`}>
            Connect
          </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <Link href="mailto:devansh_jain@outlook.com" className="hover:underline">email</Link>
            <Link href="https://github.com/Devansh015" className="hover:underline">github</Link>
            <Link href="https://linkedin.com/in/devanshj15" className="hover:underline">linkedin</Link>
            <Link href="https://x.com/__devanshjain" className="hover:underline">twitter</Link>
            <Link href="/Devansh_JainResume.pdf" className="hover:underline">resume</Link>
          </div>
        </section>

        {/* Footer */}
        <footer className={`pt-4 border-t text-xs ${theme === "dark" ? "border-gray-800 text-gray-500" : "border-gray-200 text-gray-400"}`}>
          <span>© 2025 Devansh Jain</span>
        </footer>
      </div>
    </div>
  )
}
