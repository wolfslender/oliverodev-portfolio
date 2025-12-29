

import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to start your project. Email, LinkedIn, GitHub, and WhatsApp available.",
  alternates: { canonical: `${siteConfig.url}/contact/` },
}

import { ContactSection } from "@/components/sections/contact-section"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { Suspense } from "react"

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
              { "@type": "ListItem", position: 2, name: "Contact", item: `${siteConfig.url}/contact/` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact",
            description: "Get in touch to start your project. Email, LinkedIn, GitHub, and WhatsApp available.",
            url: `${siteConfig.url}/contact/`,
          }),
        }}
      />
      <Suspense fallback={<div className="min-h-[50vh]" />}>
        <ContactSection />
      </Suspense>
      <FloatingWhatsApp />
    </div>
  )
}
