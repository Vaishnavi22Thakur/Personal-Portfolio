import React, { useEffect } from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WaveDivider from './components/WaveDivider';
import DiamondDivider from './components/DiamondDivider';

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      <WaveDivider fromColor="var(--bg)" toColor="var(--bg2)" flip={false} />

      <About />

      <WaveDivider fromColor="var(--bg2)" toColor="var(--bg)" flip={true} />

      <Skills />

      <DiamondDivider />

      <WaveDivider fromColor="var(--bg)" toColor="var(--bg2)" flip={false} />

      <Experience />

      <WaveDivider fromColor="var(--bg2)" toColor="var(--bg)" flip={true} />

      <Projects />

      <WaveDivider fromColor="var(--bg)" toColor="var(--bg2)" flip={false} />

      <Achievements />

      <WaveDivider fromColor="var(--bg2)" toColor="var(--bg)" flip={true} />

      <Contact />

      <Footer />
    </>
  );
}

export default App;