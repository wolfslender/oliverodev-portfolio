"use client"

import React, { useEffect, useState } from "react"
import i18next from "i18next"
import { I18nextProvider, initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: "en", // Force initial language to match server (SSG/SSR)
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  })

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Client-side only language detection to avoid hydration mismatch
    const detectLanguage = async () => {
      const savedLng = localStorage.getItem("i18nextLng")
      if (savedLng && savedLng !== i18next.language) {
        await i18next.changeLanguage(savedLng)
      } else {
        // If no saved language, try navigator but default to 'en' if not Spanish
        const browserLng = navigator.language
        if (browserLng.startsWith("es") && i18next.language !== "es") {
          await i18next.changeLanguage("es")
        }
      }
    }
    
    detectLanguage()
  }, [])

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
}
