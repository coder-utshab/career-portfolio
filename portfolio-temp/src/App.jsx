
import { useState } from "react";
import "./App.css";

const education = [
  {
    title: "B.Tech in Computer Science & Engineering",
    institute: "Parul University",
    location: "Vadodara, Gujarat, India",
    duration: "July 2024 – Present",
    result: "Currently Studying",
  },
  {
    title: "Diploma in Engineering",
    institute: "Magura Polytechnic Institute",
    location: "Magura, Bangladesh",
    duration: "January 2018 – December 2022",
    result: "CGPA: 4.46 / 5.00",
  },
];

const certificates = [
  {
    title: "AWS Fundamentals",
    institute: "Amazon Web Services",
    duration: "June 2026 – August 2026",
    image: "/images/certificates/aws-fundamentals.jpg",
  },
  {
    title: "Complete Web Development Course",
    institute: "Programming Hero",
    duration: "August 2025 – February 2026",
    image: "/images/certificates/web-development.jpg",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Java",
  "Bootstrap",
  "Tailwind CSS",
  "Responsive Web Design",
  "Flexbox",
  "CSS Grid",
];

const projects = [
  {
    number: "01",
    title: "Memorable Water Bottle",
    description:
      "A React application built to explore and manage memorable water bottles.",
    tech: "React.js",
    link: "https://github.com/coder-utshab/react-memorable-water-bottle",
  },
  {
    number: "02",
    title: "Phone Hunter API",
    description:
      "A phone information application using JavaScript and API integration.",
    tech: "JavaScript • API",
    link: "https://github.com/coder-utshab/phone-hunter-api",
  },
  {
    number: "03",
    title: "Smart Ticketing",
    description:
      "A web development project focused on ticketing functionality.",
    tech: "Web Development",
    link: "https://github.com/coder-utshab/smart-tickiting",
  },
  {
    number: "04",
    title: "Knowledge Cafe",
    description:
      "A React project for exploring and displaying knowledge articles.",
    tech: "React • Tailwind CSS",
    link: "https://github.com/coder-utshab/cd-react-knowledge-cafe-code-.-react",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("education");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          Utshab<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#journey" onClick={closeMenu}>Education</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a href="#contact" className="nav-contact">
          Let's Talk <span>↗</span>
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-content reveal">
            <div className="available-tag">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="hero-intro">HELLO, I'M</p>

            <h1>
              Utshab Kumar
              <br />
              <span>Ghosh.</span>
            </h1>

            <h2>
              Computer Science Student <span>&</span> Web Developer
            </h2>

            <p className="hero-description">
              I build modern, responsive and user-friendly web experiences.
              Passionate about technology, creative problem-solving and
              continuous learning.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                Explore My Work <span>↗</span>
              </a>

              <a
                href="/resume.pdf"
                className="btn-secondary"
                download="Utshab_Kumar_Ghosh_CV.pdf"
              >
                <span>↓</span> Download CV
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/coder-utshab"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a href="mailto:ghoshutshob470@gmail.com">
                Email ↗
              </a>
              <a
                href="https://wa.me/917430974244"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp ↗
              </a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="profile-orbit orbit-one"></div>
            <div className="profile-orbit orbit-two"></div>

            <div className="profile-circle">
              <img
                src="/images/profile.png"
                alt="Utshab Kumar Ghosh"
              />
            </div>

            <div className="profile-floating-card card-code">
              <span>⌘</span>
              <div>
                <strong>Developer</strong>
                <small>Creative Mind</small>
              </div>
            </div>

            <div className="profile-floating-card card-tech">
              <span>✦</span>
              <div>
                <strong>Always Learning</strong>
                <small>Building the Future</small>
              </div>
            </div>

            <div className="hero-decor decor-one"></div>
            <div className="hero-decor decor-two"></div>
          </div>

          <a href="#about" className="scroll-down">
            <span>↓</span> Scroll to explore
          </a>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="section-label">GET TO KNOW ME</p>
            <h2>
              A Little About <span>Myself</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">
                Hi, I'm <strong>Utshab Kumar Ghosh</strong> — a Computer
                Science & Engineering student with a passion for web
                development and technology.
              </p>

              <p>
                Currently pursuing my B.Tech at Parul University, Vadodara,
                Gujarat. I enjoy learning modern technologies, developing
                responsive websites and turning ideas into useful digital
                experiences.
              </p>

              <p>
                I believe in continuous learning, practical experience and
                improving my skills through real-world projects.
              </p>

              <a href="#contact" className="text-link">
                Let's work together <span>↗</span>
              </a>
            </div>

            <div className="about-highlight">
              <div className="highlight-symbol">✦</div>
              <h3>Learning Today.</h3>
              <h3 className="highlight-green">Building Tomorrow.</h3>
              <p>
                Focused on becoming a skilled Full Stack Developer.
              </p>
            </div>
          </div>
        </section>

        {/* EDUCATION + CERTIFICATES */}
        <section className="section journey-section" id="journey">
          <div className="section-heading">
            <p className="section-label">MY BACKGROUND</p>
            <h2>
              My Learning <span>Journey</span>
            </h2>
            <p className="section-subtitle">
              Education, achievements and continuous learning.
            </p>
          </div>

          <div className="journey-tabs">
            <button
              className={activeTab === "education" ? "tab-btn active" : "tab-btn"}
              onClick={() => setActiveTab("education")}
            >
              🎓 Education Journey
            </button>

            <button
              className={activeTab === "certificates" ? "tab-btn active" : "tab-btn"}
              onClick={() => setActiveTab("certificates")}
            >
              🏆 Certificates & Learning
            </button>
          </div>

          {activeTab === "education" && (
            <div className="education-grid">
              {education.map((item, index) => (
                <article className="education-card" key={index}>
                  <div className="education-card-top">
                    <span className="education-icon">🎓</span>
                    <span className="education-date">{item.duration}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <h4>{item.institute}</h4>
                  <p className="education-location">📍 {item.location}</p>
                  <span className="education-result">{item.result}</span>
                </article>
              ))}
            </div>
          )}

          {activeTab === "certificates" && (
            <div className="certificate-grid">
              {certificates.map((item, index) => (
                <article className="certificate-card" key={index}>
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-image-wrap"
                  >
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <span className="certificate-image-overlay">
                      View Full Certificate ↗
                    </span>
                  </a>

                  <div className="certificate-content">
                    <span className="certificate-tag">CERTIFICATE</span>
                    <h3>{item.title}</h3>
                    <h4>{item.institute}</h4>
                    <p>{item.duration}</p>

                    <a
                      href={item.image}
                      target="_blank"
                      rel="noreferrer"
                      className="certificate-link"
                    >
                      View Certificate ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* SKILLS */}
        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="section-label">WHAT I WORK WITH</p>
            <h2>
              My Creative <span>Toolkit</span>
            </h2>
            <p className="section-subtitle">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="section-label">SELECTED WORK</p>
            <h2>
              Featured <span>Projects</span>
            </h2>
            <p className="section-subtitle">
              A collection of projects built while learning and experimenting.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <span className="project-star">✳</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-bottom">
                  <span className="project-tech">{project.tech}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} on GitHub`}
                  >
                    ↗
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="all-projects">
            <a
              href="https://github.com/coder-utshab"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Explore All GitHub Projects ↗
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <div className="contact-box">
            <p className="section-label">HAVE A PROJECT IN MIND?</p>
            <h2>
              Let's Create Something <span>Great.</span>
            </h2>
            <p>
              I'm always open to discussing new projects, creative ideas
              and opportunities.
            </p>

            <a
              href="mailto:ghoshutshob470@gmail.com"
              className="btn-primary"
            >
              Get In Touch <span>↗</span>
            </a>

            <div className="contact-details">
              <a href="mailto:ghoshutshob470@gmail.com">
                ghoshutshob470@gmail.com
              </a>
              <a href="tel:+917430974244">+91 7430974244</a>
            </div>
          </div>
        </section>
      </main>

   <footer className="footer">
  <div className="footer-container">
    <div className="footer-top">
      <div className="footer-brand">
        <a href="#home" className="footer-logo">
          UTSHAB<span>.</span>
        </a>

        <p>
          Building digital experiences with creativity,
          passion, and clean code.
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/coder-utshab"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a href="mailto:ghoshutshob470@gmail.com">
            Email ↗
          </a>

          <a
            href="https://wa.me/917430974244"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp ↗
          </a>
        </div>
      </div>

      <div className="footer-links">
        <h3>Quick Links</h3>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-contact">
        <h3>Let's Connect</h3>
        <p>Have a project in mind?</p>
        <a href="mailto:ghoshutshob470@gmail.com" className="footer-email">
          Let's work together ↗
        </a>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Utshab Kumar Ghosh. All rights reserved.</p>

      <a href="#home" className="back-to-top">
        Back to Top ↑
      </a>
    </div>
  </div>
</footer>
    </div>
  );
}

export default App;
