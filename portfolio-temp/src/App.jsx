import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Menu,
  X,
  Download,
} from 'lucide-react'

import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          UTSHAB<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a href="mailto:ghoshutshob470@gmail.com" className="nav-button">
          Let's Talk <ArrowUpRight size={17} />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-container">

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="availability">
              <span className="status-dot"></span>
              Available for Opportunities
            </div>

            <p className="hero-intro">HELLO, I'M</p>

            <h1>
              Utshab Kumar
              <span>Ghosh.</span>
            </h1>

            <h2>
              Aspiring Full Stack <span>Developer</span>
            </h2>

            <p className="hero-description">
              I'm a B.Tech Computer Science student at Parul University,
              passionate about building modern, responsive and user-friendly
              web applications.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work <ArrowUpRight size={18} />
              </a>

              <a
                href="mailto:ghoshutshob470@gmail.com"
                className="secondary-button"
              >
                Contact Me <Mail size={18} />
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/coder-utshab"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>

              <a
                href="mailto:ghoshutshob470@gmail.com"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
          </motion.div>

          {/* PROFILE IMAGE */}
          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="image-glow"></div>

            <div className="profile-image">
              <img
                src="/images/profile.png"
                alt="Utshab Kumar Ghosh"
              />
            </div>

            <div className="floating-card">
              <span>💻</span>
              <div>
                <strong>Web Developer</strong>
                <small>Building Digital Experiences</small>
              </div>
            </div>
          </motion.div>

        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line"></div>
        </div>
      </section>
    </>
  )
}

export default App