
import React from 'react';
import { HERO_IMAGE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background-dark">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Side */}
        <div className="space-y-8 z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface-darker border border-border-dim w-fit">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-pulse" />
            <span className="text-xs font-bold text-accent-blue uppercase tracking-widest">Available for work</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Designing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Future</span>,<br />
            One Pixel at a Time.
          </h1>

          <p className="text-text-dim text-lg md:text-xl leading-relaxed max-w-xl">
            I'm Henok, a creative developer specializing in building immersive single page web experiences with modern technologies like React, Tailwind, and WebGL.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <a 
              href="#work" 
              className="px-8 py-4 bg-primary hover:bg-orange-600 transition-all text-background-dark text-lg font-bold rounded-lg shadow-lg shadow-primary/20"
            >
              View Portfolio
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-surface-darker border border-border-dim text-white hover:bg-border-dim transition-all text-lg font-bold rounded-lg"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Visual Side */}
        <div className="relative group perspective-1000">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent-blue opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity duration-700" />
          <div className="relative aspect-[4/5] bg-surface-dark rounded-2xl overflow-hidden border border-border-dim shadow-2xl transform transition-transform duration-700 hover:rotate-2">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
              style={{ backgroundImage: `url(${HERO_IMAGE})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
