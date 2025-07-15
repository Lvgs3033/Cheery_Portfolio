"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationAlertPopupProps {
  show: boolean
  message: string
  onClose: () => void
}

export default function NavigationAlertPopup({ show, message, onClose }: NavigationAlertPopupProps) {
  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
      <div className="relative bg-gradient-to-br from-purple-100 to-indigo-200 dark:from-purple-800 dark:to-indigo-900 rounded-3xl p-8 max-w-md mx-4 text-center shadow-2xl animate-scale-in border-4 border-purple-300 dark:border-purple-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors z-10"
          aria-label="Close navigation alert"
        >
          <X size={24} />
        </button>

        <div className="mb-6">
          <div className="text-7xl mb-4 animate-bounce-slow">✍️</div> {/* Pen emoji for blog creation */}
          <h2 className="text-4xl font-extrabold text-purple-700 dark:text-purple-300 mb-3 drop-shadow-md">
            Heads Up!
          </h2>
          <p className="text-gray-700 dark:text-gray-200 text-xl leading-relaxed">{message}</p>
        </div>

        <Button
          onClick={onClose}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Got It!
        </Button>
      </div>
    </div>
  )
}
