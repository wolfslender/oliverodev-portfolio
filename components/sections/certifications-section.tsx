"use client"

import { Card } from "@/components/ui/card"
import { Award, ExternalLink, Calendar, Sparkles } from "lucide-react"
import { useSiteData } from "@/hooks/use-site-data"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"

export function CertificationsSection() {
  const { certifications, certificationsPage } = useSiteData()
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Enhanced */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-1.5 rounded-full border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-4">
              <Sparkles className="w-3 h-3 mr-2 inline" />
              Continuous Excellence
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {certificationsPage.titlePrefix}{" "}
              <span className="text-gradient">
                {certificationsPage.titleHighlight}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Committed to staying ahead of the curve through continuous learning and industry-recognized certifications.
            </p>
          </div>
        </ScrollReveal>

        {/* Certifications Grid - Enhanced */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className={`relative p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 h-full overflow-hidden border-t-4 ${cert.color ? cert.color.replace('text-', 'border-') : 'border-primary'}`}>
                {/* Decorative gradient background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${cert.bgColor?.replace('/10', '') || 'bg-primary'}`} />

                <div className="relative z-10">
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
                      >
                        <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">{cert.title}</h3>
                  <p className="text-muted-foreground font-semibold mb-6">{cert.issuer}</p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t border-border/50">
                    <Calendar className="w-4 h-4" />
                    <span>{certificationsPage.issued} {cert.date}</span>
                  </div>

                  {cert.credentialId && (
                    <div className="mt-3">
                      <p className="text-xs text-muted-foreground/80 font-mono bg-muted/50 inline-block px-3 py-1.5 rounded-lg">
                        {certificationsPage.id} {cert.credentialId}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
