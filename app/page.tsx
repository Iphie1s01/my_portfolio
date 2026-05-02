"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));

    setTimeout(() => {
      document.querySelector('.hero-right')?.classList.add('visible');
    }, 400);

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* HERO */}
      <section id="hero">
        <div className="hero-bg-orb"></div>
        <div className="hero-bg-orb-2"></div>

        <div className="hero-left">
          <div className="hero-label">
            <span className="live-dot"></span>
            Available for projects · Lagos, Nigeria
          </div>
          <h1 className="hero-name">
            I BUILD<br />
            <span className="amber">THINGS</span><br />
            <span className="outline">THAT SHIP</span>
          </h1>
          <p className="hero-tagline">
            Full-stack developer turning product ideas into <em>production-grade reality</em> — 
            clean code, considered design, zero shortcuts.
          </p>
          <div className="hero-actions">
            <Link href="#projects" className="btn-primary">View My Work</Link>
            <Link href="#contact" className="btn-secondary">Start a Project</Link>
          </div>
        </div>

        <div className="hero-right reveal">
          <div className="hero-status">
            <div>
              <div className="status-text"><span className="live-dot"></span>Currently building: AI-powered SaaS tools</div>
              <div className="status-sub">Open to full-time & freelance roles</div>
            </div>
          </div>
          <div className="hero-cards-grid">
            <div className="hero-card">
              <div className="card-label">Experience</div>
              <div className="card-value">4+</div>
              <div className="card-desc">Years in production</div>
            </div>
            <div className="hero-card">
              <div className="card-label">Shipped</div>
              <div className="card-value">20+</div>
              <div className="card-desc">Live products</div>
            </div>
            <div className="hero-card">
              <div className="card-label">Clients</div>
              <div className="card-value">100%</div>
              <div className="card-desc">Satisfaction rate</div>
            </div>
            <div className="hero-card">
              <div className="card-label">Timezone</div>
              <div className="card-value">WAT</div>
              <div className="card-desc">UTC+1, async-friendly</div>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-label">Primary Stack</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "var(--teal)", marginTop: "8px", lineHeight: "1.8" }}>
              Next.js · TypeScript · React<br />
              Node.js · PostgreSQL · Tailwind · Python
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="reveal">
          <div className="section-tag">About</div>
          <h2 className="section-title">
            I MAKE<br />
            COMPLEX THINGS<br />
            <span className="amber">FEEL SIMPLE.</span>
          </h2>
          <p className="about-body">
            I&apos;m Ifeoluwa — a full-stack developer from Lagos who obsesses over the gap between 
            <strong>a good idea and a working product</strong>. I don&apos;t just write code. I think about 
            systems, user flows, and what actually gets things shipped.
          </p>
          <p className="about-body">
            With 4+ years building across the stack, I&apos;ve worked on everything from real-time apps 
            to AI-integrated platforms. Outside the terminal, I&apos;m into <strong>gaming, 
            graphics design</strong>, and building side projects that force me to grow.
          </p>
          <div style={{ marginTop: "40px" }}>
            <a href="https://github.com/iphie1s01" target="_blank" rel="noreferrer" className="btn-secondary" style={{ display: "inline-block" }}>
              github.com/iphie1s01 →
            </a>
          </div>
        </div>

        <div className="about-pillars reveal">
          <div className="pillar">
            <div className="pillar-icon">UI</div>
            <div>
              <div className="pillar-title">Interface Engineering</div>
              <div className="pillar-desc">Pixel-precise, performant UIs that users actually enjoy using — not just look at.</div>
            </div>
          </div>
          <div className="pillar">
            <div className="pillar-icon">API</div>
            <div>
              <div className="pillar-title">Backend Architecture</div>
              <div className="pillar-desc">Scalable APIs and databases designed for the real world, not just the happy path.</div>
            </div>
          </div>
          <div className="pillar">
            <div className="pillar-icon">AI</div>
            <div>
              <div className="pillar-title">AI Integration</div>
              <div className="pillar-desc">Shipping products that use AI as a feature — not a gimmick. LLM APIs, prompt engineering, context management.</div>
            </div>
          </div>
          <div className="pillar">
            <div className="pillar-icon">OPS</div>
            <div>
              <div className="pillar-title">Ship Discipline</div>
              <div className="pillar-desc">CI/CD, version control, deployment pipelines — I build so things don&apos;t break in production.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="reveal">
          <div className="section-tag">Stack</div>
          <h2 className="section-title">TOOLS I<br /><span className="amber">TRUST.</span></h2>
        </div>

        <div className="skills-grid reveal">
          <div className="skill-group">
            <div className="skill-group-label">Frontend</div>
            <div className="skill-list">
              <div className="skill-item">
                <span className="skill-name">React / Next.js</span>
                <div className="skill-bar"><div className="skill-fill" style={{ width: "95%" }}></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">TypeScript</span>
                <div className="skill-bar"><div className="skill-fill" style={{ width: "90%" }}></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Tailwind CSS</span>
                <div className="skill-bar"><div className="skill-fill" style={{ width: "95%" }}></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Framer Motion</span>
                <div className="skill-bar"><div className="skill-fill" style={{ width: "80%" }}></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Chakra UI</span>
                <div className="skill-bar"><div className="skill-fill" style={{ width: "85%" }}></div></div>
              </div>
            </div>
          </div>

          <div className="skill-group">
            <div className="skill-group-label">Backend</div>
            <div className="skill-list">
              <div className="skill-item">
                <span className="skill-name">Node.js</span>
                <div className="skill-bar"><div className="skill-fill" style={{ width: "88%" }}></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">PostgreSQL</span>
                <div className="skill-bar"><div className="skill-fill" style={{ width: "82%" }}></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Prisma / Drizzle</span>
                <div className="skill-bar"><div className="skill-fill" style={{ width: "85%" }}></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">REST APIs</span>
                <div className="skill-bar"><div className="skill-fill" style={{ width: "92%" }}></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Auth / Sessions</span>
                <div className="skill-bar"><div className="skill-fill" style={{ width: "80%" }}></div></div>
              </div>
            </div>
          </div>

          <div className="skill-group">
            <div className="skill-group-label">AI & Tooling</div>
            <div className="skill-list">
              <div className="skill-item">
                <span className="skill-name">OpenAI / Claude API</span>
                <div className="skill-bar"><div className="skill-fill" style={{ width: "85%" }}></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Vercel / Render</span>
                <div className="skill-bar"><div className="skill-fill" style={{ width: "90%" }}></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Git & CI/CD</span>
                <div className="skill-bar"><div className="skill-fill" style={{ width: "88%" }}></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Figma / Design</span>
                <div className="skill-bar"><div className="skill-fill" style={{ width: "78%" }}></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Three.js / WebGL</span>
                <div className="skill-bar"><div className="skill-fill" style={{ width: "65%" }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="reveal">
          <div className="section-tag">Selected Work</div>
          <h2 className="section-title">THINGS I&apos;VE<br /><span className="amber">SHIPPED.</span></h2>
        </div>

        <div className="projects-grid reveal">
          <a href="https://ifeoluwadev.vercel.app" target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="project-num">01 / Portfolio</div>
            <div className="project-title">Ifeoluwa.dev</div>
            <div className="project-impact">⟶ The site you&apos;re looking at, rebuilt from scratch</div>
            <p className="project-desc">
              A performance-first portfolio built with Next.js. Showcases design sensibility and engineering depth — 
              because a developer&apos;s website is their most honest work sample.
            </p>
            <div className="project-tags">
              <span className="tag">Next.js</span>
              <span className="tag">React</span>
              <span className="tag">Tailwind</span>
            </div>
            <div className="project-arrow">View Live <span>→</span></div>
          </a>

          <a href="https://rivets.vercel.app" target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="project-num">02 / AI SaaS</div>
            <div className="project-title">RivetsAI</div>
            <div className="project-impact">⟶ Build websites through natural language prompts</div>
            <p className="project-desc">
              An AI-powered platform that turns plain-English descriptions into deployed websites. 
              Full LLM integration, prompt orchestration, and real-time rendering pipeline.
            </p>
            <div className="project-tags">
              <span className="tag">Next.js</span>
              <span className="tag">TypeScript</span>
              <span className="tag">AI API</span>
              <span className="tag">Chakra UI</span>
            </div>
            <div className="project-arrow">View Live <span>→</span></div>
          </a>

          <a href="https://afrobeats-awards.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="project-num">03 / Landing Page</div>
            <div className="project-title">Afrobeat Awards</div>
            <div className="project-impact">⟶ Bold culture-first landing experience</div>
            <p className="project-desc">
              A high-impact landing page for the Afrobeat Awards for Africa. Heavy on animation, 
              cultural storytelling, and visual identity. Built to convert and captivate.
            </p>
            <div className="project-tags">
              <span className="tag">Next.js</span>
              <span className="tag">TypeScript</span>
              <span className="tag">UI/UX</span>
            </div>
            <div className="project-arrow">View Live <span>→</span></div>
          </a>
        </div>

        <div style={{ marginTop: "48px", textAlign: "center" }} className="reveal">
          <a href="https://github.com/iphie1s01" target="_blank" rel="noreferrer" className="btn-secondary">
            See all projects on GitHub →
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-left reveal">
          <div className="section-tag">Contact</div>
          <div className="contact-big">
            LET&apos;S<br />
            <span className="amber">BUILD</span><br />
            <span className="outline">TOGETHER.</span>
          </div>
          <p className="contact-body">
            Whether it&apos;s a startup idea, a product that needs rebuilding, or a contract role — 
            if the problem is interesting, I want to hear about it.
          </p>
          <div className="hero-actions">
            <a href="mailto:ifeoluwa1s01@gmail.com" className="btn-primary">Send an Email</a>
          </div>
        </div>

        <div className="reveal">
          <div className="contact-links">
            <a href="mailto:ifeoluwa1s01@gmail.com" className="contact-link">
              <div>
                <div className="contact-link-label">Email</div>
                <div className="contact-link-value">ifeoluwa1s01@gmail.com</div>
              </div>
              <div className="contact-link-arrow">↗</div>
            </a>
            <a href="https://github.com/iphie1s01" target="_blank" rel="noreferrer" className="contact-link">
              <div>
                <div className="contact-link-label">GitHub</div>
                <div className="contact-link-value">github.com/iphie1s01</div>
              </div>
              <div className="contact-link-arrow">↗</div>
            </a>
            <a href="https://www.linkedin.com/in/ifeoluwa-otudero-bb5117347/" target="_blank" rel="noreferrer" className="contact-link">
              <div>
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-value">Ifeoluwa Otudero</div>
              </div>
              <div className="contact-link-arrow">↗</div>
            </a>
          </div>

          <div style={{ marginTop: "24px", padding: "24px", background: "var(--ink-3)", border: "0.5px solid var(--border-teal)", borderRadius: "4px" }}>
            <div className="status-text" style={{ marginBottom: "8px" }}><span className="live-dot"></span>Response time: under 24 hours</div>
            <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.6" }}>
              Timezone: West Africa Time (UTC+1). Available for remote work globally and local opportunities in Lagos.
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">IFE.DEV</div>
        <div className="footer-copy">© 2025 Ifeoluwa Otudero — Built with craft, not templates.</div>
      </footer>
    </main>
  );
}
