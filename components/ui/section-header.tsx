"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
  align?: "left" | "center" | "right"
}

export function SectionHeader({ title, description, className, align = "center" }: SectionHeaderProps) {
  return (
    <ScrollReveal className={cn("mb-12", className)}>
      <h2
        className={cn(
          "text-4xl sm:text-5xl font-bold mb-4",
          align === "center" && "text-center",
          align === "right" && "text-right",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-xl text-muted-foreground max-w-3xl text-balance",
            align === "center" && "mx-auto text-center",
            align === "right" && "ml-auto text-right",
          )}
        >
          {description}
        </p>
      )}
    </ScrollReveal>
  )
}
