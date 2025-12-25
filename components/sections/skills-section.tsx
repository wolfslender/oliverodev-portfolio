"use client"

import { Card } from "@/components/ui/card"
import { useSiteData } from "@/hooks/use-site-data"
import { ScrollReveal } from "@/components/scroll-reveal"

export function SkillsSection() {
  const { skills, skillsSection } = useSiteData()
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">{skillsSection.title}</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto text-balance">
            {skillsSection.description}
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => {
            const Icon = category.icon
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className={`relative p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 h-full overflow-hidden border-t-4 ${category.color.replace('text-', 'border-')}`} style={{ '--skill-color': category.color ? category.color.replace('text-', 'var(--') : '#3b82f6' } as any}>
                  {/* Decorative gradient background opacity on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${category.bgColor?.replace('/10', '') || 'bg-blue-500'}`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 ${category.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                        <Icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1.5 text-sm font-medium rounded-full border border-transparent transition-all duration-300
                            bg-secondary/50 text-secondary-foreground 
                            group-hover:bg-background group-hover:border-[color:var(--skill-color)] group-hover:text-foreground group-hover:shadow-sm`}
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
      </div>
    </section>
  )
}
