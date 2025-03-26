"use client"

import { useEffect, useRef, useState } from "react"
import { Terminal, Bug, Globe, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"

export default function Timeline() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeYear, setActiveYear] = useState<string | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

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

  const scrollTimeline = (direction: "left" | "right") => {
    if (timelineRef.current) {
      const scrollAmount = 300
      timelineRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const timelineItems = [
    {
      year: "2018",
      title: "The Spark ⚡",
      subtitle: "First Encounter with Tech",
      icon: <Terminal className="w-6 h-6" />,
      content: [
        "Got curious about how computers work and started exploring basic tech concepts.",
        "Played around with gadgets, circuits, and troubleshooting tech issues at home.",
      ],
      creativeElement: (
        <div className="mt-4 bg-black/30 p-3 rounded-md font-mono text-xs sm:text-sm">
          <div className="terminal-text">
            <span className="text-green-400">$ </span>
            <span className="typing-animation">hello_world.exe</span>
            <div className="mt-1 text-cyan-400">Initializing tech journey...</div>
            <div className="mt-1 text-cyan-400">Loading passion for technology...</div>
            <div className="mt-1 text-green-400">System ready!</div>
          </div>
        </div>
      ),
    },
    {
      year: "2021",
      title: "First Code, First Bugs 🐞",
      subtitle: "Hello, World! & Debugging Woes",
      icon: <Bug className="w-6 h-6" />,
      content: [
        "Wrote your first-ever C++ code.",
        "Faced syntax errors & debugging struggles but learned problem-solving.",
      ],
      creativeElement: (
        <div className="mt-4 bg-blue-500/10 border border-blue-500/30 p-3 rounded-md">
          <div className="text-center font-medium text-cyan-400">
            Fun Fact: Shravani vs. Semicolon Errors: A Never-Ending Battle!
          </div>
        </div>
      ),
    },
    {
      year: "2022",
      title: "Exploring Tech 🌐",
      subtitle: "Diving Into Real Projects & Broadening Horizons",
      icon: <Globe className="w-6 h-6" />,
      content: ["Discovered hackathons & tech communities, got inspired to compete."],
      creativeElement: (
        <div className="mt-4 bg-gray-800/50 border border-cyan-500/30 p-3 rounded-md">
          <div className="text-sm text-cyan-400 mb-2">Fun with Code:</div>
          <div className="relative bg-black/70 p-2 rounded-md text-gray-300 text-xs font-mono">
            <pre>
              <code>
                {"// First Code Ever\n"}
                {'#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello, World!";\n  return 0;\n}'}
              </code>
            </pre>
            <div className="text-center my-2 text-sm text-gray-400">⬇️ VS ⬇️</div>
            <pre>
              <code>
                {"// Now Playing with AI 🤖\n"}
                {"import openai\n"}
                {'response = openai.Completion.create(\n'}
                {'  engine="davinci",\n'}
                {'  prompt="Tell me a joke",\n'}
                {'  max_tokens=50\n'}
                {')\n'}
                {'print(response["choices"][0]["text"])'}
              </code>
            </pre>
          </div>
        </div>
      ),
    },
    {
      year: "2024",
      title: "AI, Hackathons & Internwallah 🔥",
      subtitle: "Current Achievements & Future Goals",
      icon: <Sparkles className="w-6 h-6" />,
      content: [
        "Built AITALKS, a mental health app powered by AI, aligned with UN SDGs.",
        "Led a GDSC Bit-N-Build hackathon team and gained valuable experience and Started working on INTERNWALLAH, an internship platform for students.",
        "Build an website involving python project called as FESTCHRONICLES.",
        "Got deeply involved in tech communities & networking opportunities.",
      ],
      creativeElement: (
        <div className="mt-4">
          <div className="text-sm text-cyan-400 mb-2">Future Vision:</div>
          <div className="relative h-6 bg-gray-800/50 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 opacity-30"></div>
            <div className="absolute h-full w-3/4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 rounded-full">
              <div className="absolute right-0 top-0 h-full w-4 bg-white/20 animate-pulse"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
              55% Complete - Next: Full Stack Developer
            </div>
          </div>
        </div>
      ),
      creativeElement2: (
        <div className="mt-4">
          <div className="text-sm text-cyan-400 mb-2">AITALK Projects:</div>
          <div className="relative h-32 bg-gray-800/50 rounded-md overflow-hidden">
            <div
              className="absolute inset-0 flex transition-transform duration-500"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {[1, 2, 3].map((num) => (
                <div key={num} className="min-w-full h-full flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="font-medium mb-1">Project {num}</div>
                    <div className="text-sm text-gray-400">
                      {num === 1 ? "Personal Website" : num === 2 ? "Weather App" : "Task Manager"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setActiveSlide((prev) => Math.max(0, prev - 1))}
              disabled={activeSlide === 0}
              className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/50 flex items-center justify-center text-white disabled:opacity-30"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={() => setActiveSlide((prev) => Math.min(2, prev + 1))}
              disabled={activeSlide === 2}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/50 flex items-center justify-center text-white disabled:opacity-30"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div ref={sectionRef} className="w-full">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My Tech{" "}
        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Evolution</span>
      </h2>

      <div className={`${isVisible ? "fade-in" : "opacity-0"} transition-opacity duration-1000`}>
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => scrollTimeline("left")}
              className="w-10 h-10 rounded-full bg-[#112240] flex items-center justify-center text-white hover:bg-blue-600/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <h3 className="text-xl font-medium">Timeline</h3>
            <button
              onClick={() => scrollTimeline("right")}
              className="w-10 h-10 rounded-full bg-[#112240] flex items-center justify-center text-white hover:bg-blue-600/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Timeline Navigation */}
          <div ref={timelineRef} className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {timelineItems.map((item) => (
              <button
                key={item.year}
                onClick={() => setActiveYear(activeYear === item.year ? null : item.year)}
                className={`flex-shrink-0 px-6 py-3 rounded-full transition-colors ${
                  activeYear === item.year
                    ? "bg-blue-600 text-white"
                    : "bg-[#112240] text-gray-300 hover:bg-blue-600/20"
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>

          {/* Timeline Content */}
          <div className="mt-8">
            {activeYear ? (
              <div className="bg-[#112240]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                {timelineItems.map(
                  (item) =>
                    item.year === activeYear && (
                      <div key={item.year} className="animate-fadeIn">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-gray-400">{item.subtitle}</p>
                          </div>
                        </div>

                        <div className="ml-16">
                          <h4 className="text-sm font-medium text-cyan-400 mb-2">What Happened?</h4>
                          <ul className="space-y-2 mb-4">
                            {item.content.map((point, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-cyan-400 mr-2">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>

                          <h4 className="text-sm font-medium text-cyan-400 mb-2">Creative Touch:</h4>
                          {item.creativeElement}
                        </div>
                      </div>
                    ),
                )}
              </div>
            ) : (
              <div className="bg-[#112240]/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800 text-center">
                <p className="text-lg text-gray-300">Select a year to view details about that milestone</p>
                <div className="mt-4 flex justify-center">
                  <div className="inline-flex space-x-2">
                    {timelineItems.map((item) => (
                      <div
                        key={item.year}
                        className="w-3 h-3 rounded-full bg-blue-500/50 animate-pulse"
                        style={{ animationDelay: `${(Number.parseInt(item.year) % 10) * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

