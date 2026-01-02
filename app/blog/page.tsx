import { client } from "@/lib/sanity/client"
import { groq } from "next-sanity"
import { BlogList } from "@/components/blog/blog-list"

// Query to get posts
const postsQuery = groq`
  *[_type == "post"] {
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

  const [postsRaw, categories] = await Promise.all([
    client.fetch(postsQuery),
    client.fetch(categoriesQuery)
  ])

  // Sort posts manually to ensure we don't lose any due to GROQ ordering quirks
  const posts = postsRaw.sort((a: any, b: any) => {
    return new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime()
  })

  const tags = categories.map((cat: any) => cat.title)

  return (
    <div className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Premium Header */}
      <div className="mb-20 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-primary/5 to-transparent blur-3xl -z-10" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Insights & Expertise
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          Technical <span className="text-gradient">Insights</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Deep dives into frontend development, performance optimization, and building scalable digital products that drive business results.
        </p>
      </div>

      <BlogList posts={posts} tags={tags} />
    </div>
  )
}
