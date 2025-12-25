

import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "About",
  description: "Experience, skills, and certifications. Frontend developer focused on SEO, performance and security.",
  alternates: { canonical: `${siteConfig.url}/about/` },
}

import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { SectionDivider } from "@/components/section-divider"

export default function AboutPage() {
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
              { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about/` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              name: siteConfig.author,
              url: siteConfig.url,
              image: `${siteConfig.url}/images/avatar.jpg`,
              sameAs: [
                siteConfig.links.github,
                siteConfig.links.linkedin,
                siteConfig.links.instagram,
              ],
              jobTitle: "Full Stack Developer",
              description: siteConfig.description,
            },
          }),
        }}
      />
      <AboutSection />
      <SectionDivider variant="gradient" />
      <SkillsSection />
      <SectionDivider variant="wave" />
      <CertificationsSection />
    </div>
  )
}
