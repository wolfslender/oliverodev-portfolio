"use client"

import { useState, useEffect, useRef } from "react"
import { Code, Users, Award, Coffee } from "lucide-react"
import { useSiteData } from "@/hooks/use-site-data"
import { ScrollReveal } from "@/components/scroll-reveal"

function CountUp({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
}: { end: number; duration?: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const startTime = Date.now()

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)

      setCount(currentCount)
      countRef.current = currentCount

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [end, duration])

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const { stats } = useSiteData()
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group relative p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl border-t-4 border-t-transparent hover:border-t-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 text-center overflow-hidden">
                {/* Decorative gradient background opacity on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-b from-blue-500 to-cyan-500" />
                
                <div className="relative z-10 flex flex-col items-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-blue-500/10 text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <stat.icon className="w-6 h-6" />
                  </div>

                  {/* Counter */}
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300">
                    <CountUp end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>

                  {/* Label */}
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
