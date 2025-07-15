"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Upload } from "lucide-react"

export default function CreatePostPage() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    hashtags: "", // Comma-separated string
    stories: "",
  })
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverImage(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In a real application, you would send this data to a backend API
    console.log("New Post Data:", {
      ...formData,
      coverImage: coverImage ? coverImage.name : "No image uploaded",
    })

    await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate API call

    alert("Post created successfully! (This is a demo, no actual post was saved.)")

    setFormData({
      title: "",
      author: "",
      hashtags: "",
      stories: "",
    })
    setCoverImage(null)
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900 dark:to-rose-900 transition-all duration-500">
      <Header />
      <main className="pt-20 px-6">
        <section id="create-post" className="py-20">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Create <span className="text-pink-600 dark:text-pink-400">New Post</span>
              </h2>
              <div className="w-20 h-1 bg-pink-600 mx-auto mb-8"></div>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Share your insights and stories with the community.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Blog Title *
                </label>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-pink-200 dark:border-pink-700 focus:border-pink-600 dark:focus:border-pink-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Author Name *
                </label>
                <Input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-pink-200 dark:border-pink-700 focus:border-pink-600 dark:focus:border-pink-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Cover Image Upload
                </label>
                <div className="flex items-center space-x-4">
                  <Input
                    type="file"
                    id="coverImage"
                    name="coverImage"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="block w-full text-sm text-gray-500 dark:text-gray-400
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-pink-50 file:text-pink-700
                      hover:file:bg-pink-100 dark:file:bg-pink-900 dark:file:text-pink-300 dark:hover:file:bg-pink-800"
                  />
                  {coverImage && <span className="text-gray-600 dark:text-gray-400 text-sm">{coverImage.name}</span>}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Max file size 5MB. JPG, PNG, GIF.</p>
              </div>

              <div>
                <label htmlFor="hashtags" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Hashtags (comma-separated)
                </label>
                <Input
                  type="text"
                  id="hashtags"
                  name="hashtags"
                  value={formData.hashtags}
                  onChange={handleChange}
                  placeholder="#javascript, #webdev, #ai"
                  className="w-full px-4 py-3 rounded-lg border-2 border-pink-200 dark:border-pink-700 focus:border-pink-600 dark:focus:border-pink-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="stories" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Stories *
                </label>
                <Textarea
                  id="stories"
                  name="stories"
                  value={formData.stories}
                  onChange={handleChange}
                  required
                  rows={10}
                  className="w-full px-4 py-3 rounded-lg border-2 border-pink-200 dark:border-pink-700 focus:border-pink-600 dark:focus:border-pink-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 resize-y"
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
                      Creating Post...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      Submit Post
                    </>
                  )}
                </Button>
              </div>
            </form>

            <div className="text-center mt-12">
              <Link href="/blog" passHref scroll={true}>
                <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Posts
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
