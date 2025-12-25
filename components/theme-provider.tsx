"use client"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps, useTheme as useNextTheme } from "next-themes"

export function useTheme() {
  return useNextTheme()
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange {...props}>
      {children}
    </NextThemesProvider>
  )
}
