"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
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
        "group flex flex-col overflow-hidden border bg-card text-card-foreground transition-all duration-300 hover:shadow-xl",
        size === "large" ? "md:col-span-2 row-span-2" : "h-full"
      )}
    >
      {/* Image Section - Now separated from content */}
      <div className={cn(
        "relative w-full overflow-hidden",
        size === "large" ? "h-64 md:h-[400px]" : "h-56"
      )}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Overlay for hover effect only on image */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </div>

      {/* Content Section - Located below image */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-2.5 py-0.5 text-xs font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className={cn(
          "font-bold mb-2 leading-tight",
          size === "large" ? "text-2xl md:text-3xl" : "text-xl"
        )}>
          {title}
        </h3>
        
        <p className="text-muted-foreground line-clamp-3 mb-5 text-sm md:text-base flex-1">
          {description}
        </p>

        <div className="flex items-center gap-3 mt-auto pt-1">
          <Link
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-md shadow-orange-500/20 px-4 py-2.5 text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            {common.viewProject} <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background p-2.5 text-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:border-accent hover:-translate-y-0.5"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </Card>
  )
}
