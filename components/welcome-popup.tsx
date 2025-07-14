"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WelcomePopupProps {
  show: boolean
  onClose: () => void
}

export default function WelcomePopup({ show, onClose }: WelcomePopupProps) {
  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-md mx-4 text-center shadow-2xl animate-scale-in border-4 border-pink-200 dark:border-pink-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="mb-6">
          <div className="text-6xl mb-4 animate-bounce">🌸</div>
          <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">Welcome!</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Let's explore my cherry blossom themed portfolio and discover amazing projects together!
          </p>
        </div>

        <Button
          onClick={onClose}
          className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Let's Explore 🚀
        </Button>
      </div>
    </div>
  )
}
