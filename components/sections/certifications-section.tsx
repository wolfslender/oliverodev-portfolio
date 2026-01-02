"use client"

import { Card } from "@/components/ui/card"
import { Award, ExternalLink, Calendar, Sparkles, CheckCircle2 } from "lucide-react"
import { useSiteData } from "@/hooks/use-site-data"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"

export function CertificationsSection() {
  const { certifications, certificationsPage } = useSiteData()

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header - Premium */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <Badge variant="outline" className="px-4 py-1.5 rounded-full border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-6">
              <Sparkles className="w-3 h-3 mr-2 inline" />
              Continuous Excellence
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              {certificationsPage.titlePrefix}{" "}
              <span className="text-gradient">
                {certificationsPage.titleHighlight}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Committed to staying at the forefront of technology through continuous learning and industry-recognized credentials.
            </p>
          </div>
        </ScrollReveal>

        {/* Premium Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className={`group relative h-full`}>
                {/* Card with premium styling */}
                <div className={`relative p-8 bg-card rounded-3xl border-2 ${cert.color ? cert.color.replace('text-', 'border-') + '/20' : 'border-primary/20'} hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 h-full flex flex-col`}>
                  {/* Subtle gradient overlay */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${cert.bgColor?.replace('/10', '/5') || 'bg-primary/5'} rounded-3xl -z-10`} />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header with Icon and Link */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 rounded-2xl transition-all duration-300 ${cert.bgColor || 'bg-primary/10'} group-hover:scale-110 group-hover:shadow-xl`}>
                        {cert.icon ? (
                          <cert.icon className={`w-8 h-8 ${cert.color || 'text-primary'}`} />
                        ) : (
                          <Award className="w-8 h-8 text-primary" />
                        )}
                      </div>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary p-2.5 hover:bg-primary/10 rounded-full transition-all group/link"
                          aria-label="View credential"
                        >
                          <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                        </a>
                      )}
                    </div>

                    {/* Title and Issuer */}
                    <div className="flex-1 mb-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground font-semibold flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Footer with Date and ID */}
                    <div className="space-y-3 pt-4 border-t-2 border-border/50">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="font-medium">{certificationsPage.issued} {cert.date}</span>
                      </div>

                      {cert.credentialId && (
                        <div className="pt-2">
                          <p className="text-xs text-muted-foreground/80 font-mono bg-muted/50 px-3 py-2 rounded-lg border border-border/30">
                            {certificationsPage.id} {cert.credentialId}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Premium CTA or Additional Info */}
        <ScrollReveal delay={600}>
          <div className="mt-20 text-center p-10 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl border border-primary/10">
            <p className="text-lg text-muted-foreground italic">
              "Continuous learning isn't just a commitment—it's a competitive advantage that ensures every solution leverages the latest industry best practices."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
