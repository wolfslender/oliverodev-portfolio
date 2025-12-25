"use client"

import { Card } from "@/components/ui/card"
import { Award, ExternalLink, Calendar } from "lucide-react"
import { useSiteData } from "@/hooks/use-site-data"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CertificationsSection() {
  const { certifications, certificationsPage } = useSiteData()
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {certificationsPage.titlePrefix}{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                {certificationsPage.titleHighlight}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {certificationsPage.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className={`relative p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 h-full overflow-hidden border-t-4 ${cert.color ? cert.color.replace('text-', 'border-') : 'border-blue-500'}`} style={{ '--cert-color': cert.color ? cert.color.replace('text-', 'var(--') : '#3b82f6' } as any}>
                {/* Decorative gradient background opacity on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${cert.bgColor?.replace('/10', '') || 'bg-blue-500'}`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${cert.bgColor || 'bg-blue-500/10'} group-hover:scale-110 group-hover:shadow-lg`}>
                      {cert.icon ? (
                        <cert.icon className={`w-8 h-8 ${cert.color || 'text-blue-500'}`} />
                      ) : (
                        <Award className="w-8 h-8 text-blue-500" />
                      )}
                    </div>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground p-2 hover:bg-muted rounded-full transition-all"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{cert.title}</h3>
                  <p className="text-muted-foreground font-medium mb-4">{cert.issuer}</p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-auto pt-4 border-t border-border/50">
                    <Calendar className="w-4 h-4" />
                    <span>{certificationsPage.issued} {cert.date}</span>
                  </div>

                  {cert.credentialId && (
                    <div className="mt-2">
                      <p className="text-xs text-muted-foreground/80 font-mono bg-muted/50 inline-block px-2 py-1 rounded">{certificationsPage.id} {cert.credentialId}</p>
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
