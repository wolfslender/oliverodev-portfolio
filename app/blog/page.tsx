import { client } from "@/lib/sanity/client"
import { groq } from "next-sanity"
import { BlogList } from "@/components/blog/blog-list"

// Query to get posts
const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    title_es,
    slug,
    publishedAt,
    "authorName": author->name,
    "categories": categories[]->title,
    mainImage
  }
`

// Query to get all categories (tags)
const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    title
  }
`

import { siteConfig } from "@/lib/config"

export const metadata = {
  title: "Blog - OliveroDev",
  description: "Insights on Web Development, SEO, and Tech.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
}

export const revalidate = 60 // Revalidate every 60 seconds

export default async function BlogPage() {
  // If we don't have a project ID yet, show a placeholder
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Coming Soon</h1>
        <p className="text-muted-foreground">We are currently setting up our content system.</p>
      </div>
    )
  }

  const [posts, categories] = await Promise.all([
    client.fetch(postsQuery),
    client.fetch(categoriesQuery)
  ])

  const tags = categories.map((cat: any) => cat.title)

  return (
    <div className="container py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Thoughts, tutorials, and insights on frontend development, SEO, and building digital products.
        </p>
      </div>

      <BlogList posts={posts} tags={tags} />
    </div>
  )
}
