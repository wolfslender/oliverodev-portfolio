import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Work",
  description: "Featured projects and case studies. Web development portfolio showcasing React, Next.js, and Full Stack applications.",
  alternates: { canonical: `${siteConfig.url}/work/` },
}

import WorkContent from "@/components/pages/work-content"

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
              { "@type": "ListItem", position: 2, name: "Work", item: `${siteConfig.url}/work/` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Portfolio Projects",
            description: "A selection of my most recent and significant work, showcasing my expertise in building scalable web applications.",
            url: `${siteConfig.url}/work/`,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "CreativeWork",
                  position: 1,
                  name: "Global Leadership Platform",
                  description: "Fullstack development for a global leadership platform serving 150k+ professionals.",
                  creator: { "@type": "Person", name: siteConfig.author }
                },
                {
                  "@type": "CreativeWork",
                  position: 2,
                  name: "Puerto Rico Government Portal",
                  description: "Digital transformation for Puerto Rico's government portal. Achieved 99.9% uptime and WCAG 2.1 AA compliance.",
                  creator: { "@type": "Person", name: siteConfig.author }
                },
                {
                  "@type": "CreativeWork",
                  position: 3,
                  name: "Traffic Safety Platform",
                  description: "Traffic safety platform that processed 50k+ incident reports. Integrated real-time mapping systems.",
                  creator: { "@type": "Person", name: siteConfig.author }
                }
              ]
            }
          }),
        }}
      />
      <WorkContent />
    </>
  )
}
