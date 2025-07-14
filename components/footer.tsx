"use client"

import { Github, Linkedin, Instagram, ChevronUp, Heart } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#blog", label: "Blog" },
  ]

  const services = [
    { href: "#", label: "Web Development" },
    { href: "#", label: "AI Development" },
    { href: "#", label: "Data Analysis" },
    { href: "#", label: "Mobile Apps" },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/dhvani-kakadiya-2811a8252", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Lvgs3033", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-br from-pink-100 to-rose-200 dark:from-pink-900 dark:to-rose-900 text-gray-800 dark:text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-4">About Me</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm Dhvani Kakadiya, a passionate Web Developer, Data Scientist, and AI/ML Developer creating innovative
              solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-200 dark:bg-pink-800 text-pink-600 dark:text-pink-300 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600 transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="tel:+919773001459"
                className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 flex items-center"
              >
                📞 +91 9773001459
              </a>
              <a
                href="mailto:dhvani1215@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 flex items-center"
              >
                ✉️ dhvani1215@gmail.com
              </a>
              <p className="text-gray-600 dark:text-gray-300 flex items-center">📍 Surat, Gujarat, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-200 dark:border-pink-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 dark:text-gray-300 flex items-center">
            © 2025 Dhvani Kakadiya. Made with <Heart className="mx-1 h-4 w-4 text-pink-600" fill="currentColor" /> All
            Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-all duration-300 hover:scale-110"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}
