"use client"

import { useState } from "react"
import { useSiteData } from "@/hooks/use-site-data"
import { SectionHeader } from "@/components/ui/section-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WorkContent() {
  const { projects, workPage } = useSiteData()
  const [filter, setFilter] = useState("all")

  const filters = [
    { id: "all", label: workPage.filters.all },
    { id: "fullstack", label: workPage.filters.fullstack },
    { id: "frontend", label: workPage.filters.frontend },
  ]

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter((project) => project.category === filter)

  return (
    <div className="pt-24 pb-20">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title={workPage.title}
            description={workPage.description}
          />
          
          {/* Filters */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex rounded-full border border-border bg-background/50 p-1 backdrop-blur-sm">
              {filters.map((filterOption) => (
                <button
                  key={filterOption.id}
                  onClick={() => setFilter(filterOption.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === filterOption.id
                      ? "bg-foreground text-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {filterOption.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 100} className={project.size === "large" ? "md:col-span-2 row-span-2" : ""}>
                {/* @ts-ignore - size is strictly typed in component but data might be loose */}
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
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
                {workPage.cta.title} <br className="hidden md:block" />
                <span className="text-blue-200">{workPage.cta.highlight}</span>
              </h2>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                {workPage.cta.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-500/25 border-0 rounded-full h-14 px-8 text-lg font-semibold hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  <Link href="/contact">
                    {workPage.cta.button} <ArrowRight className="w-5 h-5 ml-2" />
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
