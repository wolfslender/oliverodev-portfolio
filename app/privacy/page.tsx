import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the developer portfolio. Learn how your data is handled and protected.",
  alternates: { canonical: `${siteConfig.url}/privacy/` },
}

import PrivacyContent from "@/components/pages/privacy-content"

export default function PrivacyPage() {
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${siteConfig.url}/privacy/` },
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
            name: "Privacy Policy",
            description: "How we handle your data and privacy.",
            url: `${siteConfig.url}/privacy/`,
          }),
        }}
      />
      <PrivacyContent />
    </>
  )
}
