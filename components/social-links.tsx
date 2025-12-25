"use client"

import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import { contact } from "@/lib/data"
import { cn } from "@/lib/utils"

interface SocialLinksProps {
  className?: string
  iconClassName?: string
  variant?: "simple" | "boxed"
}

export function SocialLinks({ className, iconClassName, variant = "simple" }: SocialLinksProps) {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = `mailto:${contact.email}`
  }

  const socialLinks = [
    { 
      icon: Github, 
      href: contact.social.github, 
      label: "GitHub", 
      colorClass: "hover:bg-[#333] hover:text-white dark:hover:bg-white dark:hover:text-black"
    },
    { 
      icon: Linkedin, 
      href: contact.social.linkedin, 
      label: "LinkedIn", 
      colorClass: "hover:bg-[#0077b5] hover:text-white"
    },
    { 
      icon: Instagram, 
      href: contact.social.instagram, 
      label: "Instagram", 
      colorClass: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white"
    },
    { 
      icon: Mail, 
      href: "#", 
      label: "Email", 
      onClick: handleEmailClick, 
      colorClass: "hover:bg-orange-500 hover:text-white"
    },
  ]

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target={social.href.startsWith("#") ? undefined : "_blank"}
          rel={social.href.startsWith("#") ? undefined : "noopener noreferrer"}
          aria-label={social.label}
          onClick={social.onClick}
          className={cn(
            "transition-all duration-300 cursor-pointer",
            variant === "simple" && "text-muted-foreground hover:text-foreground",
            variant === "boxed" &&
              cn("group relative p-2 rounded-lg bg-muted/50", social.colorClass),
          )}
        >
          <social.icon
            className={cn(
              "w-6 h-6",
              variant === "boxed" && "text-muted-foreground group-hover:text-inherit transition-colors",
              iconClassName,
            )}
          />
        </a>
      ))}
    </div>
  )
}
