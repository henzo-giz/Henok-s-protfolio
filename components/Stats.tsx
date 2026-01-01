
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Done' },
    { value: '10+', label: 'Happy Clients' },
    { value: '1', label: 'Award Won' },
  ];

  return (
    <section className="bg-surface-dark border-y border-border-dim py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-text-dim font-bold uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
