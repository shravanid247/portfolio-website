"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Music, Camera, Code, Book, Palette, Coffee, Gamepad, Plane } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Hobby icons with positions for horizontal layout
  const hobbyIcons = [
    { icon: <Code size={24} />, label: "Coding", delay: "0.1s", color: "text-blue-400" },
    { icon: <Camera size={24} />, label: "Photography", delay: "0.2s", color: "text-cyan-400" },
    { icon: <Music size={24} />, label: "Music", delay: "0.3s", color: "text-indigo-400" },
    { icon: <Book size={24} />, label: "Reading", delay: "0.4s", color: "text-teal-400" },
    { icon: <Palette size={24} />, label: "Art", delay: "0.5s", color: "text-purple-400" },
    { icon: <Coffee size={24} />, label: "Coffee", delay: "0.6s", color: "text-amber-400" },
    { icon: <Gamepad size={24} />, label: "Gaming", delay: "0.7s", color: "text-red-400" },
    { icon: <Plane size={24} />, label: "Travel", delay: "0.8s", color: "text-green-400" },
  ]

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className={`${isVisible ? "slide-in-left" : "opacity-0"} transition-opacity duration-1000`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Shravani Dandekar
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
          Hey there! Welcome to my creative space—where design, development, and creativity come together to create meaningful experiences.
          </p>
          <div className="flex space-x-4 mb-10">
            <a
              href="#about"
              className="px-6 py-3 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-blue-500 rounded-full text-white font-medium hover:bg-blue-500/10 transition-colors"
            >
              Get In Touch
            </a>
          </div>

          {/* Hobbies section below buttons */}
          <div
            className="relative mt-4 py-3 px-4 rounded-lg border border-blue-500/30 bg-[#112240]/30 cursor-pointer transition-all duration-300 hover:bg-[#112240]/50"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <p className="text-sm text-center text-cyan-400 font-medium">
              {isHovering ? "These are some of my interests!" : "Hover to discover my hobbies"}
            </p>

            {/* Hobby icons container */}
            <div
              className={`
              mt-4 grid grid-cols-4 sm:grid-cols-8 gap-4 transition-all duration-500
              ${isHovering ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"}
            `}
            >
              {hobbyIcons.map((hobby, index) => (
                <div
                  key={index}
                  className={`
                    ${hobby.color} flex flex-col items-center justify-center
                    transition-all duration-500 floating
                  `}
                  style={{
                    transitionDelay: isHovering ? hobby.delay : "0s",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="bg-[#112240] p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                    {hobby.icon}
                  </div>
                  <span className="text-xs mt-1 font-medium whitespace-nowrap">{hobby.label}</span>
                </div>
              ))}
            </div>

            {/* Decorative particles */}
            {isHovering && (
              <>
                {[...Array(20)].map((_, i) => (
                  <div
                    key={`particle-${i}`}
                    className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/70"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.7 + 0.3,
                      transform: "scale(0)",
                      animation: `particleAnimation 2s ease-out forwards`,
                      animationDelay: `${Math.random() * 0.5}s`,
                    }}
                  />
                ))}
              </>
            )}
          </div>
        </div>

        <div
          className={`${isVisible ? "slide-in-right" : "opacity-0"} transition-opacity duration-1000 flex justify-center`}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-1">
            <div className="absolute inset-1 rounded-full overflow-hidden bg-gray-900">
              <img
                src="/shravani.jpg"
                alt="Shravani Dandekar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <ArrowDown size={24} />
        </a>
      </div>
    </div>
  )
}

