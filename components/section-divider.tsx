"use client"

export function SectionDivider({ variant = "wave" }: { variant?: "wave" | "dots" | "gradient" }) {
  if (variant === "wave") {
    return (
      <div className="relative h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,64 C320,90 640,90 960,64 C1120,48 1200,32 1200,32 L1200,120 L0,120 Z" className="fill-muted/30" />
          <path
            d="M0,80 C240,100 480,100 720,80 C960,60 1200,40 1200,40 L1200,120 L0,120 Z"
            className="fill-muted/20"
          />
        </svg>
      </div>
    )
  }

  if (variant === "dots") {
    return (
      <div className="relative h-16 overflow-hidden flex items-center justify-center">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
    </div>
  )
}
