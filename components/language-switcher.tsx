"use client"

import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("es") ? "en" : "es"
    i18n.changeLanguage(newLang)
  }

  const isSpanish = i18n.language.startsWith("es")

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-36 right-5 z-40"
    >
      <Button
        onClick={toggleLanguage}
        size="icon"
        variant="outline"
        className="rounded-full w-12 h-12 bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300"
        title={isSpanish ? "Switch to English" : "Cambiar a Español"}
      >
        <span className="font-bold text-sm">
          {isSpanish ? "EN" : "ES"}
        </span>
      </Button>
    </motion.div>
  )
}
