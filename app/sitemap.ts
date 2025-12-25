import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/work',
    '/contact',
    '/privacy',
    '/terms',
  ]

  const currentDate = new Date().toISOString()

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
