"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowRight, Github } from "lucide-react"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import { cn } from "@/lib/utils"
import { useSiteData } from "@/hooks/use-site-data"

interface FeaturedProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string
  size?: "large" | "medium" | "small"
}

export function FeaturedProjectCard({
  title,
  description,
  image,
  tags,
  github,
  demo,
  size = "medium",
  className,
}: FeaturedProjectCardProps & { className?: string }) {
  const { common } = useSiteData()

  return (
    <Card 
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20",
        size === "large" ? "row-span-2" : "h-full",
        className
      )}
    >
      {/* Image Section */}
      <div className={cn(
        "relative w-full overflow-hidden",
        size === "large" ? "h-64 md:h-[400px]" : "h-52"
      )}>
        <ExportedImage
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60 transition-opacity duration-300" />
        
        {/* Tags overlay on image for modern look */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
           {tags.slice(0, 3).map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="bg-black/70 text-white hover:bg-black/80 backdrop-blur-sm border-white/10 px-2 py-0.5 text-[10px] font-medium tracking-wide"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className={cn(
          "font-bold mb-3 leading-tight tracking-tight group-hover:text-primary transition-colors duration-300",
          size === "large" ? "text-2xl md:text-3xl" : "text-xl"
        )}>
          {title}
        </h3>
        
        <p className="text-muted-foreground line-clamp-3 mb-6 text-sm md:text-base leading-relaxed flex-1">
          {description}
        </p>

        <div className="mt-auto pt-4 border-t border-border/40 flex items-center justify-between">
          <Link
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            {common.viewProject || "View Project"}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {github && github !== '#' && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full"
              title="View Source Code"
            >
              <Github className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    </Card>
  )
}
