'use client'

import '../app/components.css'

interface Project {
  image: string
  name: string
  desc: string
  tags: { label: string; icon: string; accent?: boolean }[]
  links?: { label: string; url: string }[]
}


const projects: Project[] = [
  {
    image: '/projects/elevfit.png',
    name: 'ElevFit — UI/UX',
    desc: 'Fitness app design with full UX process from research to usability testing.',
    tags: [
      { label: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', accent: true },
    ],
    links: [
      { label: 'Figma Prototype', url: 'https://www.figma.com/proto/c0HF0xa5xQtqdeVJZNf5Gt/Kelas-D_Template-5_PeduliPeduli?node-id=514-8767&t=fEn0MMhG2DmOZVKq-1&scaling=scale-down&content-scaling=fixed&page-id=13%3A3&starting-point-node-id=514%3A8719' },
    ],
  },
  {
    image: '/projects/olehbali.png',
    name: 'OlehBali',
    desc: 'Web & mobile platform showcasing Balinese souvenir recommendations with wishlist system.',
    tags: [
      { label: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', accent: true },
      { label: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      { label: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    ],
    links: [
      { label: 'Web Repository', url: 'https://github.com/Kelompok-A06/olehBali' },
      { label: 'Mobile Repository', url: 'https://github.com/Kelompok-A06/olehBali-Mobile' },
    ],
  },
  {image: '/projects/medichill.png',
    name: 'MediChill',
    desc: 'Secure medical consultation booking platform with appointment scheduling, medical record storage, and medication ordering.',
    tags: [
      { label: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', accent: true },
      { label: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { label: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg'  },
    ],
    links: [
      { label: 'Repository', url: 'https://github.com/nraykhn/medichill' },
    ],
  },
  {
    image: '/projects/sizopi.png',
    name: 'SizoPi',
    desc: 'Interactive SQL practice platform with real-time query and ER diagram integration.',
    tags: [
      { label: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', accent: true },
      { label: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg' },
      { label: 'Supabase', icon: '/supabase.png' },
    ],
    links: [
      { label: 'Repository', url: 'https://github.com/Basdat-A12/Sizopi-A-12' },
    ],
  },
  {
    image: '/projects/ml.png',
    name: 'Diamond Price ML',
    desc: 'End-to-end ML project covering EDA, regression, classification, and clustering.',
    tags: [
      { label: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',  accent: true },
      { label: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-plain.svg' },
      { label: 'Scikit-learn', icon: '/scikit.png' },   
    ],
  },
  {
    image: '/projects/travel.png',
    name: 'TravelAPAP',
    desc: 'Travel booking platform with loyalty system deployed on AWS with Docker.',
    tags: [
      { label: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg', accent: true },
      { label: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
      { label: 'AWS', icon: '/black-aws.png' },
      { label: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg' },
    ],
    links: [
      { label: 'Backend', url: 'https://github.com/nraykhn/travelapap-be' },
      { label: 'Frontend', url: 'https://github.com/nraykhn/travelapap-fe' },
    ],
  },
  {
    image: '/projects/skinsmart.png',
    name: 'Skinsmart — UI/UX',
    desc: 'Skincare app design with full UX process from research to usability testing.',
    tags: [
      { label: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', accent: true },
    ],
    links: [
      { label: 'Figma Prototype', url: 'https://www.figma.com/proto/yvjcRIRzZsh2jp0Zl5vzNP/PPD-TK2?node-id=512-1770&t=zM0GiOB35VnHWDEU-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=512%3A1770&show-proto-sidebar=1' },
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

        {project.links && project.links.length > 0 && (
          <div className="project-links">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn"
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
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
          From web apps and UI to data science — here’s what I’ve built.
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