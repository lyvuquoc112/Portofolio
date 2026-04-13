import React from 'react';
import { Terminal, GraduationCap, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

const About = () => {
  const { sectionTitle, description, stats, educationTitle, honors } = PORTFOLIO_DATA.about;

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Terminal className="text-orange-500" /> {sectionTitle}
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            {description}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="text-orange-500 font-bold text-2xl mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="text-orange-500" /> {educationTitle}
          </h2>
          <div className="space-y-6">
            {honors.map((h, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="mt-1 bg-orange-500/10 p-2 rounded-lg text-orange-500">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold">{h.title}</h4>
                  <p className="text-slate-500 text-sm">{h.term}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
