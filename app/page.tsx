"use client"

import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { useEffect, useState } from "react"
import DegreeProgress from "./DegreeProgress"
import TypewriterName from "./TypewriterName"
import { useTheme } from "./ThemeProvider"

export default function Portfolio() {
  const { theme, toggleTheme } = useTheme()
  const [prevUrl, setPrevUrl] = useState<string>("https://cs-webring.pages.dev/prev?from=devanshjain.vercel.app")
  const [nextUrl, setNextUrl] = useState<string>("https://cs-webring.pages.dev/next?from=devanshjain.vercel.app")

  useEffect(() => {
    const membersUrl = "https://cs-webring.pages.dev/data/members.json"
    let cancelled = false

    async function load() {
      try {
        const res = await fetch(membersUrl)
        if (!res.ok) return
        const data: any = await res.json()
        if (!Array.isArray(data) || data.length === 0) return

        const hostname = typeof window !== "undefined" ? window.location.hostname.replace(/^www\./, "") : ""
        const n = data.length

        const getCandidateUrl = (item: any) => {
          const keys = ["website", "url", "site", "href", "link", "domain"]
          for (const k of keys) {
            if (item && item[k]) return String(item[k]).trim()
          }
          return null
        }

        const normalize = (u: string | null) => {
          if (!u) return null
          try {
            const url = new URL(u)
            return url.href.replace(/\/$/, "")
          } catch (e) {
            // not a full URL, return raw trimmed string
            return String(u).replace(/\/$/, "")
          }
        }

        const matches = data.map((m: any) => {
          const cand = normalize(getCandidateUrl(m))
          if (!cand) return false
          try {
            const h = new URL(cand).hostname.replace(/^www\./, "")
            return h === hostname
          } catch (e) {
            return hostname && cand.includes(hostname)
          }
        })

        let idx = matches.indexOf(true)
        if (idx === -1) {
          // fallback: try match by a site URL or name containing 'devansh' (local/dev testing)
          idx = data.findIndex((m: any) => {
            const cand = normalize(getCandidateUrl(m)) || ""
            if (hostname && cand.includes(hostname)) return true
            const name = (m && m.name) ? String(m.name).toLowerCase() : ""
            if (name.includes("devansh")) return true
            if (cand.toLowerCase().includes("devansh")) return true
            return false
          })
        }

        if (idx === -1) return

        const prev = data[(idx - 1 + n) % n]
        const next = data[(idx + 1) % n]
        const prevHref = normalize(getCandidateUrl(prev)) || `https://cs-webring.pages.dev/prev?from=${hostname}`
        const nextHref = normalize(getCandidateUrl(next)) || `https://cs-webring.pages.dev/next?from=${hostname}`

        if (!cancelled) {
          setPrevUrl(prevHref)
          setNextUrl(nextHref)
        }
      } catch (e) {
        // fail silently and keep fallbacks
      }
    }

    load()
    return () => {
      cancelled = true
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
        {/* CS Webring Widget */}
        <div className="mb-6 flex items-center gap-2">
          {/* Left/Right links are computed from the Cloudflare members.json */}
          {/* We'll fetch members.json at runtime and compute prev/next URLs. */}
          
          {/* Left Arrow */}
          <a
            href={prevUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-8 h-8 rounded-full transition-all hover:scale-110 ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            title="Previous site"
          >
            ←
          </a>
          
          {/* Hawk Logo */}
          <a
            href="https://cs-webring.pages.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all hover:scale-110 ${
              theme === "dark"
                ? "bg-[#4b2e83] hover:bg-[#5a3a9a]"
                : "bg-[#4b2e83] hover:bg-[#5a3a9a]"
            }`}
            title="CS Webring"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C9.5 2 7.5 3.5 7 5.5C6 5 4.5 5.5 3.5 6.5C2.5 7.5 2.5 9 3 10C2 11 1.5 12.5 2 14C2.5 15.5 4 16.5 5.5 16.5L8 20C8.5 21 9.5 21.5 10.5 21.5H13.5C14.5 21.5 15.5 21 16 20L18.5 16.5C20 16.5 21.5 15.5 22 14C22.5 12.5 22 11 21 10C21.5 9 21.5 7.5 20.5 6.5C19.5 5.5 18 5 17 5.5C16.5 3.5 14.5 2 12 2Z"
                fill="#FDB913"
                stroke="#FDB913"
                strokeWidth="1"
              />
              <circle cx="9" cy="9" r="1.5" fill="#4b2e83" />
              <circle cx="15" cy="9" r="1.5" fill="#4b2e83" />
              <path
                d="M9 13C9 13 10.5 15 12 15C13.5 15 15 13 15 13"
                stroke="#4b2e83"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </a>
          
          {/* Right Arrow */}
          <a
            href={nextUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-8 h-8 rounded-full transition-all hover:scale-110 ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            title="Next site"
          >
            →
          </a>
        </div>

        {/* Footer */}
        <footer className={`pt-4 border-t text-xs ${theme === "dark" ? "border-gray-800 text-gray-500" : "border-gray-200 text-gray-400"}`}>
          <span>© 2025 Devansh Jain</span>
        </footer>
      </div>
    </div>
  )
}
