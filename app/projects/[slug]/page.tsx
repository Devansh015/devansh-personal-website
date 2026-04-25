import { notFound } from "next/navigation"
import ProjectArticle from "./ProjectArticle"
import { getProjectPost, projectPosts } from "../posts"

export function generateStaticParams() {
  return projectPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function ProjectArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getProjectPost(slug)

  if (!post) {
    notFound()
  }

  return <ProjectArticle post={post} />
}
