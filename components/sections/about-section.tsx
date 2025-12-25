"use client"

import { Briefcase, GraduationCap } from "lucide-react"
import { useSiteData } from "@/hooks/use-site-data"
import { SectionHeader } from "@/components/ui/section-header"
import { Timeline } from "@/components/ui/timeline"
import { motion } from "framer-motion"

export function AboutSection() {
  const { experience, education, softSkills, about } = useSiteData()
  
  const experienceItems = experience.map((item) => ({
    title: item.position,
    subtitle: item.company,
    period: item.period,
    description: item.description,
  }))

  const educationItems = education.map((item) => ({
    title: item.degree,
    subtitle: item.school,
    period: item.period,
    description: item.description,
  }))

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title={about.title}
          description={about.description}
        />

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Experience */}
          <Timeline
            title={about.experienceTitle}
            icon={Briefcase}
            items={experienceItems}
            color="blue"
            delay={100}
          />

          {/* Education */}
          <Timeline
            title={about.educationTitle}
            icon={GraduationCap}
            items={educationItems}
            color="cyan"
            delay={200}
          />
        </div>

        {/* Soft Skills */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
            {about.softSkillsTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center p-6 bg-card backdrop-blur-sm border border-border/50 rounded-2xl border-t-4 border-t-transparent hover:border-t-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative gradient background opacity on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-b from-blue-500 to-cyan-500" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="p-4 rounded-full bg-blue-500/5 text-blue-500 mb-4 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
