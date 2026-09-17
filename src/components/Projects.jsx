import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, Image as ImageIcon, Download } from 'lucide-react';

const projects = [
  {
    title: "DevCart",
    type: "E-Commerce Platform",
    desc: "A full-featured modern e-commerce web application with product browsing, cart management, seamless checkout experience, and responsive UI.",
    tech: ["React", "Node.js", "Express", "Tailwind CSS"],
    image: "devcart.png",
    icon: <Download className="w-5 h-5 text-indigo-400" />,
    projectLink: "https://ecommerce-frontend-9zxx.onrender.com"
  },
    {
    title: "ReelDrop",
    type: "Media Downloader",
    desc: "A lightweight social video downloader enabling users to quickly fetch and save high-resolution short-form video reels smoothly.",
    tech: ["Node.js", "Backend Scripting", "REST APIs"],
    icon: <Download className="w-5 h-5 text-emerald-400" />,
    // 
    projectLink: "https://nikhildev161011-tech.github.io/Reel-Drop/" 
  },
  {
    title: "Media Shrink",
    type: "Image Compression Tool",
    desc: "A smart image optimization tool built to quickly compress and reduce image sizes without sacrificing visible quality. Saves storage and speeds up web assets.",
    tech: ["Node.js", "Express", "Image API", "JavaScript"],
    icon: <ImageIcon className="w-5 h-5 text-indigo-400" />,
    // 
    projectLink: "https://nikhildev161011-tech.github.io/Media-Shrink/" 
  }

];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 text-zinc-400 text-xs sm:text-sm font-medium mb-2">
          <Layers className="w-4 h-4 text-white" />
          Selected Creations
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Featured Tools & Apps
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <motion.a
            key={idx}
            href={proj.projectLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between transition-all hover:border-zinc-700 hover:bg-zinc-900/80 cursor-pointer block text-left"
          >
            <div>
              {proj.image && (
  <div className="w-full h-44 mb-4 overflow-hidden rounded-lg border border-zinc-800">
    <img 
      src={proj.image} 
      alt={proj.title} 
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>
)}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-950">
                  {proj.icon}
                </div>
                <div className="text-zinc-500 group-hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>

              <div className="text-xs text-zinc-500 font-medium mb-1">{proj.type}</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {proj.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                {proj.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
              {proj.tech.map((t, i) => (
                <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-950 text-zinc-400 border border-zinc-800">
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
