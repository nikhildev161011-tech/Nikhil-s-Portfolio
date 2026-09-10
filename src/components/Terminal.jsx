import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      command: '',
      output: 'Welcome to Nikhil\'s CLI v1.0.0. Type "help" to see available commands.',
    },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;

    const cmd = input.trim().toLowerCase();
    let response = '';

    switch (cmd) {
      case 'help':
        response = 'Available commands: about, skills, projects, cricket, google, clear';
        break;
      case 'about':
        response = 'Nikhil Gupta: BCA 1st Year student passionate about C++, DSA, and problem-solving.';
        break;
      case 'skills':
        response = 'Core: C++, DSA, Problem Solving | Web: HTML, CSS, JavaScript, Tailwind, React, Node.js';
        break;
      case 'projects':
        response = '1. Media Shrink (Image Compression Tool)\n2. ReelDrop (Social Media Downloader)';
        break;
      case 'cricket':
        response = '🏏 Cricket Lesson: "Like facing a fast bowler with patience and defending the good balls, debugging needs calm resilience. Discipline in nets = Consistency in code."';
        break;
      case 'google':
        response = '🎯 Target Google: Building strong foundations in Data Structures, Algorithms, and clean code step by step.';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case '':
        response = '';
        break;
      default:
        response = `Command not found: "${cmd}". Type "help" for a list of commands.`;
    }

    setHistory((prev) => [...prev, { command: input, output: response }]);
    setInput('');
  };

  return (
    <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="mb-6 flex items-center gap-2 text-zinc-400 text-xs sm:text-sm font-medium">
        <TerminalIcon className="w-4 h-4 text-emerald-500" />
        Interactive Dev Console
      </div>

      {/* Terminal Window */}
      <div className="rounded-2xl border border-zinc-800 bg-[#0c0c0e] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
        {/* Terminal Header */}
        <div className="bg-zinc-900/80 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <div className="text-zinc-500 text-xs font-sans">bash — nikhil@portfolio:~</div>
          <div className="w-10"></div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-6 min-h-[260px] max-h-[380px] overflow-y-auto space-y-3">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.command && (
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="text-zinc-500">nikhil@dev:~$</span>
                  <span className="text-white">{item.command}</span>
                </div>
              )}
              {item.output && (
                <div className="text-zinc-300 whitespace-pre-line pl-2 border-l border-zinc-800/80">
                  {item.output}
                </div>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 text-emerald-400 pt-1">
            <span className="text-zinc-500">nikhil@dev:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              placeholder="type 'help' or 'cricket'..."
              className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 font-mono text-xs sm:text-sm placeholder:text-zinc-600"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </section>
  );
}