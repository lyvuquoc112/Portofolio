import React from 'react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

const Navbar = () => {
  const { logo, logoAccent, links } = PORTFOLIO_DATA.navbar;
  
  return (
    <nav className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-orange-500 font-bold text-xl tracking-tighter">
          {logo}<span className="text-white">{logoAccent}</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-slate-400">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="hover:text-orange-500 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
