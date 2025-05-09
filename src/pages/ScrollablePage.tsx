
import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const ScrollablePage = () => {
  return (
    <div className="scroll-smooth">
      <section id="home" className="min-h-screen">
        <Home />
      </section>
      
      <section id="about" className="min-h-screen pt-20">
        <About />
      </section>
      
      <section id="skills" className="min-h-screen pt-20">
        <Skills />
      </section>
      
      <section id="projects" className="min-h-screen pt-20">
        <Projects />
      </section>
      
      <section id="contact" className="min-h-screen pt-20">
        <Contact />
      </section>
    </div>
  );
};

export default ScrollablePage;
