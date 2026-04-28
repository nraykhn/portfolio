import '../app/components.css'

const experiences = [
  {
    role: 'Staff — Business & Profession Division (Bisprof)',
    org: 'FUKI Fasilkom UI',
    date: 'May 2025 – Present',
    points: [
      'Appointed as Project-in-Charge (PIC) of JasTIP — a collaborative project providing web, mobile, and UI/UX solutions for external clients together with ITF.',
      'Managing project timelines, team coordination, and client communication end-to-end.',
    ],
  },
  {
    role: 'Secretary',
    org: 'UI EthnoXtravaganza 2024 — BEM UI',
    date: 'May – December 2024',
    points: [
      'Handled administrative tasks, document control, and activity timeline for a large-scale cultural event showcasing arts and culinary from across Indonesia.',
      'Drafted proposals, MoUs, ToRs, official letters, and the final accountability report (LPJK).',
      'Coordinated across event, media, and sponsorship divisions for smooth execution.',
    ],
  },
  {
    role: 'Secretary & Promotor',
    org: 'Bestari Expo Campus SMAN 88 Jakarta 2024',
    date: 'November 2023 – January 2024',
    points: [
      'Drafted event proposal, meeting minutes, and official correspondence for an inter-university expo.',
      'Represented Universitas Indonesia and answered student queries about campus life and curriculum.',
    ],
  },
  {
    role: 'Secretary',
    org: 'Student Council — SMAN 88 Jakarta',
    date: 'June 2021 – June 2022',
    points: [
      'Handled administrative tasks including event planning documents, meeting minutes, and correspondence for school-wide programs.',
    ],
  },
]

export default function Experience() {
  return (
    <>
      <hr className="divider" />
      <section id="experience">
        <span className="section-tag">Experience</span>
        <h2 className="section-title">Org &amp; Co-curricular</h2>
        <p className="section-desc">Beyond the code — leading teams and running events.</p>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-org">{exp.org}</div>
              <div className="timeline-date">{exp.date}</div>
              <ul className="timeline-points">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
