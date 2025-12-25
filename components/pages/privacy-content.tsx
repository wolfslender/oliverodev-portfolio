"use client"

import { siteConfig } from "@/lib/config"
import { SectionHeader } from "@/components/ui/section-header"
import { useSiteData } from "@/hooks/use-site-data"

export default function PrivacyContent() {
  const { privacyPage } = useSiteData()
  const { sections } = privacyPage
  
  // Guard against missing sections during initial load or error states
  if (!sections || !sections.introduction) return null

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title={privacyPage.title} description={privacyPage.description} />

        <div className="mt-12 space-y-8 text-muted-foreground">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{sections.introduction.title}</h2>
            <p>{sections.introduction.content}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{sections.information.title}</h2>
            <p>{sections.information.content}</p>
            {sections.information.items && (
              <ul className="list-disc pl-6 space-y-2">
                {sections.information.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{sections.usage.title}</h2>
            <p>{sections.usage.content}</p>
            {sections.usage.items && (
              <ul className="list-disc pl-6 space-y-2">
                {sections.usage.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{sections.security.title}</h2>
            <p>{sections.security.content}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{sections.links.title}</h2>
            <p>{sections.links.content}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{sections.contact.title}</h2>
            <p>
              {sections.contact.content}{" "}
              <a href={`mailto:${siteConfig.links.email}`} className="text-primary hover:underline">
                {siteConfig.links.email}
              </a>
            </p>
          </section>

          <p className="text-sm pt-8 border-t border-border">{privacyPage.lastUpdated} {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}
