"use client"

import Link from "next/link"
import { useTheme } from "../ThemeProvider"
import { blogPosts } from "./posts"

export default function BlogPage() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        theme === "dark" ? "bg-[#0f0f0f] text-[#d4d4d4]" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-[680px] mx-auto px-5 py-6">
        <header className={`flex justify-between items-center mb-10 pb-4 border-b ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}>
          <Link href="/" className={`text-sm font-medium hover:underline ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            Devansh Jain
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/blog" className="font-semibold hover:underline">blog</Link>
            <Link href="/" className="hover:underline">home</Link>
            <button onClick={toggleTheme} className="hover:opacity-70 transition-opacity" aria-label="Toggle theme">
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </nav>
        </header>

        <main>
          <section className="mb-8">
            <h1 className={`text-3xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Blog
            </h1>
            <p className={`text-sm leading-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Articles and drafts.
            </p>
          </section>

          <section className="space-y-5">
            {blogPosts.map((post) => (
              <article key={post.slug} className={`border-b pb-5 ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className={`mb-1 text-xs uppercase tracking-wide ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                    {post.date}
                  </div>
                  <h2 className={`text-xl font-semibold group-hover:underline ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    {post.title}
                  </h2>
                  <p className={`mt-2 text-sm leading-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    {post.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  )
}
