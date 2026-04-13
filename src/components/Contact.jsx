import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

const Contact = () => {
  const { title, description, email, phone } = PORTFOLIO_DATA.contact;
  
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-white mb-8">{title}</h2>
      <p className="text-slate-400 mb-12 text-lg">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a href={`mailto:${email}`} className="flex items-center justify-center gap-3 bg-slate-800 p-4 rounded-2xl hover:border-orange-500 border border-transparent transition-all">
          <Mail className="text-orange-500" />
          <span>{email}</span>
        </a>
        <div className="flex items-center justify-center gap-3 bg-slate-800 p-4 rounded-2xl border border-transparent">
          <Phone className="text-orange-500" />
          <span>{phone}</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
