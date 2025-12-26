
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { client, urlFor } from "@/lib/sanity/client"
import { groq } from "next-sanity"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { formatDate } from "@/lib/utils"

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    publishedAt,
    mainImage,
    "authorName": author->name,
    "authorImage": author->image,
    "categories": categories[]->title,
    body
  }
`

export const dynamicParams = false

export async function generateStaticParams() {
  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
       const query = groq`*[_type == "post"]{ "slug": slug.current }`
       const slugs = await client.fetch(query)
       if (slugs && Array.isArray(slugs) && slugs.length > 0) {
         return slugs.map((slug: any) => ({ slug: slug.slug }))
       }
    }
  } catch (error) {
    console.warn("Error fetching Sanity slugs:", error)
  }
  
  return [{ slug: 'welcome' }]
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  if (params.slug === 'welcome') return { title: 'Welcome to Blog' }
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return { title: 'Blog Post' }

  try {
    const post = await client.fetch(postQuery, { slug: params.slug })
    if (!post) return { title: 'Not Found' }

    return {
      title: `${post.title} - OliveroDev`,
      openGraph: {
        images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
      },
    }
  } catch (error) {
    return { title: 'Blog Post' }
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params

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
  try {
    // Ensure slug is a string
    const safeSlug = typeof slug === 'string' ? slug : Array.isArray(slug) ? slug[0] : ''
    
    if (safeSlug) {
      post = await client.fetch(postQuery, { slug: safeSlug })
    }
  } catch (error) {
    console.error("Error fetching post:", error)
  }

  if (!post) {
    return notFound()
  }

  return (
    <article className="container py-24 max-w-3xl mx-auto">
      <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
      </Link>

      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          {post.categories?.map((category: string) => (
            <span key={category} className="text-xs font-medium bg-secondary px-2.5 py-0.5 rounded-full text-secondary-foreground">
              {category}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

        <div className="flex items-center gap-4 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
                {post.authorImage && (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                         <Image src={urlFor(post.authorImage).url()} alt={post.authorName} fill className="object-cover" />
                    </div>
                )}
                <span>{post.authorName}</span>
            </div>
            <span>•</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </div>

        {post.mainImage && (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10 border">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  )
}
