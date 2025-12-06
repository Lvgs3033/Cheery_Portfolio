"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Instagram, Facebook, Download, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link" // Import Link for internal navigation

export default function Hero() {
  const typingRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const roles = ["AI/ML Developer", "Data Scientist", "Flutter Developer", "Web Developer"]
    let roleIndex = 0
    let charIndex = 0
    let isDeleting = false

    const typeEffect = () => {
      const currentRole = roles[roleIndex]

      if (typingRef.current) {
        if (isDeleting) {
          typingRef.current.textContent = currentRole.substring(0, charIndex - 1)
          charIndex--
        } else {
          typingRef.current.textContent = currentRole.substring(0, charIndex + 1)
          charIndex++
        }

        if (!isDeleting && charIndex === currentRole.length) {
          setTimeout(() => {
            isDeleting = true
          }, 1000)
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false
          roleIndex = (roleIndex + 1) % roles.length
        }
      }

      setTimeout(typeEffect, isDeleting ? 50 : 100)
    }

    typeEffect()
  }, [])

  const socialLinks = [
    { icon: Github, href: "https://github.com/Lvgs3033", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dhvani-kakadiya-2811a8252", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300">
              Hello I'm <span className="text-pink-600 dark:text-pink-400 font-semibold">Dhvani Kakadiya</span>
            </h3>
            <h3 className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300">
              I'm a{" "}
              <span
                ref={typingRef}
                className="text-pink-600 dark:text-pink-400 font-semibold border-r-2 border-pink-600 dark:border-pink-400"
              ></span>
            </h3>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            I am a Computer Engineer who is passionate about coding. I am a dedicated, self-assured, and eager learner
            who is constantly looking for opportunities to pick up new skills. I have a deep interest in Mathematics and
            Physics, especially Astronomy. I aim to apply my knowledge and problem-solving abilities to challenging
            domains.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <a href="https://drive.google.com/file/d/1KqmorgT8JHUOOOe4yDJi0K3BM3GsMY2K/view?usp=drive_link" download="Dhvani_Kakadiya_Resume.pdf">
                {" "}
                {/* Updated for download */}
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button
              asChild // Use asChild to pass props to the Link component
              variant="outline"
              className="border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Link href="https://www.linkedin.com/in/dhvani-kakadiya-2811a8252/" scroll={true}>
                {" "}
                {/* Updated to navigate to contact section */}
                <MessageCircle className="mr-2 h-4 w-4" />
                Hire Me!
              </Link>
            </Button>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-pink-100 dark:bg-pink-800 text-pink-600 dark:text-pink-300 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-fade-in-right">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-pink-200 to-rose-300 dark:from-pink-700 dark:to-rose-800 rounded-full flex items-center justify-center shadow-2xl animate-float">
              <img
                src="/p1.png?height=300&width=300"
                alt="Dhvani Kakadiya"
                className="w-72 h-72 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-300 dark:bg-pink-600 rounded-full flex items-center justify-center animate-bounce-slow">
              <span className="text-2xl">🌸</span>
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-rose-300 dark:bg-rose-600 rounded-full flex items-center justify-center animate-bounce-slow"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="text-xl">💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
