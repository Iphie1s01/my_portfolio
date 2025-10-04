"use client";

import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import Beams from './components/Beams';

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
    <main className="min-h-screen bg-[#0e0e10] text-gray-200 font-sans overflow-x-hidden relative">
      <div className="fixed inset-0 z-0">
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
      
      <div className="fixed inset-0 bg-gradient-to-b from-[#0e0e10]/90 via-[#0e0e10]/70 to-[#0e0e10]/90 z-10"></div>

      {/* Floating Orbs */}
      <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            bottom: '10%',
            right: '10%',
            transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`
          }}
        />
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'bg-[#151518]/90 shadow-lg shadow-cyan-500/5 border-b border-cyan-500/10' : 'bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-xl text-cyan-400 font-bold tracking-wide flex items-center group cursor-pointer">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse shadow-lg shadow-cyan-500/50"></span>
            <span className="group-hover:text-white transition-colors duration-300">Ifeoluwa</span>
            <span className="text-cyan-500">.dev</span>
          </h1>
          <nav className="flex space-x-1">
            {['about', 'skills', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                  activeSection === section ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></span>
                )}
                <span className="absolute inset-0 rounded-lg bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-all duration-300"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative py-32 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-20"
      >
        <div className="space-y-8">
          <div className="inline-block">
            <div className="flex items-center space-x-2 text-cyan-400 text-sm font-medium mb-4">
              <span className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></span>
              <span>FULL-STACK DEVELOPER</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                Ifeoluwa
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mb-6"></div>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            A creative full-stack developer from Nigeria crafting <span className="text-cyan-400 font-semibold">intuitive</span> and <span className="text-cyan-400 font-semibold">high-performance</span> web experiences. From stunning interfaces to robust backends — I transform ideas into reality through elegant code.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-[#0e0e10] rounded-xl font-bold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-bold hover:bg-cyan-400 hover:text-[#0e0e10] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* 3D Canvas */}
        <div className="relative h-96 md:h-full min-h-[400px]">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 max-w-6xl mx-auto relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '3+', label: 'Years Experience' },
            { number: '20+', label: 'Projects Built' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Problem Solver' }
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-2xl rounded-3xl"></div>
            <div className="relative bg-gradient-to-br from-[#1a1a1e]/90 to-[#1a1a1e]/60 backdrop-blur-sm p-8 rounded-3xl border border-cyan-500/20">
              <div className="flex items-center space-x-2 text-cyan-400 text-sm font-medium mb-4">
                <span className="w-8 h-0.5 bg-cyan-400"></span>
                <span>ABOUT ME</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Crafting Digital <span className="text-cyan-400">Experiences</span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                I'm a developer who thrives at the intersection of creativity and technology. From designing beautiful UIs to writing efficient server-side code, I love crafting digital experiences that just <span className="text-cyan-400 font-semibold">work</span>.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Outside coding, I'm into gaming (FPS, football, and combat titles), sketching, and building side projects that push my skills forward.
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
              <div key={index} className="group bg-gradient-to-r from-[#1a1a1e]/60 to-[#1a1a1e]/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-cyan-400 text-sm font-medium mb-4">
            <span className="w-8 h-0.5 bg-cyan-400"></span>
            <span>SKILLS & EXPERTISE</span>
            <span className="w-8 h-0.5 bg-cyan-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech <span className="text-cyan-400">Arsenal</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* 3D Canvas for Skills */}
          <div className="relative h-96 rounded-3xl overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm">
            <canvas ref={skillsCanvasRef} className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10]/80 via-transparent to-transparent pointer-events-none"></div>
          </div>

          <div className="space-y-6">
            {[
              { name: 'React & Next.js', level: 95, color: 'from-cyan-400 to-blue-500' },
              { name: 'Node.js & Express', level: 90, color: 'from-green-400 to-teal-500' },
              { name: 'Python & Django', level: 85, color: 'from-purple-400 to-pink-500' },
              { name: 'UI/UX Design', level: 88, color: 'from-orange-400 to-red-500' }
            ].map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Front-End',
              icon: '💻',
              gradient: 'from-cyan-400 to-blue-500',
              skills: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind', 'UI/UX']
            },
            {
              title: 'Back-End',
              icon: '⚙️',
              gradient: 'from-purple-400 to-pink-500',
              skills: ['Node.js', 'Python', 'Express', 'APIs', 'Databases']
            },
            {
              title: 'Tools',
              icon: '🛠️',
              gradient: 'from-green-400 to-teal-500',
              skills: ['Git/GitHub', 'VS Code', 'REST APIs', 'Design Tools']
            }
          ].map((category, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
              
              <div className="relative">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-cyan-400 text-sm font-medium mb-4">
            <span className="w-8 h-0.5 bg-cyan-400"></span>
            <span>FEATURED WORK</span>
            <span className="w-8 h-0.5 bg-cyan-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent <span className="text-cyan-400">Projects</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Portfolio Website',
              desc: 'A modern, responsive portfolio showcasing my work with smooth animations and 3D elements.',
              tags: ['React', 'Three.js', 'Tailwind'],
              gradient: 'from-cyan-400 to-blue-500',
              icon: '🌐'
            },
            {
              title: 'Python Desktop Apps',
              desc: 'Feature-rich desktop applications with intuitive interfaces and seamless functionality.',
              tags: ['Python', 'Tkinter', 'SQLite'],
              gradient: 'from-purple-400 to-pink-500',
              icon: '🖥️'
            },
            {
              title: 'Web Utilities',
              desc: 'Smart tools that automate workflows and enhance productivity for everyday tasks.',
              tags: ['JavaScript', 'Node.js', 'Express'],
              gradient: 'from-green-400 to-teal-500',
              icon: '⚡'
            }
          ].map((project, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm rounded-3xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative p-8">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{project.icon}</div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 text-sm rounded-full border border-current opacity-60 group-hover:opacity-100 transition-opacity duration-300`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center text-cyan-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>View Project</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center relative z-20">
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-3xl rounded-full"></div>
          
          <div className="relative bg-gradient-to-br from-[#1a1a1e]/90 to-[#1a1a1e]/60 backdrop-blur-sm p-12 rounded-3xl border border-cyan-500/20">
            <div className="flex items-center justify-center space-x-2 text-cyan-400 text-sm font-medium mb-6">
              <span className="w-8 h-0.5 bg-cyan-400"></span>
              <span>GET IN TOUCH</span>
              <span className="w-8 h-0.5 bg-cyan-400"></span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Build Something <span className="text-cyan-400">Amazing</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'm always excited to work on innovative ideas and solve challenging problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
              <a
                href="mailto:ifeoluwa.dev@gmail.com"
                className="group flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 text-[#0e0e10] px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                ifeoluwa.dev@gmail.com
              </a>
            </div>
            
            <div className="flex justify-center space-x-4">
              {[
                { icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', label: 'GitHub' },
                { icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', label: 'LinkedIn' },
                { icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', label: 'Twitter' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="group w-14 h-14 bg-gradient-to-br from-[#1a1a1e] to-[#252529] rounded-xl flex items-center justify-center border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                  aria-label={social.label}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#151518]/90 backdrop-blur-sm text-center py-10 text-gray-500 border-t border-gray-800 relative z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-6">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-cyan-400 font-bold">Ifeoluwa.dev</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">Privacy</a>
              <span>•</span>
              <a href="/terms" className="hover:text-cyan-400 transition-colors duration-300">Terms</a>
              <span>•</span>
              <a href="/sitemap" className="hover:text-cyan-400 transition-colors duration-300">Sitemap</a>
            </div>
          </div>
          
          <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6"></div>
          
          <p className="text-sm">
            © 2025 Ifeoluwa Otudero — Crafted with 
            <span className="text-red-500 mx-1">❤</span>
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </main>
  );
}