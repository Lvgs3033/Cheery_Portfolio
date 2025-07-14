"use client"

import { ExternalLink, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const allCertificates = [
  {
    title: "Google Cloud Skillboost",
    issuer: "Google Cloud",
    description: "Completed various cloud computing and data analytics courses with hands-on labs.",
    image: "/c1.png?height=200&width=300",
    link: "https://www.cloudskillsboost.google/public_profiles/2a953300-883e-4739-82d6-ed61cb7493d1",
    color: "from-blue-500 to-green-500",
  },
  {
    title: "Data Science & Analytics",
    issuer: "HP",
    description: "Comprehensive program covering data analysis, machine learning, and statistical methods.",
    image: "/c2.png?height=200&width=300",
    link: "https://drive.google.com/file/d/1hRB27j6P7jfzQF_RJbky091rFOjLmoSE/view?usp=drive_link",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Generative AI",
    issuer: "Google Cloud",
    description: "Advanced course on generative artificial intelligence and machine learning models.",
    image: "/c3.png?height=200&width=300",
    link: "https://drive.google.com/file/d/1o3RziidgL59MHmsBmaUKxu5KtRYrwy1Z/view?usp=drive_link",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Web Development",
    issuer: "Google Developer group",
    description: "Full-stack web development certification covering modern frameworks and technologies.",
    image: "/c4.png?height=200&width=300",
    link: "https://drive.google.com/file/d/1RAgg3PX3Euo7lNQsBrQMeQzwxW0YHn05/view?usp=drive_link",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Blockchain Technology",
    issuer: "Cyfrin updraft",
    description: "Comprehensive understanding of blockchain technology and cryptocurrency systems.",
    image: "/c5.png?height=200&width=300",
    link: "https://drive.google.com/file/d/1oEXRvUVgTfiPazR5U-sRBTFGL0B6U-cp/view?usp=drive_link",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Natural Language Processing",
    issuer: "Microsoft",
    description: "Advanced NLP techniques and applications in modern AI systems.",
    image: "/c6.png?height=200&width=300",
    link: "https://drive.google.com/file/d/1N-QNCk54lM3luzfcEOgcPL76VVKB8Kvk/view?usp=drive_link",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Ruby",
    issuer: "Infosys",
    description: "Advanced NLP techniques and applications in modern AI systems.",
    image: "/c7.png?height=200&width=300",
    link: "https://drive.google.com/file/d/1SdDnU21QBl7GEGmhfvD1AngDJfgcNXQI/view?usp=drive_link",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Cybersecurity",
    issuer: "JP Morgan",
    description: "All cybersecurity tools and techniques to protect against cyber threats.",
    image: "/c8.png?height=200&width=300",
    link: "https://drive.google.com/file/d/1f0yjsVs-ZBu6tXoUpS2J1zl1cYCTN5Hc/view?usp=drive_link",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Web development workshop",
    issuer: "Micorsoft",
    description: "Advanced NLP techniques and applications in modern AI systems.",
    image: "/c9.png?height=200&width=300",
    link: "https://drive.google.com/file/d/1REH_mtCRcmupwynTthYMuHpQztr1E-X5/view?usp=drive_link",
    color: "from-green-500 to-teal-500",
  },
]

export default function Certificates() {
  const displayedCertificates = allCertificates.slice(0, 6) // Show only the first 6 certificates

  return (
    <section id="certificates" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-pink-600 dark:text-pink-400">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements that showcase my continuous learning and expertise in various
            technologies.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCertificates.map((cert, index) => (
            <div
              key={cert.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className={`h-32 bg-gradient-to-r ${cert.color} flex items-center justify-center`}>
                  <Award className="text-white" size={48} />
                </div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold transform rotate-12">
                  Certified
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-pink-600 dark:text-pink-400 font-medium text-sm mb-3">{cert.issuer}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{cert.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 bg-transparent"
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/certificates" passHref scroll={true}>
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              View All Certificates
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
