"use client"

import { MessageCircle, PhoneCall } from "lucide-react"

export default function FloatingIcons() {
  const openWhatsApp = () => {
    window.open("https://wa.me/919773001459?text=Hello!%20I%20would%20like%20to%20connect%20with%20you.", "_blank")
  }

  const openChatbot = () => {
    alert("Chatbot feature coming soon! For now, please use the contact form or WhatsApp.")
  }

  return (
    <>
      {/* WhatsApp */}
      <button
        aria-label="WhatsApp"
        className="fixed bottom-6 left-6 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all animate-bounce"
        onClick={openWhatsApp}
      >
        <PhoneCall size={24} />
      </button>

     
    </>
  )
}
