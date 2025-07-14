"use client"

import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState<boolean>(
    () => typeof window !== "undefined" && document.documentElement.classList.contains("dark"),
  )

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  useEffect(() => {
    //  pick up saved preference
    const saved = localStorage.getItem("theme")
    if (saved === "dark") setIsDark(true)
  }, [])

  return (
    <button
      aria-label="Toggle Theme"
      className="fixed top-24 right-4 z-50 w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all"
      onClick={() => setIsDark((prev) => !prev)}
    >
      {isDark ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  )
}
