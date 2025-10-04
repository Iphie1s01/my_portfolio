"use client";

import React, { useState, useEffect } from 'react';
import Beams from '../components/Beams';

export default function PrivacyPolicy() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['introduction', 'information', 'usage', 'cookies', 'security', 'rights', 'changes', 'contact'];
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
    { id: 'introduction', title: 'Introduction', icon: '📋' },
    { id: 'information', title: 'Information We Collect', icon: '🔍' },
    { id: 'usage', title: 'How We Use Information', icon: '⚙️' },
    { id: 'cookies', title: 'Cookies & Tracking', icon: '🍪' },
    { id: 'security', title: 'Data Security', icon: '🔒' },
    { id: 'rights', title: 'Your Rights', icon: '⚖️' },
    { id: 'changes', title: 'Policy Changes', icon: '📝' },
    { id: 'contact', title: 'Contact Us', icon: '📧' }
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
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-20 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-20 right-10"></div>
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
                <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-2"></span>
                Quick Navigation
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                      activeSection === section.id
                        ? 'bg-cyan-400/20 text-cyan-400 border-l-2 border-cyan-400'
                        : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/5'
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
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-2xl rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-[#1a1a1e]/90 to-[#1a1a1e]/60 backdrop-blur-sm p-10 rounded-3xl border border-cyan-500/20">
                <div className="flex items-center space-x-2 text-cyan-400 text-sm font-medium mb-4">
                  <span className="w-8 h-0.5 bg-cyan-400"></span>
                  <span>PRIVACY POLICY</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Privacy <span className="text-cyan-400">Policy</span>
                </h1>
                <p className="text-gray-400 text-lg">
                  Last updated: October 5, 2025
                </p>
                <div className="mt-6 flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span>Transparent</span>
                  </div>
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span>Compliant</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <section id="introduction" className="bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-2xl">
                  📋
                </div>
                <h2 className="text-2xl font-bold text-white">Introduction</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Welcome to Ifeoluwa.dev, the personal portfolio website of Otudero Ifeoluwa. This Privacy Policy explains how I collect, use, and protect information when you visit my website.
                </p>
                <p>
                  As a personal portfolio, this website primarily serves to showcase my work and skills. I'm committed to protecting your privacy and being transparent about data practices.
                </p>
                <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-xl p-4 mt-4">
                  <p className="text-cyan-400 font-medium">
                    💡 Your privacy is important to me. I only collect minimal information necessary to improve your experience on this portfolio site.
                  </p>
                </div>
              </div>
            </section>

            {/* Information We Collect */}
            <section id="information" className="bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center text-2xl">
                  🔍
                </div>
                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              </div>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Contact Information</h3>
                  <p className="mb-3">When you reach out to me through the contact form or email, I may collect:</p>
                  <ul className="space-y-2">
                    {['Your name and email address', 'Message content', 'Any additional information you voluntarily provide'].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-cyan-400 mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Technical Information</h3>
                  <p>
                    Like most websites, I may automatically collect certain technical information to improve your experience:
                  </p>
                  <ul className="space-y-2 mt-3">
                    {['IP address (anonymized)', 'Browser type and version', 'Device information', 'Pages visited and time spent'].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-cyan-400 mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section id="usage" className="bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center text-2xl">
                  ⚙️
                </div>
                <h2 className="text-2xl font-bold text-white">How I Use Your Information</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Communication', desc: 'To respond to your inquiries and messages', icon: '💬' },
                  { title: 'Portfolio Improvement', desc: 'To understand which projects interest visitors', icon: '📈' },
                  { title: 'Technical Analytics', desc: 'To optimize website performance', icon: '📊' },
                  { title: 'Professional Networking', desc: 'To connect about potential opportunities', icon: '🤝' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-[#252529]/60 to-[#252529]/30 p-5 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cookies & Tracking */}
            <section id="cookies" className="bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center text-2xl">
                  🍪
                </div>
                <h2 className="text-2xl font-bold text-white">Cookies & Tracking Technologies</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  This website may use minimal cookies and tracking technologies to enhance your browsing experience. No personal data is collected or shared with third parties for marketing purposes.
                </p>
                <div className="bg-purple-400/10 border border-purple-400/30 rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-white mb-3">Types of Cookies Used:</h3>
                  <div className="space-y-2">
                    {['Essential Cookies - Required for basic website functionality', 'Analytics Cookies - Help me understand visitor behavior (anonymized)', 'Preference Cookies - Remember your settings during your visit'].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  You can control cookie settings through your browser preferences.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section id="security" className="bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-2xl">
                  🔒
                </div>
                <h2 className="text-2xl font-bold text-white">Data Security</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I take appropriate security measures to protect any information you provide. As a personal portfolio website, I don't collect sensitive personal information, and any contact information is stored securely.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  {[
                    { icon: '🛡️', title: 'Secure Hosting', desc: 'Website hosted on secure platforms' },
                    { icon: '🔐', title: 'Limited Data', desc: 'Only essential information is collected' },
                    { icon: '💾', title: 'No Third-Party Sharing', desc: 'Your data is never sold or shared' }
                  ].map((item, idx) => (
                    <div key={idx} className="text-center p-4 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-xl border border-cyan-500/20">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section id="rights" className="bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center text-2xl">
                  ⚖️
                </div>
                <h2 className="text-2xl font-bold text-white">Your Privacy Rights</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  As this is a personal portfolio website with minimal data collection, your rights are straightforward:
                </p>
                <div className="space-y-3">
                  {[
                    { title: 'Access', desc: 'Request to see any information I have about you', icon: '👁️' },
                    { title: 'Correction', desc: 'Request correction of any inaccurate information', icon: '✏️' },
                    { title: 'Deletion', desc: 'Request removal of your information from my records', icon: '🗑️' },
                    { title: 'Communication Control', desc: 'Opt out of future communications if desired', icon: '🚫' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-[#252529]/60 to-[#252529]/30 rounded-xl border border-gray-700">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="text-white font-semibold">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Policy Changes */}
            <section id="changes" className="bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center text-2xl">
                  📝
                </div>
                <h2 className="text-2xl font-bold text-white">Changes to This Policy</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I may update this Privacy Policy occasionally to reflect changes in my practices or for other operational reasons. Any changes will be posted on this page with an updated revision date.
                </p>
                <div className="bg-green-400/10 border border-green-400/30 rounded-xl p-4">
                  <p className="text-green-400 font-medium">
                    ✓ I recommend checking this policy periodically to stay informed about how I protect your information.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-2xl rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-[#1a1a1e]/90 to-[#1a1a1e]/60 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-2xl">
                    📧
                  </div>
                  <h2 className="text-2xl font-bold text-white">Contact Me</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you have questions about this Privacy Policy or how your information is handled, please reach out:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:ifeoluwa.dev@gmail.com"
                    className="flex items-center justify-center bg-gradient-to-r from-cyan-400 to-blue-500 text-[#0e0e10] px-6 py-3 rounded-xl font-bold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
                  >
                    <span className="mr-2">✉️</span>
                    ifeoluwa.dev@gmail.com
                  </a>
                  <a
                    href="/"
                    className="flex items-center justify-center border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl font-bold hover:bg-cyan-400 hover:text-[#0e0e10] transition-all duration-300"
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