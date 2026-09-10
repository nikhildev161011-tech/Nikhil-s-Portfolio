import React from 'react';
import { Trophy, Target, Flame } from 'lucide-react';

export default function Cricket() {
  const points = [
    {
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      title: "Patience on the Pitch & Terminal",
      desc: "In cricket, leaving the good balls and building an innings requires intense patience. I bring the same calm resilience when debugging complex logic and edge cases in C++."
    },
    {
      icon: <Flame className="w-5 h-5 text-amber-400" />,
      title: "Discipline in the Nets = Consistency in Code",
      desc: "You don't become a dependable batsman overnight; it takes daily repetitions in the nets. Similarly, I treat daily problem solving and pattern printing as my daily net sessions."
    },
    {
      icon: <Trophy className="w-5 h-5 text-indigo-400" />,
      title: "Team Player & Composure",
      desc: "Cricket taught me how to handle high-pressure moments without losing focus and collaborate effectively with a squad—qualities I actively bring to software engineering."
    }
  ];

  return (
    <section id="cricket" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-zinc-800/50">
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 text-zinc-400 text-xs sm:text-sm font-medium mb-2">
          <span>🏏</span>
          <span>Athlete's Edge</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Beyond Code: The Cricketer's Mindset
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
          How years on the cricket field built the mental toughness, focus, and work ethic behind my software journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {points.map((item, index) => (
          <div 
            key={index}
            className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 w-fit mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}