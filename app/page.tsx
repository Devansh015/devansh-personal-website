"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import DegreeProgress from "./DegreeProgress"
import TypewriterName from "./TypewriterName"
import { useTheme } from "./ThemeProvider"

export default function Portfolio() {
  const { theme, toggleTheme } = useTheme()
  const [views, setViews] = useState<number | null>(null)
  const [showViewIncrement, setShowViewIncrement] = useState(false)
  const [animateViewIncrement, setAnimateViewIncrement] = useState(false)

  useEffect(() => {
    let animationFrame: number | null = null
    let countTimeout: ReturnType<typeof setTimeout> | null = null
    let badgeTimeout: ReturnType<typeof setTimeout> | null = null
    let isMounted = true

    fetch("/api/views", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        const nextViews = Number(data.views)

        if (!isMounted || !Number.isFinite(nextViews)) {
          return
        }

        setViews(Math.max(nextViews - 1, 0))
        setShowViewIncrement(true)
        animationFrame = window.requestAnimationFrame(() => {
          if (isMounted) {
            setAnimateViewIncrement(true)
          }
        })

        countTimeout = setTimeout(() => {
          if (isMounted) {
            setViews(nextViews)
          }
        }, 850)

        badgeTimeout = setTimeout(() => {
          if (isMounted) {
            setAnimateViewIncrement(false)
            setShowViewIncrement(false)
          }
        }, 1400)
      })
      .catch(() => {})

    return () => {
      isMounted = false

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame)
      }

      if (countTimeout) {
        clearTimeout(countTimeout)
      }

      if (badgeTimeout) {
        clearTimeout(badgeTimeout)
      }
    }
  }, [])

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        theme === "dark" ? "bg-[#0f0f0f] text-[#d4d4d4]" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-[600px] mx-auto px-5 py-6">
        {/* Header */}
        <header className={`flex justify-between items-center mb-8 pb-4 border-b ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}>
          <div className={`flex min-h-6 min-w-[88px] items-center gap-1.5 text-sm font-medium ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            {views !== null && (
              <>
                <span>{views.toLocaleString()} views</span>
                {showViewIncrement && (
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[9px] font-semibold transition-all duration-700 ${
                      theme === "dark"
                        ? "bg-emerald-500/15 text-emerald-300"
                        : "bg-emerald-100 text-emerald-700"
                    } ${
                      animateViewIncrement
                        ? "translate-y-0 opacity-100"
                        : "translate-y-1 opacity-0"
                    }`}
                  >
                    +1
                  </span>
                )}
              </>
            )}
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="https://substack.com/@devanshjaiin" className="hover:underline">blog</Link>
            <Link href="https://letterboxd.com/Devansh015/" className="hover:underline">letterboxd</Link>
            <Link href="/Devansh_JainResume.pdf" className="hover:underline">resume</Link>
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
            CS @ Wilfrid Laurier University · Full-Stack &amp; AI/ML · Film &amp; Basketball 🏀
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
              <li><Link href="https://substack.com/home/post/p-189739560" className="hover:underline">My First Hackathon</Link></li>
              <li><Link href="https://substack.com/@devanshjaiin" className={`hover:underline ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>more →</Link></li>
            </ul>
          </div>
          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wide mb-3 ${theme === "dark" ? "text-gray-500" : "text-black"}`}>
              Projects
            </h3>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="https://github.com/Devansh015/Amplify" className="hover:underline">Amplify - UofTHacks</Link></li>
              <li><Link href="https://github.com/Devansh015/Cortex" className="hover:underline">Cortex - HackCanada</Link></li>
              <li><Link href="https://github.com/Devansh015/UTRA" className="hover:underline">R2Detour - UTRAHacks</Link></li>
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
            <Link href="https://devpost.com/devanshjain?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" className="hover:underline">devpost</Link>
          </div>
        </section>
        {/* CS Webring */}
        <div className="mb-6 flex items-center gap-2">
          <a href="https://wluring.com/go?site=https%3A%2F%2Fdevanshjain.me%2F&nav=prev">&#8592;</a>
          <a href="https://wluring.com/">
            <img
              src={theme === "dark" ? "https://wluring.com/icon.white.svg" : "https://wluring.com/icon.black.svg"}
              alt="CS Webring"
              style={{ width: 24, height: "auto", opacity: 0.8 }}
            />
          </a>
          <a href="https://wluring.com/go?site=https%3A%2F%2Fdevanshjain.me%2F&nav=next">&#8594;</a>
        </div>

        {/* Footer */}
        <footer className={`pt-4 border-t text-xs ${theme === "dark" ? "border-gray-800 text-gray-500" : "border-gray-200 text-gray-400"}`}>
          <span>© 2026 Devansh Jain</span>
        </footer>
      </div>
    </div>
  )
}
