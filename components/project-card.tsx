"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowUpRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import { cn } from "@/lib/utils"
import { useSiteData } from "@/hooks/use-site-data"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string
  size?: "large" | "medium" | "small"
  industry?: string
  metrics?: {
    users?: string
    performance?: string
    impact?: string
  }
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  github,
  demo,
  size = "medium",
  industry,
  metrics,
}: ProjectCardProps) {
  const { common } = useSiteData()

  return (
    <Card
      className={cn(
        "group flex flex-col overflow-hidden bg-card/50 backdrop-blur-sm text-card-foreground transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 active:scale-[0.99]",
        size === "large" ? "md:col-span-2 row-span-2" : "h-full"
      )}
    >
      {/* Image Section */}
      <div className={cn(
        "relative w-full overflow-hidden",
        size === "large" ? "h-64 md:h-[400px]" : "h-56"
      )}>
        <ExportedImage
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Overlay for hover effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

        {/* Industry Badge */}
        {industry && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-background/80 backdrop-blur-md border-white/10 text-foreground font-semibold">
              {industry}
            </Badge>
          </div>
        )}

        {/* Impact Indicator */}
        {metrics && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-primary/90 backdrop-blur-md text-primary-foreground border-primary/20 font-bold flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              High Impact
            </Badge>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/10 px-2.5 py-0.5 text-xs font-medium transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className={cn(
          "font-bold mb-2 leading-tight group-hover:text-primary transition-colors duration-300",
          size === "large" ? "text-2xl md:text-3xl" : "text-xl"
        )}>
          {title}
        </h3>

        <p className="text-muted-foreground line-clamp-3 mb-6 text-sm md:text-base flex-1 leading-relaxed">
          {description}
        </p>

        {/* Metrics Display */}
        {metrics && (
          <div className="mb-6 grid grid-cols-3 gap-3 p-4 bg-muted/30 rounded-xl border border-border/50">
            {metrics.users && (
              <div className="text-center">
                <div className="text-xs font-bold text-primary mb-1">{metrics.users}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Users</div>
              </div>
            )}
            {metrics.performance && (
              <div className="text-center">
                <div className="text-xs font-bold text-primary mb-1">{metrics.performance}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Speed</div>
              </div>
            )}
            {metrics.impact && (
              <div className="text-center">
                <div className="text-xs font-bold text-primary mb-1 line-clamp-2">{metrics.impact}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Impact</div>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-3 mt-auto pt-2">
          <Link
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 px-5 py-2.5 text-sm font-medium transition-all hover:scale-105 hover:shadow-primary/40 active:scale-95"
          >
            {common.viewProject} <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur-sm p-2.5 text-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 hover:border-accent"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </Card>
  )
}
