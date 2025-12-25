"use client"

import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

export interface TimelineItemProps {
  title: string
  subtitle: string
  period: string
  description: string
}

interface TimelineProps {
  title: string
  icon: LucideIcon
  items: TimelineItemProps[]
  color: "blue" | "cyan"
  delay?: number
}

export function Timeline({ title, icon: Icon, items, color, delay = 0 }: TimelineProps) {
  const colorClasses = {
    blue: {
      bg: "bg-blue-500",
      bgLight: "bg-blue-500/10",
      text: "text-blue-500",
    },
    cyan: {
      bg: "bg-cyan-500",
      bgLight: "bg-cyan-500/10",
      text: "text-cyan-500",
    },
  }

  const colors = colorClasses[color]

  return (
    <div>
      <ScrollReveal delay={delay}>
        <div className="flex items-center gap-3 mb-8">
          <div className={cn("p-2 rounded-lg", colors.bgLight)}>
            <Icon className={cn("w-6 h-6", colors.text)} />
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
      </ScrollReveal>
      <div className="space-y-6 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border">
        {items.map((item, index) => (
          <ScrollReveal key={index} delay={delay + index * 100} className="relative pl-8 group">
            <div
              className={cn(
                "absolute left-0 top-0 w-2 h-2 rounded-full -translate-x-[3.5px] group-hover:scale-150 transition-transform",
                colors.bg,
              )}
            />
            <Card className={cn(
              "p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent group-hover:-translate-x-1",
              color === "blue" ? "hover:border-l-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10" : "hover:border-l-cyan-500 hover:bg-cyan-50/50 dark:hover:bg-cyan-900/10"
            )}>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className={cn("font-bold text-lg transition-colors", colors.text)}>{item.title}</h4>
                  <p className="font-medium text-foreground">{item.subtitle}</p>
                </div>
                <span className={cn("text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap border", 
                  color === "blue" ? "bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800" : "bg-cyan-50 text-cyan-600 border-cyan-100 dark:bg-cyan-900/20 dark:text-cyan-300 dark:border-cyan-800"
                )}>
                  {item.period}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
