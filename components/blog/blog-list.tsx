"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogSidebar } from "./blog-sidebar"
import { urlFor } from "@/lib/sanity/client"
import { motion, AnimatePresence } from "framer-motion"

interface Post {
  _id: string
  title: string
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
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = selectedTag ? post.categories?.includes(selectedTag) : true
    return matchesSearch && matchesTag
  })

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.div
                  key={post._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link href={`/blog/${post.slug.current}`}>
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden group border-muted/60">
                      {post.mainImage && (
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
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
                        <CardTitle className="line-clamp-2 text-lg group-hover:text-primary transition-colors">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="mt-auto">
                        <p className="text-sm text-muted-foreground">
                          By {post.authorName}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-16 text-muted-foreground bg-muted/30 rounded-xl border border-dashed"
              >
                <p className="text-lg font-medium">No posts found</p>
                <p className="text-sm mt-1">Try adjusting your search or filters</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedTag(null); }}
                  className="mt-4 text-primary hover:underline text-sm font-medium"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
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
