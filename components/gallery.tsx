"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "FESTCHRONICLES",
      category: "Web Design",
      image: "/FESTCHRONICLES.png",
      description: "A web-based platform integrating a Python project for event management with an intuitive user experience.",
    },
    {
      title: "AITALKS",
      category: "AI & Mental Health",
      image: "/AITALKS.png",
      description: "An AI-powered mental health app aligned with UN SDGs, providing support and guidance for users."
    },
    {
      title: "INTERNWALLAH",
      category: "Internship Platform",
      image: "/INTERNWALLAH.png",
      description: "A student-focused internship platform designed to connect students with valuable opportunities."
    },
    
    {
      title: "Photography Collection",
      category: "Photography",
      image: "/photo1.png",
      description: "Captured the rhythmic dance of ocean waves, blending light and motion to reflect nature's raw beauty and endless depth.",
    },
    {
      title: "Guitar Mastery",
      category: "Music",
      image: "/image1.png",
      description: "Expressing creativity through soulful guitar melodies, blending rhythm and technique to create captivating tunes.",
    },
 
    {
      title: "Anchoring",
      category: "Public Speaking",
      image: "/anchor.png",
      description: "Bringing energy and confidence to the stage, keeping the audience engaged with a lively and natural flow."
    }
    

    
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <div ref={sectionRef} className="w-full">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Portfolio</span>
      </h2>

      <div className={`${isVisible ? "fade-in" : "opacity-0"} transition-opacity duration-1000 relative`}>
        {/* Featured Project Slider */}
        <div className="relative overflow-hidden rounded-xl shadow-xl mb-12">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-full">
                <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh]">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                    <span className="text-cyan-400 text-sm font-medium mb-2">{project.category}</span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 max-w-2xl">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        </div>

        {/* Project Grid */}
        {/*div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <p className="text-sm text-gray-300">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        */}
      </div>
    </div>
  )
}


