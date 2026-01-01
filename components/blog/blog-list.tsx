"use client"

import { useState } from "react"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogSidebar } from "./blog-sidebar"
import { urlFor } from "@/lib/sanity/client"
import { useTranslation } from "react-i18next"

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

  console.log('BlogList received posts:', posts)

  const filteredPosts = posts.filter((post) => {
    const title = isSpanish && post.title_es ? post.title_es : post.title
    const safeTitle = title || ""
    const matchesSearch = safeTitle.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = selectedTag ? post.categories?.includes(selectedTag) : true
    return matchesSearch && matchesTag
  })

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => {
                 const title = isSpanish && post.title_es ? post.title_es : post.title
                 return (
                <div
                  key={post._id}
                  className="animate-in fade-in zoom-in duration-300"
                >
                  <Link href={`/blog/${post.slug.current}`}>
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden group border-muted/60">
                      {post.mainImage && (
                        <div className="relative h-48 w-full overflow-hidden">
                          <ExportedImage
                            src={urlFor(post.mainImage).url()}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">
                            {formatDate(post.publishedAt)}
                          </span>
                          {post.categories && post.categories.length > 0 && (
                            <span className="text-xs bg-secondary/80 px-2 py-1 rounded-full backdrop-blur-sm">
                              {post.categories[0]}
                            </span>
                          )}
                        </div>
                        <CardTitle className="line-clamp-2 text-lg group-hover:text-primary transition-colors">{title}</CardTitle>
                      </CardHeader>
                      <CardContent className="mt-auto">
                        <p className="text-sm text-muted-foreground">
                          {isSpanish ? "Por" : "By"} {post.authorName}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              )})
            ) : (
              <div 
                className="col-span-full text-center py-16 text-muted-foreground bg-muted/30 rounded-xl border border-dashed animate-in fade-in"
              >
                <p className="text-lg font-medium">No posts found</p>
                <p className="text-sm mt-1">Try adjusting your search or filters</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedTag(null); }}
                  className="mt-4 text-primary hover:underline text-sm font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
        </div>
      </div>

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
  )
}
