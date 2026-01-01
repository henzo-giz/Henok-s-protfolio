
import React from 'react';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px w-10 bg-primary"></span>
          <span className="text-accent-blue text-sm font-black uppercase tracking-widest">About Me</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Passionate about <span className="text-primary">Code</span> & <span className="text-accent-blue">Design</span>
            </h2>
            <div className="space-y-6 text-text-dim text-lg leading-relaxed">
              <p>
                With over 3 years of experience in Front-end development, I bridge the gap between engineering and aesthetics. My journey started with a love for fun experiences and evolved into crafting digital solutions for local and national brands.
              </p>
              <p>
                I believe that great design is not just about how things look, but how they work. I strive to create intuitive, accessible, and performant interfaces that delight users.
              </p>
            </div>

            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-3 text-white">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span className="font-bold">Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span className="font-bold">henockgizachew8@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-dark p-8 md:p-12 rounded-2xl border border-border-dim shadow-xl">
            <h3 className="text-2xl font-black text-white mb-10">My Skills</h3>
            <div className="space-y-8">
              {SKILLS.map((skill, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold">{skill.name}</span>
                    <span className="text-primary font-black">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-border-dim rounded-full h-3">
                    <div 
                      className="bg-primary h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Figma', 'Tailwind', 'MongoDB', 'MySQL'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-background-dark/50 border border-border-dim rounded-full text-sm text-text-dim font-bold hover:text-white hover:border-primary transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
