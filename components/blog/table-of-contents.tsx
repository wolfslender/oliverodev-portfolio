"use client"

import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"

interface TableOfContentsProps {
  headings: { text: string; slug: string; level: number }[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const { i18n } = useTranslation()
  const isSpanish = i18n.language.startsWith("es")

  if (!headings || headings.length === 0) return null

  return (
    <div 
      className="my-10 bg-card/50 text-card-foreground rounded-xl border p-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <h3 className="font-bold text-xl mb-4 border-b pb-2">
        {isSpanish ? "Tabla de Contenido" : "Table of Contents"}
      </h3>
      <nav className="flex flex-col gap-2.5">
        {headings.map((heading) => (
          <a
            key={heading.slug}
            href={`#${heading.slug}`}
            className={`text-sm text-muted-foreground hover:text-primary transition-colors block relative group ${
              heading.level === 3 ? "pl-4" : ""
            }`}
          >
            <span className={`absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors ${heading.level === 3 ? "ml-4" : ""}`} />
            <span className="pl-4">{heading.text}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}
