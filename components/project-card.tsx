"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
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
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  github,
  demo,
  size = "medium",
}: ProjectCardProps) {
  const { common } = useSiteData()

  return (
    <Card 
      className={cn(
        "group flex flex-col overflow-hidden bg-card/50 backdrop-blur-sm text-card-foreground transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10",
        size === "large" ? "md:col-span-2 row-span-2" : "h-full"
      )}
    >
      {/* Image Section - Now separated from content */}
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
      </div>

      {/* Content Section - Located below image */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
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
