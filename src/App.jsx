import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CodeXml,
  ContactRound,
  Mail,
  MapPin,
  Menu,
  X,
} from 'lucide-react'
import './App.css'

const projects = [
  {
    number: '01',
    title: 'Shop.co',
    type: 'Ecommerce platform',
    description:
      'A responsive storefront with product discovery, cart management, checkout flows, and a performance-first Next.js architecture.',
    stack: ['Next.js', 'TypeScript', 'Redux Toolkit'],
    live: 'https://ecommerce-xi-mocha.vercel.app/',
    github: 'https://github.com/ammar-mahmoud-96/Ecommerce',
    accent: 'coral',
  },
  {
    number: '02',
    title: 'NutriMe',
    type: 'Healthcare platform',
    description:
      'An SEO-optimized healthcare experience with responsive appointment workflows and a maintainable, performance-focused frontend.',
    stack: ['Next.js', 'React', 'TypeScript'],
    live: 'https://drmaielbanna.online/',
    github: 'https://github.com/ammar-mahmoud-96/DrMaiElbanna',
    accent: 'mint',
  },
  {
    number: '03',
    title: 'Renaissance Egypt',
    type: 'Corporate website',
    description:
      'A modern corporate presence built with reusable components, cross-browser compatibility, and polished responsive layouts.',
    stack: ['JavaScript', 'Bootstrap', 'Hostinger'],
    live: 'https://renaissance-eg.com/',
    accent: 'blue',
  },
  {
    number: '04',
    title: 'Smart Home',
    type: 'IoT mobile application',
    description:
      'A real-time monitoring and control application connecting Flutter, Firebase, and NodeMCU-powered IoT devices.',
    stack: ['Flutter', 'Firebase', 'IoT'],
    github: 'https://github.com/ammar-mahmoud-96/IOT-smart-home',
    accent: 'yellow',
  },
]

const experience = [
  {
    period: 'Feb 2023 — Present',
    role: 'Frontend Developer',
    company: 'Freelance',
    body: 'Delivering production React and Next.js applications across ecommerce, healthcare, and business domains, from reusable UI systems through API integration and deployment.',
  },
  {
    period: 'Jan 2024 — Apr 2025',
    role: 'Frontend Web Developer',
    company: 'Planning Solution',
    body: 'Developed healthcare management modules with Next.js and TypeScript, improving load performance through lazy loading and component optimization.',
  },
  {
    period: 'Nov 2022 — May 2025',
    role: 'Software Lab Engineer',
    company: 'British University in Egypt',
    body: 'Maintained university web platforms, supported software engineering laboratories, and assisted with web development activities.',
  },
]

const skills = [
  ['Core', 'React.js', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3'],
  ['Architecture', 'Redux Toolkit', 'Context API', 'SSR & SSG', 'REST APIs', 'Authentication'],
  ['Performance', 'Code Splitting', 'Lazy Loading', 'SEO Optimization', 'Responsive Design', 'Accessibility'],
  ['Tools & More', 'Git & GitHub', 'Vercel', 'Firebase', 'Flutter', 'WordPress', 'Linux'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.12 },
    )

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="logo" href="#top" aria-label="Ammar ElBanna, home" onClick={closeMenu}>
          AE<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Available for new opportunities</p>
            <h1 id="hero-title">I build fast,<br />thoughtful <em>web</em><br />experiences.</h1>
            <p className="hero-intro">
              I&apos;m <strong>Ammar ElBanna</strong>, a frontend developer in Cairo turning complex ideas into accessible, responsive products with React, Next.js, and TypeScript.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowDown /></a>
              <a className="text-link" href="mailto:ammarmahmoud96@outlook.com">ammarmahmoud96@outlook.com <ArrowUpRight /></a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="code-window">
              <div className="window-bar"><span /><span /><span /><small>craft.tsx</small></div>
              <pre><code><i>const</i> developer = {'{'}{`\n`}  name: <b>&apos;Ammar&apos;</b>,{`\n`}  focus: [<b>&apos;clarity&apos;</b>,{`\n`}    <b>&apos;speed&apos;</b>, <b>&apos;people&apos;</b>],{`\n`}  ships: <strong>true</strong>{`\n`}{'}'}</code></pre>
              <div className="code-result">✓ Ready to build</div>
            </div>
            <span className="orbit orbit-one">React</span>
            <span className="orbit orbit-two">Next.js</span>
            <span className="orbit orbit-three">TS</span>
          </div>
          <div className="hero-index">01 / 04</div>
        </section>

        <section className="marquee" aria-label="Specialties">
          <div>REACT.JS <span>✦</span> NEXT.JS <span>✦</span> TYPESCRIPT <span>✦</span> USER EXPERIENCE <span>✦</span> PERFORMANCE <span>✦</span> REACT.JS <span>✦</span> NEXT.JS</div>
        </section>

        <section className="section projects-section" id="work">
          <div className="section-heading reveal">
            <p className="section-label">Selected work / 2023—2026</p>
            <h2>Projects built to<br /><em>make an impact.</em></h2>
            <p>A selection of digital products made for real businesses and real people.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent} reveal`} key={project.title}>
                <div className="project-topline">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                </div>
                <div className="project-art" aria-hidden="true">
                  <span className="art-title">{project.title}</span>
                  <span className="art-mark">{project.title.slice(0, 1)}</span>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                  <div className="project-links">
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live site <ArrowUpRight /></a>}
                    {project.github && <a href={project.github} target="_blank" rel="noreferrer"><CodeXml /> Code</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading reveal">
            <p className="section-label">Where I&apos;ve worked</p>
            <h2>Experience that<br /><em>ships.</em></h2>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item reveal" key={`${item.company}-${item.role}`}>
                <span className="timeline-number">0{index + 1}</span>
                <p className="timeline-period">{item.period}</p>
                <div className="timeline-role">
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <p className="timeline-body">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="skills-intro reveal">
            <p className="section-label">The toolkit</p>
            <h2>Built on strong<br /><em>foundations.</em></h2>
            <p>Three years of practical experience, strengthened by clean code principles and an eye for the details users notice.</p>
          </div>
          <div className="skill-groups">
            {skills.map(([title, ...items], index) => (
              <div className="skill-group reveal" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section className="education-band reveal">
          <BriefcaseBusiness aria-hidden="true" />
          <div>
            <p className="section-label">Education</p>
            <h2>B.Sc. Software Engineering</h2>
            <p>Misr University for Science and Technology · GPA 3.46 · Very Good with Honors</p>
          </div>
          <span className="education-year">MUST</span>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy reveal">
            <p className="section-label">Have a project in mind?</p>
            <h2>Let&apos;s make<br />something <em>work.</em></h2>
          </div>
          <a className="contact-email reveal" href="mailto:ammarmahmoud96@outlook.com">
            <span>Start a conversation</span>
            ammarmahmoud96<br />@outlook.com
            <ArrowUpRight />
          </a>
          <div className="contact-details reveal">
            <span><MapPin /> Cairo, Egypt</span>
            <div>
              <a href="https://github.com/ammar-mahmoud-96" target="_blank" rel="noreferrer" aria-label="GitHub"><CodeXml /></a>
              <a href="https://www.linkedin.com/in/ammar-mahmoud-96" target="_blank" rel="noreferrer" aria-label="LinkedIn"><ContactRound /></a>
              <a href="mailto:ammarmahmoud96@outlook.com" aria-label="Email"><Mail /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="logo footer-logo" href="#top">AE<span>.</span></a>
        <p>Designed &amp; built with care. © {new Date().getFullYear()} Ammar ElBanna.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
