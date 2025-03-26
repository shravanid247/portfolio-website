"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "@/components/loading-screen"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Timeline from "@/components/timeline"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a192f] to-black text-white">
      <Navbar />
      <div className="container mx-auto px-4">
        <section id="home" className="min-h-screen flex items-center">
          <Hero />
        </section>

        <section id="about" className="min-h-screen py-20">
          <About />
        </section>

        <section id="education" className="min-h-screen py-20">
          <Education />
        </section>

        <section id="timeline" className="min-h-screen py-20">
          <Timeline />
        </section>

        <section id="gallery" className="min-h-screen py-20">
          <Gallery />
        </section>

        <section id="contact" className="min-h-screen py-20">
          <Contact />
        </section>
      </div>
    </main>
  )
}

