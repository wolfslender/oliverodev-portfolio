"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Sparkles, MessageSquare } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useSiteData } from "@/hooks/use-site-data"

export function CTASection() {
  const { ctaSection } = useSiteData()
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradients/blobs */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl opacity-50 animate-pulse" />

        <ScrollReveal>
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
             {/* Grid pattern overlay */}
             <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
             
             {/* Decorative radial gradient inside card */}
             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 opacity-50 pointer-events-none" />

             <div className="relative z-10 space-y-8">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium mb-4">
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                 <span>{ctaSection.badge}</span>
               </div>
               
               <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
                 {ctaSection.titlePrefix} <br className="hidden md:block" />
                 <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">{ctaSection.titleHighlight}</span>
               </h2>
               
               <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-balance">
                 {ctaSection.description}
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                 <Button asChild size="lg" className="rounded-full text-lg h-14 px-8 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-500/25 w-full sm:w-auto transition-all hover:scale-105 duration-300">
                   <Link href="/contact">
                     {ctaSection.primaryButton} <MessageSquare className="ml-2 w-5 h-5" />
                   </Link>
                 </Button>
                 <Button asChild variant="outline" size="lg" className="rounded-full text-lg h-14 px-8 w-full sm:w-auto hover:bg-muted/50 transition-all hover:scale-105 duration-300 border-2">
                   <Link href="/work">
                     {ctaSection.secondaryButton} <ArrowRight className="ml-2 w-5 h-5" />
                   </Link>
                 </Button>
               </div>
            </div>
         </div>
       </ScrollReveal>
      </div>
    </section>
  )
}
