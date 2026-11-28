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
    title: "AI Fundamentals: Foundations for Understanding AI",
    institute: "Cisco Networking Academy in collaboration with IBM SkillsBuild",
    duration: "Issued: September 29, 2026",
    image: "/certificates/Screenshot%202026-11-28%20234020.png",
    type: "AI & Technology",
  },
  {
    title: "Certificate of Achievement",
    institute: "Certificate document",
    duration: "View certificate for details",
    image: "/certificates/1786459414887.jpg",
    type: "Professional Learning",
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
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <header className="navbar">
        <a className="logo" href="#home" onClick={closeMenu}>
          Utshab<span>.</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#journey" onClick={closeMenu}>Education</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </nav>

        <a className="nav-contact" href="#contact">
          Let&apos;s Talk <span>↗</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="available-tag">
              <span className="status-dot" />
              Open to learning & opportunities
            </div>

            <p className="hero-intro">HELLO, I&apos;M</p>
            <h1>
              Utshab Kumar
              <br />
              <span>Ghosh.</span>
            </h1>
            <h2>
              B.Tech CSE Student <span>|</span> Aspiring Full Stack Developer
            </h2>
            <p className="hero-description">
              I&apos;m a Computer Science student at Parul University,
              passionate about building clean, responsive and user-friendly
              web experiences. I enjoy learning new technologies and turning
              ideas into practical projects.
            </p>

            <div className="hero-buttons">
              <a className="btn-primary" href="/resume.pdf" download>
                Download CV <span>↓</span>
              </a>
              <a className="btn-secondary" href="#projects">
                Explore Projects <span>↗</span>
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/coder-utshab" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="mailto:ghoshutshob470@gmail.com">Email ↗</a>
              <a href="https://wa.me/917430974244" target="_blank" rel="noreferrer">WhatsApp ↗</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile image">
            <div className="profile-orbit orbit-one" />
            <div className="profile-orbit orbit-two" />
            <div className="profile-circle">
              <img
                src="/images/profile.png"
                alt="Utshab Kumar Ghosh"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="profile-floating-card card-code">
              <span>⌘</span>
              <div>
                <strong>Clean Code</strong>
                <small>Building with care</small>
              </div>
            </div>
            <div className="profile-floating-card card-tech">
              <span>✦</span>
              <div>
                <strong>Web Developer</strong>
                <small>Always learning</small>
              </div>
            </div>
            <span className="hero-decor decor-one" />
            <span className="hero-decor decor-two" />
          </div>

          <a className="scroll-down" href="#about">
            SCROLL TO EXPLORE <span>↓</span>
          </a>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="section-label">GET TO KNOW ME</p>
            <h2>About <span>Me</span></h2>
            <p className="section-subtitle">
              A little introduction about my journey and what I enjoy doing.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">
                Hello! I&apos;m <strong>Utshab Kumar Ghosh</strong>, a Computer
                Science & Engineering student who loves technology and web
                development.
              </p>
              <p>
                I am currently pursuing my B.Tech at Parul University,
                Vadodara. My learning journey includes front-end development,
                programming fundamentals and building practical projects.
              </p>
              <p>
                I believe in continuous learning, problem solving and writing
                simple, useful code. My goal is to grow as a developer and
                contribute to meaningful software projects.
              </p>
              <a className="text-link" href="https://github.com/coder-utshab" target="_blank" rel="noreferrer">
                Explore my GitHub <span>↗</span>
              </a>
            </div>

            <div className="about-highlight">
              <div className="highlight-symbol">✳</div>
              <h3>Learning Today.</h3>
              <h3 className="highlight-green">Building Tomorrow.</h3>
              <p>
                Focused on strengthening my development skills through
                hands-on practice, projects and continuous improvement.
              </p>
            </div>
          </div>
        </section>

        {/* EDUCATION & CERTIFICATES */}
        <section className="section journey-section" id="journey">
          <div className="section-heading">
            <p className="section-label">MY BACKGROUND</p>
            <h2>My <span>Journey</span></h2>
            <p className="section-subtitle">
              Education and certificates that are part of my learning journey.
            </p>
          </div>

          <div className="journey-tabs">
            <button
              className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
              onClick={() => setActiveTab("education")}
              type="button"
            >
              Education
            </button>
            <button
              className={`tab-btn ${activeTab === "certificates" ? "active" : ""}`}
              onClick={() => setActiveTab("certificates")}
              type="button"
            >
              Certificates &amp; Learning
            </button>
          </div>

          {activeTab === "education" ? (
            <div className="education-grid">
              {education.map((item) => (
                <article className="education-card" key={item.title}>
                  <div className="education-card-top">
                    <span className="education-icon">🎓</span>
                    <span className="education-date">{item.duration}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <h4>{item.institute}</h4>
                  <p className="education-location">{item.location}</p>
                  <span className="education-result">{item.result}</span>
                </article>
              ))}
            </div>
          ) : (
            <div className="certificate-grid">
              {certificates.map((certificate) => (
                <article className="certificate-card" key={certificate.title}>
                  <button
                    className="certificate-image-wrap"
                    type="button"
                    onClick={() => setSelectedCertificate(certificate)}
                    aria-label={`View ${certificate.title}`}
                    style={{ width: "100%", padding: 0, border: 0, cursor: "pointer" }}
                  >
                    <img src={certificate.image} alt={certificate.title} />
                    <span className="certificate-image-overlay">View Certificate ↗</span>
                  </button>
                  <div className="certificate-content">
                    <span className="certificate-tag">{certificate.type}</span>
                    <h3>{certificate.title}</h3>
                    <h4>{certificate.institute}</h4>
                    <p>{certificate.duration}</p>
                    <button
                      className="certificate-link"
                      type="button"
                      onClick={() => setSelectedCertificate(certificate)}
                      style={{ background: "none", border: 0, padding: 0, cursor: "pointer" }}
                    >
                      View certificate ↗
                    </button>
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
            <h2>My <span>Skills</span></h2>
            <p className="section-subtitle">
              Technologies and tools I&apos;m learning and using in my projects.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
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
            <h2>Featured <span>Projects</span></h2>
            <p className="section-subtitle">
              A few projects from my development and learning journey.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number} / PROJECT</span>
                  <span className="project-star">✳</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-bottom">
                  <span className="project-tech">{project.tech}</span>
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>↗</a>
                </div>
              </article>
            ))}
          </div>

          <div className="all-projects">
            <a className="btn-secondary" href="https://github.com/coder-utshab" target="_blank" rel="noreferrer">
              More on GitHub <span>↗</span>
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <div className="contact-box">
            <p className="section-label">GET IN TOUCH</p>
            <h2>Have a project in <span>mind?</span></h2>
            <p>
              I&apos;m always interested in learning, collaborating and
              discussing new opportunities. Feel free to reach out.
            </p>
            <a className="btn-primary" href="mailto:ghoshutshob470@gmail.com">
              Say Hello <span>↗</span>
            </a>
            <div className="contact-details">
              <a href="mailto:ghoshutshob470@gmail.com">ghoshutshob470@gmail.com</a>
              <a href="tel:+917430974244">+91 7430974244</a>
              <a href="https://wa.me/917430974244" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <a className="footer-logo" href="#home">Utshab<span>.</span></a>
              <p>
                Computer Science student passionate about web development,
                technology and continuous learning.
              </p>
              <div className="footer-socials">
                <a href="https://github.com/coder-utshab" target="_blank" rel="noreferrer">GitHub</a>
                <a href="mailto:ghoshutshob470@gmail.com">Email</a>
                <a href="https://wa.me/917430974244" target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#journey">Education</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
            </div>

            <div className="footer-contact">
              <h3>Contact</h3>
              <p>Let&apos;s connect and build something useful.</p>
              <a className="footer-email" href="mailto:ghoshutshob470@gmail.com">
                ghoshutshob470@gmail.com
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Utshab Kumar Ghosh. All rights reserved.</p>
            <a className="back-to-top" href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>

      {/* CERTIFICATE PREVIEW */}
      {selectedCertificate && (
        <div
          role="presentation"
          onClick={() => setSelectedCertificate(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: "rgba(0,0,0,0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedCertificate.title}
            onClick={(event) => event.stopPropagation()}
            style={{
              position: "relative",
              width: "min(900px, 100%)",
              maxHeight: "90vh",
              padding: "14px",
              borderRadius: "14px",
              background: "#141715",
              border: "1px solid rgba(163,230,53,0.35)",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate preview"
              style={{
                position: "absolute",
                top: "-14px",
                right: "-14px",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: 0,
                background: "#a3e635",
                color: "#10150b",
                fontSize: "22px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              style={{
                display: "block",
                width: "100%",
                maxHeight: "calc(90vh - 28px)",
                objectFit: "contain",
                borderRadius: "7px",
                background: "#fff",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
