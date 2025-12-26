"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogSidebar } from "./blog-sidebar"
import { urlFor } from "@/lib/sanity/client"

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

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug.current}`}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden group">
                  {post.mainImage && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">
                        {formatDate(post.publishedAt)}
                      </span>
                      {post.categories && post.categories.length > 0 && (
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                          {post.categories[0]}
                        </span>
                      )}
                    </div>
                    <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <p className="text-sm text-muted-foreground">
                      By {post.authorName}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No posts found matching your search.
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
          />
        </div>
      </div>
    </div>
  )
}
