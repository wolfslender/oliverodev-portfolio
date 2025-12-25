

import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  alternates: { canonical: `${siteConfig.url}/` },
}

import { HeroSection } from "@/components/sections/hero-section"
import { StatsSection } from "@/components/sections/stats-section"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { SectionDivider } from "@/components/section-divider"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      
      <SectionDivider variant="gradient" />
      <StatsSection />

      <SectionDivider variant="wave" />
      <FeaturedProjects />

      <SectionDivider variant="gradient" />
      <CTASection />
    </main>
  )
}
