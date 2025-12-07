"use client"

import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const allProjects = [
  {
  title: "Leetcode Rank",
  description: "Personal Leetcode profile showcasing competitive programming progress and rankings.",
  image: "/portfolio-1.jpg",
  link: "https://leetcode.com/u/Lvgs3033/",
  category: "Competitive Programming"
  },
  {
    title: "Code Compiler",
    description: "Designed and implemented an interactive online code runner that allows real-time execution of multiple programming languages directly in the browser.Integrated a code execution API to allow users to write, run, and debug code instantly.",
    image: "/c.png?height=300&width=400",
    Technology_used:"React(typescript), Tailwind CSS, REST APIs, shadcn/ui, Language Compilers, Gemini api",
    link: "https://code-complier-g7oq.vercel.app/",
    category: "Web with AI/ML",
  },
  {
  title: "Style Me",
  description: "Designed and developed a comprehensive AI-powered web application that delivers personalized style recommendations through advanced analysis tools. Integrated AI for color analysis to determine skin tone, undertones and seasonal palettes along with body type assessment for tailored clothing suggestions. Additional features include intelligent jewelry recommendations and personalized guidance for enhancing natural beauty.",
  image: "/sm.png?height=400&width=100%",
  link: "https://style-me-6w49.vercel.app/",
  category: "AI/ML Web",
},
{
  title: "DSAFLOW",
  description: "An interactive web app for practicing and visualizing Data Structures and Algorithms.",
  image: "/dsa.png?height=400&width=100%",
  link: "https://dsaflow.vercel.app/",
  category: "Web Development / DSA Tools",
},
 {
  title: "Resume Analyzer",
  description: "AI-powered resume analyzer that provides real-time feedback, ATS optimization, and personalized suggestions.",
  image: "/e.png?height=400&width=100%",
  link: "https://aaa-rrrrr-f4rs.vercel.app/",
  category: "Web with AI/ML",
},
{
  title: "Ved",
  description: "A web-based platform translate one language to another language with modern UI.",
  image: "/v.png?height=400&width=100%",
  link: "https://ved-fsia.vercel.app/",
  category: "Web Development / Spiritual",
},
{
  title: "Ai-Project",
  description: "Ai project use prolog for predict medical diseases based on symptoms and also suggest remidies.",
  image: "/portfolio-4.jpg?height=300&width=400",
  link: "https://github.com/Lvgs3033/Ai-project",
  category: "AI",
},
{
  title: "Helper",
  description: "A web-based platform offering some comman emergency numbers, document list require for different different id proofs and inforamtion about indian laws.",
  image: "/H.png?height=400&width=100%",
  link: "https://helper-ruddy.vercel.app/",
  category: "Web App",
},
{
  title: "Whiteboard",
  description: "A collaborative online whiteboard application for real-time drawing and brainstorming.",
  image: "/wh.png?height=400&width=100%",
  link: "https://white-board-nine.vercel.app/",
  category: "Web App",
},
{
  title: "Face Recognition System",
  description: "Face recognition project with real-time detection and matching, built using Python.",
  image: "/portfolio-4.jpg?height=400&width=100%",
  link: "https://github.com/Lvgs3033/python_project",
  category: "AI/ML",
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
    title: "House-price-predictor",
    description: "Predicts house prices using regression techniques.",
    image: "/portfolio-4.jpg",
    link: "https://github.com/dhvani1215/House-price-predictor",
    category: "AI/ML"
  },
  {
  title: "LoreLoom",
  description: "An interactive storytelling platform where users can craft, explore, and share immersive tales and digital lore also allow to write stories by yourself",
  image: "/L.png?height=300&width=400",
  link: "https:/lore-loom-tqxp.vercel.app/",
  category: "Web Development",
},
  {
    title: "Expense Tracker",
    description: "Personal finance management tool with budget tracking and analytics.",
    image: "/e1.png?height=300&width=400",
    link: "https://expsense-tracker-uws7.vercel.app/",
    category: "Web Development",
  },
  {
    title: "VirtualMouse",
    description: "Virtual mouse application for controlling devices remotely using mobile phones.",
    image: "/portfolio-1.jpg?height=300&width=400",
    link: "https://github.com/Lvgs3033/python_project",
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
    image: "/portfolio-2.jpg",
    link: "https://github.com/Lvgs3033/python_project",
    category: "AI/ML"
  },
  {
    title: "Chatboat",
    description: "A basic chatbot project implemented using Python.",
    image: "/portfolio-3.jpg",
    link: "https://github.com/Lvgs3033/python_project",
    category: "AI/ML"
  },
  
  {
    title: "Student Management",
    description: "A system to manage student records and information.",
    image: "/portfolio-5.jpg",
    link: "https://github.com/Lvgs3033/python_project",
    category: "Web App"
  },
  {
    title: "Library",
    description: "Library management system to handle book records and users.",
    image: "/portfolio-6.jpg",
    link: "https://github.com/dhvani1215/library",
    category: "Web App"
  },
  {
    title: "Twitter",
    description: "Twitter sentiment analysis with real-time visualization.",
    image: "/twitter.png",
    link: "https://v0-twitter-sentiment-analysis-six.vercel.app/",
    category: "AI/ML"
  },
  {
    title: "Memory Game",
    description: "Interactive memory map application for visualizing and managing personal memories.",
    image: "/g.png",
    link: "https://game-website-mocha.vercel.app/",
    category: "Web Game"
  },
  {
  title: "Skill Send",
  description: "A platform to share and discover skills, enabling users to learn, connect, and grow through community-driven content.",
  image: "/SSSS.png?height=400&width=100%",
  link: "https://skillsend-4tv4.vercel.app/",
  category: "Web Development",
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
