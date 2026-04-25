import { notFound } from "next/navigation"
import BlogArticle from "./BlogArticle"
import { blogPosts, getBlogPost } from "../posts"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return <BlogArticle post={post} />
}
