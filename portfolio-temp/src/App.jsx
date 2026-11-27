
// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   const email = 'ghoshutshob470@gmail.com'

//   const whatsapp =
//     'https://wa.me/917430974244?text=Hello%20Utshab%2C%20I%20visited%20your%20portfolio.%20I%20would%20like%20to%20connect%20with%20you.'

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Contact', href: '#contact' },
//   ]

//   const skills = [
//     'HTML5', 'CSS3', 'JavaScript', 'React',
//     'Tailwind CSS', 'Bootstrap', 'Node.js Basics',
//     'Express.js Basics', 'Python Basics', 'Git & GitHub',
//   ]

//   return (
//     <>
//       {/* NAVBAR */}
//       <nav className="navbar">
//         <a href="#home" className="logo">
//           UTSHAB<span>.</span>
//         </a>

//         <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>

//         <div className="nav-actions">
//           <a href="/resume.pdf" download="Utshab_Kumar_Ghosh_Resume.pdf"
//             className="nav-resume">
//             Download CV ↓
//           </a>
//           <a href={`mailto:${email}`} className="nav-button">
//             Let's Talk ↗
//           </a>
//         </div>

//         <button
//           className="menu-button"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle navigation"
//         >
//           {menuOpen ? '✕' : '☰'}
//         </button>
//       </nav>

//       {/* HERO */}
//       <section className="hero-section" id="home">
//         <div className="hero-container">
//           <div className="hero-content">
//             <div className="availability">
//               <span className="status-dot"></span>
//               Available for Opportunities
//             </div>

//             <p className="hero-intro">HELLO, I'M</p>

//             <h1>
//               Utshab Kumar
//               <span>Ghosh.</span>
//             </h1>

//             <h2>
//               Aspiring Full Stack <span>Developer</span>
//             </h2>

//             <p className="hero-description">
//               I'm a B.Tech Computer Science student at Parul University,
//               passionate about building modern, responsive and
//               user-friendly web applications.
//             </p>

//             <div className="hero-buttons">
//               <a href="#projects" className="primary-button">
//                 Explore My Work ↗
//               </a>

//               <a href={`mailto:${email}`} className="secondary-button">
//                 Contact Me ✉
//               </a>

//               <a
//                 href="/resume.pdf"
//                 download="Utshab_Kumar_Ghosh_Resume.pdf"
//                 className="resume-button"
//               >
//                 Download Resume ↓
//               </a>
//             </div>

//             <div className="social-links">
//               <a href="https://github.com/coder-utshab"
//                 target="_blank" rel="noreferrer">
//                 GH
//               </a>

//               <a href={`mailto:${email}`} aria-label="Email">
//                 @
//               </a>

//               <a href={whatsapp}
//                 target="_blank" rel="noreferrer"
//                 aria-label="WhatsApp">
//                 WA
//               </a>
//             </div>
//           </div>

//           <div className="hero-image-container">
//             <div className="image-glow"></div>

//             <div className="profile-image">
//               <img
//                 src="/images/profile.png"
//                 alt="Utshab Kumar Ghosh"
//               />
//             </div>

//             <div className="floating-card">
//               <span>💻</span>
//               <div>
//                 <strong>Web Developer</strong>
//                 <small>Building Digital Experiences</small>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="hero-bottom">
//           <span>SCROLL TO EXPLORE</span>
//           <div className="scroll-line"></div>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section id="about" className="about-section">
//         <p className="section-label">GET TO KNOW ME</p>
//         <h2>About <span>Me</span></h2>

//         <p>
//           I am a Computer Science Engineering student at Parul University.
//           I enjoy learning web development and creating practical digital
//           experiences using modern technologies.
//         </p>

//         <a href="/resume.pdf" download="Utshab_Kumar_Ghosh_Resume.pdf"
//           className="primary-button">
//           View My Resume ↓
//         </a>
//       </section>

//       {/* SKILLS */}
//       <section id="skills" className="skills-section">
//         <p className="section-label">WHAT I WORK WITH</p>
//         <h2>My <span>Skills</span></h2>

//         <div className="skills-list">
//           {skills.map((skill) => (
//             <div className="skill-item" key={skill}>
//               {skill}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* PROJECTS */}
//       <section id="projects" className="projects-section">
//         <p className="section-label">MY RECENT WORK</p>
//         <h2>Featured <span>Projects</span></h2>

//         <p>
//           Explore my web development projects and practical work.
//           More projects are available on my GitHub profile.
//         </p>

//         <a
//           href="https://github.com/coder-utshab"
//           target="_blank"
//           rel="noreferrer"
//           className="primary-button"
//         >
//           Visit My GitHub ↗
//         </a>
//       </section>

//       {/* CONTACT */}
//       <section id="contact" className="contact-section">
//         <p className="section-label">LET'S CONNECT</p>
//         <h2>Have a Project in <span>Mind?</span></h2>

//         <p>
//           Interested in working together or discussing an opportunity?
//           Feel free to reach out.
//         </p>

//         <div className="contact-actions">
//           <a href={`mailto:${email}`} className="contact-card">
//             <span>✉</span>
//             <strong>Email Me</strong>
//             <small>{email}</small>
//           </a>

//           <a href={whatsapp}
//             target="_blank" rel="noreferrer"
//             className="contact-card">
//             <span>💬</span>
//             <strong>WhatsApp Me</strong>
//             <small>Send a direct message</small>
//           </a>

