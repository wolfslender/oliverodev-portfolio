"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Zap, Globe, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"

interface FeaturedCaseStudyProps {
    project: {
        title: string
        description: string
        image: string
        tags: string[]
        demo: string
        industry?: string
        metrics?: {
            users?: string
            performance?: string
            impact?: string
        }
        challenge?: string
        solution?: string
        impactStatement?: string
    }
}

export function FeaturedCaseStudy({ project }: FeaturedCaseStudyProps) {
    return (
        <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-5">
                <div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-[120px]" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-12 space-y-4">
                        <Badge variant="outline" className="px-4 py-1.5 rounded-full border-primary/20 bg-primary/5 text-primary text-sm font-semibold">
                            Featured Case Study
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Powering <span className="text-gradient">Global Impact</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Visual Side */}
                    <ScrollReveal delay={100}>
                        <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-border/50 shadow-2xl group">
                            <ExportedImage
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                            {/* Floating tech stack */}
                            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                                {project.tags.slice(0, 5).map(tag => (
                                    <Badge key={tag} variant="secondary" className="backdrop-blur-md bg-background/80 border-white/10 font-mono text-xs">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Content Side */}
                    <ScrollReveal delay={200}>
                        <div className="space-y-8">
                            {/* Header */}
                            <div className="space-y-4">
                                {project.industry && (
                                    <Badge className="bg-primary/10 text-primary border-primary/20">
                                        {project.industry}
                                    </Badge>
                                )}
                                <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Metrics Grid */}
                            {project.metrics && (
                                <div className="grid grid-cols-3 gap-4 p-6 bg-muted/30 rounded-2xl border border-border/50">
                                    {project.metrics.users && (
                                        <div className="text-center space-y-2">
                                            <Users className="w-6 h-6 mx-auto text-primary" />
                                            <div className="font-bold text-lg">{project.metrics.users}</div>
                                            <div className="text-xs text-muted-foreground uppercase tracking-wider">Users</div>
                                        </div>
                                    )}
                                    {project.metrics.performance && (
                                        <div className="text-center space-y-2">
                                            <Zap className="w-6 h-6 mx-auto text-primary" />
                                            <div className="font-bold text-lg">{project.metrics.performance}</div>
                                            <div className="text-xs text-muted-foreground uppercase tracking-wider">Performance</div>
                                        </div>
                                    )}
                                    {project.metrics.impact && (
                                        <div className="text-center space-y-2">
                                            <Globe className="w-6 h-6 mx-auto text-primary" />
                                            <div className="font-bold text-lg line-clamp-2">{project.metrics.impact}</div>
                                            <div className="text-xs text-muted-foreground uppercase tracking-wider">Impact</div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Challenge → Solution → Impact */}
                            {(project.challenge || project.solution || project.impactStatement) && (
                                <div className="space-y-6">
                                    {project.challenge && (
                                        <div className="space-y-2">
                                            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                                Challenge
                                            </h4>
                                            <p className="text-sm leading-relaxed pl-4">{project.challenge}</p>
                                        </div>
                                    )}
                                    {project.solution && (
                                        <div className="space-y-2">
                                            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                                                Solution
                                            </h4>
                                            <p className="text-sm leading-relaxed pl-4">{project.solution}</p>
                                        </div>
                                    )}
                                    {project.impactStatement && (
                                        <div className="space-y-2">
                                            <h4 className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4" />
                                                Impact
                                            </h4>
                                            <p className="text-sm leading-relaxed pl-4 font-medium">{project.impactStatement}</p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* CTA */}
                            <div className="pt-4">
                                <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg font-bold group shadow-xl hover:shadow-primary/20 transition-all">
                                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                                        View Live Project <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
