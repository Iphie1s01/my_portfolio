"use client";

import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import Beams from './components/Beams';
import './styles.css';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const skillsCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 3D Floating Cube Animation for Hero
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    const material = new THREE.MeshPhongMaterial({ 
      color: 0x00ffff,
      emissive: 0x00ffff,
      emissiveIntensity: 0.3,
      wireframe: true
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    const light = new THREE.PointLight(0x00ffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    camera.position.z = 5;

    let mouseX = 0;
    let mouseY = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      
      torusKnot.rotation.x += 0.005;
      torusKnot.rotation.y += 0.005;
      
      torusKnot.rotation.y += (mouseX * 0.5 - torusKnot.rotation.y) * 0.05;
      torusKnot.rotation.x += (mouseY * 0.5 - torusKnot.rotation.x) * 0.05;
      
      renderer.render(scene, camera);
    };
    
    animate();

    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  // 3D Sphere Grid for Skills Section
  useEffect(() => {
    if (!skillsCanvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, skillsCanvasRef.current.clientWidth / skillsCanvasRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: skillsCanvasRef.current, 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(skillsCanvasRef.current.clientWidth, skillsCanvasRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const spheres: THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhongMaterial, THREE.Object3DEventMap>[] = [];
    const colors = [0x00ffff, 0xa855f7, 0x22c55e];
    
    for (let i = 0; i < 20; i++) {
      const geometry = new THREE.SphereGeometry(0.15, 16, 16);
      const material = new THREE.MeshPhongMaterial({ 
        color: colors[i % 3],
        emissive: colors[i % 3],
        emissiveIntensity: 0.5
      });
      const sphere = new THREE.Mesh(geometry, material);
      
      sphere.position.x = (Math.random() - 0.5) * 10;
      sphere.position.y = (Math.random() - 0.5) * 10;
      sphere.position.z = (Math.random() - 0.5) * 10;
      
      sphere.userData = {
        velocity: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        }
      };
      
      scene.add(sphere);
      spheres.push(sphere);
    }

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 0, 10);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    camera.position.z = 8;

    const animate = () => {
      requestAnimationFrame(animate);
      
      spheres.forEach(sphere => {
        sphere.position.x += sphere.userData.velocity.x;
        sphere.position.y += sphere.userData.velocity.y;
        sphere.position.z += sphere.userData.velocity.z;
        
        if (Math.abs(sphere.position.x) > 5) sphere.userData.velocity.x *= -1;
        if (Math.abs(sphere.position.y) > 5) sphere.userData.velocity.y *= -1;
        if (Math.abs(sphere.position.z) > 5) sphere.userData.velocity.z *= -1;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();

    return () => {
      spheres.forEach(sphere => {
        sphere.geometry.dispose();
        sphere.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <div className="fixed-background">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#00ffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>
      
      <div className="gradient-overlay"></div>

      {/* Floating Orbs */}
      <div className="floating-orbs">
        <div 
          className="orb orb-cyan"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
        <div 
          className="orb orb-purple"
          style={{
            transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`
          }}
        />
      </div>

      {/* Header */}
      <header className={`header ${scrolled ? 'header-scrolled' : 'header-transparent'}`}>
        <div className="header-container">
          <h1 className="logo">
            <span className="logo-dot"></span>
            <span className="logo-text">Ifeoluwa</span>
            <span>.dev</span>
          </h1>
          <nav className="nav">
            {['about', 'skills', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                className={`nav-link ${activeSection === section ? 'nav-link-active' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <span className="nav-link-indicator"></span>
                )}
                <span className="nav-link-hover-bg"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="section section-hero"
      >
        <div>
          <div className="inline-block">
            <div className="section-title">
              <span className="section-title-line"></span>
              <span>FULL-STACK DEVELOPER</span>
            </div>
            <h2 className="section-heading section-heading-large">
              <span>Hi, I&apos;m</span>
              <br />
              <span className="section-heading-gradient">Ifeoluwa</span>
            </h2>
            <div className="section-divider"></div>
          </div>
          
          <p className="section-text section-text-large">
            A creative full-stack developer from Nigeria crafting <span className="section-highlight">intuitive</span> and <span className="section-highlight">high-performance</span> web experiences. From stunning interfaces to robust backends — I transform ideas into reality through elegant code.
          </p>
          
          <div className="button-group">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="button-primary"
            >
              <span>Explore My Work</span>
              <div className="button-primary-overlay"></div>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="button-secondary"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        {/* 3D Canvas */}
        <div className="canvas-container">
          <canvas ref={canvasRef} className="canvas" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-section">
        <div className="stats-grid">
          {[
            { number: '3+', label: 'Years Experience' },
            { number: '20+', label: 'Projects Built' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Problem Solver' }
          ].map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-bg"></div>
            <div className="about-card-content">
              <div className="section-title">
                <span className="section-title-line"></span>
                <span>ABOUT ME</span>
              </div>
              <h2 className="section-heading">
                Crafting Digital <span className="section-highlight">Experiences</span>
              </h2>
              <p className="section-text">
                I&apos;m a developer who thrives at the intersection of creativity and technology. From designing beautiful UIs to writing efficient server-side code, I love crafting digital experiences that just <span className="section-highlight">work</span>.
              </p>
              <p className="section-text">
                Outside coding, I&apos;m into gaming (FPS, football, and combat titles), sketching, and building side projects that push my skills forward.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              { icon: '🎨', title: 'Creative Design', desc: 'Pixel-perfect interfaces that captivate users' },
              { icon: '⚡', title: 'Performance', desc: 'Lightning-fast apps that scale effortlessly' },
              { icon: '🔧', title: 'Clean Code', desc: 'Maintainable, elegant solutions that last' },
              { icon: '🚀', title: 'Innovation', desc: 'Always exploring cutting-edge technologies' }
            ].map((item, index) => (
              <div key={index} className="feature-card">
                <div className="feature-content">
                  <div className="feature-icon">{item.icon}</div>
                  <div>
                    <h3 className="feature-title">{item.title}</h3>
                    <p className="feature-desc">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="text-center mb-16">
          <div className="section-title">
            <span className="section-title-line"></span>
            <span>SKILLS &amp; EXPERTISE</span>
            <span className="section-title-line"></span>
          </div>
          <h2 className="section-heading section-heading-large">
            Tech <span className="section-highlight">Arsenal</span>
          </h2>
        </div>

        {/* <div className="skills-grid">
          <div className="skills-canvas-container">
            <canvas ref={skillsCanvasRef} className="canvas" />
            <div className="skills-canvas-overlay"></div>
          </div>

          <div className="space-y-6">
            {[
              { name: 'React &amp; Next.js', level: 95, color: 'skill-cyan' },
              { name: 'Node.js &amp; Express', level: 90, color: 'skill-green' },
              { name: 'Python &amp; Django', level: 85, color: 'skill-purple' },
              { name: 'UI/UX Design', level: 88, color: 'skill-orange' }
            ].map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className={`skill-progress ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="category-grid">
          {[
            {
              title: 'Front-End',
              icon: '💻',
              gradient: 'category-cyan',
              skills: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind', 'UI/UX']
            },
            {
              title: 'Back-End',
              icon: '⚙️',
              gradient: 'category-purple',
              skills: ['Node.js', 'Python', 'Express', 'APIs', 'Databases']
            },
            {
              title: 'Tools',
              icon: '🛠️',
              gradient: 'category-green',
              skills: ['Git/GitHub', 'VS Code', 'REST APIs', 'Design Tools']
            }
          ].map((category, index) => (
            <div key={index} className="category-card">
              <div className={`category-bg ${category.gradient}`}></div>
              
              <div className="category-content">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
                <div className="skill-list">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <div className={`skill-bullet ${category.gradient}`}></div>
                      <span className="skill-text">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="text-center mb-16">
          <div className="section-title">
            <span className="section-title-line"></span>
            <span>FEATURED WORK</span>
            <span className="section-title-line"></span>
          </div>
          <h2 className="section-heading section-heading-large">
            Recent <span className="section-highlight">Projects</span>
          </h2>
        </div>

        <div className="projects-grid">
          {[
            {
              title: 'Portfolio Website',
              desc: 'A modern, responsive portfolio showcasing my work with smooth animations and 3D elements.',
              tags: ['React', 'Three.js', 'Tailwind'],
              gradient: 'project-cyan',
              icon: '🌐'
            },
            {
              title: 'Python Desktop Apps',
              desc: 'Feature-rich desktop applications with intuitive interfaces and seamless functionality.',
              tags: ['Python', 'Tkinter', 'SQLite'],
              gradient: 'project-purple',
              icon: '🖥️'
            },
            {
              title: 'Web Utilities',
              desc: 'Smart tools that automate workflows and enhance productivity for everyday tasks.',
              tags: ['JavaScript', 'Node.js', 'Express'],
              gradient: 'project-green',
              icon: '⚡'
            }
          ].map((project, index) => (
            <div key={index} className="project-card">
              <div className={`project-bg ${project.gradient}`}></div>
              
              <div className="project-content">
                <div className="project-icon">{project.icon}</div>
                
                <h3 className="project-title">
                  {project.title}
                </h3>
                
                <p className="project-desc">
                  {project.desc}
                </p>
                
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={`project-tag tag-${project.gradient.split('-')[1]}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-link">
                  <span>View Project</span>
                  <svg className="project-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-bg"></div>
        
        <div className="contact-content">
          <div className="section-title">
            <span className="section-title-line"></span>
            <span>GET IN TOUCH</span>
            <span className="section-title-line"></span>
          </div>
          
          <h2 className="section-heading section-heading-large">
            Let&apos;s Build Something <span className="section-highlight">Amazing</span>
          </h2>
          
          <p className="section-text section-text-large">
            Have a project in mind or want to collaborate? I&apos;m always excited to work on innovative ideas and solve challenging problems.
          </p>
          
          <div className="button-group justify-center mb-10">
            <a
              href="mailto:ifeoluwa.dev@gmail.com"
              className="contact-email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="contact-email-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ifeoluwa.dev@gmail.com
            </a>
          </div>
          
          <div className="social-links">
            {[
              { icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', label: 'GitHub' },
              { icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', label: 'LinkedIn' },
              { icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', label: 'Twitter' }
            ].map((social, index) => (
              <a 
                key={index}
                href="#" 
                className="social-link"
                aria-label={social.label}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon}/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="footer-brand-dot"></span>
              <span className="footer-brand-text">Ifeoluwa.dev</span>
            </div>
          </div> 
          
          <div className="footer-divider"></div>
          
          <p className="footer-text">
            © 2025 Ifeoluwa Otudero — Crafted with 
            <span className="heart">❤</span>
          </p>
        </div>
      </footer>
    </main>
  );
}