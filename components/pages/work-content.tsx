"use client"

import { useState } from "react"
import { useSiteData } from "@/hooks/use-site-data"
import { SectionHeader } from "@/components/ui/section-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ProjectCard } from "@/components/project-card"
import { FeaturedCaseStudy } from "@/components/sections/featured-case-study"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function WorkContent() {
  const { projects, workPage } = useSiteData()
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [industryFilter, setIndustryFilter] = useState("all")

  const categoryFilters = [
    { id: "all", label: workPage.filters.all },
    { id: "fullstack", label: workPage.filters.fullstack },
    { id: "frontend", label: workPage.filters.frontend },
  ]

  const industryFilters = [
    { id: "all", label: "All Industries" },
    { id: "Government", label: "Government" },
    { id: "Enterprise", label: "Enterprise" },
    { id: "Cybersecurity", label: "Cybersecurity" },
  ]

  // Find the featured case study (Co-Active)
  const featuredProject = projects.find(p => p.title.includes("Co-Active"))

  // Filter projects
  const filteredProjects = projects
    .filter(p => p.title !== featuredProject?.title) // Exclude featured from grid
    .filter(p => categoryFilter === "all" || p.category === categoryFilter)
    .filter(p => industryFilter === "all" || (p as any).industry === industryFilter)

  return (
    <div className="pt-24 pb-20">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title={workPage.title}
            description={workPage.description}
          />
        </div>
      </section>

      {/* Featured Case Study Hero */}
      {featuredProject && <FeaturedCaseStudy project={featuredProject as any} />}

      {/* Premium Divider */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Filters Section - Premium Redesign */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 space-y-4">
              <Badge variant="outline" className="px-4 py-1.5 rounded-full border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-4">
                <Sparkles className="w-3 h-3 mr-2 inline" />
                Proven Track Record
              </Badge>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                More <span className="text-gradient">Success Stories</span>
              </h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                A curated selection of high-impact projects across industries, each delivering measurable business value.
              </p>
            </div>
          </ScrollReveal>

          {/* Category Filters - Enhanced */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-2xl border-2 border-border/50 bg-card/50 backdrop-blur-sm p-1.5 shadow-lg">
              {categoryFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setCategoryFilter(filter.id)}
                  className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${categoryFilter === filter.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Industry Filters - Enhanced */}
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl">
              {industryFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setIndustryFilter(filter.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border-2 ${industryFilter === filter.id
                    ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105"
                    : "bg-background/80 backdrop-blur-sm text-muted-foreground border-border/50 hover:border-primary/50 hover:text-foreground hover:scale-105"
                    }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid - Premium Layout */}
      <section className="px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ScrollReveal
                  key={index}
                  delay={index * 50}
                  className={project.size === "large" ? "lg:col-span-2" : ""}
                >
                  {/* @ts-ignore - size is strictly typed in component but data might be loose */}
                  <ProjectCard {...project} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Sparkles className="w-8 h-8 text-muted-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-2">No projects found</h4>
              <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section - Premium Redesign */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[3rem] bg-slate-950 border border-white/5 p-12 md:p-20 text-center text-white shadow-3xl">
            {/* Animated background elements */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />

            <div className="relative z-10 space-y-10">
              <ScrollReveal>
                <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-md px-4 py-1.5 text-sm font-semibold mb-6">
                  Ready to Scale?
                </Badge>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
                  {workPage.cta.title} <br />
                  <span className="text-blue-400 italic font-serif">{workPage.cta.highlight}</span>
                </h2>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  {workPage.cta.description}
                </p>

                <div className="pt-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-slate-950 hover:bg-slate-200 shadow-2xl shadow-white/10 border-0 rounded-full h-16 px-12 text-xl font-black transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                  >
                    <Link href="/contact">
                      {workPage.cta.button} <ArrowRight className="w-6 h-6 ml-2" />
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
