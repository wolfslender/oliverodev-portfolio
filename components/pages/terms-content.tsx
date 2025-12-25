"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { useSiteData } from "@/hooks/use-site-data"

export default function TermsContent() {
  const { termsPage } = useSiteData()
  const { sections } = termsPage
  
  // Guard against missing sections during initial load or error states
  if (!sections || !sections.agreement) return null

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title={termsPage.title} description={termsPage.description} />

        <div className="mt-12 space-y-8 text-muted-foreground">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{sections.agreement.title}</h2>
            <p>{sections.agreement.content}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{sections.ip.title}</h2>
            <p>{sections.ip.content}</p>
            {sections.ip.license && <p>{sections.ip.license}</p>}
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{sections.restrictions.title}</h2>
            <p>{sections.restrictions.content}</p>
            {sections.restrictions.items && (
              <ul className="list-disc pl-6 space-y-2">
                {sections.restrictions.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{sections.disclaimer.title}</h2>
            <p>{sections.disclaimer.content}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{sections.liability.title}</h2>
            <p>{sections.liability.content}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{sections.governing.title}</h2>
            <p>{sections.governing.content}</p>
          </section>

          <p className="text-sm pt-8 border-t border-border">{termsPage.lastUpdated} {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}
