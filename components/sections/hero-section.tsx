"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSiteData } from "@/hooks/use-site-data"
import { SocialLinks } from "@/components/social-links"
import { Spotlight } from "@/components/ui/spotlight"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const { hero } = useSiteData()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="dark:block">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="currentColor" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 md:pt-40">
        <div className="space-y-12 animate-fade-in">

          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter text-balance leading-[0.9]">
              {hero.title.prefix} <br className="hidden md:block" />
              <span className="text-gradient">
                {hero.title.highlight}
              </span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {hero.roles.map((role, idx) => (
                <div key={role} className="flex items-center gap-3">
                  <span className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-primary/80">
                    {role}
                  </span>
                  {idx < hero.roles.length - 1 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed font-medium">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              asChild
              size="lg"
              className="shimmer w-full sm:w-auto rounded-full text-lg h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95"
            >
              <Link href="/work">
                {hero.buttons.primary}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-lg h-12 px-8 border bg-background/50 backdrop-blur-sm hover:bg-accent/50 text-foreground transition-all hover:scale-105 active:scale-95"
            >
              <Link href="/contact">
                {hero.buttons.secondary}
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto rounded-full text-lg h-12 px-8 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 dark:bg-transparent dark:text-foreground dark:hover:bg-muted/50"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>
                {hero.buttons.downloadCv}
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="pt-12 flex justify-center animate-bounce">
            <SocialLinks iconClassName="w-6 h-6 hover:scale-110 transition-transform" />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce p-2 rounded-full hover:bg-muted/50 transition-colors">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
