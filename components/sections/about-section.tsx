"use client"

import { Briefcase, GraduationCap, TrendingUp, Users, Shield, Zap, Globe, CheckCircle2, Award, Sparkles } from "lucide-react"
import { useSiteData } from "@/hooks/use-site-data"
import { SectionHeader } from "@/components/ui/section-header"
import { Timeline } from "@/components/ui/timeline"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
      <div className="max-w-7xl mx-auto">
        {/* Hero Section: Strategic Positioning */}
        <div className="mb-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-b from-primary/5 to-transparent blur-3xl -z-10" />

          <ScrollReveal>
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <Badge variant="outline" className="px-4 py-1.5 rounded-full border-primary/20 bg-primary/5 text-primary text-sm font-semibold">
                <Sparkles className="w-3 h-3 mr-2 inline" />
                Senior Fullstack Engineer
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                Turning Complex Business Challenges into{" "}
                <span className="text-gradient">Scalable Digital Assets</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                6+ years engineering high-performance solutions for government, enterprise, and global platforms serving 150,000+ users worldwide.
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
                  <div className="text-3xl md:text-4xl font-black text-primary mb-2">150K+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Users Served</div>
                </div>
                <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
                  <div className="text-3xl md:text-4xl font-black text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects Delivered</div>
                </div>
                <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
                  <div className="text-3xl md:text-4xl font-black text-primary mb-2">4</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Industries</div>
                </div>
                <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
                  <div className="text-3xl md:text-4xl font-black text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Uptime</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Why Work With Me Section */}
        <div className="mb-32">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Why <span className="text-gradient">Work With Me</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                I don't just write code—I architect solutions that drive revenue, scale effortlessly, and provide fortress-like security.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="p-8 bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group">
                <div className="p-4 bg-blue-500/10 rounded-2xl w-fit mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <TrendingUp className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Business-First Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every line of code is written with your bottom line in mind. I focus on solutions that increase conversions, reduce costs, and accelerate time-to-market.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="p-8 bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group">
                <div className="p-4 bg-emerald-500/10 rounded-2xl w-fit mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Proven Track Record</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From government contracts to global platforms serving 150K+ users, I've delivered zero-downtime migrations and enterprise-grade solutions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="p-8 bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group">
                <div className="p-4 bg-purple-500/10 rounded-2xl w-fit mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Strategic Partnership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I act as your fractional CTO and technical advisor, providing ongoing strategic guidance to ensure your digital presence stays ahead of the curve.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* The Olivero Advantage */}
        <div className="mb-32 bg-muted/20 rounded-[3rem] p-8 md:p-16">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge variant="outline" className="px-4 py-1.5 rounded-full border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-4">
                My Methodology
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                The <span className="text-gradient">Olivero Advantage</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A proven, repeatable framework that guarantees results—from discovery to continuous growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Strategic Discovery", desc: "Deep-dive into your business goals and technical landscape", icon: Globe },
              { step: 2, title: "Precision Strategy", desc: "Blueprint for scalable, secure solutions aligned with your vision", icon: Award },
              { step: 3, title: "Elite Engineering", desc: "Clean, modular code built for performance and maintainability", icon: Zap },
              { step: 4, title: "Growth & Evolution", desc: "Continuous optimization and feature scaling post-launch", icon: TrendingUp },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">
                      0{item.step}
                    </span>
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
                      <item.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Experience & Education Timeline */}
        <div className="mb-32">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Professional <span className="text-gradient">Journey</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            <Timeline
              title={about.experienceTitle}
              icon={Briefcase}
              items={experienceItems}
              color="blue"
              delay={100}
            />
            <Timeline
              title={about.educationTitle}
              icon={GraduationCap}
              items={educationItems}
              color="cyan"
              delay={200}
            />
          </div>
        </div>

        {/* Soft Skills - Reimagined */}
        <div>
          <ScrollReveal>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Beyond <span className="text-gradient">Technical Excellence</span>
              </h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The soft skills that transform good developers into exceptional strategic partners.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {softSkills.map((skill, index) => (
              <ScrollReveal key={skill.label} delay={index * 50}>
                <div className="group flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-b from-primary to-primary/50" />

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="p-4 rounded-full bg-primary/5 text-primary mb-4 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <span className="font-semibold text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
                      {skill.label}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
