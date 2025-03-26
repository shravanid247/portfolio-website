"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Palette, Camera, Music, Drum  } from "lucide-react"

import { Moon_Dance } from "next/font/google"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
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
  const skills = [
    { name: "Web Development", icon: <Code className="w-6 h-6" /> },
    { name: "Design", icon: <Palette className="w-6 h-6" /> },
    { name: "Dance", icon: < Drum className="w-6 h-6" /> },
    { name: "Photography", icon: <Camera className="w-6 h-6" /> },
    { name: "Music", icon: <Music className="w-6 h-6" /> },
    
  ];
  
  return (
    <div ref={sectionRef} className="w-full">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className={`${isVisible ? "slide-in-left" : "opacity-0"} transition-opacity duration-1000`}>
          <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
          <p className="text-gray-300 mb-6">
            I'm Shravani Dandekar, a passionate creative professional with expertise in multiple disciplines. I believe
            in creating meaningful experiences through my work that resonate with people.
          </p>
          <p className="text-gray-300 mb-6">
            I bring a unique perspective to every project I work on. My
            goal is to blend aesthetics with functionality to deliver exceptional results.
          </p>
          <p className="text-gray-300">
            When I'm not working, you can find me exploring new places, capturing moments through my camera, or
            experimenting with new creative techniques.
          </p>
        </div>

        <div className={`${isVisible ? "slide-in-right" : "opacity-0"} transition-opacity duration-1000`}>
          <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#112240]/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-medium">{skill.name}</h4>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                    style={{ width: `${75 + index * 5}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


