"use client"

import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { motion } from "framer-motion"

interface BlogSidebarProps {
  tags: string[]
  showSearch?: boolean
  searchQuery?: string
  onSearchChange?: (query: string) => void
  selectedTag?: string | null
  onTagSelect?: (tag: string | null) => void
  className?: string
  headings?: { text: string; slug: string; level: number }[]
}

const tagColors = [
  "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800",
  "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800",
  "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800",
  "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 border-teal-200 dark:border-teal-800",
  "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800",
  "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400 border-sky-200 dark:border-sky-800",
  "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
  "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400 border-violet-200 dark:border-violet-800",
  "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800",
  "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-400 border-fuchsia-200 dark:border-fuchsia-800",
  "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400 border-pink-200 dark:border-pink-800",
  "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 border-rose-200 dark:border-rose-800",
]

const getTagColor = (tag: string) => {
  let hash = 0
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash)
  }
  return tagColors[Math.abs(hash) % tagColors.length]
}

export function BlogSidebar({
  tags,
  showSearch = false,
  searchQuery = "",
  onSearchChange,
  selectedTag,
  onTagSelect,
  className = "",
  headings,
}: BlogSidebarProps) {
  return (
    <aside className={`space-y-8 ${className}`}>
      {showSearch && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card text-card-foreground rounded-xl border shadow-sm p-6"
        >
          <h3 className="font-semibold text-lg mb-4">Search</h3>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search posts..."
              className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-9 transition-all"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
            />
          </div>
        </motion.div>
      )}

      {headings && headings.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="bg-card text-card-foreground rounded-xl border shadow-sm p-6"
        >
          <h3 className="font-semibold text-lg mb-4">Table of Contents</h3>
          <nav className="flex flex-col gap-2">
            {headings.map((heading) => (
              <a
                key={heading.slug}
                href={`#${heading.slug}`}
                className={`text-sm text-muted-foreground hover:text-primary transition-colors block ${
                  heading.level === 3 ? "pl-4" : ""
                }`}
              >
                {heading.text}
              </a>
            ))}
          </nav>
        </motion.div>
      )}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-card text-card-foreground rounded-xl border shadow-sm p-6"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Tags</h3>
          {selectedTag && (
            <button 
              onClick={() => onTagSelect?.(null)}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Clear filter
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.length > 0 ? (
            tags.map((tag, index) => {
              const isSelected = selectedTag === tag
              const colorClass = getTagColor(tag)
              
              return (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge 
                    variant="outline" 
                    className={`cursor-pointer px-3 py-1.5 text-sm transition-all duration-300 border ${
                      isSelected 
                        ? "bg-primary text-primary-foreground border-primary shadow-md scale-105" 
                        : `${colorClass} hover:shadow-sm`
                    }`}
                    onClick={() => onTagSelect?.(isSelected ? null : tag)}
                  >
                    {tag}
                  </Badge>
                </motion.div>
              )
            })
          ) : (
            <p className="text-sm text-muted-foreground">No tags available.</p>
          )}
        </div>
      </motion.div>
    </aside>
  )
}
