
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Cricket from './components/Cricket';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Main Sections */}
      <main className="relative z-10 pt-20">
        <Hero />
        <About />
        <Cricket />
        <Skills />
        <Projects />
        <Terminal />
        <Contact />
      </main>

      {/* 3. Footer */}
      <footer className="py-8 border-t border-zinc-900 text-center text-xs text-zinc-500">
        © 2026 Nikhil Gupta. All Rights Reserved.
      </footer>
    </div>
  );
}
