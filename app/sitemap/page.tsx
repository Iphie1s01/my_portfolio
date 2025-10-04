"use client";

import React, { useState } from 'react';
import Beams from '../components/Beams';

export default function Sitemap() {
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const siteStructure = [
    {
      title: 'Main Pages',
      icon: '🏠',
      gradient: 'from-cyan-400 to-blue-500',
      pages: [
        { name: 'Home', url: '/', desc: 'Main landing page', icon: '🏠' },
        { name: 'About', url: '/#about', desc: 'Learn more about me', icon: '👤' },
        { name: 'Skills', url: '/#skills', desc: 'My technical expertise', icon: '⚡' },
        { name: 'Projects', url: '/#projects', desc: 'Featured work and portfolio', icon: '💼' },
        { name: 'Contact', url: '/#contact', desc: 'Get in touch', icon: '📧' }
      ]
    },
    {
      title: 'Legal Pages',
      icon: '⚖️',
      gradient: 'from-purple-400 to-pink-500',
      pages: [
        { name: 'Privacy Policy', url: '/privacy', desc: 'How I handle your data', icon: '🔒' },
        { name: 'Terms of Service', url: '/terms', desc: 'Usage terms and conditions', icon: '📜' },
        { name: 'Sitemap', url: '/sitemap', desc: 'Site structure overview', icon: '🗺️' }
      ]
    },
    {
      title: 'Connect',
      icon: '🌐',
      gradient: 'from-green-400 to-teal-500',
      pages: [
        { name: 'GitHub', url: 'https://github.com', desc: 'View my code repositories', icon: '💻' },
        { name: 'LinkedIn', url: 'https://linkedin.com', desc: 'Professional network', icon: '💼' },
        { name: 'Twitter', url: 'https://twitter.com', desc: 'Latest updates', icon: '🐦' },
        { name: 'Email', url: 'mailto:ifeoluwa.dev@gmail.com', desc: 'Direct contact', icon: '📮' }
      ]
    }
  ];

  const quickStats = [
    { number: '5+', label: 'Portfolio Sections', icon: '📄' },
    { number: '3', label: 'Legal Pages', icon: '📊' },
    { number: '4', label: 'Social Links', icon: '🔗' },
    { number: '24/7', label: 'Available', icon: '⏰' }
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
        <div className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl top-20 left-10"></div>
        <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl bottom-20 right-10"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-orange-500/20 blur-3xl rounded-full"></div>
            <div className="relative">
              <div className="flex items-center justify-center space-x-2 text-cyan-400 text-sm font-medium mb-4">
                <span className="w-8 h-0.5 bg-cyan-400"></span>
                <span>SITE NAVIGATION</span>
                <span className="w-8 h-0.5 bg-cyan-400"></span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Site <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">Map</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Explore the complete structure of Ifeoluwa.dev. Find exactly what you're looking for with our comprehensive site overview.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Site Structure */}
        <div className="space-y-8">
          {siteStructure.map((section, sectionIndex) => (
            <div key={sectionIndex} className="relative">
              <div className={`absolute -inset-2 bg-gradient-to-r ${section.gradient} opacity-10 blur-xl rounded-3xl`}></div>
              <div className="relative bg-gradient-to-br from-[#1a1a1e]/90 to-[#1a1a1e]/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-800">
                {/* Section Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${section.gradient} rounded-xl flex items-center justify-center text-3xl shadow-lg`}>
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                    <p className="text-gray-400 text-sm">{section.pages.length} pages in this section</p>
                  </div>
                </div>

                {/* Pages Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.pages.map((page, pageIndex) => (
                    <a
                      key={pageIndex}
                      href={page.url}
                      className="group bg-gradient-to-br from-[#252529]/80 to-[#252529]/40 p-5 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                          {page.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-1">
                            {page.name}
                          </h3>
                          <p className="text-gray-400 text-sm mb-2">{page.desc}</p>
                          <div className="flex items-center text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span>Visit page</span>
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Site Tree */}
        <div className="mt-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-2xl rounded-3xl"></div>
            <div className="relative bg-gradient-to-br from-[#1a1a1e]/90 to-[#1a1a1e]/60 backdrop-blur-sm p-10 rounded-3xl border border-cyan-500/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Visual Site <span className="text-cyan-400">Structure</span>
                </h2>
                <p className="text-gray-400">Hierarchical view of website organization</p>
              </div>

              <div className="flex flex-col items-center space-y-4">
                {/* Root */}
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 rounded-xl text-[#0e0e10] font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300">
                  🏠 Ifeoluwa.dev
                </div>

                {/* Branches */}
                <div className="flex items-center justify-center">
                  <div className="w-px h-12 bg-gradient-to-b from-cyan-400 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                  {siteStructure.map((section, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-3">
                      <div className="w-px h-8 bg-gradient-to-b from-cyan-400/50 to-transparent"></div>
                      <div className={`bg-gradient-to-br ${section.gradient} p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-center`}>
                        <div className="text-3xl mb-2">{section.icon}</div>
                        <div className="text-white font-bold text-sm">{section.title}</div>
                        <div className="text-white/80 text-xs">{section.pages.length} pages</div>
                      </div>
                      <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
                      <div className="flex flex-col space-y-2">
                        {section.pages.slice(0, 3).map((page, pidx) => (
                          <div key={pidx} className="bg-[#252529] px-3 py-2 rounded-lg text-center hover:bg-[#2f2f35] transition-colors duration-300">
                            <span className="text-xs text-gray-300">{page.name}</span>
                          </div>
                        ))}
                        {section.pages.length > 3 && (
                          <div className="text-xs text-gray-500 text-center">+{section.pages.length - 3} more</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Box */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-8 rounded-3xl border border-gray-800">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Can't Find What You're Looking For?
              </h3>
              <p className="text-gray-400 mb-6">
                Use the search below or contact me directly for assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search pages..."
                      className="w-full bg-[#252529] text-white px-6 py-4 rounded-xl border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                    />
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <a
                  href="/#contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-[#0e0e10] rounded-xl font-bold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Pages */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">
              Most <span className="text-cyan-400">Popular</span> Pages
            </h3>
            <p className="text-gray-400">Frequently visited sections of the website</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Home', url: '/', visits: '2.5K', icon: '🏠', gradient: 'from-cyan-400 to-blue-500' },
              { name: 'Projects', url: '/#projects', visits: '1.8K', icon: '💼', gradient: 'from-purple-400 to-pink-500' },
              { name: 'Contact', url: '/#contact', visits: '1.2K', icon: '📧', gradient: 'from-green-400 to-teal-500' }
            ].map((page, idx) => (
              <a
                key={idx}
                href={page.url}
                className="group relative bg-gradient-to-br from-[#1a1a1e]/80 to-[#1a1a1e]/40 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${page.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{page.icon}</div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${page.gradient} bg-clip-text text-transparent`}>
                        {page.visits}
                      </div>
                      <div className="text-gray-400 text-sm">visits</div>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                    {page.name}
                  </h4>
                  <div className="flex items-center text-cyan-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Visit page</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-[#1a1a1e]/60 to-[#1a1a1e]/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 inline-block">
            <div className="flex items-center space-x-3 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Last updated: October 5, 2025</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-orange-500/20 blur-2xl rounded-3xl"></div>
            <div className="relative bg-gradient-to-br from-[#1a1a1e]/90 to-[#1a1a1e]/60 backdrop-blur-sm p-10 rounded-3xl border border-cyan-500/20 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Get <span className="text-cyan-400">Started</span>?
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Explore my work, learn about my skills, or get in touch to discuss your next project
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#projects"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-[#0e0e10] rounded-xl font-bold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
                >
                  View Projects
                </a>
                <a
                  href="/#about"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-bold hover:bg-cyan-400 hover:text-[#0e0e10] transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </a>
                <a
                  href="/#contact"
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-xl font-bold hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#151518]/90 backdrop-blur-sm text-center py-10 text-gray-500 border-t border-gray-800 relative z-20 mt-16">
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
    </main>
  );
}