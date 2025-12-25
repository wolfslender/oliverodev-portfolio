"use client"

export function AvailabilityBadge() {
  const isAvailable = true

  return (
    <div className="fixed bottom-8 left-8 z-40 hidden md:block">
      <div className="flex items-center gap-3 px-4 py-3 rounded-full bg-card border border-border shadow-lg backdrop-blur-sm">
        <div className="relative">
          <div className={`w-3 h-3 rounded-full ${isAvailable ? "bg-green-500" : "bg-red-500"} animate-pulse`} />
          <div
            className={`absolute inset-0 w-3 h-3 rounded-full ${isAvailable ? "bg-green-500" : "bg-red-500"} animate-ping`}
          />
        </div>
        <span className="text-sm font-medium">{isAvailable ? "Available for work" : "Currently unavailable"}</span>
      </div>
    </div>
  )
}
