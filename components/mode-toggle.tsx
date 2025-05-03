"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative h-9 w-9">
        <span className="sr-only">Tema değiştir</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative h-9 w-9 overflow-hidden"
      aria-label="Tema Değiştir"
    >
      {/* Sun icon */}
      <div
        className={`absolute inset-0 flex h-full w-full items-center justify-center transition-transform duration-500 ${
          theme === "dark" ? "translate-y-0 rotate-0" : "translate-y-full rotate-90"
        }`}
      >
        <Sun className="h-5 w-5 text-yellow-500" />
      </div>

      {/* Moon icon */}
      <div
        className={`absolute inset-0 flex h-full w-full items-center justify-center transition-transform duration-500 ${
          theme === "light" ? "translate-y-0 rotate-0" : "-translate-y-full -rotate-90"
        }`}
      >
        <Moon className="h-5 w-5 text-slate-900 dark:text-slate-100" />
      </div>
    </Button>
  )
}
