import React from 'react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

const Footer = () => {
  const { copyright } = PORTFOLIO_DATA.footer;

  return (
    <footer className="py-10 text-center text-slate-600 text-sm border-t border-slate-800">
      <p>{copyright}</p>
    </footer>
  );
};

export default Footer;
