"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { useTheme } from "../../ThemeProvider"
import type { BlogPost } from "../posts"

export default function BlogArticle({ post }: { post: BlogPost }) {
  const { theme } = useTheme()
  const sectionIds = useMemo(() => post.sections.map((section) => section.id), [post.sections])
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "")
  const wordCount = post.sections.reduce((total, section) => {
    return total + section.paragraphs.join(" ").trim().split(/\s+/).filter(Boolean).length
  }, 0)
  const readingTime = Math.max(1, Math.ceil(wordCount / 200))

  useEffect(() => {
    if (sectionIds.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.35, 0.6],
      },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)

      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [sectionIds])

  const isDark = theme === "dark"

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#0f0f0f] text-[#d4d4d4]" : "bg-white text-gray-900"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-5 py-8 lg:grid-cols-[200px_1fr] lg:gap-16 lg:px-8">
        <aside className={`mb-12 lg:sticky lg:top-8 lg:mb-0 lg:h-fit ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}>
          <nav aria-label="Article contents">
            <h2 className={`mb-6 text-sm font-semibold uppercase tracking-wide ${
              isDark ? "text-gray-500" : "text-gray-400"
            }`}>
              contents
            </h2>
            <ol className="space-y-4">
              {post.sections.map((section) => {
                const isActive = activeSection === section.id

                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`block text-sm font-medium lowercase transition-colors hover:${
                        isDark ? "text-white" : "text-gray-900"
                      } ${
                        isActive
                          ? isDark ? "text-white" : "text-gray-900"
                          : isDark ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {section.title}
                    </a>
                  </li>
                )
              })}
            </ol>
          </nav>
        </aside>

        <main className="min-w-0 max-w-2xl">
          <Link
            href="/"
            className={`mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:${
              isDark ? "text-white" : "text-gray-900"
            } ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" strokeWidth={3} />
            back
          </Link>

          <article>
            <header className="mb-10">
              <h1 className={`mb-4 text-3xl font-bold leading-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
                {post.title}
              </h1>
            </header>

            <div className={`mb-8 h-px w-full ${
              isDark ? "bg-gray-800" : "bg-gray-200"
            }`} />

            <div className="space-y-8">
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-8">
                  <h2 className={`mb-5 text-lg font-semibold lowercase ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                    {section.title}
                  </h2>
                  <div className={`space-y-4 text-sm leading-7 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}>
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}
