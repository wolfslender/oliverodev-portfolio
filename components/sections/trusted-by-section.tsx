"use client"

import { useSiteData } from "@/hooks/use-site-data"
import { motion } from "framer-motion"
import Image from "next/image"

export function TrustedBySection() {
  // Logos de empresas (placeholders profesionales para el efecto visual)
  const companies = [
    { name: "TechFlow", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { name: "Vercel", logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
    { name: "Microsoft", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" },
    { name: "IBM", logo: "https://cdn.worldvectorlogo.com/logos/ibm.svg" },
    { name: "Google", logo: "https://cdn.worldvectorlogo.com/logos/google-1-1.svg" },
    { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" },
  ]

  return (
    <section className="py-12 border-b border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          Trusted by innovative companies
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-8 w-24 md:h-10 md:w-32"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain dark:invert"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
