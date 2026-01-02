"use client"

import { siteConfig } from "@/lib/config"
import { Quote, Star } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function TestimonialsSection() {
    const { testimonials } = siteConfig

    return (
        <section className="py-32 px-4 bg-slate-950 text-white relative overflow-hidden">
            {/* Minimalist Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            <div className="max-w-7xl mx-auto relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-24 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-[0.3em]">
                            Institutional Proof
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-none">
                            Trusted by <span className="text-blue-500">Industry Leaders</span>
                        </h2>
                        <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
                            Strategic partnerships defined by technical excellence and measurable impact.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((testimonial, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="group relative pt-12">
                                {/* Top accent line */}
                                <div className="absolute top-0 left-0 w-12 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full" />

                                <div className="space-y-8">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3 h-3 fill-blue-500 text-blue-500" />
                                        ))}
                                    </div>

                                    <blockquote className="relative">
                                        <Quote className="absolute -top-6 -left-4 w-12 h-12 text-blue-500/10 -z-10" />
                                        <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-white/90 group-hover:text-white transition-colors duration-300">
                                            "{testimonial.quote}"
                                        </p>
                                    </blockquote>

                                    <div className="pt-8 border-t border-slate-800">
                                        <h4 className="text-lg font-black uppercase tracking-widest text-white tracking-wider mb-1">
                                            {testimonial.author}
                                        </h4>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-[1px] bg-blue-500" />
                                            <p className="text-sm font-bold text-blue-500 uppercase tracking-widest">
                                                {testimonial.role}
                                            </p>
                                        </div>
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
