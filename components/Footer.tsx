
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-darker border-t border-border-dim py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">terminal</span>
          </div>
          <h1 className="text-white text-base font-black tracking-tighter uppercase">Henok.DEV</h1>
        </div>
        
        <p className="text-text-dim text-sm font-bold">
          &copy; {new Date().getFullYear()} HENOK.Dev. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a href="#" className="text-text-dim hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Privacy Policy</a>
          <a href="#" className="text-text-dim hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
