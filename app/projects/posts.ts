export type ProjectPost = {
  slug: string
  title: string
  githubUrl: string
  date: string
  excerpt: string
}

const sampleText = "The lazy brown dog"

export const projectPosts: ProjectPost[] = [
  {
    slug: "amplify",
    title: "Amplify - UofTHacks",
    githubUrl: "https://github.com/Devansh015/Amplify",
    date: "Draft",
    excerpt: sampleText,
  },
  {
    slug: "cortex",
    title: "Cortex - HackCanada",
    githubUrl: "https://github.com/Devansh015/Cortex",
    date: "Draft",
    excerpt: sampleText,
  },
  {
    slug: "r2detour",
    title: "R2Detour - UTRAHacks",
    githubUrl: "https://github.com/Devansh015/UTRA",
    date: "Draft",
    excerpt: sampleText,
  },
]
