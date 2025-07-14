"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation" // [^1]
import { Button } from "@/components/ui/button"
import ThemeSwitcher from "./theme-switcher"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() // [^1]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Close menu when navigating
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/projects" }, // Link to dedicated projects page
    { name: "Certificates", href: "/certificates" }, // Link to dedicated certificates page
    { name: "Blog", href: "/blog" }, // Link to dedicated blog page
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link href="/" className="text-2xl font-bold text-pink-600 dark:text-pink-400" scroll={true}>
          Dhvani.
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium"
              scroll={true} // Ensure scrolling to top for new pages, or to section for anchors
            >
              {link.name}
            </Link>
          ))}
          <ThemeSwitcher />
        </nav>

        <div className="md:hidden flex items-center space-x-2">
          <ThemeSwitcher />
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 shadow-lg">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium text-lg"
                onClick={() => setIsOpen(false)} // Close menu on click
                scroll={true} // Ensure scrolling to top for new pages, or to section for anchors
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
