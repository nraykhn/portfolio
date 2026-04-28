'use client'

import '../app/components.css'

export default function About() {
  return (
    <>
      <hr className="divider" />
      <section id="about">
        <span className="section-tag">About</span>
        <h2 className="section-title">About me</h2>
        <p className="section-desc">A quick introduction.</p>

        <div className="about-grid">

          {/* LEFT CARD */}
          <div className="about-card">

            {/* HEADER */}
            <div className="about-card-header">
              <div className="about-name">Nur Alya Khairina</div>
              <div className="about-title">Information Systems Student</div>
            </div>

            {/* FOTO */}
            <div className="about-photo-inner">
              <img src="/profile.jpeg" alt="Alya" />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="about-body">

            {/* TOP BOXES */}
            <div className="about-top-box">

              {/* EDUCATION */}
              <div className="mini-box">
                <div className="mini-title">Education</div>
                <div className="education-row">
                  <img src="/ui-logo.png" alt="UI" />
                  <div>
                    <div className="edu-main">S1 Information Systems</div>
                    <div className="edu-sub">
                      Faculty of Computer Science · Universitas Indonesia
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTACT */}
              <div className="mini-box">
                <div className="mini-title">Contact</div>

                <div className="contact-item">
                  <span>Email</span>
                  <a href="mailto:nuralyakhairina7@gmail.com">
                    nuralyakhairina7@gmail.com
                  </a>
                </div>

                <div className="contact-item">
                  <span>LinkedIn</span>
                  <a href="https://www.linkedin.com/in/nraykhn" target="_blank" rel="noreferrer">
                    nraykhn
                  </a>
                </div>
              </div>

            </div>

            {/* TEXT */}
            <div className="about-body-text">
              <p>
                Information Systems student at Universitas Indonesia, focused on building
                data-driven applications and clean, user-centered interfaces.
              </p>

              <p>
                Interested in <strong>data science, full-stack development, and UI/UX</strong>.
              </p>

              <p>
                Experienced with Python, Django, Spring Boot, and modern web technologies.
              </p>

              <div className="about-highlight">
                Open to internships, projects, and collaborations.
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}