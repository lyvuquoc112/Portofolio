import React from 'react';
import { Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

const Skills = () => {
  const { sectionTitle, items } = PORTFOLIO_DATA.skills;

  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-white mb-12 text-center flex justify-center items-center gap-3">
        <Cpu className="text-orange-500" /> {sectionTitle}
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((skill, idx) => (
          <div key={idx} className="group bg-slate-800/30 hover:bg-orange-500 transition-all duration-300 border border-slate-700 p-6 rounded-2xl w-full sm:w-48 text-center shadow-sm">
            <h4 className="text-white group-hover:text-white font-bold text-lg mb-1">{skill.name}</h4>
            <p className="text-slate-500 group-hover:text-orange-100 text-xs uppercase tracking-widest">{skill.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
