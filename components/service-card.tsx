"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { useSiteData } from "@/hooks/use-site-data"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  technologies?: string[]
  price: string
  color: string
  bgColor: string
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  technologies,
  price,
  color,
  bgColor,
}: ServiceCardProps) {
  const { common } = useSiteData()
  return (
    <Card className={`flex flex-col h-full p-8 transition-all duration-500 border-border/50 group bg-card/50 backdrop-blur-sm relative overflow-hidden border-t-4 ${color.replace('text-', 'border-')} hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 active:scale-[0.98]`}>
      {/* Decorative gradient blob */}
      <div className={`absolute top-0 right-0 w-64 h-64 ${bgColor} blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

      <div className="flex items-start justify-between mb-6 relative z-10">
        <div className={`p-4 ${bgColor} rounded-2xl transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
          <Icon className={`w-8 h-8 ${color}`} />
        </div>
        <Badge variant="secondary" className="font-medium bg-secondary/50 backdrop-blur-md border border-border/50">
          {price}
        </Badge>
      </div>

      <div className="relative z-10 flex-grow">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {technologies && (
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="space-y-4 mb-8">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{common.whatsIncluded}</h4>
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                <div className="mt-0.5 p-0.5 rounded-full bg-green-500/10 text-green-500 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 mt-auto">
        <Button asChild className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-orange-500/20">
          <Link href="/contact">
            {common.getStarted} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </Card>
  )
}
