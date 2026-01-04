"use client"

import { useState } from "react"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogSidebar } from "./blog-sidebar"
import { urlFor } from "@/lib/sanity/client"
import { useTranslation } from "react-i18next"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

interface Post {
  _id: string
  title: string
  title_es?: string
  slug: { current: string }
  publishedAt: string
  authorName: string
  categories: string[]
  mainImage: any
}

interface BlogListProps {
  posts: Post[]
  tags: string[]
}

export function BlogList({ posts, tags }: BlogListProps) {
  const { i18n } = useTranslation()
  const isSpanish = i18n.language.startsWith("es")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredPosts = posts.filter((post) => {
    const title = isSpanish && post.title_es ? post.title_es : post.title
    const safeTitle = title || ""
    const matchesSearch = safeTitle.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = selectedTag ? post.categories?.includes(selectedTag) : true
    return matchesSearch && matchesTag
  })

  // Featured post (most recent)
  const featuredPost = filteredPosts[0]
  const regularPosts = filteredPosts.slice(1)

  return (
    <div className="space-y-20">
      {/* Featured Post Hero */}
      {featuredPost && (
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-slate-950 to-slate-900 border border-white/5 group">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              {featuredPost.mainImage && (
                <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                  <Link href={`/blog/${featuredPost.slug?.current || '#'}`} className="block w-full h-full">
                    <ExportedImage
                      src={urlFor(featuredPost.mainImage).url()}
                      alt={isSpanish && featuredPost.title_es ? featuredPost.title_es : featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent lg:from-transparent lg:via-transparent lg:to-slate-950/80" />
                  </Link>
                </div>
              )}

              {/* Content Side */}
              <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white">
                <Badge className="bg-primary text-primary-foreground w-fit mb-6 px-4 py-1.5 text-sm font-bold">
                  <TrendingUp className="w-3 h-3 mr-2 inline" />
                  Featured Article
                </Badge>

                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  <Link href={`/blog/${featuredPost.slug?.current || '#'}`} className="hover:text-primary transition-colors">
                    {isSpanish && featuredPost.title_es ? featuredPost.title_es : featuredPost.title}
                  </Link>
                </h2>

                <div className="flex items-center gap-6 mb-8 text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{formatDate(featuredPost.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{featuredPost.authorName}</span>
                  </div>
                </div>

                {featuredPost.categories && featuredPost.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredPost.categories.map((cat, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                )}

                <Link
                  href={`/blog/${featuredPost.slug?.current || '#'}`}
                  className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 w-fit group/btn shadow-xl"
                >
                  Read Article
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Posts Grid */}
        <div className="lg:col-span-3">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {regularPosts.length > 0 ? (
              regularPosts.map((post, index) => {
                const title = isSpanish && post.title_es ? post.title_es : post.title
                const slug = post.slug?.current || '#'
                return (
                  <ScrollReveal key={post._id} delay={index * 80}>
                    <Link
                      href={slug !== '#' ? `/blog/${slug}` : '#'}
                      className={`block h-full ${slug === '#' ? 'cursor-not-allowed opacity-70' : ''}`}
                    >
                      <Card className="h-full hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col overflow-hidden group border-2 border-border/50 hover:border-primary/30 rounded-3xl">
                        {post.mainImage && (
                          <div className="relative h-56 w-full overflow-hidden">
                            <ExportedImage
                              src={urlFor(post.mainImage).url()}
                              alt={title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                            {/* Category Badge on Image */}
                            {post.categories && post.categories.length > 0 && (
                              <div className="absolute top-4 left-4">
                                <Badge className="bg-primary/90 backdrop-blur-md text-primary-foreground border-primary/20 font-bold">
                                  {post.categories[0]}
                                </Badge>
                              </div>
                            )}
                          </div>
                        )}

                        <CardHeader className="flex-1 p-6">
                          <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(post.publishedAt)}</span>
                            </div>
                          </div>

                          <CardTitle className="line-clamp-2 text-xl font-bold group-hover:text-primary transition-colors leading-tight mb-3">
                            {title}
                          </CardTitle>
                        </CardHeader>

                        <CardContent className="p-6 pt-0">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <User className="w-4 h-4" />
                              <span>{post.authorName}</span>
                            </div>
                            <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </ScrollReveal>
                )
              })
            ) : (
              <div className="col-span-full text-center py-20 text-muted-foreground bg-muted/30 rounded-3xl border-2 border-dashed border-border">
                <p className="text-xl font-bold mb-2">No posts found</p>
                <p className="text-sm mb-6">Try adjusting your search or filters</p>
                <button
                  onClick={() => { setSearchQuery(""); setSelectedTag(null); }}
                  className="text-primary hover:underline text-sm font-semibold"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <BlogSidebar
              tags={tags}
              showSearch={true}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedTag={selectedTag}
              onTagSelect={setSelectedTag}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
