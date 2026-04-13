import React, { useState } from 'react';
import { Layers, ChevronRight, Monitor } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const { sectionTitle, list } = PORTFOLIO_DATA.projects;

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Layers className="text-orange-500" /> {sectionTitle}
        </h2>

        {list.map((project, idx) => (
          <div
            key={idx}
            className="group relative bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 mb-8"
            onMouseEnter={() => setHoveredProject(idx)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="grid lg:grid-cols-5">
              <div className="p-8 md:p-12 lg:col-span-2">
                <div className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-4">{project.tag}</div>
                <h3 className="text-3xl font-bold text-white mb-6">{project.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.techStack.map(tag => (
                    <span key={tag} className="text-xs font-bold px-3 py-1 bg-slate-700 text-slate-300 rounded-full">{tag}</span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-orange-500 font-bold hover:gap-4 transition-all"
                >
                  {project.githubLabel} <ChevronRight size={20} />
                </a>
              </div>
              <div className="bg-slate-700 relative overflow-hidden h-[300px] lg:h-auto lg:col-span-3">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-slate-900/80 flex items-center justify-center">
                    <Monitor size={100} className="text-white/20" />
                  </div>
                )}
                <div className={`absolute bottom-0 left-0 right-0 bg-slate-900/90 p-6 border-t border-slate-700 transition-transform duration-500 ${hoveredProject === idx ? 'translate-y-0' : 'translate-y-full'}`}>
                  <p className="text-sm text-slate-300">{project.quote}</p>
                </div>
              </div>
            </div>
          </div>
         ))}
      </div>
    </section>
  );
};

export default Projects;
