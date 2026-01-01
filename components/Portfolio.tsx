
import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(4);

  const categories = ['All', 'Web', 'Mobile', 'Design', 'SaaS'];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setVisibleCount(4); // Reset visible count on filter change
  };

  return (
    <section id="work" className="py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-primary"></span>
              <span className="text-accent-blue text-sm font-black uppercase tracking-widest">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Selected Work</h2>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                activeFilter === category
                  ? 'bg-primary border-primary text-background-dark shadow-lg shadow-primary/20'
                  : 'bg-surface-dark border-border-dim text-text-dim hover:text-white hover:border-text-dim'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {displayedProjects.map((project) => (
            project.url ? (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`Open ${project.title}`}
              >
                <div
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-dark cursor-pointer shadow-2xl border border-border-dim"
                >
                  {/* Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className={`text-xs font-black uppercase tracking-widest mb-2 ${project.color === 'primary' ? 'text-primary' : 'text-accent-blue'}`}>
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-black text-white mb-2">{project.title}</h3>
                    <p className="text-text-dim text-sm max-w-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] font-black uppercase tracking-wider text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* View Project Hint */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background-dark">
                      <span className="material-symbols-outlined font-bold">arrow_outward</span>
                    </div>
                  </div>
                </div>
              </a>
            ) : (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-dark cursor-pointer shadow-2xl border border-border-dim"
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className={`text-xs font-black uppercase tracking-widest mb-2 ${project.color === 'primary' ? 'text-primary' : 'text-accent-blue'}`}>
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-black text-white mb-2">{project.title}</h3>
                  <p className="text-text-dim text-sm max-w-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] font-black uppercase tracking-wider text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* View Project Hint */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background-dark">
                    <span className="material-symbols-outlined font-bold">arrow_outward</span>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-text-dim text-xl font-bold">No projects found in this category.</p>
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="px-10 py-4 bg-surface-dark border border-border-dim text-white font-bold rounded-xl hover:bg-border-dim transition-all inline-flex items-center gap-3"
            >
              Explore More Projects
              <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
