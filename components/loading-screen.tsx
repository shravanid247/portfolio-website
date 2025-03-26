"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [showName, setShowName] = useState(false)
  const name = "SHRAVANI DANDEKAR"

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(true)
    }, 1500)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 25)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="w-64 h-1 bg-gray-800 rounded-full mb-8 overflow-hidden">
        <div className="loading-bar" style={{ width: `${progress}%` }}></div>
      </div>

      {showName && (
        <div className="text-center">
          {name.split("").map((letter, index) => (
            <span
              key={index}
              className="letter text-4xl md:text-6xl font-bold text-white"
              style={{
                animationDelay: `${index * 0.1}s`,
                background: "linear-gradient(90deg, #0a192f, #64ffda)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

