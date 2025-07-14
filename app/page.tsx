"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certificates from "@/components/certificates"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WelcomePopup from "@/components/welcome-popup"
import CherryBlossomRain from "@/components/cherry-blossom-rain"
import FloatingIcons from "@/components/floating-icons"
import ThemeSwitcher from "@/components/theme-switcher"

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900 dark:to-rose-900 transition-all duration-500">
      <CherryBlossomRain />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingIcons />
      <ThemeSwitcher />
      <WelcomePopup show={showWelcome} onClose={() => setShowWelcome(false)} />
    </div>
  )
}
