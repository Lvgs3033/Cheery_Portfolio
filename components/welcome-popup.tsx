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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
      <div className="relative bg-gradient-to-br from-pink-100 to-rose-200 dark:from-pink-800 dark:to-rose-900 rounded-3xl p-8 max-w-md mx-4 text-center shadow-2xl animate-scale-in border-4 border-pink-300 dark:border-pink-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors z-10"
          aria-label="Close welcome message"
        >
          <X size={24} />
        </button>

        <div className="mb-6">
          <div className="text-7xl mb-4 animate-pulse-slow">✨</div> {/* More prominent and animated emoji */}
          <h2 className="text-4xl font-extrabold text-pink-700 dark:text-pink-300 mb-3 drop-shadow-md">Welcome!</h2>
          <p className="text-gray-700 dark:text-gray-200 text-xl leading-relaxed">
            We're navigating to you! Get ready to explore my cherry blossom themed portfolio.
          </p>
        </div>

        <Button
          onClick={onClose}
          className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Let's Begin! 🚀
        </Button>
      </div>
    </div>
  )
}
