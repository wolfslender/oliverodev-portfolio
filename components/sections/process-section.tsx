"use client"

import { siteConfig } from "@/lib/config"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Check } from "lucide-react"

export function ProcessSection() {
    const { agencyMethodology } = siteConfig

    return (
        <section className="py-24 px-4 bg-muted/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            The <span className="text-gradient">Olivero Method</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            A high-precision engineering framework designed to transform complex business challenges into scalable digital assets.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0 opacity-30" />

                    {agencyMethodology.map((step, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="relative group p-8 bg-card border border-border/50 rounded-[2.5rem] hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 z-10 h-full flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                                        0{step.step}
                                    </span>
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <Check size={24} />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                    {step.description}
                                </p>

                                <div className="space-y-2 pt-4 border-t border-border/50">
                                    {step.details.map((detail, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-foreground/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                            {detail}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
