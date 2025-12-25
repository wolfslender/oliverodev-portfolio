"use client"

import { Button } from "@/components/ui/button"
import { useSiteData } from "@/hooks/use-site-data"
import { SectionHeader } from "@/components/ui/section-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ServiceCard } from "@/components/service-card"
import { ArrowRight, Code, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function ServicesContent() {
  const { services, servicesPage } = useSiteData()
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title={servicesPage.hero.title}
            description={servicesPage.hero.description}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-32 bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{servicesPage.methodology.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {servicesPage.methodology.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="group h-full p-8 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl border-t-4 border-t-transparent hover:border-t-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden text-center">
                {/* Decorative background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-b from-blue-500 to-transparent" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Code className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">{servicesPage.methodology.pillars.cleanArch.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {servicesPage.methodology.pillars.cleanArch.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="group h-full p-8 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl border-t-4 border-t-transparent hover:border-t-yellow-500 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden text-center">
                {/* Decorative background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-b from-yellow-500 to-transparent" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-yellow-500 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-500 transition-colors">{servicesPage.methodology.pillars.performance.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {servicesPage.methodology.pillars.performance.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="group h-full p-8 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl border-t-4 border-t-transparent hover:border-t-green-500 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden text-center">
                {/* Decorative background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-b from-green-500 to-transparent" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-green-500 transition-colors">{servicesPage.methodology.pillars.security.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {servicesPage.methodology.pillars.security.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-8 md:p-16 text-center text-white shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                {servicesPage.cta.title}
              </h2>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                {servicesPage.cta.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-500/25 border-0 rounded-full h-14 px-8 text-lg font-semibold hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  <Link href="/contact">
                    {servicesPage.cta.button} <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
