"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = (scrolled / scrollHeight) * 100
      setProgress(progress)
    }

    window.addEventListener("scroll", updateProgress)
    updateProgress()

    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted/20">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
