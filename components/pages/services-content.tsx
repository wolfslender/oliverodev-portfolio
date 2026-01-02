"use client"

import { Button } from "@/components/ui/button"
import { useSiteData } from "@/hooks/use-site-data"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ProcessSection } from "@/components/sections/process-section"
import { ArrowRight, CheckCircle2, Projector } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function ServicesContent() {
  const { services, servicesPage, projects } = useSiteData()

  // Find a featured project for a "Mini Case Study" feel
  const getMiniCaseStudy = (serviceTitle: string) => {
    const sTitle = serviceTitle.toLowerCase()

    if (sTitle.includes("web development")) return projects.find(p => p.title.includes("Co-Active"))
    if (sTitle.includes("mvp launchpad")) return projects.find(p => p.title.includes("Cybernetips"))
    if (sTitle.includes("webflow migration")) return projects.find(p => p.title.includes("Truenorth"))
    if (sTitle.includes("technical partnership")) return projects.find(p => p.title.includes("GovValue"))
    if (sTitle.includes("security") || sTitle.includes("cloud")) return projects.find(p => p.title.includes("Departamento de Educación"))

    return projects.find(p => p.title.includes("Co-Active")) || projects[0]
  }

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      {/* Immersive Hero */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-500/10 to-transparent blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <ScrollReveal>
            <Badge variant="outline" className="px-4 py-1.5 rounded-full border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-6">
              Executive-Grade Engineering
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              Transforming Visions into <br />
              <span className="text-gradient">Market-Leading Assets</span>
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-balance">
              More than just code. We engineer strategic digital foundations that drive revenue, scale effortlessly, and provide a fortress-like security for your business.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Method Section - High Authority */}
      <ProcessSection />

      {/* Immersive Service Sections (Z-Pattern) */}
      <section className="py-24 space-y-32">
        {services.map((service, index) => {
          const isEven = index % 2 === 0
          const caseStudy = getMiniCaseStudy(service.title)

          return (
            <div key={index} className="px-4 sm:px-6 lg:px-8 relative">
              <div className={cn(
                "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                !isEven && "lg:flex-row-reverse"
              )}>
                {/* Content Side */}
                <ScrollReveal delay={isEven ? 0 : 200}>
                  <div className={cn("space-y-8", !isEven && "lg:order-2")}>
                    <div className="space-y-4">
                      <div className={cn("p-4 inline-flex rounded-2xl shadow-lg", service.bgColor)}>
                        <service.icon className={cn("w-10 h-10", service.color)} />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 group">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="font-medium text-foreground/80 leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg font-bold group shadow-xl hover:shadow-primary/20 transition-all">
                        <Link href="/contact">
                          Discuss Strategic Needs <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Visual/Social Proof Side */}
                <ScrollReveal delay={isEven ? 200 : 0}>
                  <div className={cn(
                    "relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden border border-border/50 group shadow-2xl",
                    !isEven && "lg:order-1"
                  )}>
                    {/* Background visual placeholder */}
                    <div className={cn("absolute inset-0 opacity-20", service.bgColor)} />
                    <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent z-10" />

                    {/* Floating Tech Stack */}
                    <div className="absolute top-8 left-8 flex flex-wrap gap-2 z-20">
                      {service.technologies?.map(tech => (
                        <Badge key={tech} variant="secondary" className="backdrop-blur-md bg-background/50 border-white/10 px-3 py-1 font-mono text-xs uppercase tracking-wider">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Integrated Case Study Bubble */}
                    {caseStudy && (
                      <div className="absolute bottom-8 right-8 left-8 p-6 bg-card/80 backdrop-blur-xl border border-white/10 rounded-3xl z-20 shadow-2xl translate-y-4 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Projector size={20} />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-widest text-primary">Proven Impact</span>
                        </div>
                        <h4 className="font-bold mb-1">{caseStudy.title}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-2 italic">
                          "{caseStudy.description}"
                        </p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          )
        })}
      </section>

      {/* Enhanced CTA Section - Final Strategic Close */}
      <section className="px-4 sm:px-6 lg:px-8 mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-[3rem] bg-slate-950 border border-white/5 p-12 md:p-24 text-center text-white shadow-3xl">
            {/* Animated background element */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />

            <div className="relative z-10 space-y-10">
              <ScrollReveal>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
                  Ready to Build your <br />
                  <span className="text-blue-400 italic font-serif">Digital Legacy?</span>
                </h2>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  We don't just accept projects. We form strategic partnerships with companies ready to dominate their market through superior engineering.
                </p>

                <div className="pt-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-slate-950 hover:bg-slate-200 shadow-2xl shadow-white/10 border-0 rounded-full h-16 px-12 text-xl font-black transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                  >
                    <Link href="/contact">
                      Request Strategic Consultation
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-slate-500 mt-8 font-medium italic">
                  Currently accepting 2 new high-impact projects for Q1 2026.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