//           <a
//             href="https://github.com/coder-utshab"
//             target="_blank"
//             rel="noreferrer"
//             className="contact-card"
//           >
//             <span>GH</span>
//             <strong>GitHub</strong>
//             <small>Explore my code</small>
//           </a>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="footer">
//         <div className="footer-top">
//           <div className="footer-brand">
//             <a href="#home" className="logo">
//               UTSHAB<span>.</span>
//             </a>
//             <p>
//               Building modern web experiences with creativity
//               and passion.
//             </p>
//           </div>

//           <div className="footer-links">
//             <h3>Quick Links</h3>
//             <a href="#home">Home</a>
//             <a href="#about">About</a>
//             <a href="#skills">Skills</a>
//             <a href="#projects">Projects</a>
//             <a href="#contact">Contact</a>
//           </div>

//           <div className="footer-links">
//             <h3>Connect With Me</h3>
//             <a href={`mailto:${email}`}>Email</a>
//             <a href={whatsapp} target="_blank" rel="noreferrer">
//               WhatsApp
//             </a>
//             <a href="https://github.com/coder-utshab"
//               target="_blank" rel="noreferrer">
//               GitHub
//             </a>
//           </div>

//           <div className="footer-resume">
//             <h3>My Resume</h3>
//             <p>Want to know more about my experience?</p>
//             <a
//               href="/resume.pdf"
//               download="Utshab_Kumar_Ghosh_Resume.pdf"
//               className="footer-download"
//             >
//               Download CV ↓
//             </a>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <p>© 2026 Utshab Kumar Ghosh. All Rights Reserved.</p>
//           <a href="#home">Back to Top ↑</a>
//         </div>
//       </footer>
//     </>
//   )
// }

// export default App




import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Your contact details
  const email = 'ghoshutshob470@gmail.com'

  // Gmail compose link
  const emailLink =
    'https://mail.google.com/mail/?view=cm&fs=1' +
    '&to=' + encodeURIComponent(email) +
    '&su=' + encodeURIComponent('Portfolio Contact - Utshab Kumar Ghosh') +
    '&body=' + encodeURIComponent(
      'Hello Utshab,\n\nI visited your portfolio and would like to connect with you.\n\nMessage:\n\nThank you.'
    )

  // WhatsApp message link
  const whatsapp =
    'https://wa.me/917430974244?text=' +
    encodeURIComponent(
      'Hello Utshab, I visited your portfolio and would like to connect with you.'
    )

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Bootstrap',
    'Node.js Basics',
    'Express.js Basics',
    'Python Basics',
    'Git & GitHub',
    'SQL',
    'Responsive Web Design',
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

        <div className="nav-actions">
          <a
            href="/resume.pdf"
            download="Utshab_Kumar_Ghosh_Resume.pdf"
            className="nav-resume"
          >
            Download CV ↓
          </a>

          <a
            href={emailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-button"
          >
            Let's Talk ↗
          </a>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* HERO */}
      <section className="hero-section" id="home">
        <div className="hero-container">
          <div className="hero-content">
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
              passionate about building modern, responsive and
              user-friendly web applications.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work ↗
              </a>

              <a
                href={emailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                Contact Me ✉
              </a>

              <a
                href="/resume.pdf"
                download="Utshab_Kumar_Ghosh_Resume.pdf"
                className="resume-button"
              >
                Download Resume ↓
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/coder-utshab"
                target="_blank"
                rel="noopener noreferrer"
              >
                GH
              </a>

              <a
                href={emailLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                @
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                WA
              </a>
            </div>
          </div>

          <div className="hero-image-container">
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
          </div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <p className="section-label">GET TO KNOW ME</p>
        <h2>
          About <span>Me</span>
        </h2>

        <p>
          I am a Computer Science Engineering student at Parul University.
          I enjoy learning web development and creating practical digital
          experiences using modern technologies.
        </p>

        <a
          href="/resume.pdf"
          download="Utshab_Kumar_Ghosh_Resume.pdf"
          className="primary-button"
        >
          Download My Resume ↓
        </a>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills-section">
        <p className="section-label">WHAT I WORK WITH</p>
        <h2>
          My <span>Skills</span>
        </h2>

        <div className="skills-list">
          {skills.map((skill) => (
            <div className="skill-item" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects-section">
        <p className="section-label">MY RECENT WORK</p>
        <h2>
          Featured <span>Projects</span>
        </h2>

        <p>
          Explore my web development projects and practical work.
          More projects are available on my GitHub profile.
        </p>

        <a
          href="https://github.com/coder-utshab"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button"
        >
          Visit My GitHub ↗
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <p className="section-label">LET'S CONNECT</p>
        <h2>
          Have a Project in <span>Mind?</span>
        </h2>

        <p>
          Interested in working together or discussing an opportunity?
          Feel free to reach out.
        </p>

        <div className="contact-actions">
          <a
            href={emailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span>✉</span>
            <strong>Email Me</strong>
            <small>{email}</small>
          </a>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span>💬</span>
            <strong>WhatsApp Me</strong>
            <small>Send a direct message</small>
          </a>

          <a
            href="https://github.com/coder-utshab"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span>GH</span>
            <strong>GitHub</strong>
            <small>Explore my code</small>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="logo">
              UTSHAB<span>.</span>
            </a>

            <p>
              Building modern web experiences with creativity
              and passion.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-links">
            <h3>Connect With Me</h3>

            <a
              href={emailLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="https://github.com/coder-utshab"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className="footer-resume">
            <h3>My Resume</h3>
            <p>Want to know more about my experience?</p>

            <a
              href="/resume.pdf"
              download="Utshab_Kumar_Ghosh_Resume.pdf"
              className="footer-download"
            >
              Download CV ↓
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Utshab Kumar Ghosh. All Rights Reserved.</p>
          <a href="#home">Back to Top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
