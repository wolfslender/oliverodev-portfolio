"use client"

import { siteConfig } from "@/lib/config"
import { Quote } from "lucide-react"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function TestimonialsSection() {
    const { testimonials } = siteConfig

    return (
        <section className="py-24 px-4 bg-muted/20 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Trusted by <span className="text-gradient">Industry Leaders</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Don't just take my word for it. Here's what my clients and partners have to say about our collaboration.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="group relative h-full p-8 bg-card border border-border/50 rounded-3xl hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col justify-between">
                                <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                                    <Quote size={48} fill="currentColor" />
                                </div>

                                <div className="relative z-10">
                                    <p className="text-lg leading-relaxed italic mb-8">
                                        "{testimonial.quote}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 border-t border-border/50 pt-6">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                                        <Image
                                            src={testimonial.image || "/placeholder.svg"}
                                            alt={testimonial.author}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
