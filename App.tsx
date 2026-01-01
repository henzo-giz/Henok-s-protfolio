
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background-dark min-h-screen">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Portfolio />
        <section id="cta" className="py-20 bg-primary/10 border-y border-border-dim">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Have a project in mind?
            </h2>
            <p className="text-text-dim text-lg">
              Let's collaborate and build something amazing together. I'm currently available for freelance projects.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-lg h-14 px-10 bg-primary hover:bg-orange-600 transition-all text-background-dark text-lg font-bold tracking-wide shadow-lg shadow-primary/30 hover:shadow-primary/50"
            >
              Start a Project
            </a>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
