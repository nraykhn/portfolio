'use client'

import Link from 'next/link'
import '../app/components.css'

export default function Navbar() {
  return (
    <nav>
      <Link href="/" className="nav-logo">alya<span>.</span>dev</Link>
      <div className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
      </div>
      <a href="mailto:nuralyakhairina7@gmail.com" className="nav-cta">Contact me →</a>
    </nav>
  )
}