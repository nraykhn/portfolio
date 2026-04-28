'use client'

import { useEffect, useState } from 'react'
import '../app/components.css'

const techStack = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
  { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
  { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
  { name: 'Draw.io', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/drawio/drawio-original.svg' },
]

export default function Hero() {
  const [scrollIndex, setScrollIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prev) => (prev + 1) % techStack.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const visibleLogos = [
    techStack[(scrollIndex) % techStack.length],
    techStack[(scrollIndex + 1) % techStack.length],
    techStack[(scrollIndex + 2) % techStack.length],
  ]

  return (
    <header className="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-inner">
        <div className="hero-badge fade-up d1">Available for internships &amp; collaborations</div>
        <h1 className="fade-up d2">
          Building things<br />
          <span className="dim">that </span><span className="green">matter</span>
        </h1>
        <p className="hero-sub fade-up d3">
          Information Systems student at Universitas Indonesia. I work on data science,
          full-stack web apps, and UI/UX design — with a passion for creating clean,
          purposeful software.
        </p>
        <div className="hero-actions fade-up d4">
          <a href="#projects" className="btn-primary">View my work ↓</a>
          <a href="https://www.linkedin.com/in/nraykhn" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn →</a>
        </div>
        <div className="hero-carousel fade-up d5">
          <div className="carousel-mask">
            <div className="carousel-track">
              {[...techStack, ...techStack].map((tech, i) => (
                <div key={i} className="carousel-item">
                  <img src={tech.logo} alt={tech.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
