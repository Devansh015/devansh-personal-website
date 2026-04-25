export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string[]
}

const sampleText = "The lazy brown dog"

export const blogPosts: BlogPost[] = [
  {
    slug: "interning-at-an-engineering-firm",
    title: "Interning at an Engineering Firm",
    date: "Draft",
    excerpt: sampleText,
    content: [sampleText, sampleText, sampleText, sampleText],
  },
  {
    slug: "what-university-doesnt-teach-you",
    title: "What Uni Doesn't Teach You",
    date: "Draft",
    excerpt: sampleText,
    content: [sampleText, sampleText, sampleText, sampleText],
  },
  {
    slug: "my-first-hackathon",
    title: "My First Hackathon",
    date: "Draft",
    excerpt: sampleText,
    content: [sampleText, sampleText, sampleText, sampleText],
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
