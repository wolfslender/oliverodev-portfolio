"use client"

import { Badge } from "@/components/ui/badge"
import { Search, Tag, Sparkles, Mail, X, Loader2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

interface BlogSidebarProps {
  tags: string[]
  showSearch?: boolean
  searchQuery?: string
  onSearchChange?: (query: string) => void
  onSearchSubmit?: (query: string) => void
  selectedTag?: string | null
  onTagSelect?: (tag: string | null) => void
  className?: string
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
  onSearchSubmit,
  selectedTag,
  onTagSelect,
  className = "",
}: BlogSidebarProps) {
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Mailchimp Config from hidden fields
  const U_VALUE = "d115a5e75b31c0484490081e3"
  const ID_VALUE = "011f42ce9d"
  const FID_VALUE = "00ba66e7f0"

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    // JSONP Implementation for Static Sites (No CORS issues)
    const callbackName = `jsonp_callback_${Math.round(100000 * Math.random())}`
    const url = `https://oliverodev.us19.list-manage.com/subscribe/post-json?u=${U_VALUE}&id=${ID_VALUE}&f_id=${FID_VALUE}&EMAIL=${encodeURIComponent(email)}&c=${callbackName}`

    // Create script tag for JSONP
    const script = document.createElement('script')
    script.src = url

      // Define global callback
      ; (window as any)[callbackName] = (data: any) => {
        delete (window as any)[callbackName]
        document.body.removeChild(script)

        setIsSubmitting(false)

        if (data.result === 'success') {
          toast.success(data.msg || 'Successfully subscribed!')
          setEmail('')
          setShowModal(false)
        } else {
          // Sanitize Mailchimp error messages (often contain HTML)
          const errorMsg = data.msg?.replace(/<[^>]*>?/gm, '') || 'Something went wrong'
          toast.error(errorMsg)
        }
      }

    // Handle network errors
    script.onerror = () => {
      delete (window as any)[callbackName]
      document.body.removeChild(script)
      setIsSubmitting(false)
      toast.error('Connection error. Please try again later.')
    }

    document.body.appendChild(script)
  }

  return (
    <>
      <aside className={`space-y-6 ${className}`}>
        {showSearch && (
          <div className="bg-card text-card-foreground rounded-3xl border-2 border-border/50 shadow-lg p-6 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Search className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">Search Articles</h3>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search posts..."
                className="flex h-11 w-full rounded-xl border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 pl-9 transition-all font-medium"
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onSearchSubmit?.(searchQuery || "")
                  }
                }}
              />
            </div>
          </div>
        )}

        <div className="bg-card text-card-foreground rounded-3xl border-2 border-border/50 shadow-lg p-6 hover:border-primary/30 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Tag className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">Topics</h3>
            </div>
            {selectedTag && (
              <button
                onClick={() => onTagSelect?.(null)}
                className="text-xs font-semibold text-primary hover:underline transition-all"
              >
                Clear
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.length > 0 ? (
              tags.map((tag, index) => {
                const isSelected = selectedTag === tag
                const colorClass = getTagColor(tag)

                return (
                  <div
                    key={tag}
                    className="transition-transform duration-300 hover:scale-105 active:scale-95"
                  >
                    <Badge
                      variant="outline"
                      className={`cursor-pointer px-4 py-2 text-sm font-semibold transition-all duration-300 border-2 ${isSelected
                          ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                          : `${colorClass} hover:shadow-sm`
                        }`}
                      onClick={() => onTagSelect?.(isSelected ? null : tag)}
                    >
                      {tag}
                    </Badge>
                  </div>
                )
              })
            ) : (
              <p className="text-sm text-muted-foreground italic">No topics available.</p>
            )}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 text-white shadow-xl">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="relative z-10">
            <Sparkles className="w-8 h-8 mb-4" />
            <h3 className="font-black text-xl mb-2">Stay Updated</h3>
            <p className="text-sm text-white/90 mb-4 leading-relaxed">
              Get notified when I publish new insights on web development and performance.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-white text-primary font-bold py-3 px-6 rounded-xl hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              Subscribe
            </button>
          </div>
        </div>
      </aside>

      {/* Subscription Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-card rounded-3xl max-w-md w-full p-8 shadow-2xl animate-in zoom-in duration-200 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
              disabled={isSubmitting}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-2">Subscribe to Newsletter</h3>
              <p className="text-muted-foreground">
                Get the latest insights on web development delivered to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex h-12 w-full rounded-xl border-2 border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all font-medium"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground font-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  'Subscribe Now'
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                By subscribing, you agree to receive emails from me. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
