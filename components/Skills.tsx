'use client'

import '../app/components.css'

const skillGroups = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Frameworks',
    skills: ['Django', 'Spring Boot', 'Vue.js', 'Flutter', 'Tailwind CSS'],
  },
  {
    title: 'Data Science',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'EDA', 'ML Modeling'],
  },
  {
    title: 'Databases & Cloud',
    skills: ['PostgreSQL', 'Supabase', 'AWS', 'Docker', 'Railway'],
  },
  {
    title: 'Design & Tools',
    skills: ['Figma', 'Draw.io', 'Canva', 'Git', 'Google Workspace'],
  },
  {
    title: 'Soft Skills',
    skills: ['Leadership', 'Public Speaking', 'Team Coordination', 'Problem-solving'],
  },
]

export default function Skills() {
  return (
    <>
      <hr className="divider" />
      <section id="skills">
        <span className="section-tag">Toolkit</span>
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <p className="section-desc">The tools and technologies I work with day-to-day.</p>

        <div className="skills-wrapper">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <div className="skill-group-title">{group.title}</div>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
