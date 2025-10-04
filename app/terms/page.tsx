"use client";

import React, { useState, useEffect } from 'react';
import Beams from '../components/Beams';

export default function TermsOfService() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['agreement', 'use', 'intellectual', 'prohibited', 'disclaimer', 'limitation', 'termination', 'contact'];
      const scrollPosition = window.scrollY + 150;
      
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'agreement', title: 'Agreement to Terms', icon: '📜' },
    { id: 'use', title: 'Use License', icon: '✅' },
    { id: 'intellectual', title: 'Intellectual Property', icon: '©️' },
    { id: 'prohibited', title: 'Prohibited Activities', icon: '⛔' },
    { id: 'disclaimer', title: 'Disclaimers', icon: '⚠️' },
    { id: 'limitation', title: 'Limitation of Liability', icon: '🛡️' },
    { id: 'termination', title: 'Termination', icon: '🚪' },
    { id: 'contact', title: 'Contact Information', icon: '📞' }
  ];

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
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-20 right-10"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl bottom-20 left-10"></div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'bg-[#151518]/90 shadow-lg shadow-cyan-500/5 border-b border-cyan-500/10' : 'bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center px-6 py-5">
          <a href="/" className="text-xl text-cyan-400 font-bold tracking-wide flex items-center group cursor-pointer">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse shadow-lg shadow-cyan-500/50"></span>
            <span className="group-hover:text-white transition-colors duration-300">Ifeoluwa</span>
            <span className="text-cyan-500">.dev</span>
          </a>
          <a href="/" className="px-6 py-2 border-2 border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-[#0e0e10] transition-all duration-300">
            Back to Home
          </a>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 max-w-7xl relative z-20">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full mr-2"></span>
                Quick Navigation
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                      activeSection === section.id
                        ? 'bg-purple-400/20 text-purple-400 border-l-2 border-purple-400'
                        : 'text-gray-400 hover:text-purple-400 hover:bg-purple-400/5'
                    }`}
                  >
                    <span>{section.icon}</span>
                    <span className="text-sm">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Hero Section */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-pink-500/20 blur-2xl rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-[#1a1a1e]/90 to-[#1a1a1e]/60 backdrop-blur-sm p-10 rounded-3xl border border-purple-500/20">
                <div className="flex items-center space-x-2 text-purple-400 text-sm font-medium mb-4">
                  <span className="w-8 h-0.5 bg-purple-400"></span>
                  <span>TERMS OF USE</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Terms of <span className="text-purple-400">Service</span>
                </h1>
                <p className="text-gray-400 text-lg">
                  Last updated: October 5, 2025
                </p>
                <div className="mt-6 flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2 text-purple-400">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Clear Guidelines</span>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-400">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Fair Use</span>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-400">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Respectful</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Agreement to Terms */}
            <section id="agreement" className="bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center text-2xl">
                  📜
                </div>
                <h2 className="text-2xl font-bold text-white">Agreement to Terms</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Welcome to Ifeoluwa.dev, the personal portfolio website of Otudero Ifeoluwa. These Terms of Service outline the rules and guidelines for using this website.
                </p>
                <p>
                  By accessing this website, you agree to comply with these terms. This is a personal portfolio created to showcase my work and skills - not a commercial service.
                </p>
                <div className="bg-purple-400/10 border border-purple-400/30 rounded-xl p-4 mt-4">
                  <p className="text-purple-400 font-medium">
                    📌 These terms are designed to ensure a respectful experience for all visitors to my portfolio.
                  </p>
                </div>
              </div>
            </section>

            {/* Use License */}
            <section id="use" className="bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-2xl">
                  ✅
                </div>
                <h2 className="text-2xl font-bold text-white">Use License</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Permission is granted to view and use the content on this portfolio website for personal, non-commercial purposes. You may:
                </p>
                <div className="bg-gradient-to-br from-[#252529]/60 to-[#252529]/30 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">You are welcome to:</h3>
                  <ul className="space-y-2">
                    {[
                      'View and enjoy the portfolio content',
                      'Share links to my portfolio with others',
                      'Download my resume/CV for professional consideration',
                      'Contact me about potential opportunities'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#252529]/60 to-[#252529]/30 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">This license does not allow:</h3>
                  <ul className="space-y-2">
                    {[
                      'Using my work without proper attribution',
                      'Claiming my projects as your own',
                      'Selling or redistributing my content',
                      'Using my portfolio content for commercial purposes'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-red-400 mt-1">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual" className="bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center text-2xl">
                  ©️
                </div>
                <h2 className="text-2xl font-bold text-white">Intellectual Property Rights</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  The content on this portfolio website, including but not limited to text, images, project showcases, and design elements, are owned by Otudero Ifeoluwa unless otherwise stated.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  {[
                    { title: 'Original Work', desc: 'All portfolio projects are original work', icon: '🎨' },
                    { title: 'Attribution Required', desc: 'Credit must be given when sharing my work', icon: '👤' },
                    { title: 'Copyright Protection', desc: 'All content is protected by copyright', icon: '©️' },
                    { title: 'Third-Party Content', desc: 'Some projects may use licensed libraries', icon: '🔗' }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-green-400/5 to-teal-500/5 p-5 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Prohibited Activities */}
            <section id="prohibited" className="bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl">
                  ⛔
                </div>
                <h2 className="text-2xl font-bold text-white">Prohibited Activities</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  While visiting my portfolio, please refrain from the following activities:
                </p>
                <div className="space-y-3 mt-4">
                  {[
                    { title: 'Plagiarism', desc: 'Copying my work without attribution' },
                    { title: 'Misrepresentation', desc: 'Claiming association with me that doesn\'t exist' },
                    { title: 'Harassment', desc: 'Sending inappropriate or offensive messages' },
                    { title: 'Spam', desc: 'Sending unsolicited bulk messages' },
                    { title: 'Security Violations', desc: 'Attempting to compromise website security' },
                    { title: 'Automated Scraping', desc: 'Systematically extracting content without permission' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-red-400/5 to-orange-500/5 rounded-xl border border-red-500/20">
                      <span className="text-red-400 text-xl mt-0.5">⚠️</span>
                      <div>
                        <h4 className="text-white font-semibold">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Disclaimers */}
            <section id="disclaimer" className="bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl">
                  ⚠️
                </div>
                <h2 className="text-2xl font-bold text-white">Disclaimers</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  The information on this portfolio website is provided on an "as is" basis for general informational purposes only.
                </p>
                <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Please note:</h3>
                  <div className="space-y-2">
                    {[
                      'Project descriptions reflect my understanding at the time of completion',
                      'Technologies mentioned may have been updated since project completion',
                      'External links are provided for reference and not under my control',
                      'Views expressed are my own and do not represent any organization'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section id="limitation" className="bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center text-2xl">
                  🛡️
                </div>
                <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  As this is a personal portfolio website, my liability is limited. I am not responsible for any damages arising from your use of this website or its content.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: 'No Warranty', icon: '⚠️' },
                    { title: 'Use at Your Own Risk', icon: '🔍' },
                    { title: 'No Professional Advice', icon: '💼' },
                    { title: 'External Content', icon: '🔗' }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-blue-400/5 to-cyan-500/5 p-4 rounded-xl border border-blue-500/20 text-center">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Termination */}
            <section id="termination" className="bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center text-2xl">
                  🚪
                </div>
                <h2 className="text-2xl font-bold text-white">Termination</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I reserve the right to restrict access to this portfolio website for anyone who violates these terms of service.
                </p>
                <div className="bg-gradient-to-r from-purple-400/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Access may be restricted for:</h3>
                  <ul className="space-y-2">
                    {[
                      'Repeated violations of these terms',
                      'Inappropriate communication',
                      'Attempts to misuse the website',
                      'Any activity that harms the portfolio\'s purpose'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-pink-500/20 blur-2xl rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-[#1a1a1e]/90 to-[#1a1a1e]/60 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center text-2xl">
                    📞
                  </div>
                  <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you have any questions about these Terms of Service, please feel free to reach out:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:ifeoluwa.dev@gmail.com"
                    className="flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
                  >
                    <span className="mr-2">✉️</span>
                    ifeoluwa.dev@gmail.com
                  </a>
                  <a
                    href="/"
                    className="flex items-center justify-center border-2 border-purple-400 text-purple-400 px-6 py-3 rounded-xl font-bold hover:bg-purple-400 hover:text-white transition-all duration-300"
                  >
                    Return to Homepage
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#151518]/90 backdrop-blur-sm text-center py-8 text-gray-500 border-t border-gray-800 relative z-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm">
            © 2025 Ifeoluwa Otudero — Crafted with 
            <span className="text-red-500 mx-1">❤</span>
          </p>
        </div>
      </footer>
    </main>
  );
}