"use client"

import type React from "react"

import { useState } from "react"
import { Phone, MapPin, Mail, Globe, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us On",
      value: "+91 9773001459",
      link: "tel:+919773001459",
    },
    {
      icon: MapPin,
      title: "Work From",
      value: "Surat, Gujarat, India",
      link: "#",
    },
    {
      icon: Mail,
      title: "Email",
      value: "dhvani1215@gmail.com",
      link: "mailto:dhvani1215@gmail.com",
    },
    {
      icon: Globe,
      title: "Website",
      value: "Portfolio Site",
      link: "https://cheery-portfolio-3xoa.vercel.app/",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Using EmailJS for form submission
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          address: "",
          phone: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Contact <span className="text-pink-600 dark:text-pink-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-8"></div>
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Have You Any Questions?</h3>
          <p className="text-pink-600 dark:text-pink-400 font-medium">I'M AT YOUR SERVICES</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <info.icon size={24} className="text-pink-600 dark:text-pink-400 group-hover:text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{info.title}</h4>
              <a
                href={info.link}
                className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                {info.value}
              </a>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Send Me Your Messages and Queries
            </h3>
            <p className="text-pink-600 dark:text-pink-400 font-medium">I'M VERY RESPONSIVE TO MESSAGES</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-full border-2 border-pink-200 dark:border-pink-700 focus:border-pink-600 dark:focus:border-pink-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-full border-2 border-pink-200 dark:border-pink-700 focus:border-pink-600 dark:focus:border-pink-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  type="text"
                  name="address"
                  placeholder="Your Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-full border-2 border-pink-200 dark:border-pink-700 focus:border-pink-600 dark:focus:border-pink-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-full border-2 border-pink-200 dark:border-pink-700 focus:border-pink-600 dark:focus:border-pink-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 dark:border-pink-700 focus:border-pink-600 dark:focus:border-pink-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 resize-none"
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </div>

            {submitStatus === "success" && (
              <div className="flex items-center justify-center text-green-600 dark:text-green-400 mt-4 animate-fade-in">
                <CheckCircle className="mr-2 h-5 w-5" />
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="flex items-center justify-center text-red-600 dark:text-red-400 mt-4 animate-fade-in">
                <AlertCircle className="mr-2 h-5 w-5" />
                Failed to send message. Please try again or contact me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
