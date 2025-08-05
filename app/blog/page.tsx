"use client"

import { Calendar, User, ArrowRight, ArrowLeft, Plus, Heart, MessageSquare, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState, useMemo } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import NavigationAlertPopup from "@/components/navigation-alert-popup" // Import the new popup component
import { useRouter } from "next/navigation" // Import useRouter

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


export default function BlogPage() {
  const router = useRouter()
  const [sortOption, setSortOption] = useState("newest")
  const [filterHashtag, setFilterHashtag] = useState("")
  const [showNavigationAlert, setShowNavigationAlert] = useState(false)

  const handleCreatePost = () => {
    setShowNavigationAlert(true)
    setTimeout(() => {
      setShowNavigationAlert(false)
      router.push("/create-post") // Navigate after the popup is shown
    }, 1500) // Show popup for 1.5 seconds before navigating
  }

  const handleLike = (title: string) => {
    alert(`You liked "${title}"! (Feature coming soon)`)
  }

  const handleComment = (title: string) => {
    alert(`You want to comment on "${title}"! (Feature coming soon)`)
  }

  const handleStar = (title: string) => {
    alert(`You starred "${title}"! (Feature coming soon)`)
  }

  const filteredAndSortedPosts = useMemo(() => {
    const filtered = allBlogPosts.filter((post) => {
      if (!filterHashtag) return true
      return post.hashtags.some((tag) => tag.toLowerCase().includes(filterHashtag.toLowerCase()))
    })

    switch (sortOption) {
      case "title-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "title-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title))
        break
      case "newest":
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
      case "oldest":
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        break
      case "likes-desc":
        filtered.sort((a, b) => b.likes - a.likes)
        break
      case "rating-desc":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        // Default to newest
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
    }
    return filtered
  }, [sortOption, filterHashtag])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900 dark:to-rose-900 transition-all duration-500">
      <Header />
      <main className="pt-20 px-6">
        <section id="all-blogs" className="py-20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                All <span className="text-pink-600 dark:text-pink-400">Blog Posts</span>
              </h2>
              <div className="w-20 h-1 bg-pink-600 mx-auto mb-8"></div>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Dive deeper into my thoughts and insights on programming, technology, and software development.
              </p>
              <div className="mt-8">
                <Button
                  onClick={handleCreatePost} // This will now trigger the custom popup
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Post
                </Button>
              </div>
            </div>

            {/* Filtering and Sorting Options */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 p-4 bg-pink-50 dark:bg-pink-900/30 rounded-lg shadow-inner">
              <div className="flex items-center gap-2 w-full md:w-auto">
                <label htmlFor="sort-by" className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                  Sort by:
                </label>
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger
                    id="sort-by"
                    className="w-[180px] bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-pink-200 dark:border-pink-700"
                  >
                    <SelectValue placeholder="Select sort option" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-pink-200 dark:border-pink-700">
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="title-asc">Title (A-Z)</SelectItem>
                    <SelectItem value="title-desc">Title (Z-A)</SelectItem>
                    <SelectItem value="likes-desc">Most Liked</SelectItem>
                    <SelectItem value="rating-desc">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <label htmlFor="filter-hashtag" className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                  Filter by Hashtag:
                </label>
                <Input
                  type="text"
                  id="filter-hashtag"
                  placeholder="e.g., javascript"
                  value={filterHashtag}
                  onChange={(e) => setFilterHashtag(e.target.value)}
                  className="w-[180px] bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-pink-200 dark:border-pink-700"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedPosts.length > 0 ? (
                filteredAndSortedPosts.map((post, index) => (
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
                      {/* New: Like, Comment, Star options */}
                      <div className="flex justify-around mt-4 pt-4 border-t border-pink-100 dark:border-pink-800/50">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
                          onClick={() => handleLike(post.title)}
                        >
                          <Heart size={18} className="mr-1" /> {post.likes} Likes
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
                          onClick={() => handleComment(post.title)}
                        >
                          <MessageSquare size={18} className="mr-1" /> 0 Comments
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
                          onClick={() => handleStar(post.title)}
                        >
                          <Star size={18} className="mr-1" /> {post.rating} Rating
                        </Button>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-full text-center text-gray-600 dark:text-gray-400 text-lg">
                  No blog posts found matching your criteria.
                </div>
              )}
            </div>

            <div className="text-center mt-12">
              <Link href="/" passHref scroll={true}>
                <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Custom Navigation Alert Popup */}
      <NavigationAlertPopup
        show={showNavigationAlert}
        message="Navigating to create a blog!"
        onClose={() => setShowNavigationAlert(false)}
      />
    </div>
  )
}
