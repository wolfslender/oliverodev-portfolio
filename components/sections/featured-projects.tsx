"use client"

import { useSiteData } from "@/hooks/use-site-data"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FeaturedProjects() {
  const { projects, featuredProjectsSection } = useSiteData()
  // Get the first 3 featured projects
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>{featuredProjectsSection.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                {featuredProjectsSection.titlePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">{featuredProjectsSection.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                {featuredProjectsSection.description}
              </p>
            </div>
            
            <Button asChild variant="ghost" className="group text-lg">
              <Link href="/work">
                {featuredProjectsSection.viewAll} 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[400px]">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <ProjectCard 
                {...project} 
                // Force the first item to be large (full width in a 2-col grid)
                // and the others to be medium (half width)
                size={index === 0 ? "large" : "medium"} 
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
