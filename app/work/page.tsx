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
          }),
        }}
      />
      <WorkContent />
    </>
  )
}
