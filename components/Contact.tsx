import '../app/components.css'

export default function Contact() {
  return (
    <>
      <hr className="divider" />
      <section>
        <div className="contact-wrapper">
          <div>
            <span className="section-tag">Contact</span>
            <div className="contact-title">Let's work<br />together</div>
            <p className="contact-desc">
              Open to internships, project collabs, and freelance work.
              Feel free to reach out through any of these channels.
            </p>
            <a href="mailto:nuralyakhairina7@gmail.com" className="btn-primary">Send me an email →</a>
          </div>
          <div className="contact-links">
            <a href="mailto:nuralyakhairina7@gmail.com" className="contact-link">
              <div className="contact-link-icon">✉️</div>
              <div>
                <div style={{ fontWeight: 500, fontSize: '13px' }}>Email</div>
                <div style={{ fontSize: '11px', color: 'var(--subtext)', fontFamily: 'var(--font-mono)' }}>nuralyakhairina7@gmail.com</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/nraykhn" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="contact-link-icon">in</div>
              <div>
                <div style={{ fontWeight: 500, fontSize: '13px' }}>LinkedIn</div>
                <div style={{ fontSize: '11px', color: 'var(--subtext)', fontFamily: 'var(--font-mono)' }}>linkedin.com/in/nraykhn</div>
              </div>
            </a>
            
            <div className="contact-link" style={{ cursor: 'default' }}>
              <div className="contact-link-icon">📍</div>
              <div>
                <div style={{ fontWeight: 500, fontSize: '13px' }}>Location</div>
                <div style={{ fontSize: '11px', color: 'var(--subtext)', fontFamily: 'var(--font-mono)' }}>East Jakarta, Indonesia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>Designed &amp; built for <a href="#">Nur Alya Khairina</a> · Information Systems, Universitas Indonesia · 2025</p>
      </footer>
    </>
  )
}
