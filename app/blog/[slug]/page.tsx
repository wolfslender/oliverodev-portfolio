
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { client, urlFor } from "@/lib/sanity/client"
import { groq } from "next-sanity"
import { PortableText } from "@portabletext/react"
import { formatDate, slugify } from "@/lib/utils"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { siteConfig } from "@/lib/config"
import { BlogPostContent } from "@/components/blog/blog-post-content"


const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    title_es,
    slug,
    description,
    description_es,
    publishedAt,
    mainImage,
    "authorName": author->name,
    "authorImage": author->image,
    "categories": categories[]->title,
    body,
    body_es
  }
`

const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    title
  }
`

// export const dynamicParams = false // Removed to fix build error with output: export
// export const revalidate = 60 // Removed to fix build error with output: export

export async function generateStaticParams() {
  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
       const query = groq`*[_type == "post"]{ "slug": slug.current }`
       const slugs = await client.fetch(query, {}, { next: { revalidate: 0 } })
       if (slugs && Array.isArray(slugs) && slugs.length > 0) {
         return slugs.map((slug: any) => ({ slug: slug.slug }))
       }
    }
  } catch (error) {
    console.warn("Error fetching Sanity slugs:", error)
  }
  
  return [{ slug: 'welcome' }]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (slug === 'welcome') return { title: 'Welcome to Blog' }
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return { title: 'Blog Post' }

  try {
    const post = await client.fetch(postQuery, { slug }, { next: { revalidate: 0 } })
    if (!post) return { title: 'Not Found' }

    return {
      title: `${post.title} - OliveroDev`,
      description: post.description || siteConfig.description,
      openGraph: {
        title: post.title,
        description: post.description || siteConfig.description,
        type: "article",
        publishedTime: post.publishedAt,
        authors: [post.authorName],
        ...(post.mainImage && {
          images: [urlFor(post.mainImage).width(1200).height(630).url()],
        }),
      },
    }
  } catch (error) {
    return { title: 'Blog Post' }
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  if (slug === 'welcome') {
    return (
      <div className="container py-24 text-center">
        <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
        <h1 className="text-4xl font-bold mb-4">Welcome to our Blog!</h1>
        <p className="text-muted-foreground">Our content system is ready. Check back soon for updates.</p>
      </div>
    )
  }

  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return notFound()
  }

  let post = null
  let categories = []
  
  try {
    const safeSlug = typeof slug === 'string' ? slug : Array.isArray(slug) ? slug[0] : ''
    
    if (safeSlug) {
      const [postResult, categoriesResult] = await Promise.all([
        client.fetch(postQuery, { slug: safeSlug }, { next: { revalidate: 0 } }),
        client.fetch(categoriesQuery, {}, { next: { revalidate: 0 } })
      ])
      post = postResult
      categories = categoriesResult
    }
  } catch (error) {
    console.error("Error fetching post:", error)
  }

  if (!post) {
    return notFound()
  }

  const tags = categories.map((cat: any) => cat.title)

  return (
    <BlogPostContent post={post} tags={tags} />
  )
}

