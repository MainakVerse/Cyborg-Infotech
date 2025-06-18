"use client"
import { useState } from "react"
import Link from "next/link"
const roadmapSteps = [
  {
    id: 1,
    title: "Planning & Strategy",
    description: "Define project goals, requirements, and create a comprehensive development strategy",
    icon: "🎯",
    position: "top",
    color: "from-violet-500 to-purple-600",
    bgColor: "from-violet-500/10 to-purple-600/10",
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description: "Create wireframes, mockups, and interactive prototypes for user experience",
    icon: "🎨",
    position: "bottom",
    color: "from-blue-500 to-cyan-600",
    bgColor: "from-blue-500/10 to-cyan-600/10",
  },
  {
    id: 3,
    title: "Development Setup",
    description: "Set up development environment, choose tech stack, and initialize project structure",
    icon: "⚙️",
    position: "top",
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-500/10 to-teal-600/10",
  },
  {
    id: 4,
    title: "Core Development",
    description: "Build main features, implement business logic, and integrate essential components",
    icon: "💻",
    position: "bottom",
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-500/10 to-red-600/10",
  },
  {
    id: 5,
    title: "Testing & QA",
    description: "Perform comprehensive testing, bug fixes, and quality assurance processes",
    icon: "🔍",
    position: "top",
    color: "from-pink-500 to-rose-600",
    bgColor: "from-pink-500/10 to-rose-600/10",
  },
  {
    id: 6,
    title: "Launch & Deployment",
    description: "Deploy to production, monitor performance, and provide ongoing maintenance",
    icon: "🚀",
    position: "bottom",
    color: "from-indigo-500 to-purple-600",
    bgColor: "from-indigo-500/10 to-purple-600/10",
  },
]

const Roadmap = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <section id="roadmap" className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 size-96 animate-pulse rounded-full bg-violet-500/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 size-96 animate-pulse rounded-full bg-cyan-500/20 blur-3xl delay-1000"></div>
        <div className="absolute left-1/2 top-1/2 h-px w-[800px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2">
            <span className="size-2 animate-pulse rounded-full bg-violet-500"></span>
            <span className="text-sm font-medium text-violet-300">Development Process</span>
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            Development Roadmap
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-400">
            Your journey from concept to deployment, crafted with precision and expertise
          </p>
        </div>

        {/* Roadmap */}
        <div className="relative">
          {/* Desktop Curved Path */}
          <div className="absolute inset-x-0 top-1/2 hidden h-px -translate-y-1/2 lg:block">
            <svg className="h-32 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="75%" stopColor="#10b981" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M0,60 Q200,30 400,60 T800,60 Q1000,90 1200,60"
                stroke="url(#pathGradient)"
                strokeWidth="2"
                fill="none"
                filter="url(#glow)"
                className="drop-shadow-lg"
              />
              {/* Animated dots */}
              <circle r="3" fill="#8b5cf6" className="opacity-80">
                <animateMotion dur="8s" repeatCount="indefinite">
                  <mpath href="#path"/>
                </animateMotion>
              </circle>
            </svg>
          </div>

          {/* Mobile Vertical Path */}
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 lg:hidden">
            <div className="size-full bg-gradient-to-b from-violet-500 via-cyan-500 to-violet-500 opacity-50"></div>
          </div>

          {/* Steps Grid */}
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-6 lg:gap-4">
            {roadmapSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative ${step.position === "bottom" ? "lg:mt-32" : "lg:mt-0"}`}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              >
                {/* Step Number Badge */}
                <div className={`
                  absolute -top-6 left-1/2 flex size-12 -translate-x-1/2 items-center justify-center rounded-full
                  bg-gradient-to-r lg:relative lg:top-0 lg:mx-auto lg:mb-6 ${step.color} z-20 text-lg font-bold text-white
                  shadow-lg transition-all duration-300
                  ${hoveredStep === step.id ? 'scale-110 shadow-2xl' : ''}
                  ${activeStep === step.id ? 'scale-125 shadow-2xl' : ''}
                `}>
                  {step.id}
                </div>

                {/* Step Card */}
                <div className={`
                  group relative cursor-pointer overflow-hidden rounded-3xl border transition-all duration-500
                  ${hoveredStep === step.id || activeStep === step.id 
                    ? 'scale-105 border-white/30 shadow-2xl shadow-violet-500/20' 
                    : 'border-white/10 hover:border-white/20'
                  }
                  bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl
                `}>
                  {/* Animated Background */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-0 transition-opacity duration-500
                    ${hoveredStep === step.id || activeStep === step.id ? 'opacity-100' : 'group-hover:opacity-50'}
                  `}></div>
                  
                  {/* Content */}
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className={`
                      mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br text-3xl ${step.bgColor} border border-white/10
                      transition-all duration-300
                      ${hoveredStep === step.id ? 'rotate-6 scale-110' : ''}
                    `}>
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 text-center text-xl font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-violet-200 group-hover:bg-clip-text group-hover:text-transparent">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className={`
                      text-center leading-relaxed text-slate-300 transition-all duration-500
                      ${activeStep === step.id ? 'text-white' : ''}
                    `}>
                      {step.description}
                    </p>

                    {/* Expanded Content */}
                    {activeStep === step.id && (
                      // eslint-disable-next-line tailwindcss/no-custom-classname
                      <div className="animate-in slide-in-from-top mt-6 border-t border-white/10 pt-6 duration-300">
                        <div className="flex items-center justify-center gap-2 text-sm text-violet-300">
                          <div className="size-2 animate-pulse rounded-full bg-violet-500"></div>
                          <span>Active Phase</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`
                    absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300
                    ${hoveredStep === step.id ? 'opacity-100' : ''}
                    bg-gradient-to-r ${step.color} -z-10 blur-xl
                  `}></div>
                </div>

                {/* Connection Dot for Mobile */}
                <div className="absolute left-1/2 top-1/2 z-30 size-4 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 lg:hidden"></div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="mt-20 flex justify-center">
            <div className="flex items-center gap-3">
              {roadmapSteps.map((step, index) => (
                <div
                  key={index}
                  className={`
                    h-2 cursor-pointer rounded-full transition-all duration-300
                    ${activeStep === step.id || hoveredStep === step.id 
                      ? `w-12 bg-gradient-to-r ${step.color}` 
                      : 'w-8 bg-white/20 hover:bg-white/40'
                    }
                  `}
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                ></div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          {/* Call to Action */}
<div className="mt-16 text-center">
  <Link href="/contacts" className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25">
    <span>Start Your Journey</span>
    <svg className="size-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
    <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 opacity-50 blur transition-opacity group-hover:opacity-75"></div>
  </Link>
</div>

        </div>
      </div>
    </section>
  )
}

export default Roadmap