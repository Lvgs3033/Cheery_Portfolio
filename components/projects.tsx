"use client"

import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const allProjects = [
  {
    title: "Code Compiler",
    description: "Online code compiler supporting multiple programming languages with real-time execution.",
    image: "/c.png?height=300&width=400",
    link: "https://code-complier-g7oq.vercel.app/",
    category: "Web Development",
  },
  {
    title: "Eklavy",
    description: "Educational platform for learning and skill development with interactive features.",
    image: "/e.png?height=300&width=400",
    link: "https://eklavy.vercel.app/",
    category: "Web Development",
  },
  {
    title: "Blog Website",
    description: "Modern blog platform with content management and user engagement features.",
    image: "/b.png?height=300&width=400",
    link: "https://blog-navy-six-79.vercel.app/",
    category: "Web Development",
  },
  {
    title: "Creepy Website",
    description: "Interactive horror-themed website with engaging animations and effects.",
    image: "/cr.png?height=300&width=400",
    link: "https://v0-creepy-site-website.vercel.app/",
    category: "Web Development",
  },
  {
    title: "Cosmic Calendar",
    description: "Astronomy-themed calendar application with celestial events tracking.",
    image: "/co.png?height=300&width=400",
    link: "https://cosmicclender-hdaa.vercel.app/",
    category: "Web Development",
  },
  {
    title: "Expense Tracker",
    description: "Personal finance management tool with budget tracking and analytics.",
    image: "/e1.png?height=300&width=400",
    link: "https://expsense-tracker-1bhh.vercel.app/dashboard",
    category: "Web Development",
  },
  {
    title: "Resume Builder",
    description: "Dynamic resume builder with multiple templates and PDF export functionality.",
    image: "/r.png?height=300&width=400",
    link: "https://spectacular-cocada-e8c313.netlify.app/",
    category: "Web Development",
  },
  {
    title: "Recipe Website",
    description: "Interactive recipe sharing platform with search and filtering capabilities.",
    image: "/cake.png?height=300&width=400",
    link: "https://sensational-muffin-4f83b7.netlify.app/",
    category: "Web Development",
  },
  {
    title: "Task Management",
    description: "Comprehensive task management system with team collaboration features.",
    image: "/task.png?height=300&width=400",
    link: "https://dsa-project-4smq.vercel.app/",
    category: "Web Development",
  },
  {
    title: "VirtualMouse",
    description: "Virtual mouse application for controlling devices remotely using mobile phones.",
    image: "/portfolio-1.jpg?height=300&width=400",
    link: "https://github.com/dhvani1215/VirtualMouse",
    category: "AI/ML",
  },
  {
    title: "Jarvise-ai",
    description: "AI-powered personal assistant for task automation and productivity enhancement.",
    image: "/portfolio-3.jpg?height=300&width=400",
    link: "https://github.com/Lvgs3033/python_project",
    category: "AI/ML",
  },
  {
    title: "Speech conversion",
    description: "Speech-to-text and text-to-speech application for accessibility and convenience.",
    image: "/portfolio-4.jpg?height=300&width=400",
    link: "https://github.com/Lvgs3033/python_project",
    category: "AI/ML",
  },
  {
    title: "Iris-flower",
    description: "Iris flower classification project using machine learning.",
    image: "img/portfolio-2.jpg",
    link: "https://github.com/Lvgs3033/python_project",
    category: "AI/ML"
  },
  {
    title: "Chatboat",
    description: "A basic chatbot project implemented using Python.",
    image: "img/portfolio-3.jpg",
    link: "https://github.com/Lvgs3033/python_project",
    category: "AI/ML"
  },
  {
    title: "House-price-predictor",
    description: "Predicts house prices using regression techniques.",
    image: "img/portfolio-4.jpg",
    link: "https://github.com/dhvani1215/House-price-predictor",
    category: "AI/ML"
  },
  {
    title: "Student Management",
    description: "A system to manage student records and information.",
    image: "img/portfolio-5.jpg",
    link: "https://github.com/Lvgs3033/python_project",
    category: "Web App"
  },
  {
    title: "Library",
    description: "Library management system to handle book records and users.",
    image: "img/portfolio-6.jpg",
    link: "https://github.com/dhvani1215/library",
    category: "Web App"
  },
  {
    title: "Twitter",
    description: "Twitter sentiment analysis with real-time visualization.",
    image: "img/twitter.png",
    link: "https://v0-twitter-sentiment-analysis-six.vercel.app/",
    category: "AI/ML"
  },
  {
  title: "Leetcode Rank",
  description: "Personal Leetcode profile showcasing competitive programming progress and rankings.",
  image: "img/portfolio-1.jpg",
  link: "https://leetcode.com/u/Lvgs3033/",
  category: "Competitive Programming"
  },
  {
    title: "Memory Game",
    description: "Interactive memory map application for visualizing and managing personal memories.",
    image: "/g.png",
    link: "https://game-website-mocha.vercel.app/",
    category: "Web Game"
  },
  {
    title: "Tic-tac-toe",
    description: "A fun and responsive Tic-tac-toe game playable on modern browsers.",
    image: "img/t1.png",
    link: "https://stunning-kleicha-49c0e8.netlify.app/",
    category: "Web Game"
  },
  {
    title: "whacamacole_game",
    description: "Whac-A-Mole style mini-game using DOM manipulation and event handling.",
    image: "img/portfolio-2.jpg",
    link: "https://github.com/dhvani1215/whacamacole_game",
    category: "Web Game"
  },
  {
    title: "Aditi",
    description: "A beautiful portfolio webpage with interactive UI built for branding.",
    image: "img/Aditi.png",
    link: "https://lvgs3033.github.io/Bestysis/",
    category: "Web App"
  },
  {
    title: "Jokes",
    description: "A random joke generator that fetches jokes from an external API.",
    image: "img/joke.png",
    link: "https://lvgs3033.github.io/Joke-generator/",
    category: "Web App"
  },
  {
    title: "Love Calculator",
    description: "Fun love compatibility calculator based on names, just for entertainment!",
    image: "img/lc.png",
    link: "https://lvgs3033.github.io/Love-Calulator/",
    category: "Web App"
  },

]

export default function Projects() {
  const displayedProjects = allProjects.slice(0, 6) // Show only the first 6 projects

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-pink-600 dark:text-pink-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my diverse projects, demonstrating my skills in web development, mobile apps, and more.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-pink-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button asChild className="bg-white text-pink-600 hover:bg-gray-100 rounded-full">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/projects" passHref scroll={true}>
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
