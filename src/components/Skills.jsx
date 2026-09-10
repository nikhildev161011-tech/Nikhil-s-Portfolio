import React from 'react';
import { Code2, BookOpen, Wrench } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-zinc-800/50">
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 text-zinc-400 text-xs sm:text-sm font-medium mb-2">
          <Code2 className="w-4 h-4 text-emerald-400" />
          Current Capabilities
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Skills & Learning Path
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* 1. What You Know Well */}
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-semibold text-emerald-400 mb-2 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              Frontend Basics
            </h3>
            <p className="text-xs text-zinc-500 mb-4">Hands-on experience</p>
            <div className="flex flex-wrap gap-2">
              {['HTML5', 'CSS3', 'Responsive Design'].map((skill) => (
                <span key={skill} className="text-xs px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 2. What You Are Currently Learning */}
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-semibold text-indigo-400 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Currently Learning
            </h3>
            <p className="text-xs text-zinc-500 mb-4">Practicing daily fundamentals</p>
            <div className="flex flex-wrap gap-2">
              {['C++ Basics', 'Logic Building', 'Pattern Printing', 'Upcoming: DSA'].map((skill) => (
                <span key={skill} className="text-xs px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Developer Tools */}
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-semibold text-amber-400 mb-2 flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Tools
            </h3>
            <p className="text-xs text-zinc-500 mb-4">Daily workflow</p>
            <div className="flex flex-wrap gap-2">
              {['Git', 'GitHub', 'VS Code'].map((skill) => (
                <span key={skill} className="text-xs px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}