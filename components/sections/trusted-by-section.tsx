"use client"

import { useSiteData } from "@/hooks/use-site-data"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function TrustedBySection() {
  const { trustedBy } = useSiteData()

  const companies = [
    { name: "Cybernetips", logo: "/logos/logo_cybernetips.png", className: "invert" },
    { name: "Co-Active Training Institute", logo: "/logos/CTI_Logo_Primary-1-png.webp" },
    { name: "Departamento de Educación PR", logo: "/logos/DEPR-Logo-2025-1.svg" },
    { name: "AESAN", logo: "/logos/aesan-espanol-logo.svg" },
    { name: "CST Puerto Rico", logo: "/logos/cst-logo-white-2025.svg", className: "invert" },
    { name: "GovValue", logo: "/logos/GovValue-Logo.png", className: "invert" },
  ]

  return (
    <section className="py-12 border-b border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          {trustedBy.title}
        </p>

        <div className="relative flex overflow-hidden mask-gradient">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="mx-8 md:mx-16 flex items-center justify-center min-w-[100px] h-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <div className="relative h-10 w-32">
                   <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    sizes="(max-width: 768px) 100px, 150px"
                    loading="lazy"
                    className={cn(
                      "object-contain transition-all duration-300 dark:brightness-0 dark:invert",
                      company.className
                    )}
                    onError={(e) => {
                      // Fallback if image fails
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerText = company.name;
                        target.parentElement.className = "flex items-center justify-center text-sm font-bold text-muted-foreground whitespace-normal text-center leading-tight";
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
