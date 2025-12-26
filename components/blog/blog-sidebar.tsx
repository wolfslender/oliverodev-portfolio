"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

interface BlogSidebarProps {
  tags: string[]
  showSearch?: boolean
  searchQuery?: string
  onSearchChange?: (query: string) => void
  className?: string
}

export function BlogSidebar({
  tags,
  showSearch = false,
  searchQuery = "",
  onSearchChange,
  className = "",
}: BlogSidebarProps) {
  return (
    <aside className={`space-y-8 ${className}`}>
      {showSearch && (
        <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-4">Search</h3>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search posts..."
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-9"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
            />
          </div>
        </div>
      )}

      <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-6">
        <h3 className="font-semibold text-lg mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.length > 0 ? (
            tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                {tag}
              </Badge>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">No tags available.</p>
          )}
        </div>
      </div>
    </aside>
  )
}
