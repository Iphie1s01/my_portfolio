"use client";

import { Hero } from "@/components/main/hero";
import { Skills } from "@/components/main/skills";
import { About } from "@/components/main/about";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  const projects = [
    {
      title: "Portfolio Website",
      desc: "A sleek, responsive portfolio that showcases my skills, design sense, and development expertise — built with Next.js and Tailwind.",
      tags: ["Next.js", "React", "TailwindCSS"],
      gradient: "from-cyan-400 to-blue-500",
      icon: "🌐",
      url: "https://ifeoluwadev.vercel.app",
    },
    {
      title: "RivetsAI",
      desc: "An AI-powered platform that enables users to build and deploy professional websites through natural language prompts, streamlining the web development process.",
      tags: ["Next.js", "React", "Typescript", "Chakra UI"],
      gradient: "from-purple-400 to-pink-500",
      icon: "⚡",
      url: "https://rivets.vercel.app",
    },
    {
      title: "Vibemaster JD Landing Page",
      desc: "A modern, energetic landing page for DJ Vibemaster JD, combining bold visuals, animations, and responsive layout for a professional presence.",
      tags: ["Next.js", "React", "Typescript", "Chakra UI"],
      gradient: "from-purple-400 to-pink-500",
      icon: "🎧",
      url: "https://vibemasterjd.com",
    },
    {
      title: "Lagoscolour Entertainment Website",
      desc: "A fully functional and visually captivating company site designed for Lagoscolour Entertainment, blending performance with aesthetic appeal.",
      tags: ["Next.js", "Typescript", "Chakra UI", "UI/UX"],
      gradient: "from-green-400 to-teal-500",
      icon: "🎬",
      url: "https://lagoscolour.vercel.app",
    },
    {
      title: "Lagoscolour Marketplace",
      desc: "A multi-vendor e-commerce hub integrated with the Lagoscolour ecosystem, offering a streamlined and secure shopping experience.",
      tags: ["Next.js", "Typescript", "Chakra UI", "UI/UX"],
      gradient: "from-green-400 to-teal-500",
      icon: "🛒",
      url: "https://lagoscolour.vercel.app/shop",
    },
    {
      title: "Afrobeat Awards for Africa",
      desc: "A modern, responsive landing page for the Afrobeat Awards for Africa, featuring bold visuals and engaging animations.",
      tags: ["Next.js", "Typescript", "Chakra UI", "UI/UX"],
      gradient: "from-green-400 to-teal-500",
      icon: "🎬",
      url: "https://afrobeats-awards.vercel.app/",
    },
  ];

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />

        <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto relative z-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { number: "4+", label: "Years Experience" },
              { number: "20+", label: "Projects Built" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Problem Solver" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <About />
        <Skills />

        <section
          id="projects"
          className="py-4 px-4 sm:px-6 max-w-7xl mx-auto relative z-20"
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-cyan-400 text-sm font-medium mb-4">
              <span className="w-8 h-0.5 bg-cyan-400"></span>
              <span>FEATURED WORK</span>
              <span className="w-8 h-0.5 bg-cyan-400"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Recent <span className="text-cyan-400">Projects</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm rounded-3xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Iframe Preview */}
                <div className="relative w-full h-48 sm:h-56 md:h-48 lg:h-52 overflow-hidden rounded-t-3xl bg-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1e]/60 z-10 pointer-events-none"></div>
                  <iframe
                    src={project.url}
                    className="w-full h-full scale-50 origin-top-left pointer-events-none"
                    style={{
                      width: "200%",
                      height: "200%",
                      border: "none",
                      transform: "scale(0.5)",
                      transformOrigin: "top left",
                      pointerEvents: "none",
                      opacity: 0.8,
                    }}
                    title={`Preview of ${project.title}`}
                    loading="lazy"
                    tabIndex={-1}
                  />
                  {/* Overlay to prevent interaction */}
                  <div className="absolute inset-0 z-20"></div>
                </div>

                {/* Project Content */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block p-6 sm:p-8"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 sm:px-3 py-1 bg-cyan-900/30 text-cyan-400 text-xs rounded-full border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="mt-4 flex items-center text-cyan-400 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                    <span>View Project</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <a
            href="https://github.com/iphie1s01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:bg-cyan-400 transition-colors duration-300"
          >
            View More on GitHub
          </a>
        </div>

        <section
          id="contact"
          className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center relative z-20"
        >
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-3xl rounded-full"></div>

            <div className="relative bg-gradient-to-br from-[#1a1a1e]/90 to-[#1a1a1e]/60 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-3xl border border-cyan-500/20">
              <div className="flex items-center justify-center space-x-2 text-cyan-400 text-sm font-medium mb-6">
                <span className="w-8 h-0.5 bg-cyan-400"></span>
                <span>GET IN TOUCH</span>
                <span className="w-8 h-0.5 bg-cyan-400"></span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Let&apos;s Build Something{" "}
                <span className="text-cyan-400">Amazing</span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? I&apos;m always
                excited to work on innovative ideas and solve challenging
                problems.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
                <a
                  href="mailto:ifeoluwa1s01@gmail.com"
                  className="group flex items-center justify-center bg-gradient-to-r from-cyan-400 to-blue-500 text-[#0e0e10] px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  ifeoluwa1s01@gmail.com
                </a>
              </div>

              <div className="flex justify-center space-x-4">
                {[
                  {
                    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                    label: "GitHub",
                    href: "https://github.com/iphie1s01",
                  },
                  {
                    icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/ifeoluwa-otudero-bb5117347/",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group w-14 h-14 bg-gradient-to-br from-[#1a1a1e] to-[#252529] rounded-xl flex items-center justify-center border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                    aria-label={social.label}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#151518]/90 backdrop-blur-sm text-center py-10 text-gray-500 border-t border-gray-800 relative z-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                <span className="text-cyan-400 font-bold">Ifeoluwa.dev</span>
              </div>

              <div className="flex space-x-6 text-sm">
                <a
                  href="/privacy"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Privacy
                </a>
                <span>•</span>
                <a
                  href="/terms"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Terms
                </a>
                <span>•</span>
                <a
                  href="/sitemap"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Sitemap
                </a>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6"></div>

            <p className="text-sm">
              © 2025 Ifeoluwa Otudero — Crafted with
              <span className="text-red-500 mx-1">❤</span>
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
