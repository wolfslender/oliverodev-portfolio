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
  const [typedText, setTypedText] = useState("")
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    let charIndex = 0
    let isDeleting = false
    let timeoutId: NodeJS.Timeout

    const type = () => {
      const currentRole = hero.roles[currentRoleIndex]

      if (!isDeleting) {
        setTypedText(currentRole.substring(0, charIndex + 1))
        charIndex++

        if (charIndex === currentRole.length) {
          timeoutId = setTimeout(() => {
            isDeleting = true
            type()
          }, 2000)
            return
        }

        timeoutId = setTimeout(type, 100)
      } else {
        setTypedText(currentRole.substring(0, charIndex - 1))
        charIndex--

        if (charIndex === 0) {
          isDeleting = false
          setCurrentRoleIndex((prev) => (prev + 1) % hero.roles.length)
          timeoutId = setTimeout(type, 500)
          return
        }

        timeoutId = setTimeout(type, 50)
      }
    }

    timeoutId = setTimeout(type, 500)

    return () => clearTimeout(timeoutId)
  }, [currentRoleIndex, hero.roles])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background/[0.96] antialiased bg-grid-white/[0.02]">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="currentColor" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 md:pt-32">
        <div className="space-y-8 animate-fade-in">
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-balance">
            {hero.title.prefix} <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {hero.title.highlight}
            </span>
          </h1>

          <div className="h-8 md:h-12 flex items-center justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
              I am a {typedText}
              <span className="animate-pulse text-blue-500">_</span>
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
             {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-full text-lg h-12 px-8 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-500/20"
            >
              <Link href="/work">
                {hero.buttons.primary}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-lg h-12 px-8 border-2 hover:bg-muted/50"
            >
              <Link href="/contact">
                {hero.buttons.secondary}
              </Link>
            </Button>
            
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto rounded-full text-lg h-12 px-8 hover:bg-muted/50"
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
