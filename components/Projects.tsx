'use client'

import '../app/components.css'

interface Project {
  image: string
  name: string
  desc: string
  tags: { label: string; icon: string; accent?: boolean }[]
}


const projects: Project[] = [
  {
    image: '/projects/elevfit.png',
    name: 'ElevFit — UI/UX',
    desc: 'Fitness app design with full UX process from research to usability testing.',
    tags: [
      { label: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-plain.svg', accent: true },
    ],
  },
  {
    image: '/projects/olehbali.png',
    name: 'OlehBali',
    desc: 'Web & mobile platform showcasing Balinese souvenir recommendations with auth and wishlist system.',
    tags: [
      { label: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', accent: true },
      { label: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-plain.svg' },
      { label: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain.svg' },
    ],
  },
  {image: '/projects/medichill.png',
    name: 'MediChill',
    desc: 'Secure medical consultation booking platform with appointment scheduling, medical record storage, and medication ordering.',
    tags: [
      { label: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', accent: true },
      { label: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg' },
      { label: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg'  },
    ],
  },
  {
    image: '/projects/sizopi.png',
    name: 'SizoPi',
    desc: 'Interactive SQL practice platform with real-time query feedback and ER diagram integration.',
    tags: [
      { label: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', accent: true },
      { label: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg' },
      { label: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-plain.svg' },
    ],
  },
  {
    image: '/projects/ml.png',
    name: 'Diamond Price ML',
    desc: 'End-to-end ML project covering EDA, regression, classification, and clustering.',
    tags: [
      { label: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg',  accent: true },
      { label: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-plain.svg' },
      { label: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-plain.svg' },   
    ],
  },
  {
    image: '/projects/travel.png',
    name: 'TravelAPAP',
    desc: 'Travel booking platform with loyalty system deployed on AWS with Docker.',
    tags: [
      { label: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/springboot/springboot-plain.svg', accent: true },
      { label: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-plain.svg' },
      { label: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aws/aws-plain.svg' },
      { label: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg' },
    ],
  },
  
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <div className="project-preview">
        {/* window header */}
        <div className="window-bar">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        <img src={project.image} alt={project.name} />
      </div>
      <div className="project-content">
        <div className="project-name">{project.name}</div>
        <p className="project-desc">{project.desc}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag.label} className={`tag ${tag.accent ? 'accent' : ''}`}>
              <img src={tag.icon} alt={tag.label} />
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      
    </div>
  )
}

export default function Projects() {
  return (
    <>
      <hr className="divider" />
      <section id="projects">
        <span className="section-tag">Work</span>
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-desc">
          From data science to web apps and UI — here’s what I’ve built.
        </p>

        <div className="projects-grid">
          {/* Cards */}
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}