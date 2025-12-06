"use client"

import { useEffect, useRef, useState } from "react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const technicalSkills = [
    { name: "Frontend", percentage: 95, color: "bg-orange-500" },
    { name: "Backend", percentage: 65, color: "bg-blue-500" },
    { name: "Mern stack", percentage: 70, color: "bg-yellow-500" },
    { name: "Java", percentage: 70, color: "bg-red-500" },
    { name: "Python", percentage: 80, color: "bg-green-500" },
    { name: "Flutter", percentage: 40, color: "bg-cyan-500" },
    { name: "C/C++", percentage: 70, color: "bg-red-500" },
  ]

  const professionalSkills = [
    { name: "AI/ML", percentage: 90 },
    { name: "Data Science", percentage: 70 },
    { name: "DSA,oops", percentage: 80 },
    { name: "Web Development", percentage: 80 },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-pink-600 dark:text-pink-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 text-center">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-pink-600 dark:text-pink-400 font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{
                        width: isVisible ? `${skill.percentage}%` : "0%",
                        transitionDelay: `${index * 0.1}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 text-center">
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {professionalSkills.map((skill, index) => (
                <div key={skill.name} className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-gray-200 dark:text-gray-700"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                        className="text-pink-600 dark:text-pink-400"
                        strokeDasharray={`${2 * Math.PI * 50}`}
                        strokeDashoffset={
                          isVisible ? `${2 * Math.PI * 50 * (1 - skill.percentage / 100)}` : `${2 * Math.PI * 50}`
                        }
                        style={{
                          transition: "stroke-dashoffset 1s ease-out",
                          transitionDelay: `${index * 0.2}s`,
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">{skill.percentage}%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
