export type ProjectPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string[]
}

const sampleText = "The lazy brown dog"

export const projectPosts: ProjectPost[] = [
  {
    slug: "amplify",
    title: "Amplify - UofTHacks",
    date: "Draft",
    excerpt: sampleText,
    content: [sampleText, sampleText, sampleText, sampleText],
  },
  {
    slug: "cortex",
    title: "Cortex - HackCanada",
    date: "Draft",
    excerpt: sampleText,
    content: [sampleText, sampleText, sampleText, sampleText],
  },
  {
    slug: "r2detour",
    title: "R2Detour - UTRAHacks",
    date: "Draft",
    excerpt: sampleText,
    content: [sampleText, sampleText, sampleText, sampleText],
  },
]

export function getProjectPost(slug: string) {
  return projectPosts.find((post) => post.slug === slug)
}
