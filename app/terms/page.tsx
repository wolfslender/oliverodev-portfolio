import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for the developer portfolio. Rules and regulations for using this website.",
  alternates: { canonical: `${siteConfig.url}/terms/` },
}

import TermsContent from "@/components/pages/terms-content"

export default function TermsPage() {
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
              { "@type": "ListItem", position: 2, name: "Terms of Service", item: `${siteConfig.url}/terms/` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms of Service",
            description: "Rules and regulations for using this website.",
            url: `${siteConfig.url}/terms/`,
          }),
        }}
      />
      <TermsContent />
    </>
  )
}
