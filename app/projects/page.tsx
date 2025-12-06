"use client"

import { ExternalLink, ArrowLeft } from "lucide-react" // Added ArrowLeft
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

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
    description: "Online code compiler supporting multiple programming languages with real-time execution.",
    image: "/c.png?height=300&width=400",
    link: "https://code-complier-g7oq.vercel.app/",
    category: "Web Development",
  },
  {
  title: "Style Me",
  description: "A fashion recommendation web app that suggests outfits and styles for users.",
  image: "/sm.png?height=400&width=100%",
  link: "https://style-me-6w49.vercel.app/",
  category: "Web Development",
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
  description: "A web-based platform offering spiritual content and resources for learning and exploration.",
  image: "/v.png?height=400&width=100%",
  link: "https://ved-fsia.vercel.app/",
  category: "Web Development / Spiritual",
},

{
  title: "Ai-Project",
  description: "Ai project use prolog for predict medical diseases based on symptoms and also suggest remidies.",
  image: "/H.png?height=400&width=100%",
  link: "https://github.com/Lvgs3033/Ai-project",
  category: "AI",
},

{
  title: "Helper",
  description: "A web-based platform offering language learning tools, quizzes, and progress tracking with a modern UI.",
  image: "/H.png?height=400&width=100%",
  link: "https://helper-ruddy.vercel.app/",
  category: "Web App",
},
{
  title: "Whiteboard",
  description: "A collaborative online whiteboard application for real-time drawing and brainstorming.",
  image: "/H.png?height=400&width=100%",
  link: "https://white-board-nine.vercel.app/",
  category: "Web App",
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
  description: "An interactive storytelling platform where users can craft, explore, and share immersive tales and digital lore.",
  image: "/L.png?height=300&width=400",
  link: "https://lore-loom-tqxp.vercel.app/",
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
  title: "Skill Send",
  description: "A platform to share and discover skills, enabling users to learn, connect, and grow through community-driven content.",
  image: "/SSSS.png?height=400&width=100%",
  link: "https://skillsend-4tv4.vercel.app/",
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
    link: "https://github.com/Lvgs3033/python_project",
    category: "AI/ML",
  },
  {
  title: "Face Recognition System",
  description: "Face recognition project with real-time detection and matching, built using Python.",
  image: "/portfolio-4.jpg?height=400&width=100%",
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
    title: "Tic-tac-toe",
    description: "A fun and responsive Tic-tac-toe game playable on modern browsers.",
    image: "/t1.png",
    link: "https://stunning-kleicha-49c0e8.netlify.app/",
    category: "Web Game"
  },
  {
    title: "whacamacole_game",
    description: "Whac-A-Mole style mini-game using DOM manipulation and event handling.",
    image: "/portfolio-2.jpg",
    link: "https://github.com/dhvani1215/whacamacole_game",
    category: "Web Game"
  },
  {
    title: "Aditi",
    description: "A beautiful portfolio webpage with interactive UI built for branding.",
    image: "/Aditi.png",
    link: "https://lvgs3033.github.io/Bestysis/",
    category: "Web App"
  },
  {
    title: "Jokes",
    description: "A random joke generator that fetches jokes from an external API.",
    image: "/joke.png",
    link: "https://lvgs3033.github.io/Joke-generator/",
    category: "Web App"
  },
  {
    title: "Love Calculator",
    description: "Fun love compatibility calculator based on names, just for entertainment!",
    image: "/lc.png",
    link: "https://lvgs3033.github.io/Love-Calulator/",
    category: "Web App"
  },


]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900 dark:to-rose-900 transition-all duration-500">
      <Header />
      <main className="pt-20 px-6">
        <section id="all-projects" className="py-20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                All <span className="text-pink-600 dark:text-pink-400">Projects</span>
              </h2>
              <div className="w-20 h-1 bg-pink-600 mx-auto mb-8"></div>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore my complete collection of projects, showcasing diverse skills in web development, data science,
                AI/ML, and software engineering.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project, index) => (
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
              <Link href="/" passHref scroll={true}>
                <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  <ArrowLeft className="mr-2 h-4 w-4" /> {/* Added ArrowLeft icon */}
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
