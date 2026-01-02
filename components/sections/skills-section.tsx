"use client"

import { Card } from "@/components/ui/card"
import { useSiteData } from "@/hooks/use-site-data"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Zap, Shield, Users, Globe, Award } from "lucide-react"

export function SkillsSection() {
  const { skills, skillsSection } = useSiteData()

  // Transform skills into outcome-focused categories
  const outcomeCategories = [
    {
      title: "Performance Engineering",
      icon: Zap,
      outcome: "40% faster load times = Higher conversions & better SEO",
      impact: "Optimized platforms serving 150K+ concurrent users",
      skills: ["Next.js", "React", "Performance Optimization", "CDN Strategy"],
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      title: "Scalable Architecture",
      icon: TrendingUp,
      outcome: "Built to handle exponential growth without breaking",
      impact: "Zero-downtime deployments for mission-critical systems",
      skills: ["Microservices", "Cloud Infrastructure", "Docker", "CI/CD"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      outcome: "Government-grade security for enterprise clients",
      impact: "WCAG 2.1 AA compliance & data protection standards",
      skills: ["Azure", "AWS", "Security Audits", "Accessibility"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "Full-Stack Mastery",
      icon: Globe,
      outcome: "End-to-end ownership from database to UI",
      impact: "Seamless integration across the entire tech stack",
      skills: ["TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      title: "CMS & Content Strategy",
      icon: Users,
      outcome: "Empowering non-technical teams to manage content",
      impact: "Custom WordPress & Webflow solutions for enterprise",
      skills: ["WordPress", "Webflow", "Sanity", "Headless CMS"],
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      title: "SEO & Analytics",
      icon: Award,
      outcome: "Data-driven decisions that increase organic traffic",
      impact: "Strategic SEO implementations for global reach",
      skills: ["Technical SEO", "Google Analytics", "Schema Markup", "Core Web Vitals"],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-1.5 rounded-full border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-4">
              Technical Arsenal
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Skills That Drive <span className="text-gradient">Business Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto text-balance leading-relaxed">
              I don't just know technologies—I leverage them strategically to solve complex business challenges and deliver measurable ROI.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomeCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className={`relative p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 h-full overflow-hidden border-t-4 ${category.color.replace('text-', 'border-')}`}>
                  {/* Decorative gradient background */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${category.bgColor.replace('/10', '')}`} />

                  <div className="relative z-10">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-4 ${category.bgColor} rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className={`w-7 h-7 ${category.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2">{category.title}</h3>
                      </div>
                    </div>

                    {/* Outcome Statement */}
                    <div className="mb-4 p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                      <p className="text-sm font-bold text-primary mb-1">Business Outcome:</p>
                      <p className="text-sm text-foreground leading-relaxed">{category.outcome}</p>
                    </div>

                    {/* Impact Statement */}
                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground italic leading-relaxed">
                        "{category.impact}"
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1.5 text-xs font-semibold rounded-full bg-secondary/50 text-secondary-foreground group-hover:bg-background group-hover:border group-hover:border-primary/30 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Additional Tech Stack (comprehensive list) */}
        <ScrollReveal delay={600}>
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-8">Complete Technical Toolkit</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {skills.flatMap(cat => cat.skills).map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
