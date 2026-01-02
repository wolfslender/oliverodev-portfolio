

import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import { HeroSection } from "@/components/sections/hero-section"
import { TrustedBySection } from "@/components/sections/trusted-by-section"
import { SectionDivider } from "@/components/section-divider"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import dynamic from 'next/dynamic'

// Dynamically import heavy sections below the fold
const StatsSection = dynamic(() => import("@/components/sections/stats-section").then(mod => mod.StatsSection), {
  loading: () => <div className="h-96" />, // Placeholder
})
const FeaturedProjects = dynamic(() => import("@/components/sections/featured-projects").then(mod => mod.FeaturedProjects), {
  loading: () => <div className="h-screen" />,
})
const CTASection = dynamic(() => import("@/components/sections/cta-section").then(mod => mod.CTASection))

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  alternates: { canonical: `${siteConfig.url}/` },
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TrustedBySection />

      <SectionDivider variant="gradient" />
      <StatsSection />

      <SectionDivider variant="wave" />
      <FeaturedProjects />

      <TestimonialsSection />

      <SectionDivider variant="gradient" />
      <CTASection />
    </main>
  )
}
