"use client"

import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const allBlogPosts = [
  {
    title: "Learn JavaScript - in fun way!",
    excerpt:
      "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
    author: "Dhvani Kakadiya",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "JavaScript",
    link: "https://github.com/Lvgs3033/Material",
  },
  {
    title: "Java - in fun way!",
    excerpt:
      "Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.",
    author: "Dhvani Kakadiya",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Java",
    link: "https://github.com/Lvgs3033/Material",
  },
  {
    title: "DSA - in fun way!",
    excerpt:
      "Data Structures and Algorithms (DSA) is a fundamental part of Computer Science that teaches you how to think and solve complex problems systematically. Using the right data structure and algorithm makes your program run faster, especially when working with lots of data.",
    author: "Dhvani Kakadiya",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "DSA",
    link: "https://github.com/Lvgs3033/Material",
  },
  {
    title: "Android Development - in fun way!",
    excerpt:
      "Android is a software package and linux based operating system for mobile devices such as tablet computers and smartphones.",
    author: "Dhvani Kakadiya",
    date: "2024-01-01",
    readTime: "8 min read",
    category: "Android",
    link: "https://github.com/Lvgs3033/Material",
  }
]


export default function Blog() {
  const displayedBlogPosts = allBlogPosts.slice(0, 6) // Show only the first 6 blog posts

  return (
    <section id="blog" className="py-20 px-6 bg-white/50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-pink-600 dark:text-pink-400">Blog</span>
          </h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on programming, technology, and software development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedBlogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/30 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <User size={14} className="mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 dark:hover:bg-pink-900/30 p-2"
                  >
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      <ArrowRight size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/blog" passHref scroll={true}>
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
