import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'
import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'

export const revalidate = 3600 // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '',
    '/about',
    '/services',
    '/work',
    '/contact',
    '/privacy',
    '/terms',
    '/blog',
  ]

  const currentDate = new Date().toISOString()

  const staticEntries = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Fetch blog posts
  const query = groq`*[_type == "post"] {
    "slug": slug.current,
    publishedAt,
    _updatedAt
  }`

  let blogEntries: MetadataRoute.Sitemap = []

  try {
    // Only attempt to fetch if project ID is available to avoid build errors
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      const posts = await client.fetch(query)
      blogEntries = posts.map((post: any) => ({
        url: `${siteConfig.url}/blog/${post.slug}`,
        lastModified: post._updatedAt || post.publishedAt || currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  return [...staticEntries, ...blogEntries]
}
