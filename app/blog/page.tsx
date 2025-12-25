import { client } from "@/lib/sanity/client"
import { groq } from "next-sanity"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Query to get posts
const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    "authorName": author->name,
    "categories": categories[]->title,
    mainImage
  }
`

export const metadata = {
  title: "Blog - OliveroDev",
  description: "Insights on Web Development, SEO, and Tech.",
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

  const posts = await client.fetch(postsQuery)

  return (
    <div className="container py-24">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Thoughts, tutorials, and insights on frontend development, SEO, and building digital products.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 ? (
          posts.map((post: any) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">
                      {formatDate(post.publishedAt)}
                    </span>
                    {post.categories && (
                      <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                        {post.categories[0]}
                      </span>
                    )}
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    By {post.authorName}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-muted-foreground">
            No posts found yet. Check back soon!
          </div>
        )}
      </div>
    </div>
  )
}
