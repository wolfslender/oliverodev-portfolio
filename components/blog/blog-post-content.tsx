"use client"

import { useTranslation } from "react-i18next"
import { PortableText } from "@portabletext/react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "@/lib/sanity/client"
import { formatDate, slugify } from "@/lib/utils"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { siteConfig } from "@/lib/config"
import { SocialShareButtons } from "@/components/blog/social-share-buttons"

interface BlogPostContentProps {
  post: any
  tags: string[]
}

export function BlogPostContent({ post, tags }: BlogPostContentProps) {
  const { i18n } = useTranslation()
  const isSpanish = i18n.language.startsWith("es")

  // Determine content based on language
  const title = isSpanish && post.title_es ? post.title_es : post.title
  const description = isSpanish && post.description_es ? post.description_es : post.description
  const body = isSpanish && post.body_es ? post.body_es : post.body

  // Extract headings for Table of Contents from the correct body
  const headings = body
    ?.filter((block: any) => block._type === 'block' && (block.style === 'h2' || block.style === 'h3'))
    .map((block: any) => ({
      text: block.children.map((child: any) => child.text).join(''),
      slug: slugify(block.children.map((child: any) => child.text).join('')),
      level: block.style === 'h2' ? 2 : 3
    })) || []

  // Custom components for PortableText to render headings with IDs
  const components = {
    block: {
      h2: ({ value, children }: any) => {
        const text = value.children?.map((c: any) => c.text).join('') || ''
        const id = slugify(text)
        return <h2 id={id} className="text-3xl font-bold mt-8 mb-4 scroll-mt-24 relative group">
          <a href={`#${id}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 transition-opacity text-primary">#</a>
          {children}
        </h2>
      },
      h3: ({ value, children }: any) => {
        const text = value.children?.map((c: any) => c.text).join('') || ''
        const id = slugify(text)
        return <h3 id={id} className="text-2xl font-bold mt-6 mb-3 scroll-mt-24 relative group">
          <a href={`#${id}`} className="absolute -left-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary text-sm">#</a>
          {children}
        </h3>
      },
    }
  }

  return (
    <div className="container py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description: description,
            image: post.mainImage ? urlFor(post.mainImage).url() : undefined,
            author: {
              "@type": "Person",
              name: post.authorName,
            },
            datePublished: post.publishedAt,
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              logo: {
                "@type": "ImageObject",
                url: siteConfig.ogImage,
              },
            },
          }),
        }}
      />
      <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" /> {isSpanish ? "Volver al Blog" : "Back to Blog"}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <article className="lg:col-span-3">
          <div className="mb-8">
            <div className="flex gap-2 mb-4">
              {post.categories?.map((category: string) => (
                <span key={category} className="text-xs font-medium bg-secondary px-2.5 py-0.5 rounded-full text-secondary-foreground">
                  {category}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{title}</h1>

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
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="flex items-center justify-between py-6 border-y mb-8">
               <span className="text-2xl font-bold text-foreground mr-4">{isSpanish ? "Compartir:" : "Share:"}</span>
               <SocialShareButtons 
                 url={`${siteConfig.url}/blog/${post.slug.current}`} 
                 title={title} 
               />
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <PortableText value={body} components={components} />
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-2xl font-bold mb-6">{isSpanish ? "Comparte este artículo" : "Share this article"}</h3>
            <SocialShareButtons 
                 url={`${siteConfig.url}/blog/${post.slug.current}`} 
                 title={title} 
               />
          </div>
        </article>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <BlogSidebar tags={tags} showSearch={false} headings={headings} />
          </div>
        </div>
      </div>
    </div>
  )
}
