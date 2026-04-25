"use client"

import Link from "next/link"
import { useTheme } from "../../ThemeProvider"
import type { ProjectPost } from "../posts"

export default function ProjectArticle({ post }: { post: ProjectPost }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        theme === "dark" ? "bg-[#0f0f0f] text-[#d4d4d4]" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-[680px] mx-auto px-5 py-6">
        <header className={`flex justify-between items-center mb-10 pb-4 border-b ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}>
          <Link href="/projects" className={`text-sm font-medium hover:underline ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            Back to projects
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/" className="hover:underline">home</Link>
            <button onClick={toggleTheme} className="hover:opacity-70 transition-opacity" aria-label="Toggle theme">
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </nav>
        </header>

        <main>
          <article>
            <header className="mb-8">
              <div className={`mb-3 text-xs uppercase tracking-wide ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                {post.date}
              </div>
              <h1 className={`text-4xl font-bold leading-tight mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                {post.title}
              </h1>
              <p className={`text-base leading-7 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                {post.excerpt}
              </p>
            </header>

            <div className={`space-y-6 text-lg leading-8 ${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}>
              {post.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}
