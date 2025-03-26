"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, School, Building, Star, Sparkles } from "lucide-react"

export default function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSchool, setActiveSchool] = useState<number | null>(null)
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

  const schools = [
    {
      name: "Fr. Conceicao Rodrigues College of Engineering",
      period: "2024 - Present",
      degree: "Bachelor of Technology",
      field: "Computer Engineering",
      description:
        "Currently pursuing undergraduate studies with focus on software development, AI, and system architecture.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-blue-600 to-cyan-400",
      position: { top: "10%", left: "75%" },
      size: "w-32 h-32",
      delay: 0.3,
    },
    {
      name: "Sheth Vidya Mandir College",
      period: "2022 - 2024",
      degree: "Higher Secondary Education",
      field: "Science & Mathematics",
      description: "Completed HSC with distinction, focusing on Physics, Chemistry, Mathematics and Computer Science.",
      icon: <Building className="w-6 h-6" />,
      color: "from-cyan-500 to-teal-400",
      position: { top: "40%", left: "25%" },
      size: "w-28 h-28",
      delay: 0.5,
    },
    {
      name: "St. Francis De Sales School and College",
      period: "2007 - 2022",
      degree: "Secondary Education",
      field: "General Education",
      description:
        "Completed primary and secondary education with excellence in academics and extracurricular activities.",
      icon: <School className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-400",
      position: { top: "65%", left: "50%" }, // Adjusted position to be more centered and visible
      size: "w-24 h-24",
      delay: 0.7,
    },
  ]

  return (
    <div ref={sectionRef} className="w-full">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
       Academic{" "}
        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Journey</span>
      </h2>

      <div className={`${isVisible ? "fade-in" : "opacity-0"} transition-opacity duration-1000`}>
        {/* Desktop version - Constellation */}
        <div className="hidden md:block relative h-[600px] bg-[#0a192f]/50 rounded-xl p-6 overflow-hidden border border-blue-900/30">
          {/* Stars background */}
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}

          {/* Connecting lines - Updated to match new positions */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            <line x1="75%" y1="10%" x2="25%" y2="40%" className="stroke-blue-500/30 stroke-2" strokeDasharray="5,5" />
            <line x1="25%" y1="40%" x2="50%" y2="65%" className="stroke-blue-500/30 stroke-2" strokeDasharray="5,5" />
          </svg>

          {/* Education planets */}
          {schools.map((school, index) => (
            <div
              key={index}
              className={`
                absolute ${school.size} rounded-full bg-gradient-to-br ${school.color} p-1
                flex items-center justify-center cursor-pointer transition-all duration-500
                hover:scale-110 z-10
              `}
              style={{
                top: school.position.top,
                left: school.position.left,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0)",
                transitionDelay: `${school.delay}s`,
                boxShadow: `0 0 20px rgba(0, 200, 255, 0.5), 0 0 40px rgba(0, 200, 255, 0.2)`,
              }}
              onMouseEnter={() => setActiveSchool(index)}
              onMouseLeave={() => setActiveSchool(null)}
            >
              <div className="absolute inset-1 rounded-full bg-[#0a192f] flex items-center justify-center">
                {school.icon}
              </div>

              {/* Info card that appears on hover - Adjusted positioning for better visibility */}
              {activeSchool === index && (
                <div
                  className="absolute p-4 bg-[#112240] rounded-lg border border-blue-500/30 shadow-xl z-20 w-64"
                  style={{
                    top: index === 2 ? "auto" : "110%", // For St. Francis, position above instead of below
                    bottom: index === 2 ? "110%" : "auto", // For St. Francis, position above
                    left: "50%",
                    transform: "translateX(-50%)",
                    animation: "fadeIn 0.3s ease-out forwards",
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-[#112240] p-1 rounded-full border border-blue-500/30">
                      <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{school.name}</h3>
                  <p className="text-sm text-cyan-400 mb-2">{school.period}</p>
                  <p className="text-sm font-medium mb-1">{school.degree}</p>
                  <p className="text-sm text-gray-400 mb-2">{school.field}</p>
                  <p className="text-xs">{school.description}</p>
                </div>
              )}
            </div>
          ))}

          {/* Decorative elements */}
          <div className="absolute top-1/4 right-1/4 animate-pulse">
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 animate-pulse" style={{ animationDelay: "1s" }}>
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </div>

          {/* Instruction text */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <p className="text-sm text-gray-400">Hover over the cosmic bodies to explore my educational journey</p>
          </div>
        </div>

        {/* Mobile version - Timeline */}
        <div className="md:hidden space-y-6">
          {schools.map((school, index) => (
            <div
              key={index}
              className={`
                bg-[#112240]/50 rounded-lg p-5 border border-blue-900/30
                transform transition-all duration-500
              `}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                transitionDelay: `${index * 0.2}s`,
              }}
            >
              <div className="flex items-center mb-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${school.color} p-1 mr-4 flex-shrink-0`}>
                  <div className="rounded-full bg-[#0a192f] h-full w-full flex items-center justify-center">
                    {school.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold">{school.name}</h3>
                  <p className="text-sm text-cyan-400">{school.period}</p>
                </div>
              </div>
              <div className="ml-16">
                <p className="font-medium mb-1">{school.degree}</p>
                <p className="text-sm text-gray-400 mb-2">{school.field}</p>
                <p className="text-sm">{school.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

