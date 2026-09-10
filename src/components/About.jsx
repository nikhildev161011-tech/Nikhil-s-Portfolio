import React from 'react';
import { User } from 'lucide-react';
import myPhoto from '../assets/profile.png';
export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-zinc-800/50">
      <div className="flex items-center gap-2 text-zinc-400 text-xs sm:text-sm font-medium mb-3">
        <User className="w-4 h-4 text-emerald-500" />
        Get to know me
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 tracking-tight">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="relative group w-48 h-48 sm:w-56 sm:h-56 shrink-0">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-zinc-700 to-zinc-800 blur opacity-50"></div>
          <div className="relative w-full h-full rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden flex items-center justify-center">
            <img 
              src={myPhoto}
              alt="Nikhil Gupta" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
          <p>
            I’m <strong className="text-white font-semibold">Nikhil Gupta</strong>, a BCA first-year student and aspiring Software Engineer passionate about building strong fundamentals in computer science and solving problems through code.
          </p>
          <p>
            Currently, I’m focused on <span className="text-white font-medium">C++, Data Structures & Algorithms</span>, and strengthening my development skills with HTML, CSS, and modern web tech. I enjoy learning how things work, turning ideas into projects, and continuously improving my problem-solving abilities.
          </p>
          <p className="border-l-2 border-zinc-800 pl-4 text-zinc-400 italic">
            "As a cricketer, I’ve developed qualities such as discipline, consistency, teamwork, and resilience. I bring the same mindset to programming — practice consistently, learn from mistakes, and keep improving."
          </p>
          <p>
            My long-term ambition is to become an exceptional software engineer and work at a world-class technology company like <strong className="text-emerald-400 font-semibold">Google</strong>. I’m building my skills step by step today with that goal in mind.
          </p>
        </div>
      </div>
    </section>
  );
}