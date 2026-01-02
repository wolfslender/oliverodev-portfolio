"use client"

import { useSiteData } from "@/hooks/use-site-data"
import ExportedImage from "next-image-export-optimizer"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/scroll-reveal"

export function TrustedBySection() {
  const { trustedBy } = useSiteData()

  const partners = [
    {
      name: "Cybernetips",
      logo: "/logos/logo_cybernetips.png",
      industry: "Cybersecurity",
      impact: "Incident Response Leader"
    },
    {
      name: "Co-Active",
      logo: "/logos/CTI_Logo_Primary-1-png.webp",
      industry: "Global EdTech",
      impact: "150K+ Active Users"
    },
    {
      name: "Truenorth",
      logo: "https://cdn.prod.website-files.com/6554c27774f285304d0c74c3/6554c44eb82caa55fb9e3cae_LOGO-TN-OFICIAL.png",
      industry: "Enterprise Solutions",
      impact: "Corporate Migration"
    },
    {
      name: "Gov PR",
      logo: "/logos/DEPR-Logo-2025-1.svg",
      industry: "Government",
      impact: "Public Infrastructure"
    },
    {
      name: "AESAN",
      logo: "/logos/aesan-espanol-logo.svg",
      industry: "Public Health",
      impact: "Compliance & Safety"
    },
    {
      name: "CST",
      logo: "/logos/cst-logo-white-2025.svg",
      industry: "GovTech",
      impact: "Strategic Development"
    },
  ]

  return (
    <section className="py-24 border-y border-border/50 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-primary">
              Strategic Partnerships
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted by market leaders to engineer their most critical digital assets.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-border/50 rounded-[3rem] overflow-hidden bg-background shadow-2xl">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={cn(
                "group relative p-8 flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:bg-slate-50 dark:hover:bg-slate-900/50 border-r border-b border-border/50 last:border-r-0 lg:[&:nth-child(6)]:border-r-0 lg:[&:nth-child(n+1)]:border-b-0",
                index % 6 === 5 && "border-r-0"
              )}
            >
              <div className="relative h-12 w-full max-w-[120px] transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100">
                <ExportedImage
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain dark:brightness-0 dark:invert"
                />
              </div>

              <div className="text-center space-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary">
                  {partner.industry}
                </p>
                <p className="text-[10px] text-muted-foreground font-medium">
                  {partner.impact}
                </p>
              </div>

              {/* Hover highlight line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
