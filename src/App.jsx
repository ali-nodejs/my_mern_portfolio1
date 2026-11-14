
import './App.css'
import SkillsManager from './SkillsManager'

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Ali<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">
          <p className="hero-greeting">
            HELLO, I'M
          </p>

          <h1>
            Ali Muhammad
          </h1>

          <h2>
            Junior <span>MERN Stack</span> Developer
          </h2>

          <p className="hero-description">
            I build responsive and user-friendly web
            applications using modern web technologies.
            I enjoy learning, building projects and
            improving my development skills.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Work
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-icon">
            {'</>'}
          </div>

          <h3>Full Stack Developer</h3>

          <p>
            React • Node.js • Express • MongoDB
          </p>
        </div>

      </section>

      {/* About Section */}
      <section className="section" id="about">
        <p className="section-label">GET TO KNOW ME</p>

        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <p className="section-description">
          I am a Junior MERN Stack Developer passionate
          about creating modern websites and web
          applications. I work with React, Node.js,
          Express.js and MongoDB. I am continuously
          learning and building practical projects
          to improve my development skills.
        </p>
      </section>

      {/* Skills Section */}
      <section className="section skills-section" id="skills">
        <p className="section-label">MY TECHNICAL EXPERTISE</p>

        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <div className="skills-grid">
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React.js</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">Express.js</div>
          <div className="skill-card">MongoDB</div>
          <div className="skill-card">Git & GitHub</div>
        </div>

      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <p className="section-label">WHAT I HAVE BUILT</p>

        <h2 className="section-title">
          My <span>Projects</span>
        </h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>Business Website</h3>

            <p>
              A responsive business website with an
              admin dashboard, login system and
              contact form.
            </p>

            <div className="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Node.js</span>
            </div>
            <a
  href="https://fast-mobile-repair-chitral.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  View Live Website ↗
</a>
          </div>

          <div className="project-card">
            <h3>MERN Skills Manager</h3>

            <p>
             A full-stack skills management application built with React, Express.js and MongoDB. Features include data retrieval from the database and complete CRUD functionality, allowing users to add, edit and delete skills with persistent database storage.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
          </div>

                </div>
      </section>

      {/* Live MERN Skills Manager */}
      <SkillsManager />

      {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <p className="section-label">LET'S CONNECT</p>

        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>

        <p className="section-description">
          Interested in working together?
          Feel free to get in touch.
        </p>
<p className="contact-email">
  ali.dev.chitral@gmail.com
</p>
        <a
          href="mailto:ali.dev.chitral@gmail.com"
          className="btn primary-btn"
        >
          Send Me an Email
        </a>
      </section>

      {/* Footer */}

  <footer className="footer">
  <h3>Ali Muhammad<span>.</span></h3>

  <p>
    Junior MERN Stack Developer
  </p>

  <div className="footer-tech">
    <span>React</span>
    <span>Node.js</span>
    <span>Express.js</span>
    <span>MongoDB</span>
  </div>

  <div className="footer-line"></div>

  <p className="footer-copyright">
    © 2026 Ali Muhammad. All Rights Reserved.
  </p>
  </footer>
    </div>
  )
}

export default App
