"use client"

import { Calendar, MapPin, Mail, Phone, GraduationCap, User } from "lucide-react"

export default function About() {
  const personalInfo = [
    { icon: Calendar, label: "Birthday", value: "29 April 2005" },
    { icon: User, label: "Age", value: "20" },
    { icon: Mail, label: "Email", value: "dhvani1215@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9773001459" },
    { icon: GraduationCap, label: "Degree", value: "Computer Science" },
    { icon: MapPin, label: "City", value: "Surat, Gujarat" },
  ]

  const education = [
    {
      period: "2020-2021",
      title: "High School",
      institution: "Radiant International School",
      description:
        "Completed high schooling with science stream, focusing on mathematics and physics. Successfully cleared JEE competitive exam.",
    },
    {
      period: "2022-2026",
      title: "Bachelor in Computer Science",
      institution: "Gujarat Technological University (GTU), Surat",
      description:
        "Currently pursuing graduation in Computer Science with focus on programming, data structures, and software development.",
    },
  ]

  const experience = [
    {
      period: "2020-2025",
      title: "Started Programming Journey",
      description:"I started my first programming language during vacations. I had started with C++. I already knew about C, HTML, and CSS at that time. I learned about web development, data science, AI/ML, and Flutter a little bit.",
    },
    {
      period: "Jul'25 - Dec'25",
      title: "Internship at Canopas",
      description:
        "I was offered an internship as a AI/ML Engineer Intern at Canopas, a tech-driven company located in Surat. I complete my 6 months internship at canopas as an AI/ML engineer intern for learning real-world projects. During my internship I worked on real-world AI and automation projects where I applied machine learning concepts and software development practices. I gained hands-on experience using Python, OpenCV, PyAutoGUI, Flask, Django, NLP and Deep Learning frameworks. Applying my knowledge to real-world applications and solving practical, live problems.",
    }, {
      period: "April'25 - June'25",
      title: "Virtual Intern | ValutofCodes",
      description:
        "Worked on web applications by integrating APIs with interactive and dynamic user interfaces, gaining strong hands-on experience in full-stack development and intelligent system design. Built and optimized end-to-end features using HTML/CSS, JavaScript, React, and the MERN stack, focusing on clean UI workflows, efficient data handling, and scalable architecture.",
    },
  ]

  return (
    <section id="about" className="py-20 px-6 bg-white/50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About <span className="text-pink-600 dark:text-pink-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">I'm Dhvani Kakadiya...</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Hello! I'm Dhvani Kakadiya, a passionate software developer with a diverse skill set in programming. I love creating innovative solutions and exploring new technologies. I am pursuing bechlore degree in computer science engineering from GTU and has minor in data science. I'm excited to connect and collaborate on exciting projects!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="flex items-center space-x-3 p-3 bg-pink-50 dark:bg-pink-900/30 rounded-lg hover:shadow-md transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <info.icon className="text-pink-600 dark:text-pink-400" size={20} />
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">{info.label}:</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative animate-fade-in-right">
              <img
                src="/p2.png?height=400&width=400"
                alt="About Dhvani"
                className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-200 dark:bg-pink-700 rounded-full flex items-center justify-center animate-spin-slow">
                <span className="text-3xl">🌸</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-pink-600 dark:text-pink-400 mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-pink-200 dark:border-pink-700 last:border-l-0 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-pink-600 rounded-full"></div>
                  <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                    <span className="text-pink-600 dark:text-pink-400 font-medium text-sm">{edu.period}</span>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mt-1">{edu.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{edu.institution}</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-3">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold text-pink-600 dark:text-pink-400 mb-8">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-pink-200 dark:border-pink-700 last:border-l-0 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-pink-600 rounded-full"></div>
                  <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                    <span className="text-pink-600 dark:text-pink-400 font-medium text-sm">{exp.period}</span>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mt-1">{exp.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-3">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
