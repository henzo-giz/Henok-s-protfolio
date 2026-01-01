
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-surface-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-white">What I Do</h2>
          <p className="text-text-dim text-lg">
            I help brands and startups build digital products that are not only functional but also visually stunning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-background-dark p-10 rounded-2xl border border-border-dim hover:border-primary transition-all duration-300 group cursor-default"
            >
              <div className={`w-16 h-16 rounded-xl bg-surface-dark flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${service.color === 'primary' ? 'text-primary' : 'text-accent-blue'}`}>
                <span className="material-symbols-outlined text-4xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{service.title}</h3>
              <p className="text-text-dim leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
