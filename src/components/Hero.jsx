import React from 'react';
import GithubIcon from './GithubIcon';
import { Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

const Hero = () => {
  const { avatar, firstName, lastName, role, description, ctaPrimary, ctaSecondary, ctaTertiary } = PORTFOLIO_DATA.hero;

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-full border-4 border-orange-500/20 p-1 mb-8">
        <img src={avatar} alt={`${firstName} ${lastName}`} className="w-full h-full object-cover rounded-full" />
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
        {firstName} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">{lastName}</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
        {role} 
        <br />
        {description}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href={ctaPrimary.href} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-orange-600/20">
          {ctaPrimary.label}
        </a>
        <a href={ctaTertiary.href} download="CV_LyVuQuocHuy.pdf" className="bg-transparent border-2 border-orange-600/50 hover:border-orange-500 hover:bg-orange-500/10 text-orange-500 px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2">
          <Download size={20} /> {ctaTertiary.label}
        </a>
        <a href={ctaSecondary.href} target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2">
          <GithubIcon size={20} /> {ctaSecondary.label}
        </a>
      </div>
    </section>
  );
};

export default Hero;
